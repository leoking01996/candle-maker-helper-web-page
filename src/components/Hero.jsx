export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <span className="eyebrow-flame">
          <svg viewBox="0 0 24 24" fill="none" stroke="#d9a13a" strokeWidth="1.6">
            <path d="M12 2c2 3-1 4-1 7a3 3 0 1 0 6 0c0-1-.5-2-1-3 2 1.5 3 4 3 6.5A7 7 0 1 1 6 12.5C6 8 9 5 12 2z" />
          </svg>
          A working reference for your induction setup
        </span>
        <h1>Wax, fragrance and pour — worked out for you, batch by batch.</h1>
        <p className="lede">
          A guide and calculator built from your own testing notes: melt points, fragrance load,
          dye timing, and how much wax an odd-shaped vessel actually needs.
        </p>
        <div className="hero-stats">
          <div>
            <div className="num">8%</div>
            <div className="lbl">fragrance load, starting point</div>
          </div>
          <div>
            <div className="num">500g</div>
            <div className="lbl">recommended first test batch</div>
          </div>
          <div>
            <div className="num">60°C</div>
            <div className="lbl">typical pouring temperature</div>
          </div>
        </div>
      </div>
    </header>
  )
}
