import { troubleshootNotes } from '../data/waxData.js'

export default function Troubleshooting() {
  return (
    <section id="notes">
      <div className="wrap">
        <div className="head">
          <span className="tag">04 — Troubleshooting</span>
          <h2>When something doesn't go to plan</h2>
        </div>

        <div className="notes-grid">
          {troubleshootNotes.map((note) => (
            <div className="note" key={note.title}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
