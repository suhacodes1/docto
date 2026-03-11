import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/12.webp";

const growthCards = {
  leftTop: {
    title: "More Online Patient Bookings",
    description:
      "We build optimized healthcare websites and booking systems that convert visitors into patient appointments.",
    icon: "🧠",
  },
  leftBottom: {
    title: "Better Internal Efficiency",
    description:
      "Integrated systems and streamlined workflows help clinics reduce admin overhead and improve day-to-day operations.",
    icon: "⚙️",
  },
  rightTop: {
    title: "Higher Google Visibility",
    description:
      "Our SEO and local search strategies help clinics appear when patients search for healthcare services nearby.",
    icon: "🦷",
  },
  rightBottom: {
    title: "Stronger Online Reputation",
    description:
      "We help healthcare providers build trust online through stronger branding, review strategies, and better digital experiences.",
    icon: "⭐",
  },
};

export default function GrowthSection() {
  return (
    <section className="growth-section">
      <div className="growth-bg-text">Clinics Grow</div>

      <div className="container growth-container">
        <p className="growth-subtitle">Clinics Grow with Technology</p>
        <h2 className="growth-title">Helping Clinics Grow With Technology</h2>
        <div className="growth-line" />

        <div className="growth-layout">
          <div className="growth-side-column">
            <article className="growth-card">
              <div className="growth-icon">{growthCards.leftTop.icon}</div>
              <h3 className="growth-card-title">
                More Online Patient
                <br />
                Bookings
              </h3>
              <p className="growth-card-text">
                {growthCards.leftTop.description}
              </p>
              <a href="#" className="growth-readmore">
                Read More »
              </a>
            </article>

            <article className="growth-card">
              <div className="growth-icon">{growthCards.leftBottom.icon}</div>
              <h3 className="growth-card-title">
                Better Internal
                <br />
                Efficiency
              </h3>
              <p className="growth-card-text">
                {growthCards.leftBottom.description}
              </p>
              <a href="#" className="growth-readmore">
                Read More »
              </a>
            </article>
          </div>

          <div className="growth-center-container">
            <div className="growth-center-shape" />
            <Image
              src={Img1}
              alt="Healthcare professional placeholder"
              className="growth-center-image"
            />
          </div>

          <div className="growth-side-column">
            <article className="growth-card">
              <div className="growth-icon">{growthCards.rightTop.icon}</div>
              <h3 className="growth-card-title">
                Higher Google
                <br />
                Visibility
              </h3>
              <p className="growth-card-text">
                {growthCards.rightTop.description}
              </p>
              <a href="#" className="growth-readmore">
                Read More »
              </a>
            </article>

            <article className="growth-card">
              <div className="growth-icon">{growthCards.rightBottom.icon}</div>
              <h3 className="growth-card-title">
                Stronger Online
                <br />
                Reputation
              </h3>
              <p className="growth-card-text">
                {growthCards.rightBottom.description}
              </p>
              <a href="#" className="growth-readmore">
                Read More »
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
