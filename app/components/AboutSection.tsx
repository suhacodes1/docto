import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/8.webp";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="about-dp-section">
      <div className="about-dp-bg-text">About</div>

      <div className="container about-dp-grid">
        <div className="about-dp-left">
          <Image
            src={Img1}
            alt="About Digital Paradigm"
            className="solution-image"
          />
        </div>

        <div className="about-dp-right">
          <p className="about-dp-subtitle">About Digital Paradigm</p>

          <h2 className="about-dp-title">
            Technology &amp; Growth
            <br />
            Partner For Healthcare
            <br />
            Businesses
          </h2>

          <div className="about-dp-line" />

          <div className="about-dp-copy">
            <p>
              Digital Paradigm helps clinics, healthcare providers, and medical
              startups build modern digital systems that support their growth.
            </p>

            <p>
              From professional healthcare websites to custom software and
              patient acquisition strategies, we develop solutions that help
              clinics operate more efficiently and attract more patients.
            </p>

            <p>Our goal is simple:</p>

            <p className="about-dp-copy-strong">
              Handle the technology so healthcare professionals can focus on
              what matters most — patient care.
            </p>
          </div>

          <div className="about-dp-actions">
            <Link href="/contact">
              <button className="about-dp-button">
                <span>Click Here</span>
                <span className="about-dp-button-divider">|</span>
                <span>+</span>
              </button>
            </Link>

            <div className="about-dp-phone">
              <span className="about-dp-phone-text">+012 (345) 6789</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
