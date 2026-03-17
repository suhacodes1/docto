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
    },
  }),
};

export default function MVPDevelopment() {
  return (
    <main className="service-detail-page">

      {/* HERO */}

      <section className="service-detail-hero">
        <div className="service-detail-bg-text">Launch</div>

        <div className="container service-detail-hero-grid">

          <motion.div
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="service-detail-category"
            >
              Web & Software Solutions
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="service-detail-title"
            >
              MVP Development
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="service-detail-intro"
            >
              Launch your product faster with a focused Minimum Viable Product
              that allows you to test ideas, attract early users, and validate
              your concept before scaling.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="service-detail-actions"
            >
              <a href="/contact" className="btn-primary">
                Start Your MVP
              </a>

              <button className="btn-secondary">
                Learn More
              </button>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              className="service-detail-image"
            />
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}

      <section className="service-detail-section">
        <div className="container service-detail-content-grid">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="service-detail-subtitle">Build smarter</p>

            <h2 className="service-detail-heading">
              Validate your idea before scaling
            </h2>

            <p className="service-text">
              MVP development allows startups and innovators to bring products
              to market quickly. Instead of building everything at once, we
              focus on the essential features that allow your product to launch,
              gather feedback, and evolve.
            </p>
          </motion.div>

          <div className="service-detail-points">

            {[
              "Rapid development cycles for faster launches",
              "Feature prioritisation to focus on what matters most",
              "Scalable architecture ready for future growth",
              "Product testing with real users and feedback",
            ].map((text, i) => (

              <motion.div
                key={text}
                className="service-point-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="service-point-dot" />
                <p>{text}</p>
              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}

      <section className="service-process">
        <div className="container">

          <motion.p
            className="service-detail-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            MVP Roadmap
          </motion.p>

          <motion.h2
            className="service-detail-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our MVP development framework
          </motion.h2>

          <div className="process-grid">

            {[
              {
                title: "Product Strategy",
                text: "Define the problem, user needs, and key product value.",
              },
              {
                title: "Feature Planning",
                text: "Select only the features required for the first launch.",
              },
              {
                title: "MVP Development",
                text: "Build a lean product ready for early users.",
              },
              {
                title: "Iterate",
                text: "Improve the product based on real feedback.",
              },
            ].map((step, i) => (

              <motion.div
                key={step.title}
                className="process-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <h3>{i + 1}. {step.title}</h3>
                <p>{step.text}</p>
              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="service-cta-section">

        <motion.div
          className="container service-cta-box"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <div>
            <h2 className="service-cta-title">
              Have an idea you want to launch?
            </h2>
          </div>

          <a href="/contact" className="btn-primary">
            Discuss Your Product
          </a>

        </motion.div>

      </section>

    </main>
  );
}