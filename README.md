# Vantage — Volcano Country Expeditions

Premium tour & travel website for small-group expeditions through East Java's
volcano country (Bromo, Ijen, Tumpak Sewu). Cinematic hero with a
background-as-carousel, glassmorphism UI, editorial moments gallery, tour
packages, testimonial slider, and an emotional closing CTA.

## Stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS v4 (design tokens in `src/index.css`)
- Motion (`motion/react`) — reveals, parallax, UI states
- Lenis smooth scrolling
- Embla carousel (testimonials + horizontal moments gallery)
- Self-hosted fonts: Fraunces Variable (display serif) + Manrope Variable (UI)

## Run

```bash
npm install
npm run dev      # dev server on :5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Branding

ALL copy and content lives in one file:

```
src/data/site.ts
```

Rebrand by editing only that file: name, email, tagline, tours, moments,
packages, testimonials, steps, final CTA and footer copy. The logo mark is an
inline SVG in `src/components/BrandMark.tsx` (used by navbar + footer);
swap its paths for a new mark. Favicon lives in `index.html` as an inline
data-URI SVG.

## Structure

```
src/
  components/   Navbar, Hero, Moments, Packages, Testimonials,
                HowItWorks, FinalCta, Footer, BrandMark, Reveal
  hooks/        useLenis
  data/         site.ts — single source of truth
  App.tsx       section composition
  main.tsx      entry + runtime error capture
  index.css     Tailwind v4 @theme tokens + glass / kenburns / rise-in utilities
```

## Implementation notes

- Hero background: all slides always mounted; a CSS transition on
  `opacity`/`transform` (1400ms, ease-soft) drives the crossfade — no
  AnimatePresence, so a transition cannot stall.
- Headline/sub swap per tour via keyed remount + pure CSS `rise-in` keyframes.
- Photography from Wikimedia Commons (attributed in footer) and Unsplash; every
  URL was HEAD-verified before shipping.
- Respects `prefers-reduced-motion` (Lenis, keyframes, transitions disabled).