export default function Features({ features = [] }) {
  return (
    <section id="features" className="features" aria-labelledby="features-heading">
      <div className="container">
        <p className="eyebrow">The P0 loop</p>
        <h2 id="features-heading">Features</h2>
        <p className="section-lead">
          A User finds a nearby LIVE Worker by Skill, completes a Booking, and
          coordinates the job. Dummy cards below stand in for that loop.
        </p>
        <div className="features-grid">
          {features.map((feature) => (
            <article key={feature.id} className="feature-card">
              <span className="feature-tag">{feature.tag}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
