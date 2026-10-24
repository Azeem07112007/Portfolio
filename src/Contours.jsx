import { useEffect, useRef } from 'react';

// Marching-squares edge table: 0 top, 1 right, 2 bottom, 3 left
const T = [[], [[3, 2]], [[2, 1]], [[3, 1]], [[0, 1]], [[0, 3], [2, 1]], [[0, 2]], [[0, 3]],
  [[0, 3]], [[0, 2]], [[0, 1], [3, 2]], [[0, 1]], [[3, 1]], [[2, 1]], [[3, 2]], []];
const LEVELS = Array.from({ length: 13 }, (_, i) => -2.5 + i * 0.5);
const S = 16;

export default function Contours() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const x = c.getContext('2d');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dark = matchMedia('(prefers-color-scheme: dark)');
    let W, H, cols, rows, vals, base, hi, raf, t = 0, mx = -999, my = -999;

    const colors = () => {
      const s = getComputedStyle(c.parentElement);
      base = s.getPropertyValue('--topo');
      hi = s.getPropertyValue('--topo-hi');
    };
    const field = (px, py) => {
      const v = Math.sin(px * .006 + t * .3) + Math.sin(py * .008 - t * .22) + Math.sin((px + py) * .0045 + t * .25)
        + .9 * Math.sin(Math.hypot(px - W * .72, py - H * .38) * .01 - t * .3);
      const dx = px - mx, dy = py - my;
      return v + 1.6 * Math.exp(-(dx * dx + dy * dy) / (2 * 140 * 140));
    };
    const pt = (e, x0, y0, l, a, b, cc, d) => {
      if (e === 0) return [x0 + S * (l - a) / (b - a), y0];
      if (e === 1) return [x0 + S, y0 + S * (l - b) / (cc - b)];
      if (e === 2) return [x0 + S * (l - d) / (cc - d), y0 + S];
      return [x0, y0 + S * (l - a) / (d - a)];
    };
    const draw = () => {
      x.clearRect(0, 0, W, H);
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) vals[j * cols + i] = field(i * S, j * S);
      LEVELS.forEach((l, n) => {
        x.strokeStyle = n % 4 === 0 ? hi : base;
        x.lineWidth = n % 4 === 0 ? 1.4 : 1;
        x.beginPath();
        for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols - 1; i++) {
          const a = vals[j * cols + i], b = vals[j * cols + i + 1];
          const cc = vals[(j + 1) * cols + i + 1], d = vals[(j + 1) * cols + i];
          const idx = (a > l ? 8 : 0) + (b > l ? 4 : 0) + (cc > l ? 2 : 0) + (d > l ? 1 : 0);
          for (const [e1, e2] of T[idx]) {
            const p1 = pt(e1, i * S, j * S, l, a, b, cc, d), p2 = pt(e2, i * S, j * S, l, a, b, cc, d);
            x.moveTo(p1[0], p1[1]); x.lineTo(p2[0], p2[1]);
          }
        }
        x.stroke();
      });
    };
    const size = () => {
      const d = window.devicePixelRatio || 1, r = c.getBoundingClientRect();
      W = r.width; H = r.height; c.width = W * d; c.height = H * d;
      x.setTransform(d, 0, 0, d, 0, 0);
      cols = Math.ceil(W / S) + 1; rows = Math.ceil(H / S) + 1;
      vals = new Float32Array(cols * rows);
      colors(); draw();
    };
    const loop = () => { t += .012; draw(); raf = requestAnimationFrame(loop); };
    const move = (e) => { const r = c.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; if (reduce) draw(); };
    const leave = () => { mx = my = -999; if (reduce) draw(); };
    const theme = () => { colors(); draw(); };
    const parent = c.parentElement;

    size();
    if (!reduce) loop();
    addEventListener('resize', size);
    parent.addEventListener('pointermove', move);
    parent.addEventListener('pointerleave', leave);
    dark.addEventListener('change', theme);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('resize', size);
      parent.removeEventListener('pointermove', move);
      parent.removeEventListener('pointerleave', leave);
      dark.removeEventListener('change', theme);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" />;
}
