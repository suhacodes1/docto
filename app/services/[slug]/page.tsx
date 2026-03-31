import { notFound } from "next/navigation";
import { allServices } from "../../data/services";
import type { Metadata } from "next";

export function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = allServices.find((item) => item.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found | Digital Paradigm",
    };
  }

  return {
    title: `${service.title} | Digital Paradigm - Healthcare Digital Solutions`,
    description: `Health - Digital Paradigm: ${service.description}`,
    keywords: `${service.title.toLowerCase()}, healthcare digital services, ${service.category.toLowerCase()}`,
    openGraph: {
      title: `${service.title} | Digital Paradigm - Healthcare Digital Solutions`,
      description: `Health - Digital Paradigm: ${service.description}`,
      url: `https://health.digitalparadigm.com/services/${service.slug}`,
      siteName: "Digital Paradigm",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Digital Paradigm - Healthcare Digital Solutions`,
      description: `Health - Digital Paradigm: ${service.description}`,
    },
    alternates: {
      canonical: `https://health.digitalparadigm.com/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = allServices.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const galleryImages =
    service.slug !== "influencer-marketing"
      ? [1, 2, 3, 4].map((n) =>
          `/assets/img/services-page/${service.slug}/${String(n).padStart(3, "0")}.webp`
        )
      : [];

  return (
    <main className="service-detail-page">
      {/* Hero */}
      <section className="service-detail-hero">
        <div className="service-detail-bg-text">{service.title}</div>

        <div className="container service-detail-hero-grid">
          <div className="service-detail-left">
            <p className="services-breadcrumb">
              Home <span>*</span> Services <span>*</span> {service.title}
            </p>

            <p className="service-detail-category">{service.category}</p>

            <h1 className="service-detail-title">{service.title}</h1>

            <p className="service-detail-intro">{service.description}</p>

            <div className="service-detail-actions">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>

          {(service as any).image && (
            <div className="service-detail-right">
              <img
                src={(service as any).image}
                alt={service.title}
                className="service-detail-image"
              />
            </div>
          )}
        </div>
      </section>

      {/* What's included */}
      <section className="service-detail-section">
        <div className="container">
          <div className="service-detail-content-grid">
            <div>
              <p className="service-detail-subtitle">What this service includes</p>
              <h2 className="service-detail-heading">
                Designed to support growth, usability, and performance
              </h2>
            </div>

            <div className="service-detail-points">
              {service.highlights.map((point) => (
                <div key={point} className="service-point-card">
                  <span className="service-point-dot" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section className="service-detail-gallery">
          <div className="container">
            <h2 className="service-detail-heading">Service Page Gallery</h2>
            <div className="service-gallery-grid">
              {galleryImages.map((src, index) => (
                <div key={src} className="service-gallery-item">
                  <img
                    src={src}
                    alt={`${service.title} screenshot ${index + 1}`}
                    className="service-gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="service-cta-section">
        <div className="container service-cta-box">
          <div>
            <p className="service-detail-subtitle">Ready to get started?</p>
            <h2 className="service-cta-title">
              Let’s build something tailored to your business
            </h2>
          </div>

          <button className="btn-primary">Enquire Now</button>
        </div>
      </section>
    </main>
  );
}