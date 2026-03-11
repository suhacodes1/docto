import RevealServiceCard from "../components/RevealServiceCard";
import { serviceGroups } from "../data/services";

const logos = [
  "Google",
  "Figma",
  "Stripe",
  "HubSpot",
  "WordPress",
  "Shopify",
  "Google",
  "Figma",
  "Stripe",
  "HubSpot",
  "WordPress",
  "Shopify",
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero">


        <div className="container">


          <h1 className="services-hero-title">
            Our <span>Services</span>
          </h1>

          <p className="services-hero-text">
            Explore our web, software, design, and digital marketing solutions
            tailored to support modern business growth.
          </p>
        </div>
      </section>

      <section className="services-marquee">
        <div className="services-marquee-track">
          {logos.map((logo, index) => (
            <span key={index} className="services-marquee-item">
              {logo}
            </span>
          ))}
        </div>
      </section>

      <section className="services-list-section">
        <div className="container">
          {serviceGroups.map((group) => (
            <div className="services-group" key={group.category}>
              <h2 className="services-group-title">{group.category}</h2>

              <div className="services-grid">
                {group.services.map((service, index) => (
                  <RevealServiceCard
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    title={service.title}
                    description={service.description}
                    delay={index * 0.08}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}