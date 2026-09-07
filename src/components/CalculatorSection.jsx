import WaxFragranceCalculator from './calculators/WaxFragranceCalculator.jsx'
import CementCalculator from './calculators/CementCalculator.jsx'

export default function CalculatorSection() {
  return (
    <section id="calculator">
      <div className="wrap">
        <div className="head">
          <span className="tag">03 — Calculator</span>
          <h2>Work out your batch</h2>
          <p>
            Enter a wax weight, or the volume of your vessel(s) — the fragrance and dye amounts
            update as you type.
          </p>
        </div>

        <div className="calc-grid">
          <WaxFragranceCalculator />
          <CementCalculator />
        </div>
      </div>
    </section>
  )
}
