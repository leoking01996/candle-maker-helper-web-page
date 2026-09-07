import { processSteps } from '../data/waxData.js'

export default function ProcessGuide() {
  return (
    <section id="guide">
      <div className="wrap">
        <div className="head">
          <span className="tag">01 — The process</span>
          <h2>Nine steps, one pour</h2>
          <p>
            The order matters more than the exact numbers: wax, then colour while it's still hot,
            then a cooling pause before fragrance, then a second cooling pause before pouring.
          </p>
        </div>

        <ol className="timeline">
          {processSteps.map((step) => (
            <li key={step.title}>
              <span className="step-title">{step.title}</span>
              {step.temp && <span className="step-temp">{step.temp}</span>}
              <div className="step-desc">{step.desc}</div>
            </li>
          ))}
        </ol>

        <div className="rule-strip">
          <b>Melt</b>
          <span className="arrow">→</span>Colour 70–80°C
          <span className="arrow">→</span>Fragrance ~65–75°C
          <span className="arrow">→</span>Pour ~60°C
        </div>
      </div>
    </section>
  )
}
