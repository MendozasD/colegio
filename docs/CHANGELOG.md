# Changelog

## 2026-02-24 — Push to EXCELLENT (branch: portfolio-refresh)

Second pass targeting 79+/90. Addresses Design Critic feedback: emoji icons (generic), no hero CTA, unoptimized images (~2.5MB), no a11y, no visual signature.

### Image Optimization (saved ~1.4MB)
- **Deleted `public/pencil.png`** (358K) and **`public/star.png`** (621K) — not referenced anywhere
- Converted `home_pic_1.jpg`, `home_pic_2.jpg`, `logo_no_bg.png` to **WebP** with `<picture>` fallback
- Resized `rainbow.png` from 3000x1601 → 600w before WebP conversion (528K → 11K)
- Added `loading="lazy"` to below-fold images (rainbow menu decoration)
- Logo: 462K PNG → 61K WebP | Rainbow: 528K → 11K WebP

### Custom SVG Icons (replaces emoji)
- Created **`javascript/icons.js`** with 5 hand-drawn-style SVG icons:
  - **Mission**: compass with heart center (--blue stroke)
  - **Vision**: open eye with radiating lines and sparkle (--blue stroke)
  - **Academic**: open book with seedling growing (--green stroke)
  - **Art**: hand with paintbrush + paint swirl (--red stroke)
  - **Community**: cupped hands holding house with heart (--yellow stroke)
- SVG specs: `viewBox="0 0 48 48"`, stroke-width 2, linecap round, fill none
- All SVGs have `aria-hidden="true"` (adjacent heading provides label)
- Unified icon styling under `.section-icon` class (48x48px)

### Removed Material Symbols Font (~200KB saved)
- Replaced `menu` and `close_small` Material Symbols with inline SVG hamburger/close icons
- Removed Google Fonts `<link>` for Material Symbols Outlined from `index.html`
- Removed `.material-symbols-outlined` CSS rule from `navbar.scss`

### "Trazos" Signature — Wavy Underlines
- Hero title gets a **yellow wavy underline** with `stroke-dashoffset` draw-in animation on page load (1.2s ease-out)
- Section `.title::after` bars replaced with **blue wavy SVG underlines** that draw on scroll-reveal
- Wavy paths are subtle (3-4px amplitude) — child's crayon aesthetic matching Telma cursive
- `@keyframes draw` animation in `style.scss`
- SVG paths in `icons.js`: `wavyHero` (300×12) and `wavySection` (200×8)

### Hero CTA + Scroll Indicator
- **"Conócenos"** pill button (blue bg, white text, Clash Grotesk) with down-arrow SVG
- Hover: lightens to `--blue-light`, lifts 2px, arrow bounces down
- Placed after `#title` in hero section, links to `#history_container`
- Scroll-line indicator at bottom of hero (CSS pulse animation, 2s loop)
- CTA shrinks on tablet, scroll indicator hidden on mobile

### Alternating Section Backgrounds
- `#history_container` and `#vida_container` get `background: var(--beige-dark)` full-width
- Inner content constrained at `max-width: 900px`
- Visual rhythm: beige → beige-dark → beige → blue → beige → beige-dark → dark footer
- Glassmorphism `.wrapper` cards look good on darker background (tested)

### Accessibility
- **Skip-to-content link**: `<a href="#history_container" class="skip-to-content">Ir al contenido principal</a>` as first child of `<body>`
- Visually hidden, appears on `:focus` with blue background
- **`:focus-visible`** global outline: 3px solid --blue, 2px offset
- Hamburger/close buttons: `role="button"`, `tabindex="0"`, `aria-label` (Spanish)
- `aria-expanded` toggles on hamburger button when menu opens/closes
- Keyboard support: Enter/Space triggers menu open/close

### Stat Counter Animation
- IntersectionObserver on `#stats_container` triggers count-up at 30% threshold
- Numbers count from 0 → target over 1.5s with **ease-out cubic** easing
- `data-value` and `data-suffix` attributes: "210" counts normally, "24" → "24+", "100" → "100%"
- Single trigger — counts once and stops observing

### Files Created
- `javascript/icons.js` — 5 section icons, 2 wavy paths, hamburger/close SVGs, down-arrow

### Files Modified
- `index.html` — removed Material Symbols link, added skip-to-content
- `javascript/main.js` — WebP picture elements, SVG icon imports, hero CTA, wavy underlines, a11y handlers, counter animation
- `javascript/navbar.js` — inline SVG menu icons, WebP logo/rainbow, aria attributes
- `scss/style.scss` — wavy underline system, skip-to-content styles, :focus-visible, @keyframes draw
- `scss/home.scss` — hero CTA button, scroll indicator, hero position: relative
- `scss/history.scss` — .section-icon class (replaces emoji), beige-dark backgrounds on history/vida, inner content max-width
- `scss/navbar.scss` — SVG icon sizing (replaces material-symbols span), removed .material-symbols-outlined rule

### Files Deleted
- `public/pencil.png` (358K)
- `public/star.png` (621K)

### Files Added
- `public/home_pic_1.webp` (260K)
- `public/home_pic_2.webp` (165K)
- `public/logo_no_bg.webp` (61K)
- `public/rainbow.webp` (11K)

### Build
- `npm run build` — 14.6KB CSS + 17.1KB JS (gzip: 3.5KB + 5.2KB)
- Tested at 1280px desktop, 768px tablet, 375px mobile — all pass
- Zero console errors

---

## 2026-02-24 — Portfolio Refresh (branch: portfolio-refresh)

Major redesign to bring the site to portfolio-ready quality. Based on Design Critic audit (43/90 -> target 79+).

### Performance (saved ~5MB)
- **Deleted `public/loader.gif`** (4.96 MB) — replaced with pure CSS spinner (< 1 KB)
- Loader now uses graceful fade-out transition instead of abrupt `display:none`
- Fixed loader.js: handles already-cached images, removes `console.log` from production

### Typography & Contrast
- **Body font set to Clash Grotesk** — previously fell back to system fonts (Inter, Helvetica, Arial)
- Text color changed from `#717171` (low contrast) to `#3d3529` (passes WCAG AA on beige)
- Added `--text-muted: #6b5e50` for secondary text
- Established consistent type scale using `clamp()` for hero title
- Section title underlines now use `::after` pseudo-element (cleaner than `text-decoration`)
- Boska (serif) now used for stat numbers — gives the numbers a distinctive editorial feel

### Layout & Responsiveness
- **Removed `100svh` from all content sections** — content now dictates height
- Hero section uses `min-height: 100svh` (only section that should be viewport-height)
- Added **768px tablet breakpoint** — mission/vision stacks to 1 column, stats remain 3-col
- Added **500px mobile breakpoint** — stats stack to 1 column, vida cards stack
- Hero layout: desktop side-by-side -> tablet stacked centered -> mobile compact
- Photo hover effect: rotated images straighten and slightly scale on hover

### Navbar
- **Fixed broken nav links** — removed `transform: translateY(-100%)` that hid desktop links
- Added frosted glass effect (backdrop-filter blur + semi-transparent bg)
- Added bottom border for visual separation
- Mobile menu now uses CSS class toggle (`.menu-open`) instead of inline styles
- Nav link stagger animation on mobile menu open (CSS transition-delay)
- Added "Vida Escolar" and "Contacto" nav links

### History Section (redesigned)
- **Broke up 200-word wall of text** into 3 titled blocks: Orígenes, Compromiso, Comunidad
- Each block is a glassmorphism card with blue subheading
- Rector attribution styled with Telma (cursive) on a bordered separator

### Timeline (new)
- Replaced meaningless "1990 — 2024" endpoints with **5 actual milestones**
- Vertical timeline with gradient track (yellow to blue)
- Dot markers with school-colored borders
- Scroll-reveal animation on each item

### Stats Strip (new)
- Full-width blue band with 3 key numbers: 210 students, 24+ years, 100% dedication
- Boska serif for the large numbers (distinctive, editorial)
- Responsive: 3-column -> 1-column on mobile

### Mission & Vision (refined)
- Added section header with shared title
- Emoji icons (target, star) as visual anchors
- Cleaner card layout with consistent padding
- Slightly shortened Vision text for readability

### Vida Escolar (new — replaces "EN CONSTRUCCION")
- 3-card grid: Excelencia Académica, Arte y Cultura, Comunidad
- Cards with emoji icons, hover lift effect, glassmorphism style
- Subtitle explaining the school's approach
- Responsive: 3-col -> 2-col (tablet) -> 1-col (mobile)

### Footer (new)
- Dark background (`--text` color) with 3-column layout
- Brand description, contact address (Barrio Cantilito, Santa Marta), navigation links
- Copyright line with dynamic year
- Responsive: stacks and centers on mobile

### Background Animation
- Gradient circles changed from `spin` (harsh rotation) to `float` (gentle drift)
- Reduced opacity and increased blur for subtlety
- Animation feels organic rather than mechanical

### HTML / Meta
- Fixed `lang="en"` to `lang="es"` (site is in Spanish)
- Removed duplicate `<title>` tag
- Improved meta description (was just the address, now describes the school)
- Updated OG URL to current Firebase hosting URL

### Scroll Reveal System (new)
- IntersectionObserver-based `.reveal` class
- Elements fade up (30px translateY + opacity) when scrolled into view
- Single observation — elements reveal once and stop observing
- Threshold: 15%, rootMargin: -40px bottom

### Files Modified
- `index.html` — lang, meta, loader markup, removed duplicate title
- `javascript/main.js` — complete rewrite (new sections, scroll reveal, cleaner nav logic)
- `javascript/navbar.js` — new nav links, better alt text, class-based menu toggle
- `javascript/loader.js` — CSS-based loader, handles edge cases, no console.log
- `scss/style.scss` — new CSS variables, body font, type scale, utilities
- `scss/navbar.scss` — frosted glass, fixed desktop links, tablet breakpoint
- `scss/home.scss` — responsive hero, hover effects, clamp() sizing
- `scss/background.scss` — float animation, softer gradient circles
- `scss/history.scss` — complete rewrite (history, timeline, mission, vida, footer)
- `scss/loader.scss` — CSS spinner replacing GIF

### Files Deleted
- `public/loader.gif` (4.96 MB)

### How to Revert
```bash
git checkout main
```
All changes are on the `portfolio-refresh` branch. Main branch is untouched.
