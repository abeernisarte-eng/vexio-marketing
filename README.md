# VEXIO Marketing (React)

React conversion of the Agenriver one-page marketing site. UI, CSS, and theme animations (GSAP / Lenis / ScrollTrigger) are preserved from the original static HTML.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:5500/

## Build

```bash
npm run build
npm run preview
```

Production output is in `dist/` (includes copied theme assets from `public/`).

## Structure

- `src/components/` — one React component per page section
- `src/content/` — cleaned section HTML used by those components
- `src/hooks/useThemeScripts.js` — loads jQuery, GSAP, Lenis, `main.js`, `main-2.js` after mount
- `public/` — original CSS, JS vendors, and images
- `index.static.html` — original saved page (source for `npm run extract`)

## Re-extract sections

If you update `index.static.html`:

```bash
npm run extract
```
