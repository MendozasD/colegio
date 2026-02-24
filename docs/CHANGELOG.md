# Changelog

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
