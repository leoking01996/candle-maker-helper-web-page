import { useMemo, useState } from 'react'
import { waxData } from '../../data/waxData.js'

const fmt = (n) => n.toLocaleString(undefined, { maximumFractionDigits: 1 })
const fragPresets = [6, 8, 9, 10]

export default function WaxFragranceCalculator() {
  const [mode, setMode] = useState('weight')
  const [waxWeight, setWaxWeight] = useState(500)
  const [vessels, setVessels] = useState([250])
  const [density, setDensity] = useState(0.9)
  const [waxType, setWaxType] = useState('soy')
  const [fragPct, setFragPct] = useState(8)
  const [dyePct, setDyePct] = useState(0)
  const [fragDensity, setFragDensity] = useState(0.94)

  const resolvedWaxWeight = useMemo(() => {
    if (mode === 'weight') return waxWeight || 0
    const totalMl = vessels.reduce((sum, v) => sum + (v || 0), 0)
    return totalMl * (density || 0.9)
  }, [mode, waxWeight, vessels, density])

  // Density used to convert the wax result back to mL. In volume mode we
  // already know it; in weight mode fall back to the same 0.9 g/mL estimate.
  const waxDensityForMl = mode === 'volume' ? (density || 0.9) : 0.9

  const fragG = resolvedWaxWeight * (fragPct || 0) / 100
  const dyeG = resolvedWaxWeight * (dyePct || 0) / 100
  const waxMl = resolvedWaxWeight / waxDensityForMl
  const fragMl = fragG / (fragDensity || 0.94)
  const dyeMl = dyeG / (fragDensity || 0.94)
  const w = waxData[waxType]

  function updateVessel(i, value) {
    const next = [...vessels]
    next[i] = parseFloat(value) || 0
    setVessels(next)
  }
  function addVessel() {
    setVessels([...vessels, 0])
  }
  function removeVessel(i) {
    if (vessels.length > 1) setVessels(vessels.filter((_, idx) => idx !== i))
  }

  return (
    <div className="calc-card">
      <h3>Wax &amp; fragrance</h3>
      <span className="sub">
        Fragrance = wax weight × load %. The percentage stays fixed; the gram amount scales with
        your batch.
      </span>

      <div className="toggle">
        <button
          className={mode === 'weight' ? 'active' : ''}
          onClick={() => setMode('weight')}
        >
          I know my wax weight
        </button>
        <button
          className={mode === 'volume' ? 'active' : ''}
          onClick={() => setMode('volume')}
        >
          I know my vessel volume
        </button>
      </div>

      {mode === 'weight' ? (
        <div className="field">
          <label htmlFor="waxWeight">Wax weight (g)</label>
          <input
            id="waxWeight"
            type="number"
            min="0"
            step="1"
            value={waxWeight}
            onChange={(e) => setWaxWeight(parseFloat(e.target.value) || 0)}
          />
        </div>
      ) : (
        <>
          <div className="vessel-rows">
            {vessels.map((v, i) => (
              <div className="vessel-row" key={i}>
                <input
                  type="number"
                  placeholder="Vessel volume (mL)"
                  min="0"
                  step="1"
                  value={v}
                  onChange={(e) => updateVessel(i, e.target.value)}
                />
                <button type="button" onClick={() => removeVessel(i)}>−</button>
              </div>
            ))}
          </div>
          <button type="button" className="add-vessel" onClick={addVessel}>
            + Add another vessel
          </button>
          <div className="field">
            <label htmlFor="waxDensity">
              Wax density (g/mL) — 0.9 is a reasonable estimate for most waxes
            </label>
            <input
              id="waxDensity"
              type="number"
              min="0.1"
              step="0.01"
              value={density}
              onChange={(e) => setDensity(parseFloat(e.target.value) || 0.9)}
            />
          </div>
        </>
      )}

      <div className="field">
        <label htmlFor="waxType">Wax type</label>
        <select id="waxType" value={waxType} onChange={(e) => setWaxType(e.target.value)}>
          {Object.entries(waxData).map(([key, v]) => (
            <option key={key} value={key}>{v.label}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>Fragrance load</label>
        <div className="quickset">
          {fragPresets.map((p) => (
            <button
              key={p}
              className={fragPct === p ? 'active' : ''}
              onClick={() => setFragPct(p)}
            >
              {p}%{p === 8 ? ' ⭐ start' : ''}
            </button>
          ))}
        </div>
        <input
          type="number"
          min="0"
          max="20"
          step="0.1"
          value={fragPct}
          onChange={(e) => setFragPct(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className="field">
        <label htmlFor="dyePct">Powder dye — optional (% of wax weight)</label>
        <input
          id="dyePct"
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={dyePct}
          onChange={(e) => setDyePct(parseFloat(e.target.value) || 0)}
        />
      </div>

      <div className="field">
        <label htmlFor="fragDensity">
          Fragrance oil density (g/mL) — 0.94 is a reasonable estimate for most FOs
        </label>
        <input
          id="fragDensity"
          type="number"
          min="0.1"
          step="0.01"
          value={fragDensity}
          onChange={(e) => setFragDensity(parseFloat(e.target.value) || 0.94)}
        />
      </div>

      <div className="result">
        <div className="r-line">
          <span className="r-label">Wax needed</span>
          <span className="r-val">
            {fmt(resolvedWaxWeight)} <small>g</small> / {fmt(waxMl)} <small>mL</small>
          </span>
        </div>
        <div className="r-line">
          <span className="r-label">Fragrance ({fragPct}%)</span>
          <span className="r-val">
            {fmt(fragG)} <small>g</small> / {fmt(fragMl)} <small>mL</small>
          </span>
        </div>
        {dyePct > 0 && (
          <div className="r-line">
            <span className="r-label">Powder dye ({dyePct}%)</span>
            <span className="r-val">
              {fmt(dyeG)} <small>g</small> / {fmt(dyeMl)} <small>mL</small>
            </span>
          </div>
        )}
        <div className="r-note">
          {w.label}: melt {w.melt} · add dye {w.dye} · add fragrance {w.frag}. Fragrance dosage
          depends on the oil supplier's IFRA guidance — treat 8% as a tested starting point, not
          a ceiling. mL figures are estimates based on the densities above — weigh on a scale for
          accuracy where possible.
        </div>
      </div>
    </div>
  )
}
