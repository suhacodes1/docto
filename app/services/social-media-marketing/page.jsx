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

export default function SocialMediaMarketing() {
  return (
    <main className="service-detail-page social-page">
      <section className="service-detail-hero social-hero">
        <div className="service-detail-bg-text">Social</div>
        <div className="social-orb social-orb-one" />
        <div className="social-orb social-orb-two" />

        <div className="container service-detail-hero-grid">
          <motion.div initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="service-detail-category"
            >
              Digital Marketing &amp; Brand Growth
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="service-detail-title"
            >
              Social Media Marketing
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="service-detail-intro"
            >
              Build stronger brand awareness and connect with your audience
              through strategic social media content, campaigns, and platform
              growth.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="service-detail-actions"
            >
              <a href="/contact" className="btn-primary">
                Grow Your Brand
              </a>

              <a href="#social-process" className="btn-secondary">
                See Process
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="social-metrics"
            >
              <div className="social-metric-card">
                <span className="social-metric-value">Engaging</span>
                <span className="social-metric-label">
                  Content that connects
                </span>
              </div>

              <div className="social-metric-card">
                <span className="social-metric-value">Consistent</span>
                <span className="social-metric-label">
                  Stronger brand presence
                </span>
              </div>

              <div className="social-metric-card">
                <span className="social-metric-value">Strategic</span>
                <span className="social-metric-label">
                  Platform-led growth
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="social-image-wrap"
          >
            <div className="social-image-frame">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop"
                className="service-detail-image social-image"
                alt="Social media marketing content planning"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="social-floating-panel"
            >
              <p className="social-floating-label">Social Focus</p>
              <p className="social-floating-text">
                Strategy, visual content, community engagement, and platform
                growth built around your brand goals.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="service-detail-section social-overview-section">
        <div className="container service-detail-content-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="service-detail-subtitle">Stronger Brand Presence</p>

            <h2 className="service-detail-heading">
              Social media designed for engagement and trust
            </h2>

            <p className="service-text">
              Social media is one of the strongest ways to stay visible,
              communicate your message, and build relationships with your
              audience. We create strategies that support awareness, engagement,
              and business growth.
            </p>
          </motion.div>

          <div className="service-detail-points">
            {[
              "Social content planning and campaign strategy",
              "Platform-specific content for stronger engagement",
              "Brand consistency across social channels",
              "Audience growth and communication support",
            ].map((text, i) => (
              <motion.div
                key={text}
                className="service-point-card social-point-card"
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

      <section className="social-feature-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="social-heading-center"
          >
            <p className="service-detail-subtitle">Why social media works</p>
            <h2 className="service-detail-heading">
              Visibility, credibility, and audience connection
            </h2>
          </motion.div>

          <div className="social-feature-grid">
            {[
              {
                title: "Build brand awareness",
                text: "Stay visible and memorable with content that keeps your business active in front of the right audience.",
              },
              {
                title: "Strengthen engagement",
                text: "Create conversations and interactions that help people connect with your brand more naturally.",
              },
              {
                title: "Support growth goals",
                text: "Social media can support traffic, enquiries, and stronger overall digital presence.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="social-feature-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <div className="social-feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="social-process" className="service-process social-process">
        <div className="container">
          <motion.p
            className="service-detail-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Social Media Process
          </motion.p>

          <motion.h2
            className="service-detail-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            viewport={{ once: true }}
          >
            Creating a stronger social presence
          </motion.h2>

          <div className="process-grid">
            {[
              {
                title: "Brand Review",
                text: "Understand your audience, positioning, and the platforms that best fit your business goals.",
              },
              {
                title: "Content Strategy",
                text: "Plan your social direction, content themes, messaging, and posting structure.",
              },
              {
                title: "Creative Execution",
                text: "Develop branded posts, visuals, and campaigns designed for consistency and engagement.",
              },
              {
                title: "Optimisation",
                text: "Track performance, refine the content approach, and strengthen results over time.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="process-card social-process-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.14, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <span className="social-process-step">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-section social-cta-section">
        <motion.div
          className="container service-cta-box social-cta-box"
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="social-cta-tag">Stay visible</p>
            <h2 className="service-cta-title">
              Ready to grow your social presence?
            </h2>
            <p className="social-cta-text">
              Let’s create a social media strategy that strengthens your brand
              and connects you with the right audience.
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