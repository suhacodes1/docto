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

export default function SearchEngineOptimization() {
  return (
    <main className="service-detail-page seo-page">
      <section className="service-detail-hero seo-hero">
        <div className="service-detail-bg-text">SEO</div>
        <div className="seo-orb seo-orb-one" />
        <div className="seo-orb seo-orb-two" />

        <div className="container service-detail-hero-grid">
          <motion.div initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="service-detail-category"
            >
              Digital Marketing &amp; Growth
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="service-detail-title"
            >
              Search Engine Optimization (SEO)
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="service-detail-intro"
            >
              Improve your search visibility and attract more qualified traffic
              with SEO strategies designed to strengthen your rankings and grow
              your online presence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="service-detail-actions"
            >
              <Link href="/contact" className="btn-primary">
                Grow With SEO
              </Link>

              <a href="#seo-process" className="btn-secondary">
                See Process
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="seo-metrics"
            >
              <div className="seo-metric-card">
                <span className="seo-metric-value">Visible</span>
                <span className="seo-metric-label">
                  Better search presence
                </span>
              </div>

              <div className="seo-metric-card">
                <span className="seo-metric-value">Targeted</span>
                <span className="seo-metric-label">
                  Reach the right audience
                </span>
              </div>

              <div className="seo-metric-card">
                <span className="seo-metric-value">Sustainable</span>
                <span className="seo-metric-label">
                  Long-term digital growth
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="seo-image-wrap"
          >
            <div className="seo-image-frame">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
                className="service-detail-image seo-image"
                alt="SEO analytics dashboard"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="seo-floating-panel"
            >
              <p className="seo-floating-label">SEO Focus</p>
              <p className="seo-floating-text">
                Keyword strategy, technical improvements, content optimisation,
                and visibility growth built for stronger search performance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="service-detail-section seo-overview-section">
        <div className="container service-detail-content-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="service-detail-subtitle">Organic Growth</p>

            <h2 className="service-detail-heading">
              Get discovered where people are searching
            </h2>

            <p className="service-text">
              SEO helps your business appear in front of people actively looking
              for your services. We build strategies that improve rankings,
              strengthen your website structure, and support steady online
              growth.
            </p>
          </motion.div>

          <div className="service-detail-points">
            {[
              "Keyword research and search strategy",
              "On-page optimisation for stronger visibility",
              "Technical SEO improvements and site health",
              "Content structure designed for better rankings",
            ].map((text, i) => (
              <motion.div
                key={text}
                className="service-point-card seo-point-card"
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

      <section className="seo-feature-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="seo-heading-center"
          >
            <p className="service-detail-subtitle">Why SEO matters</p>
            <h2 className="service-detail-heading">
              Visibility that supports long-term growth
            </h2>
          </motion.div>

          <div className="seo-feature-grid">
            {[
              {
                title: "Higher search visibility",
                text: "Appear more often when potential customers search for relevant services and solutions.",
              },
              {
                title: "Qualified website traffic",
                text: "SEO helps attract people already interested in what your business offers.",
              },
              {
                title: "Stronger digital foundation",
                text: "A well-optimised website supports content, usability, and long-term brand growth.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="seo-feature-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <div className="seo-feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="seo-process" className="service-process seo-process">
        <div className="container">
          <motion.p
            className="service-detail-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            SEO Process
          </motion.p>

          <motion.h2
            className="service-detail-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            viewport={{ once: true }}
          >
            Building stronger search performance
          </motion.h2>

          <div className="process-grid">
            {[
              {
                title: "SEO Audit",
                text: "Review website performance, technical issues, search visibility, and existing content structure.",
              },
              {
                title: "Strategy Planning",
                text: "Define target keywords, search opportunities, and page-level optimisation priorities.",
              },
              {
                title: "Implementation",
                text: "Apply on-page, technical, and content improvements to strengthen rankings and relevance.",
              },
              {
                title: "Monitoring & Growth",
                text: "Track visibility, refine the strategy, and continue improving results over time.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="process-card seo-process-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.14, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <span className="seo-process-step">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-section seo-cta-section">
        <motion.div
          className="container service-cta-box seo-cta-box"
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="seo-cta-tag">Build visibility</p>
            <h2 className="service-cta-title">
              Ready to improve your search rankings?
            </h2>
            <p className="seo-cta-text">
              Let’s build an SEO strategy that helps your business get found by
              the right people at the right time.
            </p>
          </div>

          <Link href="/contact" className="btn-primary">
            Talk To Our Team
          </Link>
        </motion.div>
      </section>
    </main>
  );
}