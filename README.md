# Kindling Brand Package

> Design tokens, logo system, typography, and component patterns for Kindling.

Part of [Kindling](https://github.com/Kind-ling/docs) — open infrastructure for the agent economy.

---

## Brand Preview

Open `brand.html` in a browser for the full interactive brand package including:

- Logo system (dark, light, ember backgrounds + mark-only)
- Color palette (primary, surfaces, semantic, text)
- Typography (Anybody display, Source Serif 4 body, IBM Plex Mono code)
- Component patterns (badges, buttons, cards, code blocks)
- Social asset templates
- Voice & messaging guidelines
- CSS variables export

---

## Quick Start

### CSS Variables

Copy into any project:

```css
:root {
  /* Primary */
  --ember: #E8652A;
  --ember-light: #F0884E;
  --ember-glow: rgba(232, 101, 42, 0.12);
  --ember-dim: #B84D1E;

  /* Surfaces */
  --void: #08080B;
  --ground: #0D0D11;
  --surface-1: #131317;
  --surface-2: #1A1A20;
  --surface-3: #222228;

  /* Borders */
  --border-subtle: #1E1E26;
  --border-default: #2A2A34;
  --border-ember: rgba(232, 101, 42, 0.25);

  /* Text */
  --text-primary: #EAEAEF;
  --text-secondary: #9898AC;
  --text-tertiary: #5E5E72;

  /* Semantic */
  --trust: #3B9ECC;
  --growth: #5EBB6E;
  --caution: #CCB43B;
  --critical: #E84040;

  /* Typography */
  --display: 'Anybody', sans-serif;
  --body: 'Source Serif 4', serif;
  --mono: 'IBM Plex Mono', monospace;
}
```

### Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Anybody:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@300;400;500;600&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap" rel="stylesheet">
```

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--ember` | `#E8652A` | Primary accent — marks the active, the important, the Kindling-touched |
| `--ember-light` | `#F0884E` | Hover states, gradient endpoints |
| `--ember-dim` | `#B84D1E` | Labels, section markers |
| `--void` | `#08080B` | Page background |
| `--ground` | `#0D0D11` | Card backgrounds, code blocks |
| `--surface-1` | `#131317` | Elevated surfaces |
| `--trust` | `#3B9ECC` | Verified, trust signals |
| `--growth` | `#5EBB6E` | Positive, referral, active |
| `--caution` | `#CCB43B` | Under review, warning |
| `--critical` | `#E84040` | Error, don't |

---

## Typography

| Voice | Font | Usage |
|-------|------|-------|
| **Display** | Anybody 700 | Headings, hero text, product names |
| **Body** | Source Serif 4 300/400 | Body text, descriptions, documentation |
| **Mono** | IBM Plex Mono 400/500 | Code, data, labels, badges, metadata |

---

## Logo

Three ascending bars (kindling / signal strength / upward trajectory) + wordmark in Anybody.

- **Full lockup**: dark backgrounds, generous clear space
- **Mark only**: favicons, sizes below 120px
- **Ember background**: accent use only, not default

See `brand.html` for SVG sources.

---

## Voice

Infrastructure, not hype. Precision, not jargon. Honest about trade-offs.

| Do | Don't |
|----|-------|
| "Verifier scores across three dimensions. Methodology is published and reproducible." | "Revolutionary AI-powered reputation engine leverages cutting-edge analytics." |
| "PUC operates services that participate in Kindling. First-party services are labeled." | "Built by the community, for the community!" |

---

*Brand Package v1.0 · Kindling · Permanent Upper Class · March 2026*
