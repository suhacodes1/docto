"use client";

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import WhoWeWorkWithCTA from "@/app/components/WhoWeWorkWithCTA";
import { Check, Dot } from "lucide-react";

function HeroSection({
  title,
  subtitle,
  highlight,
  description,
  primaryAction,
  secondaryAction,
  emergencyPhone,
  imageSrc,
  imageAlt,
}) {
  return (
    <section className="bg-slate-50 text-slate-900 py-8 pt-24 md:py-16 md:pt-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 md:px-8 items-center">
        <div data-aos="fade-right" className="space-y-5">
          <p className="text-xs md:text-sm uppercase tracking-widest text-[#ef2f6b] font-semibold">
            {subtitle}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight md:leading-tight">
            {title}
            <br />
            <span className="text-[#ef2f6b] underline decoration-4 decoration-[#ef2f6b] underline-offset-4">
              {highlight}
            </span>
          </h1>
          <p className="max-w-xl text-sm md:text-base text-slate-600">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            <a
              href="/contact"
              className="px-5 py-2 bg-[#ef2f6b] text-white font-semibold rounded-full border-2 border-[#ef2f6b] hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <span>Contact Us</span>
              <span className="hero-services-divider">|</span>
              <span>+</span>
            </a>
            <a
              href="https://calendly.com/digitalparadigm/product-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-transparent text-black hover:text-white border-2 border-[#ef2f6b] font-semibold rounded-full hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <span>Get a Free Growth Audit</span>
              <span className="hero-services-divider">|</span>
              <span>+</span>
            </a>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="relative h-[calc(100vh/2.5)] md:h-[30rem] rounded-3xl overflow-hidden flex items-center justify-center"
        >
          {imageSrc ? (
            <>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </>
          ) : (
            <div className="absolute inset-0 bg-linear-to-r from-slate-100 to-slate-200" />
          )}

          <div className="absolute bottom-4 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0 md:translate-y-0 bg-white rounded-xl px-3 py-2 shadow-2xl border border-slate-200">
            <p className="text-xs md:text-sm font-semibold text-slate-800">
              Emergency Pickup
            </p>
            <a
              href={`tel:${emergencyPhone}`}
              className="text-xs text-slate-500 hover:text-pink-400"
            >
              {emergencyPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// function AboutSection({ smallTitle, title, description, attributes, imageSrc, imageAlt }) {
function AboutSection({ smallTitle, title, description, imageSrc, imageAlt }) {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 px-4 md:px-8 items-center">
        <div data-aos="fade-right" className="relative">
          <div className="h-60 md:h-80 bg-slate-100 rounded-3xl overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -left-2 bottom-10 md:-left-10 md:bottom-16 bg-slate-600 text-white p-4 md:p-5 rounded-lg shadow-2xl w-[70%] md:w-[60%]">
            <p className="text-xs md:text-sm font-semibold">
              We Since 15 Years Business
            </p>
            <p className="mt-1 text-xs text-slate-100 leading-relaxed">
              Our focus is simple: consistent patient acquisition and measurable
              revenue growth.
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#ef2f6b] font-semibold">
            {smallTitle}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
            {title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl">
            {description}
          </p>

          {/* <div className="grid gap-4 sm:grid-cols-2">
            {attributes.map((attr) => (
              <div key={attr.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 hover:border-[#ef2f6b] transition">
                <h3 className="text-base font-semibold text-slate-900 mb-1">{attr.title}</h3>
                <p className="text-sm text-slate-500">{attr.text}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ features, heading, description }) {
  return (
    <section className="bg-slate-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-2">
            {heading}
          </h2>
          <p className="text-slate-600 text-sm md:text-base">{description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="text-[#ef2f6b] mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection({ stats, heading, description }) {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-2">
            {heading}
          </h2>
          <p className="text-slate-600 text-sm md:text-base">{description}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-50 rounded-2xl p-4 text-center"
            >
              <p className="text-2xl font-extrabold text-[#ef2f6b]">
                {stat.value}
              </p>
              <p className="mt-1 text-xs md:text-sm text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({
  sectionTitle,
  sectionSubtitle,
  sectionDescription,
  sectionSubheading,
  items,
  mainImageSrc,
  mainImageAlt,
  rightDescription,
  cardTitle,
  cardText,
  cardImageSrc,
  cardImageAlt,
}) {
  return (
    <section className="bg-slate-50 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Layout with image on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left content */}
          <div data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-3">
              {sectionTitle}
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
              {sectionDescription}
            </p>

            {/* List items section */}
            {items && items.length > 0 && (
              <div className="space-y-2">
                {sectionSubheading && (
                  <p className="text-sm md:text-base font-semibold text-slate-900">
                    {sectionSubheading}
                  </p>
                )}
                <ul className="space-y-2">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#ef2f6b] font-bold text-base mt-0.5">
                        •
                      </span>
                      <span className="text-sm md:text-base text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Fallback to card structure for backward compatibility */}
            {!items && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">
                  {cardTitle}
                </h3>
                <p className="mt-2 text-sm md:text-base text-slate-600">
                  {cardText}
                </p>
                <div className="mt-4 h-40 bg-slate-200 rounded-xl overflow-hidden">
                  {cardImageSrc ? (
                    <img
                      src={cardImageSrc}
                      alt={cardImageAlt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#ef2f6b] font-semibold">
                      PLACE IMAGE HERE
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right image */}
          <div
            data-aos="fade-left"
            className="h-60 md:h-96 bg-slate-200 rounded-3xl overflow-hidden"
          >
            {mainImageSrc ? (
              <img
                src={mainImageSrc}
                alt={mainImageAlt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#ef2f6b] font-semibold">
                PLACE IMAGE HERE
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoSection({
  topTitle,
  heading,
  leftTitle,
  leftText,
  leftItems,
  centerImageSrc,
  centerImageAlt,
  quote,
  features,
}) {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
          <div
            data-aos="fade-right"
            className="h-60 md:h-96 rounded-3xl overflow-hidden shadow-lg bg-slate-100"
          >
            {centerImageSrc ? (
              <img
                src={centerImageSrc}
                alt={centerImageAlt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 font-semibold">
                PLACE IMAGE HERE
              </div>
            )}
          </div>

          <div>
            <div data-aos="fade-left" className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#ef2f6b] font-semibold">
                {topTitle}
              </p>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
                {heading}
              </h2>
            </div>
            <div data-aos="fade-up" className="space-y-2 mt-4">
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                {leftTitle}
              </h3>
              {leftItems ? (
                <ul className="text-slate-600 leading-relaxed text-sm md:text-base space-y-1">
                  {leftItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-0.5">
                      <Dot size={26} className="text-[#ef2f6b] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {leftText}
                </p>
              )}
            </div>

            <div
              data-aos="fade-up"
              className="bg-slate-800 text-white p-5 rounded-3xl shadow-xl mt-4"
            >
              <p className="italic text-base leading-relaxed">"{quote}"</p>
              <div className="mt-3 space-y-2">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check size={20} className="text-rose-500 " />
                    <p className="text-xs md:text-sm">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection({ faqs, heading, description }) {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            {heading}
          </h2>
          <p className="text-slate-600">{description}</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-4 py-3 text-left flex justify-between items-center font-medium text-slate-900 bg-slate-50 hover:bg-slate-100 transition text-sm"
              >
                <span>{faq.q}</span>
                <span className="text-lg">{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="px-4 py-3 bg-white text-slate-600 text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServiceLandingLayout({
  hero,
  aboutBlock,
  featureBlock,
  statsBlock,
  processBlock,
  infoBlock,
  faqBlock,
  finalCta,
}) {
  return (
    <main className="bg-white text-slate-900">
      <HeroSection {...hero} />
      <AboutSection {...aboutBlock} />
      <FeatureSection {...featureBlock} />
      <StatsSection {...statsBlock} />
      <ProcessSection {...processBlock} />
      <InfoSection {...infoBlock} />
      <FAQSection {...faqBlock} />
      <WhoWeWorkWithCTA />
    </main>
  );
}

ServiceLandingLayout.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    primaryAction: PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
    secondaryAction: PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
  }).isRequired,
  aboutBlock: PropTypes.shape({
    smallTitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    attributes: PropTypes.arrayOf(
      PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }),
    ),
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
  }).isRequired,
  featureBlock: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.node,
        title: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  }).isRequired,
  statsBlock: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string, label: PropTypes.string }),
    ),
  }).isRequired,
  processBlock: PropTypes.shape({
    sectionSubtitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    mainImageSrc: PropTypes.string,
    mainImageAlt: PropTypes.string,
    rightDescription: PropTypes.string,
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
    cardImageSrc: PropTypes.string,
    cardImageAlt: PropTypes.string,
  }).isRequired,
  infoBlock: PropTypes.shape({
    topTitle: PropTypes.string,
    heading: PropTypes.string,
    leftTitle: PropTypes.string,
    leftText: PropTypes.string,
    leftItems: PropTypes.arrayOf(PropTypes.string),
    centerImageSrc: PropTypes.string,
    centerImageAlt: PropTypes.string,
    quote: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  faqBlock: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    faqs: PropTypes.arrayOf(
      PropTypes.shape({ q: PropTypes.string, a: PropTypes.string }),
    ),
  }).isRequired,
  finalCta: PropTypes.shape({
    text: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
  }).isRequired,
};
