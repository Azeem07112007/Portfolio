import './App.css';

const PROJECTS = [
  {
    id: '01',
    name: 'UrHealth',
    tag: 'Emergency Orchestration',
    summary:
      'A coordination platform for hospitals, ambulances, and families during mass casualty incidents — routing patients to the best-fit hospital before they arrive, and giving families a way to find them without exposing medical details.',
    role:
      'Designed the two coupled systems: a routing engine that locks bed/ICU/OT slots and predicts resource shortfalls, and a tracking-ID-based reunification search that works without login.',
    highlights: [
      'Every patient gets a tracking ID at dispatch — not at hospital intake — so families can search before admission is even confirmed',
      'Routing engine locks a bed/ICU/OT hold before the ambulance arrives, with auto-expiry and re-routing if a hospital rejects or the hold times out',
      'Live network dashboard pushed over WebSocket, not polling — bed counts and assignments update across every connected screen within seconds',
      'Public reunification portal needs no auth and exposes status only, never medical details or full identity — privacy by design, not bolted on',
      'Coordinators can override any auto-assignment — the routing engine proposes, a human confirms',
    ],
    challenge:
      'The hard part was the routing logic itself: it has to reconcile live bed counts, predicted shortfalls, and hold expiry in real time, then handle the failure path (hospital rejects, hold expires) without leaving a patient stuck in limbo.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'WebSocket', 'TanStack Start'],
    status: 'Live build — core routing + reunification flows in place',
    links: { github: '#', demo: '#' },
  },
  {
    id: '02',
    name: 'LearnTrack',
    tag: 'Learning Platform',
    summary:
      'A full-stack LMS for students, teachers, and admins with role-based access, a real-time scoring quiz engine, and a REST API backing a responsive React frontend.',
    role:
      'Built the FastAPI backend and Supabase-based auth/data layer, and the React + Tailwind frontend consuming it.',
    highlights: [
      'Role-based access split across student, teacher, and admin views on the same codebase',
      'Quiz engine scores in real time as students answer, not on submit',
      'GitHub Actions CI/CD with push protection configured, so secrets can\u2019t land in the repo by accident',
      'Docker-ready backend for consistent deploys regardless of host',
    ],
    challenge:
      'Getting Supabase auth and role-based permissions to cleanly gate both API routes and frontend views, without duplicating the access logic in two places.',
    stack: ['FastAPI', 'Supabase', 'PostgreSQL', 'React', 'Vite', 'Tailwind'],
    status: 'Built — CI/CD configured, Docker-ready',
    links: { github: '#', demo: '#' },
  },
  {
    id: '03',
    name: 'Lecturelens',
    tag: 'AI Study Companion',
    summary:
      'Turns PDF lectures into interactive study material — hybrid OCR for image-heavy slides, AI-generated summaries and flashcards, and an interactive tutoring mode.',
    role:
      'Built the hybrid OCR pipeline (PyMuPDF + vision model fallback) and wired up parallel summary/flashcard generation plus the tutoring chat.',
    highlights: [
      'Hybrid OCR: fast PyMuPDF extraction for text-heavy slides, falls back to NVIDIA Llama 3.2 Vision for image-heavy ones — so it doesn\u2019t burn a vision-model call on every page',
      'Summaries and flashcards generate in parallel via NVIDIA Qwen 80B rather than sequentially, cutting wait time',
      'Tutoring mode runs on either Gemini 2.0 or Amazon Nova, swappable per session',
      '3D flashcards with a physical flip animation and torn-paper edge detail',
      'Every pipeline stage also runs as a standalone CLI script, so each part can be tested without spinning up the UI',
    ],
    challenge:
      'Deciding when to escalate from cheap OCR to the vision model without a manual toggle — the hybrid approach needed a reliable enough heuristic to trust automatically.',
    stack: ['FastAPI', 'SQLAlchemy', 'React', 'NVIDIA NIM', 'Gemini 2.0'],
    status: 'Built — includes standalone CLI scripts for testing',
    links: { github: '#', demo: '#' },
  },
  {
    id: '04',
    name: 'Cosmera',
    tag: 'AI Astronomy',
    summary:
      'Classifies cosmic objects — galaxies, nebulae, stars, asteroids — from a custom-trained CNN, with an AI layer that explains what it found in plain language.',
    role:
      'Trained the PyTorch CNN classifier and built the FastAPI backend serving predictions alongside context-aware AI explanations.',
    highlights: [
      'Custom-trained CNN classifier, not a pretrained model bolted on',
      'AI explanation layer remembers what was scanned, so follow-up questions stay in context instead of resetting each time',
      'Cross-analysis mode compares two scanned objects\u2019 signatures side by side',
      'Glassmorphic UI with typing-effect AI responses and a feedback rating on each explanation',
    ],
    challenge:
      'Balancing classifier accuracy against inference speed enough to keep the UI\u2019s live typing-response feel snappy rather than laggy.',
    stack: ['PyTorch', 'FastAPI', 'NVIDIA NIM'],
    status: 'Built',
    links: { github: '#', demo: '#' },
  },
];

const HACKATHONS = [
  {
    id: 'hack-1',
    name: 'SquidHack 2026',
    result: 'Finalist — top team out of 300+',
    detail:
      'Built UrHealth, a unified AI-first emergency orchestration and predictive resource management platform, backed by a full proposal, competitor analysis, and technical architecture.',
  },
  {
    id: 'hack-2',
    name: 'Brainwave 2026',
    result: 'Finalist — top team out of 500+',
    detail:
      'Developed an exoplanet detection system identifying planets via periodic dips in stellar brightness (the transit method), including the pipeline to process and analyze light curve datasets and flag transit signals.',
  },
];

const ACHIEVEMENTS = [
  '700+ problems solved on Skillrack',
  '100+ problems solved on CodeChef',
  '40+ problems solved on LeetCode',
  'Top 10 finish, Internal Hackathon',
  'First place, Creatathon',
];

const SKILLS = [
  {
    group: 'Languages',
    items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    group: 'AI / ML',
    items: ['PyTorch', 'Computer Vision', 'NVIDIA NIM APIs', 'Gemini'],
  },
  {
    group: 'Web & Backend',
    items: ['React', 'FastAPI', 'Supabase', 'PostgreSQL', 'HTML/CSS'],
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Blender', 'Docker'],
  },
];

const EDUCATION = [
  {
    id: 'edu-1',
    school: 'Sri Eshwar College of Engineering, Coimbatore',
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    period: '2025 — 2029',
    detail: 'Second-year',
  },
];

const CERTIFICATIONS = [
  {
    name: 'C Programming Basics',
    status: '2025',
    note: 'Infosys Springboard',
  },
  {
    name: 'Pointers and Functions in C',
    status: '2025',
    note: 'Infosys Springboard',
  },
  {
    name: 'Python Programming',
    status: '85%',
    note: 'NPTEL',
  },
];

function ContourMark() {
  return (
    <svg viewBox="0 0 400 300" className="contour-mark" aria-hidden="true">
      <path d="M-10 60 Q 100 20, 200 60 T 410 60" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
      <path d="M-10 110 Q 100 70, 200 110 T 410 110" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.35" />
      <path d="M-10 160 Q 100 120, 200 160 T 410 160" fill="none" stroke="var(--accent-warm)" strokeWidth="1" opacity="0.4" />
      <path d="M-10 210 Q 100 170, 200 210 T 410 210" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.25" />
      <path d="M-10 260 Q 100 220, 200 260 T 410 260" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.18" />
    </svg>
  );
}

function App() {
  return (
    <div className="page">
      <header className="nav">
        <span className="nav-mark">AMS</span>
        <nav>
          <a href="#work">Work</a>
          <a href="#hackathons">Hackathons</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow-coord">AI/ML · Full-Stack</p>
            <h1 className="hero-name">Azeem M S</h1>
            <p className="hero-role">AI &amp; Data Science student, building full-stack AI systems</p>
            <p className="hero-sub">
              Second-year AI & Data Science student building full-stack,
              AI-powered platforms — from emergency response coordination to
              exoplanet detection — and competing in hackathons along the way.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">View work</a>
              <a className="btn btn-ghost" href="/resume.pdf">Resume</a>
              <a className="btn btn-ghost" href="#contact">Contact</a>
            </div>
          </div>
          <ContourMark />
        </section>

        <section className="about" id="about">
          <div className="section-label">
            <span className="index">About</span>
          </div>
          <p className="about-text">
            I'm a second-year AI & Data Science student at Sri Eshwar College
            of Engineering, Coimbatore, focused on applying AI to problems
            that actually need solving — healthcare coordination, studying,
            astronomy. I work across the full stack: training the models,
            building the backend that serves them, and shipping the interface
            that makes the output usable.
          </p>
        </section>

        <section className="projects" id="work">
          <div className="section-label">
            <span className="index">Work</span>
          </div>
          <div className="project-list">
            {PROJECTS.map((p) => (
              <article className="project-card" key={p.id}>
                <div className="project-index">{p.id}</div>
                <div className="project-body">
                  <div className="project-heading">
                    <h3>{p.name}</h3>
                    <span className="project-tag">{p.tag}</span>
                  </div>
                  <p className="project-summary">{p.summary}</p>
                  <p className="project-role">{p.role}</p>
                  <ul className="project-highlights">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <p className="project-challenge">
                    <span className="challenge-label">Hard part —</span> {p.challenge}
                  </p>
                  <ul className="project-stack">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="project-footer">
                    <span className="project-status">{p.status}</span>
                    <div className="project-links">
                      <a href={p.links.github}>Code</a>
                      <a href={p.links.demo}>Demo</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="hackathons" id="hackathons">
          <div className="section-label">
            <span className="index">Hackathons</span>
          </div>
          <div className="timeline">
            {HACKATHONS.map((h) => (
              <div className="timeline-item" key={h.id}>
                <span className="timeline-period">{h.result}</span>
                <div>
                  <h4>{h.name}</h4>
                  <p>{h.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <ul className="achievements-list">
            {ACHIEVEMENTS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>

        <section className="education" id="education">
          <div className="section-label">
            <span className="index">Education</span>
          </div>
          <div className="timeline">
            {EDUCATION.map((ed) => (
              <div className="timeline-item" key={ed.id}>
                <span className="timeline-period">{ed.period}</span>
                <div>
                  <h4>{ed.school}</h4>
                  <p>{ed.degree}</p>
                  <p className="timeline-detail">{ed.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cert-list">
            {CERTIFICATIONS.map((c) => (
              <div className="cert-item" key={c.name}>
                <span className="cert-status">{c.status}</span>
                <div>
                  <h4>{c.name}</h4>
                  <p>{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="section-label">
            <span className="index">Skills</span>
          </div>
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <div className="skill-group" key={s.group}>
                <h4>{s.group}</h4>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="section-label">
            <span className="index">Contact</span>
          </div>
          <h2>Let's talk.</h2>
          <p className="contact-sub">
            Open to internships, collaborations, and interesting problems.
          </p>
          <div className="contact-links">
            <a href="mailto:azeemazeem777777777@gmail.com">azeemazeem777777777@gmail.com</a>
            <a href="tel:+917708767207">+91 7708767207</a>
            <a href="https://github.com/Azeem07112007" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/azeem-m-s-94b537380/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Azeem M S, 2026</span>
        <span>Built with React</span>
      </footer>
    </div>
  );
}

export default App;
