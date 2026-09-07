import { waxData, inductionSettings } from '../data/waxData.js'

export default function WaxReference() {
  return (
    <section id="reference">
      <div className="wrap">
        <div className="head">
          <span className="tag">02 — Reference</span>
          <h2>Temperatures and wattage by wax</h2>
          <p>
            Every wax behaves a little differently. These are safe starting ranges — the
            calculator uses these when you pick a wax type.
          </p>
        </div>

        <div className="table-grid">
          <table>
            <caption>Wax temperature guide</caption>
            <thead>
              <tr><th>Wax</th><th>Melting range</th><th>Add fragrance</th><th>Add dye</th></tr>
            </thead>
            <tbody>
              {Object.values(waxData).map((w) => (
                <tr key={w.label}>
                  <td>{w.label}</td>
                  <td>{w.melt}</td>
                  <td>{w.frag}</td>
                  <td>{w.dye}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <caption>Induction setting</caption>
            <thead><tr><th>Power</th><th>Use</th></tr></thead>
            <tbody>
              {inductionSettings.map((row) => (
                <tr key={row.power}>
                  <td className={row.highlight ? 'hl' : undefined}>{row.power}</td>
                  <td>{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
