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

export default function SaaSDevelopment() {
  return (
    <main className="service-detail-page saas-page">
      <section className="service-detail-hero saas-hero">
        <div className="service-detail-bg-text">SaaS</div>
        <div className="saas-orb saas-orb-one" />
        <div className="saas-orb saas-orb-two" />

        <div className="container service-detail-hero-grid">
          <motion.div initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="service-detail-category"
            >
              Web &amp; Software Solutions
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="service-detail-title"
            >
              SaaS Development
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="service-detail-intro"
            >
              We design and develop scalable SaaS platforms that deliver
              powerful functionality while maintaining clean user experiences.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="service-detail-actions"
            >
              <Link href="/contact" className="btn-primary">
                Build Your SaaS
              </Link>

              <a href="#saas-process" className="btn-secondary">
                See Process
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="saas-metrics"
            >
              <div className="saas-metric-card">
                <span className="saas-metric-value">Scalable</span>
                <span className="saas-metric-label">Cloud-ready architecture</span>
              </div>

              <div className="saas-metric-card">
                <span className="saas-metric-value">Secure</span>
                <span className="saas-metric-label">Account and access systems</span>
              </div>

              <div className="saas-metric-card">
                <span className="saas-metric-value">Usable</span>
                <span className="saas-metric-label">Clean product experiences</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="saas-image-wrap"
          >
            <div className="saas-image-frame">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
                className="service-detail-image saas-image"
                alt="SaaS platform dashboard"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="saas-floating-panel"
            >
              <p className="saas-floating-label">Platform Focus</p>
              <p className="saas-floating-text">
                Subscription systems, dashboards, account management, analytics,
                and product flows designed for scale.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="service-detail-section saas-overview-section">
        <div className="container service-detail-content-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="service-detail-subtitle">Modern SaaS Platforms</p>

            <h2 className="service-detail-heading">
              Software built to scale
            </h2>

            <p className="service-text">
              SaaS platforms require strong architecture, intuitive interfaces,
              and reliable performance. We build software systems that support
              subscription models, dashboards, analytics, and scalable
              infrastructure.
            </p>
          </motion.div>

          <div className="service-detail-points">
            {[
              "Secure user accounts and subscription systems",
              "Admin dashboards and analytics tools",
              "Cloud-ready scalable infrastructure",
              "Optimised UX for complex digital products",
            ].map((text, i) => (
              <motion.div
                key={text}
                className="service-point-card saas-point-card"
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

      <section className="saas-feature-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="saas-heading-center"
          >
            <p className="service-detail-subtitle">Why SaaS products succeed</p>
            <h2 className="service-detail-heading">
              Built for retention, reliability, and growth
            </h2>
          </motion.div>

          <div className="saas-feature-grid">
            {[
              {
                title: "Subscription-ready systems",
                text: "From onboarding to recurring account access, we build structures that support SaaS product models.",
              },
              {
                title: "Strong user experience",
                text: "Complex product functionality is shaped into clean, usable dashboards and workflows.",
              },
              {
                title: "Future-proof foundations",
                text: "We build for long-term scale so your platform can expand with new features and more users.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="saas-feature-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <div className="saas-feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="saas-process" className="service-process saas-process">
        <div className="container">
          <motion.p
            className="service-detail-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Development Process
          </motion.p>

          <motion.h2
            className="service-detail-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            viewport={{ once: true }}
          >
            Building scalable SaaS platforms
          </motion.h2>

          <div className="process-grid">
            {[
              {
                title: "Product Planning",
                text: "Define the SaaS architecture, goals, user roles, and platform requirements.",
              },
              {
                title: "UX Design",
                text: "Create intuitive user flows, onboarding experiences, and clean dashboard interfaces.",
              },
              {
                title: "Platform Development",
                text: "Build scalable cloud-based systems with secure accounts, data flows, and core features.",
              },
              {
                title: "Growth & Optimisation",
                text: "Improve product performance, retention, usability, and feature evolution over time.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="process-card saas-process-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.14, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <span className="saas-process-step">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-section saas-cta-section">
        <motion.div
          className="container service-cta-box saas-cta-box"
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="saas-cta-tag">Ready to grow?</p>
            <h2 className="service-cta-title">
              Ready to launch your SaaS product?
            </h2>
            <p className="saas-cta-text">
              Let’s shape a platform that is scalable, intuitive, and ready to
              support real users and long-term growth.
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