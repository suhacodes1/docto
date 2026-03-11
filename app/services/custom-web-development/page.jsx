"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function CustomWebDevelopment() {
  return (
    <main className="cwd-page">
      <section className="cwd-hero">
        <div className="cwd-hero-bg-text">Web</div>
        <div className="cwd-orb cwd-orb-one" />
        <div className="cwd-orb cwd-orb-two" />

        <div className="container cwd-hero-grid">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="cwd-hero-left"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="cwd-eyebrow"
            >
              Web &amp; Software Solutions
            </motion.p>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              className="cwd-title"
            >
              Custom Web
              <br />
              Development
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              className="cwd-intro"
            >
              We build custom websites and web platforms designed around your
              workflows, users, and growth goals. Instead of generic templates,
              our solutions are tailored to your business and built to scale.
            </motion.p>

            <motion.div
              custom={0.3}
              variants={fadeUp}
              className="cwd-actions"
            >
              <Link href="/contact" className="cwd-btn cwd-btn-primary">
                Book a Consultation
              </Link>

              <a href="#process" className="cwd-btn cwd-btn-secondary">
                Explore Process
              </a>
            </motion.div>

            <motion.div
              custom={0.4}
              variants={fadeUp}
              className="cwd-stats"
            >
              <div className="cwd-stat-card">
                <span className="cwd-stat-value">Fast</span>
                <span className="cwd-stat-label">Performance-first builds</span>
              </div>

              <div className="cwd-stat-card">
                <span className="cwd-stat-value">Scalable</span>
                <span className="cwd-stat-label">Built for long-term growth</span>
              </div>

              <div className="cwd-stat-card">
                <span className="cwd-stat-value">Tailored</span>
                <span className="cwd-stat-label">Designed around your needs</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="cwd-hero-right"
          >
            <div className="cwd-image-frame">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                alt="Custom web development"
                className="cwd-hero-image"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="cwd-floating-card"
            >
              <p className="cwd-floating-title">What we deliver</p>
              <p className="cwd-floating-text">
                Custom websites, portals, integrations, dashboards, and digital
                experiences built to support real workflows.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="cwd-overview-section">
        <div className="container cwd-overview-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="cwd-section-tag">What we build</p>
            <h2 className="cwd-section-title">
              Websites designed around your business
            </h2>
            <p className="cwd-section-text">
              Our custom web development approach focuses on building digital
              platforms that support real business workflows. Whether you need a
              marketing website, internal platform, booking system, or client
              portal, every solution is designed to be flexible, scalable, and
              user-focused.
            </p>
          </motion.div>

          <motion.div
            className="cwd-highlight-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              "Custom frontend and backend development",
              "SEO-friendly structure and fast performance",
              "Scalable architecture built for long-term growth",
              "API integrations with third-party systems",
            ].map((item, index) => (
              <motion.div
                key={item}
                custom={index * 0.08}
                variants={fadeUp}
                className="cwd-highlight-card"
              >
                <span className="cwd-highlight-dot" />
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cwd-features-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="cwd-section-heading-center"
          >
            <p className="cwd-section-tag">Why it stands out</p>
            <h2 className="cwd-section-title">
              Built for performance, usability, and growth
            </h2>
          </motion.div>

          <motion.div
            className="cwd-feature-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              {
                title: "Strategy-led",
                text: "Every build starts with your business goals, workflows, and user journeys.",
              },
              {
                title: "Conversion-focused",
                text: "We structure pages and experiences to guide users clearly toward action.",
              },
              {
                title: "Scalable foundation",
                text: "Your website or platform is built so it can expand as your business grows.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                custom={index * 0.1}
                variants={fadeUp}
                className="cwd-feature-card"
              >
                <div className="cwd-feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="process" className="cwd-process-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="cwd-section-tag">Our Process</p>
            <h2 className="cwd-section-title">How we build your platform</h2>
          </motion.div>

          <motion.div
            className="cwd-process-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              {
                step: "01",
                title: "Discovery",
                text: "We analyse your goals, workflows, and users to define the structure of your platform.",
              },
              {
                step: "02",
                title: "Design",
                text: "Our designers create intuitive interfaces focused on usability, clarity, and performance.",
              },
              {
                step: "03",
                title: "Development",
                text: "We build scalable systems using modern frameworks and clean architecture.",
              },
              {
                step: "04",
                title: "Launch",
                text: "After testing and optimisation, we launch your platform ready for growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                custom={index * 0.1}
                variants={fadeUp}
                className="cwd-process-card"
              >
                <span className="cwd-process-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cwd-cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 28 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="cwd-cta-box"
          >
            <div>
              <p className="cwd-cta-tag">Let’s build something tailored</p>
              <h2 className="cwd-cta-title">
                Ready to build a custom digital platform?
              </h2>
              <p className="cwd-cta-text">
                Let’s talk about your goals, the functionality you need, and the
                best way to bring your platform to life.
              </p>
            </div>

            <Link href="/contact" className="cwd-btn cwd-btn-primary cwd-cta-btn">
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}