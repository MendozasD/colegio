// Hand-drawn style SVG icons for Colegio Jesús de Nazareth
// viewBox 0 0 48 48, stroke-width 2, linecap round, fill none

export const iconMission = `<svg viewBox="0 0 48 48" fill="none" stroke="var(--blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="section-icon">
  <!-- Compass ring -->
  <circle cx="24" cy="24" r="18" opacity="0.3"/>
  <circle cx="24" cy="24" r="14"/>
  <!-- Cardinal ticks -->
  <line x1="24" y1="6" x2="24" y2="10"/>
  <line x1="24" y1="38" x2="24" y2="42"/>
  <line x1="6" y1="24" x2="10" y2="24"/>
  <line x1="38" y1="24" x2="42" y2="24"/>
  <!-- Compass needle -->
  <polygon points="24,13 21,26 24,24 27,26" fill="var(--blue)" stroke="none"/>
  <polygon points="24,35 21,22 24,24 27,22" fill="var(--red)" stroke="none" opacity="0.5"/>
  <!-- Heart center -->
  <path d="M24 28 C24 28 20 25 20 22.5 C20 21 21.5 19.5 23 20.5 C23.5 20.8 24 21.5 24 21.5 C24 21.5 24.5 20.8 25 20.5 C26.5 19.5 28 21 28 22.5 C28 25 24 28 24 28Z" fill="var(--red)" stroke="none"/>
</svg>`;

export const iconVision = `<svg viewBox="0 0 48 48" fill="none" stroke="var(--blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="section-icon">
  <!-- Eye outline -->
  <path d="M4 24 C4 24 12 12 24 12 C36 12 44 24 44 24 C44 24 36 36 24 36 C12 36 4 24 4 24Z"/>
  <!-- Iris -->
  <circle cx="24" cy="24" r="7"/>
  <!-- Pupil -->
  <circle cx="24" cy="24" r="3" fill="var(--blue)"/>
  <!-- Radiating lines -->
  <line x1="24" y1="4" x2="24" y2="9" opacity="0.4"/>
  <line x1="34" y1="6" x2="31" y2="10" opacity="0.4"/>
  <line x1="14" y1="6" x2="17" y2="10" opacity="0.4"/>
  <line x1="40" y1="10" x2="36" y2="14" opacity="0.4"/>
  <line x1="8" y1="10" x2="12" y2="14" opacity="0.4"/>
  <!-- Sparkle -->
  <circle cx="22" cy="22" r="1.5" fill="white" stroke="none"/>
</svg>`;

export const iconAcademic = `<svg viewBox="0 0 48 48" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="section-icon">
  <!-- Open book -->
  <path d="M6 38 V12 C6 12 10 8 24 10"/>
  <path d="M42 38 V12 C42 12 38 8 24 10"/>
  <path d="M24 10 V36"/>
  <!-- Page lines -->
  <line x1="11" y1="17" x2="20" y2="16" opacity="0.4"/>
  <line x1="11" y1="22" x2="20" y2="21" opacity="0.4"/>
  <line x1="11" y1="27" x2="20" y2="26" opacity="0.4"/>
  <line x1="28" y1="16" x2="37" y2="17" opacity="0.4"/>
  <line x1="28" y1="21" x2="37" y2="22" opacity="0.4"/>
  <line x1="28" y1="26" x2="37" y2="27" opacity="0.4"/>
  <!-- Seedling growing from book -->
  <path d="M24 10 C24 10 24 6 24 4"/>
  <path d="M24 7 C24 7 20 4 20 2" fill="none"/>
  <path d="M20 2 C20 2 22 5 24 7" fill="var(--green)" opacity="0.3" stroke="none"/>
  <path d="M24 6 C24 6 28 3 28 1" fill="none"/>
  <path d="M28 1 C28 1 26 4 24 6" fill="var(--green)" opacity="0.3" stroke="none"/>
  <!-- Book bottom curve -->
  <path d="M6 38 C6 38 14 35 24 36 C34 35 42 38 42 38"/>
</svg>`;

export const iconArt = `<svg viewBox="0 0 48 48" fill="none" stroke="var(--red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="section-icon">
  <!-- Hand (simplified) -->
  <path d="M18 38 C14 36 12 32 12 28 L12 22 C12 20 14 19 15 20 L15 26"/>
  <path d="M15 20 L16 14 C16 12 18 11.5 19 13 L19 20"/>
  <path d="M19 13 L20 10 C20 8 22 7.5 23 9 L23 20"/>
  <path d="M23 11 L24 14 C24 12 26 11 27 13 L26 22"/>
  <!-- Paintbrush -->
  <path d="M27 13 L36 4"/>
  <path d="M34 6 L38 2 L40 4 L36 8"/>
  <!-- Brush tip -->
  <path d="M36 4 L38 2 C39 1 41 1 40 4 L38 6" fill="var(--yellow)" stroke="var(--red)" stroke-width="1.5"/>
  <!-- Paint swirl -->
  <path d="M30 30 C34 28 38 30 36 34 C34 38 28 36 30 32" opacity="0.4"/>
  <!-- Paint dots -->
  <circle cx="32" cy="36" r="1.5" fill="var(--yellow)" stroke="none"/>
  <circle cx="36" cy="32" r="1" fill="var(--blue)" stroke="none"/>
  <circle cx="28" cy="34" r="1" fill="var(--green)" stroke="none"/>
</svg>`;

export const iconCommunity = `<svg viewBox="0 0 48 48" fill="none" stroke="var(--yellow)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="section-icon">
  <!-- Cupped hands -->
  <path d="M8 30 C4 28 4 24 6 22 L12 18 C14 16 16 17 16 19 L14 24"/>
  <path d="M40 30 C44 28 44 24 42 22 L36 18 C34 16 32 17 32 19 L34 24"/>
  <!-- Hands coming together -->
  <path d="M14 24 C14 28 16 34 24 38 C32 34 34 28 34 24"/>
  <!-- House -->
  <path d="M18 32 L18 26 L24 21 L30 26 L30 32"/>
  <line x1="18" y1="32" x2="30" y2="32"/>
  <!-- Door -->
  <rect x="22" y="27" width="4" height="5" rx="0.5" fill="var(--yellow)" opacity="0.3" stroke="var(--yellow)" stroke-width="1.5"/>
  <!-- Roof -->
  <path d="M16 27 L24 19 L32 27" stroke-width="2.5"/>
  <!-- Heart above roof -->
  <path d="M24 16 C24 16 22 14 22 12.5 C22 11.5 23 10.5 24 11.5 C25 10.5 26 11.5 26 12.5 C26 14 24 16 24 16Z" fill="var(--red)" stroke="none" opacity="0.6"/>
</svg>`;

// Wavy underline paths for "Trazos" signature system
export const wavyHero = `<svg viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true" class="wavy-underline wavy-underline--hero">
  <path d="M0 6 C20 2, 40 10, 60 6 C80 2, 100 10, 120 6 C140 2, 160 10, 180 6 C200 2, 220 10, 240 6 C260 2, 280 10, 300 6"
    fill="none" stroke="var(--yellow)" stroke-width="3" stroke-linecap="round"/>
</svg>`;

export const wavySection = `<svg viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true" class="wavy-underline wavy-underline--section">
  <path d="M0 4 C15 1, 30 7, 45 4 C60 1, 75 7, 90 4 C105 1, 120 7, 135 4 C150 1, 165 7, 180 4 C195 1, 200 4, 200 4"
    fill="none" stroke="var(--blue)" stroke-width="2.5" stroke-linecap="round"/>
</svg>`;

// Inline SVG icons for navbar (hamburger + close)
export const iconHamburger = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" width="24" height="24">
  <line x1="4" y1="6" x2="20" y2="6"/>
  <line x1="4" y1="12" x2="20" y2="12"/>
  <line x1="4" y1="18" x2="20" y2="18"/>
</svg>`;

export const iconClose = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" width="24" height="24">
  <line x1="6" y1="6" x2="18" y2="18"/>
  <line x1="18" y1="6" x2="6" y2="18"/>
</svg>`;

// Down arrow for CTA button
export const iconArrowDown = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="14" height="14">
  <line x1="8" y1="2" x2="8" y2="13"/>
  <polyline points="3,9 8,14 13,9"/>
</svg>`;
