import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/3.webp";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-text">Medical</div>

      <div className="container hero-grid">
        <div>
          <p className="hero-top-text">
            Custom software and websites that support modern clinics.
          </p>

          <h1 className="hero-heading">
            Smarter Digital Systems for Healthcare
          </h1>

          <p className="hero-subtext">
            Reliable technology built to scale with your practice.
          </p>

          <div className="hero-buttons">
            <Link href="/services" className="hero-services-btn">
              <span>Our Services</span>
              <span className="hero-services-divider">|</span>
              <span>+</span>
            </Link>

            <button className="play-button" aria-label="Play video">
              ▶
            </button>
          </div>
        </div>

        <div>
          <Image
            src={Img1}
            alt="Healthcare professional"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
