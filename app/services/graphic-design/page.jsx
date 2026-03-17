"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function GraphicDesign() {
  return (
    <main className="service-detail-page graphic-page">
      <section className="service-detail-hero graphic-hero">
        <div className="service-detail-bg-text">Design</div>
        <div className="graphic-orb graphic-orb-one" />
        <div className="graphic-orb graphic-orb-two" />

        <div className="container service-detail-hero-grid">
          <motion.div initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="service-detail-category"
            >
              Branding &amp; Creative Services
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="service-detail-title"
            >
              Graphic Design
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="service-detail-intro"
            >
              We craft impactful visual designs that communicate your message,
              strengthen your brand identity, and leave a lasting impression
              across digital and print platforms.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="service-detail-actions"
            >
              <a href="/contact" className="btn-primary">
                Start Your Project
              </a>

              <a href="#graphic-process" className="btn-secondary">
                See Process
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="graphic-metrics"
            >
              <div className="graphic-metric-card">
                <span className="graphic-metric-value">Bold</span>
                <span className="graphic-metric-label">Strong visual identity</span>
              </div>

              <div className="graphic-metric-card">
                <span className="graphic-metric-value">Creative</span>
                <span className="graphic-metric-label">Eye-catching brand assets</span>
              </div>

              <div className="graphic-metric-card">
                <span className="graphic-metric-value">Memorable</span>
                <span className="graphic-metric-label">Designs that leave impact</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="graphic-image-wrap"
          >
            <div className="graphic-image-frame">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
                className="service-detail-image graphic-image"
                alt="Creative graphic design workspace"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="graphic-floating-panel"
            >
              <p className="graphic-floating-label">Creative Focus</p>
              <p className="graphic-floating-text">
                Brand visuals, social assets, promotional graphics, and creative
                designs tailored to your business identity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="service-detail-section graphic-overview-section">
        <div className="container service-detail-content-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="service-detail-subtitle">Creative Brand Visuals</p>

            <h2 className="service-detail-heading">
              Design that captures attention
            </h2>

            <p className="service-text">
              Strong graphic design helps businesses present themselves with
              confidence. We create visuals that align with your brand, support
              your message, and make your content more engaging and professional.
            </p>
          </motion.div>

          <div className="service-detail-points">
            {[
              "Custom graphics for digital and print media",
              "Brand-aligned visuals with strong creative direction",
              "Promotional designs for marketing campaigns",
              "Consistent assets for social, web, and business use",
            ].map((text, i) => (
              <motion.div
                key={text}
                className="service-point-card graphic-point-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="service-point-dot" />
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="graphic-feature-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="graphic-heading-center"
          >
            <p className="service-detail-subtitle">Why graphic design matters</p>
            <h2 className="service-detail-heading">
              Visuals that strengthen your brand presence
            </h2>
          </motion.div>

          <div className="graphic-feature-grid">
            {[
              {
                title: "Stronger brand recognition",
                text: "Consistent and attractive visuals help people remember your business and understand your style instantly.",
              },
              {
                title: "More engaging content",
                text: "Creative design makes your marketing materials, social media, and website content more appealing.",
              },
              {
                title: "Professional presentation",
                text: "Polished graphics help your business appear more credible, premium, and ready to grow.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="graphic-feature-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <div className="graphic-feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="graphic-process" className="service-process graphic-process">
        <div className="container">
          <motion.p
            className="service-detail-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Creative Process
          </motion.p>

          <motion.h2
            className="service-detail-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            viewport={{ once: true }}
          >
            Turning ideas into strong visual assets
          </motion.h2>

          <div className="process-grid">
            {[
              {
                title: "Creative Brief",
                text: "Understand your brand, audience, goals, and the message each design needs to communicate.",
              },
              {
                title: "Concept Design",
                text: "Explore visual directions, layouts, and creative ideas that align with your identity.",
              },
              {
                title: "Design Development",
                text: "Refine chosen concepts into polished, high-quality graphics ready for use across platforms.",
              },
              {
                title: "Delivery & Support",
                text: "Provide final assets optimised for digital, print, marketing, and ongoing brand consistency.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="process-card graphic-process-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.14, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <span className="graphic-process-step">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-section graphic-cta-section">
        <motion.div
          className="container service-cta-box graphic-cta-box"
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="graphic-cta-tag">Bring your visuals to life</p>
            <h2 className="service-cta-title">
              Ready to elevate your brand with better design?
            </h2>
            <p className="graphic-cta-text">
              Let’s create professional and memorable visuals that make your
              business stand out across every platform.
            </p>
          </div>

          <a href="/contact" className="btn-primary">
            Talk To Our Team
          </a>
        </motion.div>
      </section>
    </main>
  );
}