# MIMIR — Implementation Handoff v3

> **Reference files** (open in this order):
> 1. `landing-v3.html` — visual source of truth, reproduce faithfully
> 2. `DESIGN-SYSTEM.md` — full design system spec (tokens, components, rules)
> 3. `charte-graphique.html` — brand identity bible (logo, palette, runes, code blocks)

This document is the bridge between those three and your Next.js implementation.

---

## 1. Stack

- Next.js 14 / 15 (App Router)
- Tailwind CSS v4 (or v3 with custom config)
- TypeScript
- `next/font` for Google Fonts (do NOT keep `<link>` tags in HTML)
- framer-motion **only** for the portal animation reduced-motion variants — everything else uses CSS keyframes

---

## 2. Design tokens → Tailwind theme

Port these into `app/globals.css` `@theme` (v4) or `tailwind.config.ts` (v3). **Names must match the design system exactly.**

```css
@theme {
  /* — PALETTE — */
  --color-encre:        #0C0F1A;
  --color-saphir-nuit:  #1A3A6B;
  --color-saphir:       #2E5BA8;
  --color-ciel:         #7BA3D8;
  --color-cyan-neon:    #00D4FF;
  --color-perle:        #F4F4F6;
  --color-givre:        #DCE6F5;

  /* — RULES — */
  --color-rule-dark:  rgb(255 255 255 / 0.10);
  --color-rule-light: #E3E8F1;

  /* — TEXT — */
  --color-text-on-dark:        #FFFFFF;
  --color-text-on-dark-muted:  rgb(255 255 255 / 0.55);
  --color-text-on-dark-faint:  rgb(255 255 255 / 0.30);
  --color-text-on-light:       #0C0F1A;
  --color-text-on-light-muted: #5A6478;

  /* — FONTS (assigned via next/font in layout.tsx) — */
  --font-display: var(--font-syne);
  --font-body:    var(--font-inter);
  --font-mono:    var(--font-jetbrains);
}
```

**Strict rule:** no other color allowed anywhere. No emerald, no orange, no purple. The richness is in typography, rules, and the portal.

---

## 3. Fonts setup (`app/layout.tsx`)

```ts
import { Syne, Inter, JetBrains_Mono, Noto_Sans_Runic, Noto_Sans_SC } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], weight: ['400','600','700','800'], variable: '--font-syne' });
const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-jetbrains' });
const runic = Noto_Sans_Runic({ subsets: ['runic'], weight: ['400'], variable: '--font-runic' });
const sc = Noto_Sans_SC({ subsets: ['latin'], weight: ['400','700'], variable: '--font-sc' });

// add all .variable to <body className=...>
```

---

## 4. Components to build (factor before scaling)

| Component | File | Notes |
|---|---|---|
| `<PortalBg>` | `components/PortalBg.tsx` | Client component. Spawns runes + binary particles. Listen to `document.hidden`, respect `prefers-reduced-motion`. Code is in `DESIGN-SYSTEM.md` §5 — port as-is, no creative liberties. |
| `<LogoMark>` | `components/LogoMark.tsx` | The asymmetric SVG. Props: `size` (number) + `variant` ("default" \| "saphir" \| "white"). SVG is in `landing-v3.html` topbar. |
| `<Topbar>` | `components/Topbar.tsx` | Fixed, blur, nav links + CTA. Height 56px. |
| `<Section>` | `components/Section.tsx` | Base section with `variant` ("dark" \| "light" \| "saphir"), padding 96px desktop. Children compose. |
| `<Kicker>` | `components/Kicker.tsx` | Mono numbered label with dot + line. Props: `index` ("01"), `label`, `pulse?`. |
| `<SectionTitle>` | `components/SectionTitle.tsx` | Syne 700 h2, accepts JSX with `<em>` → cyan. |
| `<SectionFooter>` | `components/SectionFooter.tsx` | Mono signature line at bottom of each section. |
| `<Button>` | `components/Button.tsx` | Variants: "primary" (saphir), "ghost" (transparent outline), "cyan" (cyan fill, reserved for hero & final CTA only). Mono uppercase label. |
| `<Pill>` | `components/Pill.tsx` | Cyan outline rounded chip. |
| `<KpiCell>` | `components/KpiCell.tsx` | Used in stats grid. Syne huge value + mono unit + body label + source. |
| `<PhaseCard>` | `components/PhaseCard.tsx` | Saphir-tinted card with rune watermark, title, when, desc, livrables list. |
| `<PriceCard>` | `components/PriceCard.tsx` | Same skeleton as PhaseCard, `featured` prop fills with saphir-nuit. |
| `<TestimonialCard>` | `components/TestimonialCard.tsx` | White on perle bg. Quote mark, blockquote, cite. |
| `<WellVisual>` | `components/WellVisual.tsx` | The SVG well of knowledge with rotating rings. Used in hero + genese. Pure SVG, no JS. |
| `<CodeDisplay>` | `components/CodeDisplay.tsx` | The mono code block easter egg in final CTA. |

---

## 5. Page structure (`app/page.tsx`)

Compose the landing in this exact order — match `landing-v3.html` section-by-section:

```
<PortalBg />
<Topbar />
<HeroSection />        — 01 (dark)
<UrgenceSection />     — 02 (dark, KPI grid)
<MethodeSection />     — 03 (dark, 3 PhaseCards)
<GeneseSection />      — 04 (dark, etymology + WellVisual)
<TestimonialsSection />— 05 (light, palette break)
<TarifsSection />      — 06 (dark, 3 PriceCards middle featured)
<FinalCtaSection />    — 07 (saphir-nuit bg, code easter egg)
<Footer />
```

---

## 6. Strict rules (do not violate)

✅ **DO**
- Keep the portal animation running on all dark sections — light sections cover it (background opaque)
- Reserve `--cyan-neon` for accents only (kickers, KPI units, hover states, em emphasis) — never as a section background
- Use Syne **only** for headings, wordmark, KPI values
- Use JetBrains Mono **only** for: kickers, metadata, KPI units, source labels, code blocks, button labels (uppercase tracked)
- Use Inter for everything else (body, leads, descriptions, testimonials, list items)
- Keep `prefers-reduced-motion` respected on portal + well rotation
- Use the asymmetric logo SVG vectorially — no PNG, no flat raster
- Always use `#0C0F1A` (`--encre`) for the darkest background, **never `#000`**

❌ **DO NOT**
- Add any color outside the palette (no indigo, no orange, no purple, no gradients)
- Mix font roles (no Syne for body, no Inter for kickers, no Mono for headlines)
- Add card border-radius > 14px (pills excepted at 30px)
- Saturate cyan — it should remain ~10% of the visual surface
- Add scroll animations beyond what's in the reference
- Add icons we haven't drawn — arrow `→` text and the well SVG are enough
- Break the section-footer pattern (mono signature line at the bottom of every section)

---

## 7. Responsive

The reference is mobile-first via grid collapse. Two breakpoints matter:
- `980px` — hero and genese stack vertically
- `860px` — stats / phases / pricing collapse to 1 column
- `780px` — section padding drops to 64px / 24px
- `820px` — topbar nav links hide except CTA

Use Tailwind's `md:` (768) and `lg:` (1024) as approximations, or define exact custom breakpoints.

---

## 8. Behavior expectations

- Topbar: sticky, blur, links scroll to anchors smoothly (use `scroll-smooth` on html)
- Kicker dot pulse: 2s ease-out infinite
- Phase / price cards: subtle hover lift (`translateY(-2px)`) + border color shift to cyan-neon
- Well visual: outer ring rotates clockwise 60s, inner rings counter-clockwise 90s, center source pulses radius 14→26 over 3s
- Portal: capped at 18 simultaneous particles, spawn every 120-280ms, particle lifetime 0.7-1.3s

---

## 9. Routes scaffold

For the hackathon MVP, only `/` (landing-v3) needs full implementation. Scaffold the others empty with the topbar + portal in place:

- `/` — full landing-v3
- `/diagnostic` — placeholder route with Topbar + PortalBg + empty `<main>` (will be designed later)
- `/resultats` — same scaffolding

---

## 10. Accessibility

- All decorative SVGs (`<WellVisual>`, portal particles) get `aria-hidden="true"`
- Skip-link to `#top` for keyboard users
- Color contrast: white on encre is AAA. White on saphir-nuit is AA. Cyan on encre passes AA only at 14px+ — keep cyan reserved for accents/labels at small mono sizes (still readable) or headlines.
- `prefers-reduced-motion` MUST disable portal + well rotation (already in CSS)

---

## 11. Out of scope for v1

- Real form submission (use `console.log` or a placeholder API route)
- Analytics
- CMS — content stays hardcoded in components
- Backend for `/diagnostic` flow (will be wired later)
- Real Cal.com embed on `/resultats` (placeholder fine)

---

## 12. Verification checklist

Before merging, verify:

- [ ] All three fonts (Syne / Inter / JetBrains Mono) load via `next/font`
- [ ] No hex color hardcoded outside `globals.css` `@theme`
- [ ] Portal animation visible behind all dark sections
- [ ] Light section (testimonials) has opaque `--perle` background covering portal
- [ ] Topbar mark uses the asymmetric logo SVG, not a text-only fallback
- [ ] Every section has a mono `<SectionFooter>` at the bottom
- [ ] No section uses cyan as a background (only as accent)
- [ ] Hero `<WellVisual>` rings rotate
- [ ] `prefers-reduced-motion` disables portal + well rotation
- [ ] Mobile breakpoints work at 360 / 768 / 1024 widths
