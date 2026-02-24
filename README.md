# Colegio Jesús de Nazareth

Website for Colegio Jesús de Nazareth, a primary school in Barrio Cantilito, Santa Marta, Colombia. Founded in 2000, the school serves 210 students across preschool and primary education.

**Live:** https://coljena-3e91b.web.app
**Repo:** https://github.com/MendozasD/colegio

## Stack

- **Vanilla JS** — no framework, template literals for DOM
- **Vite 6** — build tool and dev server
- **Sass (SCSS)** — modular stylesheets
- **Firebase Hosting** — deployment

## Architecture

```
index.html              Entry point
javascript/
  main.js               DOM template, scroll reveal, counter animation, menu logic
  navbar.js             Navigation bar component
  loader.js             Image preloader with CSS spinner
  icons.js              Custom hand-drawn SVG icons + wavy underline paths
scss/
  style.scss            CSS variables, reset, utilities, wavy underline system, a11y
  home.scss             Hero section, CTA button, scroll indicator
  history.scss          History, timeline, stats, mission/vision, vida escolar, footer
  navbar.scss           Fixed navbar, frosted glass, mobile slide-down menu
  background.scss       Floating gradient circles
  loader.scss           Full-screen loader spinner
public/
  *.webp + fallbacks    Optimized images with <picture> element fallback
  favicon/              Favicons and web manifest
```

## Design Decisions

- **"Trazos" signature**: Wavy SVG underlines (hero yellow, sections blue) with stroke-dashoffset draw-in animation. Evokes a child's crayon — matching the school's warm, handmade aesthetic.
- **Custom SVG icons**: 5 hand-drawn icons (compass, eye, book, paintbrush, cupped hands) replace generic emoji. Each uses school palette colors.
- **Glassmorphism cards**: Semi-transparent white with backdrop-blur, consistent across history blocks, mission/vision, and vida escolar.
- **Alternating backgrounds**: beige → beige-dark → beige → blue (stats) → beige → beige-dark → dark (footer) creates visual rhythm.
- **Counter animation**: Stats count from 0 with ease-out cubic easing, triggered by IntersectionObserver at 30% visibility.
- **Typography**: Fontshare CDN — Boska (serif, stat numbers), Clash Grotesk (body + headings), Telma (cursive accents).

## Palette

| Token | Hex | Usage |
|---|---|---|
| `--blue` | `#4a90c4` | Primary, links, nav underlines |
| `--green` | `#7ecb8a` | Academic icon, accents |
| `--yellow` | `#f5c842` | Hero underline, footer headings |
| `--red` | `#e07850` | Warm accent, art icon |
| `--beige` | `#fdf8ec` | Page background |
| `--beige-dark` | `#f0e8d4` | Alternating section background |
| `--text` | `#3d3529` | Body text (WCAG AA on beige) |

## Accessibility

- Skip-to-content link (visible on focus)
- `:focus-visible` outline on all interactive elements
- `aria-label`, `role="button"`, `tabindex="0"` on hamburger/close
- `aria-expanded` toggles on menu open/close
- Keyboard support (Enter/Space) for menu buttons
- `aria-hidden="true"` on decorative SVGs
- `lang="es"` on `<html>`

## Performance

- **No frameworks** — 17KB JS + 15KB CSS (gzipped: 5.2KB + 3.5KB)
- **WebP images** with `<picture>` fallback — logo 462KB→61KB, rainbow 528KB→11KB
- **No external icon fonts** — Material Symbols removed, inline SVGs instead (~200KB saved)
- **Lazy loading** on below-fold images
- **CSS-only loader** replacing 5MB GIF

## Development

```bash
npm install
npm run dev        # Vite dev server at localhost:5173
npm run build      # Production build to dist/
npm run deploy     # Build + firebase deploy
```

## Project Context

Built as a portfolio piece by [David Mendoza](https://davidmendoza.ch) for a school in Colombia. The design prioritizes warmth, accessibility, and performance — reflecting both the school's community values and modern web standards.
