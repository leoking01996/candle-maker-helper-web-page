import { useState } from 'react'

const fmt = (n) => n.toLocaleString(undefined, { maximumFractionDigits: 1 })
// Combined "500g/555 mL" style display for a gram amount converted via a density (g/mL).
function GmlValue({ g, density }) {
  const ml = g / (density || 1)
  return (
    <span className="r-val">
      {fmt(g)}<small>g</small> / {fmt(ml)}<small>mL</small>
    </span>
  )
}

// Reasonable default bulk densities (g/mL) for each material — editable below,
// since supplier packing density varies.
const defaultDensities = {
  cement: 0.9,
  marble: 1.5,
  sbr: 1.01,
  water: 1.0,
  fiber: 0.91,
  pigment: 1.5,
}

export default function CementCalculator() {
  const [cement, setCement] = useState(500)
  const [waterPct, setWaterPct] = useState(13)
  const [densities, setDensities] = useState(defaultDensities)

  function setDensity(key, value) {
    setDensities({ ...densities, [key]: parseFloat(value) || defaultDensities[key] })
  }

  const marble = cement * 0.8
  const sbr = cement * 0.08
  const water = cement * waterPct / 100
  const fiber = cement * 0.003
  const pigment = cement * 0.015

  return (
    <div className="calc-card">
      <h3>Marble-look cement vessel</h3>
      <span className="sub">
        For casting your own candle vessels — white cement, marble/quartz powder, SBR latex and
        water, at the ratios you tested.
      </span>

      <div className="field">
        <label htmlFor="cementWeight">White cement (g)</label>
        <input
          id="cementWeight"
          type="number"
          min="0"
          step="10"
          value={cement}
          onChange={(e) => setCement(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className="field">
        <label htmlFor="waterPct">
          Water (% of cement) — 12–15% typical, thin with 5 g at a time if needed
        </label>
        <input
          id="waterPct"
          type="number"
          min="8"
          max="20"
          step="0.5"
          value={waterPct}
          onChange={(e) => setWaterPct(parseFloat(e.target.value) || 13)}
        />
      </div>

      <details className="density-panel">
        <summary>Material densities (g/mL) — adjust if your supplier differs</summary>
        <div className="density-grid">
          <label>
            White cement
            <input type="number" min="0.1" step="0.01" value={densities.cement}
              onChange={(e) => setDensity('cement', e.target.value)} />
          </label>
          <label>
            Marble / quartz powder
            <input type="number" min="0.1" step="0.01" value={densities.marble}
              onChange={(e) => setDensity('marble', e.target.value)} />
          </label>
          <label>
            SBR latex
            <input type="number" min="0.1" step="0.01" value={densities.sbr}
              onChange={(e) => setDensity('sbr', e.target.value)} />
          </label>
          <label>
            Water
            <input type="number" min="0.1" step="0.01" value={densities.water}
              onChange={(e) => setDensity('water', e.target.value)} />
          </label>
          <label>
            PP / glass fiber
            <input type="number" min="0.1" step="0.01" value={densities.fiber}
              onChange={(e) => setDensity('fiber', e.target.value)} />
          </label>
          <label>
            Mineral pigment
            <input type="number" min="0.1" step="0.01" value={densities.pigment}
              onChange={(e) => setDensity('pigment', e.target.value)} />
          </label>
        </div>
      </details>

      <div className="result">
        <div className="r-line">
          <span className="r-label">White cement</span>
          <GmlValue g={cement} density={densities.cement} />
        </div>
        <div className="r-line">
          <span className="r-label">Marble / quartz powder (80%)</span>
          <GmlValue g={marble} density={densities.marble} />
        </div>
        <div className="r-line">
          <span className="r-label">SBR latex (8%)</span>
          <GmlValue g={sbr} density={densities.sbr} />
        </div>
        <div className="r-line">
          <span className="r-label">Water ({waterPct}%)</span>
          <GmlValue g={water} density={densities.water} />
        </div>
        <div className="r-line">
          <span className="r-label">PP / glass fiber (~0.3%)</span>
          <GmlValue g={fiber} density={densities.fiber} />
        </div>
        <div className="r-line">
          <span className="r-label">Mineral pigment (~1.5%)</span>
          <GmlValue g={pigment} density={densities.pigment} />
        </div>
        <div className="r-note">
          Mix dry ingredients first (cement, powder, fiber). Mix SBR into the water separately,
          then combine slowly. Add water 5 g at a time near the top of the range — try not to
          exceed ~15% without testing the result. mL figures are estimates based on the densities
          above — weigh on a scale for accuracy where possible.
        </div>
      </div>
    </div>
  )
}
