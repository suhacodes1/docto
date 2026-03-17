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

export default function UIUXDesign() {
  return (
    <main className="service-detail-page uiux-page">
      <section className="service-detail-hero uiux-hero">
        <div className="service-detail-bg-text">UI/UX</div>
        <div className="uiux-orb uiux-orb-one" />
        <div className="uiux-orb uiux-orb-two" />

        <div className="container service-detail-hero-grid">
          <motion.div initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="service-detail-category"
            >
              Creative &amp; Digital Solutions
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="service-detail-title"
            >
              UI/UX Design
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="service-detail-intro"
            >
              We create intuitive, modern, and visually engaging digital
              experiences that help brands connect with users and improve
              usability across every touchpoint.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="service-detail-actions"
            >
              <a href="/contact" className="btn-primary">
                Start Your Design
              </a>

              <a href="#uiux-process" className="btn-secondary">
                See Process
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="uiux-metrics"
            >
              <div className="uiux-metric-card">
                <span className="uiux-metric-value">Elegant</span>
                <span className="uiux-metric-label">Visually refined interfaces</span>
              </div>

              <div className="uiux-metric-card">
                <span className="uiux-metric-value">Intuitive</span>
                <span className="uiux-metric-label">Clear user journeys</span>
              </div>

              <div className="uiux-metric-card">
                <span className="uiux-metric-value">Human</span>
                <span className="uiux-metric-label">Design focused on user needs</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="uiux-image-wrap"
          >
            <div className="uiux-image-frame">
              <img
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop"
                className="service-detail-image uiux-image"
                alt="UI UX design workspace"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="uiux-floating-panel"
            >
              <p className="uiux-floating-label">Design Focus</p>
              <p className="uiux-floating-text">
                Wireframes, user journeys, interface systems, and polished
                experiences built for engagement and clarity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="service-detail-section uiux-overview-section">
        <div className="container service-detail-content-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="service-detail-subtitle">User-Centred Experiences</p>

            <h2 className="service-detail-heading">
              Design that feels effortless
            </h2>

            <p className="service-text">
              Great design is more than just appearance. We shape digital
              products around user behaviour, usability, and visual consistency
              to create experiences that feel smooth, engaging, and memorable.
            </p>
          </motion.div>

          <div className="service-detail-points">
            {[
              "User journey mapping and interface planning",
              "Wireframes and modern visual design systems",
              "Improved usability and smoother digital flows",
              "Consistent experiences across web and mobile",
            ].map((text, i) => (
              <motion.div
                key={text}
                className="service-point-card uiux-point-card"
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

      <section className="uiux-feature-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="uiux-heading-center"
          >
            <p className="service-detail-subtitle">Why UI/UX matters</p>
            <h2 className="service-detail-heading">
              Better design creates better digital results
            </h2>
          </motion.div>

          <div className="uiux-feature-grid">
            {[
              {
                title: "Stronger first impressions",
                text: "Modern and thoughtful interfaces help users trust your brand and stay engaged from the first interaction.",
              },
              {
                title: "Improved usability",
                text: "Clear navigation, logical flows, and intuitive layouts make your product easier and more enjoyable to use.",
              },
              {
                title: "Higher conversion potential",
                text: "Good user experience reduces friction and helps guide visitors toward meaningful actions.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="uiux-feature-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <div className="uiux-feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="uiux-process" className="service-process uiux-process">
        <div className="container">
          <motion.p
            className="service-detail-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Design Process
          </motion.p>

          <motion.h2
            className="service-detail-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            viewport={{ once: true }}
          >
            How we create user-focused experiences
          </motion.h2>

          <div className="process-grid">
            {[
              {
                title: "Research & Discovery",
                text: "Understand your audience, goals, and product direction before defining the visual and functional experience.",
              },
              {
                title: "Wireframing",
                text: "Map the structure, user flows, and content hierarchy for a smooth and purposeful interface.",
              },
              {
                title: "Visual Design",
                text: "Craft beautiful, modern screens with strong branding, consistency, and attention to detail.",
              },
              {
                title: "Refinement",
                text: "Review, improve, and polish the final design for usability, clarity, and performance.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="process-card uiux-process-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.14, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <span className="uiux-process-step">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-section uiux-cta-section">
        <motion.div
          className="container service-cta-box uiux-cta-box"
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="uiux-cta-tag">Let’s design better</p>
            <h2 className="service-cta-title">
              Ready to create an experience users love?
            </h2>
            <p className="uiux-cta-text">
              Let’s build clean, modern, and user-friendly designs that make
              your brand stand out and your platform easier to use.
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