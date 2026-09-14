export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Noida pilot</p>
          <h1 id="hero-heading">Labour chowk, as a product.</h1>
          <p className="hero-sub">
            Hire a nearby LIVE Worker for a day’s work — mistri, plumber,
            electrician, carpenter, painter, or house help — without walking
            the stand yourself.
          </p>
          <a className="cta" href="#features">
            See how it works
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-placeholder">
            <span className="hero-placeholder-badge">LIVE today</span>
            <span className="hero-placeholder-title">Plumber · Sector 62</span>
            <span className="hero-placeholder-meta">2.4 km · ₹800 / day</span>
          </div>
        </div>
      </div>
    </section>
  );
}
