"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import ProcessSectionServices from "@/app/components/ProcessSectionServices";
import CTASection from "@/app/components/CTASection";

/* =========================
   ANIMATED RESULTS LIST
========================= */

const tagStyles = {
  pink: { background: "#fbeaf0", color: "#993556" },
  green: { background: "#eaf3de", color: "#3b6d11" },
  blue: { background: "#e6f1fb", color: "#185fa5" },
};

// ✅ Module-level data — fine here, it's not a hook
const growthSteps = [
  {
    label: "Traffic",
    title: "Attract the right patients",
    body: "SEO, paid ads, and social content bring qualified patients to your clinic — people actively searching for your services.",
  },
  {
    label: "Website",
    title: "Convert visitors into enquiries",
    body: "Your conversion-focused website turns visitors into real patient bookings — with clear messaging, trust signals, and frictionless calls to action.",
  },
  {
    label: "Booking",
    title: "Remove friction from scheduling",
    body: "Seamless online booking integrations let patients confirm appointments instantly — no phone tags, no drop-offs.",
  },
  {
    label: "Follow-up",
    title: "Nurture leads automatically",
    body: "Automated SMS and email sequences re-engage patients who didn't book, reducing lost leads and keeping your clinic top of mind.",
  },
  {
    label: "Retention",
    title: "Turn patients into loyal advocates",
    body: "Recall systems, loyalty programmes, and review flows keep existing patients coming back — and referring others.",
  },
];

function AnimatedResultsList({ items = [] }) {
  const [visible, setVisible] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((_, i) => {
            setTimeout(() => {
              setVisible((prev) => [...prev, i]);
            }, 200 + i * 180);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "1rem" }}>
      {items.map((item, i) => (
        <div
          key={item.text}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "14px 18px",
            border: "0.5px solid rgba(0,0,0,0.1)",
            borderRadius: "10px",
            background: "#fff",
            opacity: visible.includes(i) ? 1 : 0,
            transform: visible.includes(i) ? "translateX(0)" : "translateX(-24px)",
            transition: "opacity 0.45s ease, transform 0.45s ease",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#e5264a",
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: "1rem", fontWeight: 500, flex: 1 }}>
            {item.text}
          </span>
          {item.tag && (
            <span
              style={{
                fontSize: "11px",
                fontWeight: 500,
                padding: "3px 10px",
                borderRadius: "20px",
                whiteSpace: "nowrap",
                ...tagStyles[item.tagColor ?? "pink"],
              }}
            >
              {item.tag}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/* =========================
   SERVICE PAGE LAYOUT - ALL SERVICES in global.css
========================= */

export default function ServicePageLayout({
  category,
  titleTop,
  titleMain,
  titleBottom,
  intro,
  primaryCtaText = "Book a Consultation",
  primaryCtaLink = "/contact",

  heroImage,
  heroImageAlt,

  sectionTwoTitle,
  sectionTwoTextOne,
  sectionTwoTextTwo,
  sectionTwoImage,
  sectionTwoImageAlt,

  featureCards = [],

  // ✅ Properly destructured inside the function
  showGrowthSystem = false,
  growthSystemHighlightIndex = 1,

  valueTitle,
  valueTextOne,
  valueTextTwo,
  valueResultItems = [],
  valueResultLabel = "The result?",
  valueImage,
  valueImageAlt,

  consultationText,

  buildTitle,
  buildItems = [],

  buildImage,
  buildImageAlt,

  processTitle,
  processSteps = [],

  processComponent = null,

  quoteText,

  relatedServices = [],

  faqs = [],

  finalCtaText,
  finalCtaButtonText = "Book Your Free Consultation",
  finalCtaButtonLink = "/contact",
}) {
  const [openFaq, setOpenFaq] = useState(null);

  // ✅ Hook inside the component — correct
  const [activeGrowthStep, setActiveGrowthStep] = useState(growthSystemHighlightIndex);

  return (
    <main className="service-page overflow-x-clip">
      {/* HERO */}
      <section className="service-hero">
        <svg
          className="service-hero-circle"
          width="160"
          height="160"
          viewBox="0 0 160 160"
          aria-hidden="true"
        >
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#243847"
            strokeWidth="1.5"
            strokeDasharray="6 7"
          />
        </svg>

        <div className="container service-grid service-grid-2 service-grid-hero">
          <div data-aos="fade-right">
            <p className="service-category">{category}</p>

            <h1 className="service-hero-title">
              {titleTop && (
                <>
                  <span className="service-hero-title-accent">{titleTop}</span>
                  <br />
                </>
              )}
              {titleMain}
              <br />
              {titleBottom}
            </h1>

            <div className="service-divider" />

            <p className="service-intro">{intro}</p>

            <Link href={primaryCtaLink} className="service-btn service-btn-primary">
              {primaryCtaText}
            </Link>
          </div>

          <div data-aos="fade-left" data-aos-delay="150" className="service-image-wrap">
            <img src={heroImage} alt={heroImageAlt} className="service-image service-image-hero" />
          </div>
        </div>
      </section>

      {/* SECTION TWO */}
      <section className="service-section">
        <div className="container service-grid service-grid-2 service-grid-center">
          <div data-aos="fade-right" className="service-image-bubble-wrap">
            <div className="service-bubble service-bubble-pink" />
            <img
              src={sectionTwoImage}
              alt={sectionTwoImageAlt}
              className="service-image service-image-side service-image-side-narrow"
            />
          </div>

          <div data-aos="fade-left" data-aos-delay="100">
            <h2 className="service-heading">{sectionTwoTitle}</h2>
            <div className="service-divider" />
            <p className="service-text service-text-spaced">{sectionTwoTextOne}</p>
            <p className="service-text">{sectionTwoTextTwo}</p>
          </div>
        </div>
      </section>

      {/* GROWTH SYSTEM SECTION */}
      {showGrowthSystem && (
        <section className="service-section service-growth-system">
          <div className="container" data-aos="fade-up">
            <p className="service-category" style={{ marginBottom: "0.5rem" }}>
              How This Fits Into Your Growth System
            </p>
            <h2 className="service-heading" style={{ maxWidth: "680px" }}>
              This isn't a standalone service —{" "}
              <span className="service-heading-soft">it's part of your growth system</span>
            </h2>
            <div className="service-divider" />

            <p className="service-text service-text-spaced" style={{ maxWidth: "620px" }}>
              This solution works as one part of a complete patient acquisition system:
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "8px",
                margin: "1.5rem 0 1rem",
              }}
            >
              {growthSteps.map((step, i, arr) => (
                <div key={step.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <button
                    onClick={() => setActiveGrowthStep(i)}
                    style={{
                      padding: "9px 22px",
                      borderRadius: "999px",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      border: i === activeGrowthStep ? "1.5px solid #e5264a" : "1.5px solid rgba(0,0,0,0.08)",
                      background: i === activeGrowthStep ? "#e5264a" : "#f4f4f4",
                      color: i === activeGrowthStep ? "#fff" : "#243847",
                      transform: i === activeGrowthStep ? "translateY(-2px)" : "none",
                      boxShadow: i === activeGrowthStep ? "0 4px 16px rgba(229,38,74,0.25)" : "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {step.label}
                  </button>
                  {i < arr.length - 1 && (
                    <span style={{ color: "#bbb", fontSize: "1.1rem", fontWeight: 300 }}>→</span>
                  )}
                </div>
              ))}
            </div>

            {/* ✅ Detail card for active step */}
            <div
              style={{
                borderLeft: "2.5px solid #e5264a",
                padding: "0.75rem 1.25rem",
                background: "#f9f9f9",
                borderRadius: "0 8px 8px 0",
                marginBottom: "1.5rem",
                minHeight: "70px",
                transition: "all 0.25s ease",
              }}
            >
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#243847", margin: "0 0 4px" }}>
                {growthSteps[activeGrowthStep].title}
              </p>
              <p style={{ fontSize: "14px", color: "#555", margin: 0, lineHeight: 1.6 }}>
                {growthSteps[activeGrowthStep].body}
              </p>
            </div>

            <p className="service-text" style={{ maxWidth: "620px" }}>
              Each component is designed to work together — ensuring no patient is lost between steps.{" "}
              <strong>That's how we create predictable growth, not isolated results.</strong>
            </p>
          </div>
        </section>
      )}

      {/* FEATURE STRIP */}
      <section className="service-strip">
        <div className="container service-grid service-grid-3">
          {featureCards.map((item, i) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="service-feature-card"
            >
              <div className="service-feature-icon justify-center flex items-center">
                {item.icon}
              </div>
              <h3 className="service-feature-title">{item.title}</h3>
              <p className="service-feature-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="service-section">
        <div className="container service-grid service-grid-2 service-grid-center">
          <div data-aos="fade-right">
            <h2 className="service-heading">{valueTitle}</h2>
            <div className="service-divider" />
            <p className="service-text service-text-spaced">{valueTextOne}</p>

            {valueResultItems.length > 0 ? (
              <>
                <p className="service-text" style={{ marginBottom: "0.5rem" }}>
                  {valueResultLabel}
                </p>
                <AnimatedResultsList items={valueResultItems} />
              </>
            ) : (
              <p className="service-text">{valueTextTwo}</p>
            )}
          </div>

          <div data-aos="fade-left" data-aos-delay="100" className="service-image-wrap">
            <div className="service-bubble service-bubble-green service-bubble-bottom-right" />
            <img src={valueImage} alt={valueImageAlt} className="service-image service-image-mid" />
          </div>
        </div>
      </section>

      {/* CTA BAR */}
      <section className="service-cta-bar">
        <div className="container">
          <p data-aos="fade-up" className="service-cta-bar-text">
            {consultationText}
          </p>
          <Link data-aos="fade-up" data-aos-delay="100" href="/contact" className="service-btn service-btn-white">
            Book Now
          </Link>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="service-section">
        <div className="container service-grid service-grid-2 service-grid-start">
          <div data-aos="fade-right">
            <h2 className="service-heading">{buildTitle}</h2>
            <div className="service-divider service-divider-green" />

            <div className="service-list">
              {buildItems.map((item, i) => (
                <div key={item} data-aos="fade-right" data-aos-delay={i * 60} className="service-list-item">
                  <span className="service-list-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="150" className="service-image-wrap">
            <svg className="service-arc" width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
              <path
                d="M 10 110 Q 110 110 110 10"
                fill="none"
                stroke="#243847"
                strokeWidth="1.5"
                strokeDasharray="5 6"
              />
            </svg>
            <img src={buildImage} alt={buildImageAlt} className="service-image service-image-tall" />
          </div>
        </div>
      </section>

      <div className="pb-8">
        {processComponent ? processComponent : <ProcessSectionServices />}
      </div>

      {/* QUOTE */}
      <section className="service-quote">
        <div className="container service-quote-inner">
          <p data-aos="fade-up" className="service-quote-text">
            {quoteText}
          </p>
          <a
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="100"
            href="https://calendly.com/digitalparadigm/product-strategy-call"
            className="service-btn service-btn-primary"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="service-section">
        <div className="container">
          <div data-aos="fade-up" className="service-related-heading">
            <h2 className="service-heading service-heading-center">
              <span className="service-heading-soft mr-1"> Our </span> Related Services
            </h2>
            <div className="service-divider service-divider-center" />
          </div>

          <div className="service-grid service-grid-3">
            {relatedServices.map((item, i) => (
              <div key={item.title} data-aos="fade-up" data-aos-delay={i * 100} className="service-related-card">
                <div className="service-related-icon flex items-center justify-center">{item.icon}</div>
                <h3 className="service-related-title">{item.title}</h3>
                <div className="service-related-line" />
                <p className="service-related-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-faq-section">
        <div className="container">
          <div data-aos="fade-up" className="service-faq-heading">
            <h2 className="service-heading service-heading-center">
              <span className="service-heading-soft-light">Frequently</span> Asked Questions
            </h2>
            <div className="service-divider service-divider-center" />
          </div>

          <div className="service-grid service-grid-faq">
            {faqs.map((faq, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={(i % 2) * 80} className="service-faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="service-faq-button"
                >
                  <span className="service-faq-icon">{openFaq === i ? "−" : "›"}</span>
                  <span className="service-faq-question">{faq.q}</span>
                </button>
                {openFaq === i && <p className="service-faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

ServicePageLayout.propTypes = {
  category: PropTypes.string,
  titleTop: PropTypes.string,
  titleMain: PropTypes.string,
  titleBottom: PropTypes.string,
  intro: PropTypes.string,
  primaryCtaText: PropTypes.string,
  primaryCtaLink: PropTypes.string,

  heroImage: PropTypes.string,
  heroImageAlt: PropTypes.string,

  sectionTwoTitle: PropTypes.string,
  sectionTwoTextOne: PropTypes.string,
  sectionTwoTextTwo: PropTypes.string,
  sectionTwoImage: PropTypes.string,
  sectionTwoImageAlt: PropTypes.string,

  featureCards: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),

  showGrowthSystem: PropTypes.bool,
  growthSystemHighlightIndex: PropTypes.number,

  valueTitle: PropTypes.string,
  valueTextOne: PropTypes.string,
  valueTextTwo: PropTypes.string,
  valueResultItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      tag: PropTypes.string,
      tagColor: PropTypes.oneOf(["pink", "green", "blue"]),
    })
  ),
  valueResultLabel: PropTypes.string,
  valueImage: PropTypes.string,
  valueImageAlt: PropTypes.string,

  consultationText: PropTypes.string,

  buildTitle: PropTypes.string,
  buildItems: PropTypes.arrayOf(PropTypes.string),
  buildImage: PropTypes.string,
  buildImageAlt: PropTypes.string,

  processTitle: PropTypes.string,
  processSteps: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),

  quoteText: PropTypes.string,

  relatedServices: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),

  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      q: PropTypes.string,
      a: PropTypes.string,
    })
  ),

  finalCtaText: PropTypes.string,
  finalCtaButtonText: PropTypes.string,
  finalCtaButtonLink: PropTypes.string,

  processComponent: PropTypes.node,
};