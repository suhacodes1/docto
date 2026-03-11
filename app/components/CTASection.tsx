"use client";
import ScrollToTopButton from "./ScrollToTopButton";

export default function CTASection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="cta-section">
      <div className="cta-hero">
        <div className="cta-overlay" />

        <div className="container cta-content">
          <div className="cta-left">
            <p className="cta-subtitle">Get In Touch</p>

            <h2 className="cta-title">
              Best Medical &amp; Health
              <br />
              Care Near Your City
            </h2>

            <p className="cta-text">
              We&apos;ve 25 Years of experience in Medical Services.
            </p>

            <div className="cta-buttons">
              <button className="cta-btn cta-btn-pink">
                <span>Contact Us</span>
                <span className="cta-btn-divider">|</span>
                <span>+</span>
              </button>

              <button className="cta-btn cta-btn-green">
                <span>Doctors List</span>
                <span className="cta-btn-divider">|</span>
                <span>+</span>
              </button>
            </div>
          </div>

          <div className="cta-play-wrap">
            <button className="cta-play-button" aria-label="Play video">
              ▶
            </button>
          </div>
        </div>
      </div>

      <div className="cta-logos-bar">
        <div className="container cta-logos">
          <div className="cta-logo-item">logotype</div>
          <div className="cta-logo-item">SAFEGUARD.</div>
          <div className="cta-logo-item">TERRENO</div>
          <div className="cta-logo-item">SAFEGUARD.</div>
          <div className="cta-logo-item">duragas</div>
        </div>
      </div>

      <ScrollToTopButton />
    </section>
  );
}
