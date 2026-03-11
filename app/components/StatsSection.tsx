export default function StatsSection() {
  const stats = [
    {
      icon: "1",
      value: "120+",
      label: "Projects Delivered",
    },
    {
      icon: "2",
      value: "40+",
      label: "Healthcare Clients",
    },
    {
      icon: "3",
      value: "6+",
      label: "Years Of Experience",
    },
    {
      icon: "4",
      value: "10+",
      label: "Countries Served",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-bg-text">Statistics</div>

      <div className="container stats-grid">
        <div className="stats-left">
          <h2 className="stats-title">Statistics Section</h2>
          <p className="stats-description">
            Replace healthcare stats with{" "}
            <strong>business credibility metrics.</strong>
          </p>

          <p className="stats-example">Example</p>

          <div className="stats-cards">
            {stats.map((item) => (
              <article className="stats-card" key={item.label}>
                <div className="stats-icon">{item.icon}</div>
                <div className="stats-value">{item.value}</div>
                <div className="stats-label">{item.label}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="stats-form-panel">
          <div className="stats-form-watermark">icon</div>

          <p className="stats-form-subtitle">Make an</p>
          <h3 className="stats-form-title">Appointment</h3>

          <div className="stats-form-fields">
            <div className="stats-form-field">
              <span>Choose A Service</span>
              <span>⌄</span>
            </div>

            <div className="stats-form-field">
              <span>Select Doctors</span>
              <span>⌄</span>
            </div>

            <div className="stats-form-field">
              <span>dd/mm/yyyy</span>
            </div>
          </div>

          <button className="stats-submit-btn">
            <span>SUBMIT NOW</span>
            <span className="stats-submit-divider">|</span>
            <span>+</span>
          </button>
        </div>
      </div>
    </section>
  );
}
