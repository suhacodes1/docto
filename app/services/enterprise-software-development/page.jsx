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

export default function EnterpriseSoftwareDevelopment() {
  return (
    <main className="service-detail-page enterprise-page">
      <section className="service-detail-hero enterprise-hero">
        <div className="service-detail-bg-text">Enterprise</div>
        <div className="enterprise-orb enterprise-orb-one" />
        <div className="enterprise-orb enterprise-orb-two" />

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
              Enterprise Software Development
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="service-detail-intro"
            >
              We build robust enterprise software solutions that streamline
              operations, support complex workflows, and help organisations work
              more efficiently at scale.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="service-detail-actions"
            >
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>

              <a href="#enterprise-process" className="btn-secondary">
                See Process
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="enterprise-metrics"
            >
              <div className="enterprise-metric-card">
                <span className="enterprise-metric-value">Efficient</span>
                <span className="enterprise-metric-label">
                  Workflow-driven systems
                </span>
              </div>

              <div className="enterprise-metric-card">
                <span className="enterprise-metric-value">Secure</span>
                <span className="enterprise-metric-label">
                  Enterprise-grade access control
                </span>
              </div>

              <div className="enterprise-metric-card">
                <span className="enterprise-metric-value">Scalable</span>
                <span className="enterprise-metric-label">
                  Built for teams and growth
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="enterprise-image-wrap"
          >
            <div className="enterprise-image-frame">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
                className="service-detail-image enterprise-image"
                alt="Enterprise software dashboard"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="enterprise-floating-panel"
            >
              <p className="enterprise-floating-label">Core Focus</p>
              <p className="enterprise-floating-text">
                Internal tools, workflow automation, role-based systems, data
                flows, and software that supports complex business operations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="service-detail-section enterprise-overview-section">
        <div className="container service-detail-content-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="service-detail-subtitle">Operational systems</p>

            <h2 className="service-detail-heading">
              Software designed for complex business needs
            </h2>

            <p className="service-text">
              Enterprise software requires more than just functionality. It
              needs to fit business operations, support departments, improve
              efficiency, and scale as internal requirements grow. We create
              robust platforms tailored to your organisation’s workflows,
              processes, and long-term digital strategy.
            </p>
          </motion.div>

          <div className="service-detail-points">
            {[
              "Workflow automation and internal business tools",
              "Secure role-based access and user permissions",
              "Cross-platform integrations and data sync",
              "Scalable systems for growing teams and operations",
            ].map((text, i) => (
              <motion.div
                key={text}
                className="service-point-card enterprise-point-card"
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

      <section className="enterprise-feature-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="enterprise-heading-center"
          >
            <p className="service-detail-subtitle">Why enterprise systems matter</p>
            <h2 className="service-detail-heading">
              Built for reliability, control, and long-term performance
            </h2>
          </motion.div>

          <div className="enterprise-feature-grid">
            {[
              {
                title: "Business-specific architecture",
                text: "We design systems around your actual operational structure instead of forcing generic tools into your workflow.",
              },
              {
                title: "Better internal efficiency",
                text: "Software can reduce manual handling, improve visibility, and help teams work more consistently.",
              },
              {
                title: "Long-term scalability",
                text: "Your system is built so it can grow with new departments, users, permissions, and processes.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="enterprise-feature-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <div className="enterprise-feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="enterprise-process" className="service-process enterprise-process">
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
            How we develop enterprise platforms
          </motion.h2>

          <div className="process-grid">
            {[
              {
                title: "Business Analysis",
                text: "We map workflows, users, departments, and system requirements before scoping the build.",
              },
              {
                title: "System Design",
                text: "Architecture, permissions, integrations, and platform structure are planned around operations.",
              },
              {
                title: "Software Development",
                text: "We build secure, scalable systems with clean logic and structured implementation.",
              },
              {
                title: "Deployment & Support",
                text: "Testing, rollout, optimisation, and long-term improvements support ongoing business use.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="process-card enterprise-process-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.14, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <span className="enterprise-process-step">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-section enterprise-cta-section">
        <motion.div
          className="container service-cta-box enterprise-cta-box"
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="enterprise-cta-tag">Ready to optimise?</p>
            <h2 className="service-cta-title">
              Need software built around your operations?
            </h2>
            <p className="enterprise-cta-text">
              Let’s design a tailored enterprise solution that improves
              efficiency, supports your teams, and scales with your business.
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