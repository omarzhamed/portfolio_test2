# Personal Portfolio Website

A clean, single-page portfolio built with plain HTML/CSS/JS (no build step). It includes:

- Hero/About
- Projects (4+)
- Skills
- Student Activities & Experience
- Contact
- Working Download CV button

## Customize

Edit `content.js` and replace the example content with your real information.

### Project links (fastest way)

This repo includes project writeups in `case-studies/`. After you push this repo to GitHub:

1. Open `content.js`
2. Set `repoBaseUrl` to your GitHub repo URL (example: `https://github.com/elkheer78/pt3-portfolio`)

Your project cards will automatically link to the case study folders on GitHub.

### CV (PDF)

- Your CV must be at `assets/cv.pdf`.
- This repo can generate a valid placeholder CV PDF:

```bash
python tools/generate_placeholder_cv.py
```

Then replace `assets/cv.pdf` with your real resume when ready.

## Run locally

From the project folder:

```bash
python -m http.server 5500
```

Open: http://localhost:5500

## Deploy

### GitHub Pages (recommended)

1. Push this repo to GitHub.
2. In GitHub: **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main` (or `master`), folder: `/ (root)`.
5. Save and wait for the live URL.

### Netlify

1. Drag-and-drop the folder into Netlify, or connect the GitHub repo.
2. Build command: none
3. Publish directory: root

## Checklist

- Each project has at least one working link (repo/demo/video).
- The **Download CV** button downloads a real PDF.
- Mobile layout looks good.
- Content sounds like you (not generic).
