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

export default function PayPerClick() {
  return (
    <main className="service-detail-page ppc-page">
      <section className="service-detail-hero ppc-hero">
        <div className="service-detail-bg-text">PPC</div>
        <div className="ppc-orb ppc-orb-one" />
        <div className="ppc-orb ppc-orb-two" />

        <div className="container service-detail-hero-grid">
          <motion.div initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="service-detail-category"
            >
              Paid Advertising &amp; Digital Growth
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="service-detail-title"
            >
              Pay-Per-Click (PPC)
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="service-detail-intro"
            >
              Reach high-intent audiences faster with strategic PPC campaigns
              designed to drive clicks, conversions, and measurable business
              results.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="service-detail-actions"
            >
              <a href="/contact" className="btn-primary">
                Launch Campaigns
              </a>

              <a href="#ppc-process" className="btn-secondary">
                See Process
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="ppc-metrics"
            >
              <div className="ppc-metric-card">
                <span className="ppc-metric-value">Fast</span>
                <span className="ppc-metric-label">Immediate visibility</span>
              </div>

              <div className="ppc-metric-card">
                <span className="ppc-metric-value">Measurable</span>
                <span className="ppc-metric-label">Trackable campaign results</span>
              </div>

              <div className="ppc-metric-card">
                <span className="ppc-metric-value">Focused</span>
                <span className="ppc-metric-label">Target the right audience</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="ppc-image-wrap"
          >
            <div className="ppc-image-frame">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop"
                className="service-detail-image ppc-image"
                alt="PPC campaign performance dashboard"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="ppc-floating-panel"
            >
              <p className="ppc-floating-label">PPC Focus</p>
              <p className="ppc-floating-text">
                Paid search strategy, targeted ads, landing page alignment, and
                performance-driven campaign optimisation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="service-detail-section ppc-overview-section">
        <div className="container service-detail-content-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="service-detail-subtitle">Paid Search Growth</p>

            <h2 className="service-detail-heading">
              Get in front of the right audience faster
            </h2>

            <p className="service-text">
              PPC advertising helps your business appear at the right time for
              people actively searching or ready to take action. We create
              campaigns built around targeting, performance, and measurable
              results.
            </p>
          </motion.div>

          <div className="service-detail-points">
            {[
              "Targeted ad campaigns for relevant audiences",
              "Keyword-focused paid search strategy",
              "Landing page alignment for stronger conversions",
              "Campaign monitoring and optimisation",
            ].map((text, i) => (
              <motion.div
                key={text}
                className="service-point-card ppc-point-card"
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

      <section className="ppc-feature-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="ppc-heading-center"
          >
            <p className="service-detail-subtitle">Why PPC matters</p>
            <h2 className="service-detail-heading">
              Faster traffic, stronger targeting, clearer results
            </h2>
          </motion.div>

          <div className="ppc-feature-grid">
            {[
              {
                title: "Immediate visibility",
                text: "PPC helps your business appear quickly in front of people who are actively searching.",
              },
              {
                title: "Precise targeting",
                text: "Reach specific locations, search intent, and audiences with more control over your campaign direction.",
              },
              {
                title: "Performance tracking",
                text: "Measure results clearly and refine campaigns based on what drives stronger outcomes.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="ppc-feature-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <div className="ppc-feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="ppc-process" className="service-process ppc-process">
        <div className="container">
          <motion.p
            className="service-detail-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            PPC Process
          </motion.p>

          <motion.h2
            className="service-detail-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            viewport={{ once: true }}
          >
            Building high-performing paid campaigns
          </motion.h2>

          <div className="process-grid">
            {[
              {
                title: "Campaign Planning",
                text: "Define objectives, audience targeting, budget priorities, and platform strategy.",
              },
              {
                title: "Ad Development",
                text: "Create strong ad messaging, keyword targeting, and aligned landing page direction.",
              },
              {
                title: "Campaign Launch",
                text: "Deploy the campaign with a structured setup designed for performance and control.",
              },
              {
                title: "Optimisation & Reporting",
                text: "Review results, improve efficiency, and refine campaigns for stronger returns.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="process-card ppc-process-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.14, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <span className="ppc-process-step">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-section ppc-cta-section">
        <motion.div
          className="container service-cta-box ppc-cta-box"
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="ppc-cta-tag">Drive results</p>
            <h2 className="service-cta-title">
              Ready to launch a smarter PPC campaign?
            </h2>
            <p className="ppc-cta-text">
              Let’s create paid campaigns that put your business in front of the
              right people and turn clicks into action.
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