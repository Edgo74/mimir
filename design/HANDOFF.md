# MIMIR — Design Handoff

> Reference file: `mimir/landing-v2.html` (open it side-by-side while implementing — it is the source of truth).

---

## 1. Design system

### Colors (CSS variables — use as Tailwind theme tokens)

```css
--ink:        #16140F;   /* primary text, dark sections, primary CTA bg */
--ink-2:      #2a2620;
--ink-soft:   rgba(22, 20, 15, 0.62);   /* body copy on parchment */
--ink-mute:   rgba(22, 20, 15, 0.42);   /* metadata, mono labels */
--ink-line:   rgba(22, 20, 15, 0.14);   /* hairlines, solid borders */
--ink-line-soft: rgba(22, 20, 15, 0.08);

--paper:      #F4EFE6;   /* main background — warm parchment */
--paper-2:    #ECE5D5;
--paper-3:    #E4DCC8;

--accent:      oklch(0.65 0.13 65);    /* bronze — pulse dots, bullets, italic accents on dark bg */
--accent-deep: oklch(0.45 0.10 60);    /* darker bronze — italic emphases on light bg, links hover */
--accent-soft: oklch(0.65 0.13 65 / 0.14);
```

**Dark sections** (method + final CTA) invert the ink variables — paper text on `#16140F` background, with `--accent` used in place of `--accent-deep` for italic emphases.

**Strict rule:** no other colors. No indigo, no orange, no gradients on text or backgrounds. The visual richness comes from typography and hairlines, not color.

### Typography

| Role | Family | Notes |
|---|---|---|
| Display / headlines | **Instrument Serif** | 400 weight. Use italic variant for emphasis words colored in bronze. |
| Body / UI | **Plus Jakarta Sans** | 400 / 500 / 600. Default body. |
| Labels / metadata | **JetBrains Mono** | 400 / 500. All-caps, letter-spacing 0.12–0.16em, ~11px. |

Load all three from Google Fonts. Already inlined in `landing-v2.html`.

**Scale:**

- H1 hero: `clamp(56px, 7.6vw, 116px)` · line-height 0.98 · `text-wrap: balance`
- H2 section: `clamp(40px, 5vw, 72px)` · line-height 1.02
- H3 phase: `clamp(34px, 3.4vw, 50px)`
- Body large: 19px · line-height 1.5 · ink-soft
- Body: 16px · line-height 1.55
- Mono label: 11px · letter-spacing 0.12em · uppercase · ink-soft or ink-mute

### Spacing & layout

- Shell: `max-width: 1240px`, padding-x: 36px
- Sections: padding-y 110–130px desktop, 64px mobile
- Borders: 1px solid for grid dividers, 1px dashed for sub-dividers
- Radius: **0** (no rounded corners anywhere). Editorial = sharp edges.
- One exception: pulse dot radius 9999px

---

## 2. Components

Build these as reusable React components:

### `<Eyebrow>`
Mono uppercase label with optional numero + optional pulsing bronze dot.
```
[ • ] [001]  L'urgence est documentée
```

### `<DisplayHeading>`
Instrument Serif h1/h2/h3 with `<em>` children rendered in italic + bronze.

### `<LinkCTA variant="primary | ghost | inline">`
- `primary`: solid ink block, paper text, no radius, hover → bronze deep bg
- `ghost`: text only with thin ink border-bottom, hover → bronze
- `inline`: underline only, used for "Choisir ce forfait" type CTAs

### `<HairlineGrid>`
Multi-column container where each column is separated by `border-right: 1px solid ink-line`. Used for stats grid, testimonials grid, pricing grid.

### `<PhaseRow>`
3-column grid (number + title + body) with `border-bottom: 1px solid` between rows. Used in the method section.

### `<MetricCard>` (hero side card)
Boxed container with double-border effect (outer 1px solid + inner 1px solid at 14px inset). Mono header, big serif number, body label, footer with pulsing bronze dot.

### `<PriceColumn featured?>`
Hairline-separated column. When `featured`, fills with ink and inverts text. Featured variant gets a small bronze-outlined badge in the top-right corner.

### `<BigQuote>`
Centered Instrument Serif italic with bronze guillemets, with flourish ornament above ("— NOMEN —").

---

## 3. Pages to build

For the hackathon MVP, only **3 pages** are needed:

1. **`/` — Landing** — fully designed in `landing-v2.html`. Reproduce as-is.
2. **`/diagnostic` — Questionnaire** — *not yet designed in editorial style*. See section 5.
3. **`/resultats` — Score + plan d'action + booking** — *not yet designed in editorial style*. See section 5.

---

## 4. Landing structure (from `landing-v2.html`)

```
<Nav>                       — wordmark "Mimir" italic + 4 links + inline CTA
<HeroSection>               — eyebrow + 3-line display H1 + deck + 2 CTAs + MetricCard side + rule
<StatsSection>              — 3-column hairline grid (91% / 88% / Sept 26)
<MethodSection theme=dark>  — 3 PhaseRows (Audit / Plan IA / Formation)
<BigQuote>                  — "Mimir — la sagesse, la vision, la stratégie."
<TestimonialsSection>       — 3-column hairline grid with serif quotes
<PricingSection>            — 3 PriceColumns, middle one featured (dark fill)
<FinalCTA theme=dark>       — eyebrow + display H2 + CTAs
<Footer>                    — wordmark + links + copyright
```

---

## 5. Diagnostic + Résultats (still to design)

These two pages have **not** been redesigned in the editorial direction yet. The previous Pennylane/Linear versions exist at `mimir/diagnostic.html` and `mimir/resultats.html` but should be **discarded** — the brand has moved to editorial.

**For Claude Code:** ask the designer to deliver editorial versions of these two pages before implementing them. For now, scaffold the routes with the editorial design tokens already in place, leaving placeholder content.

If you must build them yourself, apply the same principles:
- Big Instrument Serif questions, JetBrains Mono progress label
- Choice options as bordered rectangles (no radius), bronze border + paper-2 fill when selected
- Score gauge: simple circle with bronze stroke arc, Instrument Serif number in center
- 3 plan cards as hairline columns (same pattern as pricing)

---

## 6. Behavior

- Pulse dot animation: 2s ease-out infinite, scale 0.8→2.4, opacity 0.5→0
- CTA arrow hover: `translateX(3px)`, 0.2s ease
- Phase row hover: bg `rgba(244, 239, 230, 0.02)`, 0.25s ease
- No scroll animations needed for v1
- Nav: sticky, backdrop-blur, semi-transparent paper background

---

## 7. Stack assumption

- Next.js 14 / 15 (App Router) — already in the project per Claude Code's prior prompt
- Tailwind v4 — port the CSS variables above into `@theme`
- TypeScript
- framer-motion available (use only for the pulse + hover transforms, nothing more)
- Mobile-first, fully responsive (breakpoints at 860px and 980px in the reference HTML)

---

## 8. Accessibility / contrast notes

All token combinations in `landing-v2.html` pass AA on body text. The bronze accent (`--accent-deep`) is only used on **italic emphasis words** in display type (not small text), where contrast is less critical due to size. Do not use `--accent-deep` for body copy.

---

## 9. Out of scope for hackathon MVP

- No analytics
- No animation library beyond the pulse + hover transforms
- No CMS — content can be hardcoded
- No real Cal.com embed yet — placeholder is fine
- No real form submission — `console.log` is fine
