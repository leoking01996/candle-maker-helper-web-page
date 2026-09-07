# Candle Formula Studio (React)

A Vite + React version of the candle-making guide and formula calculator, split into one
component per section.

## Structure

```
src/
  data/waxData.js                        shared reference data (wax temps, steps, notes)
  components/
    Hero.jsx                             hero header
    JumpNav.jsx                          sticky section nav
    ProcessGuide.jsx                     9-step process timeline
    WaxReference.jsx                     wax temperature + induction tables
    CalculatorSection.jsx                wraps both calculators
    calculators/
      WaxFragranceCalculator.jsx         wax weight / vessel volume → fragrance + dye
      CementCalculator.jsx               white cement → marble powder / SBR / water / fiber
    Troubleshooting.jsx                  troubleshooting notes
    Footer.jsx
  App.jsx                                assembles all sections
  main.jsx                               React entry point
  index.css                              shared styles
index.html
```

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for hosting

```bash
npm run build
```

Outputs a static `dist/` folder you can host anywhere (Netlify, Vercel, GitHub Pages, etc.).
# candle-maker-helper-web-page
