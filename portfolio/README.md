# Portfolio

## Run locally
npm install
npm run dev

## Before deploying
1. Replace placeholder links in `src/App.jsx`:
   - `mailto:youremail@example.com` → your real email
   - GitHub / LinkedIn URLs in the Contact section
   - `github` / `demo` links in the PROJECTS array
2. Add a `resume.pdf` to the `public/` folder (linked from the hero button), or remove that button.
3. Fill in real metrics for Project Vaayu once you have them (accuracy/IoU etc.) in the `summary` or add a `metrics` field.

## Deploy on Vercel
1. Push this folder to a GitHub repo
2. vercel.com → Import Project → select repo
3. Vercel auto-detects Vite → Deploy
4. Done — live at yourproject.vercel.app
