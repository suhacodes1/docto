import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/3.webp";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background word */}
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
            <button className="btn-primary">Our Services</button>
            <button className="play-button">▶</button>
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
