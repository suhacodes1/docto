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

export default function ResponsiveWebDesign() {
  return (
    <main className="service-detail-page responsive-page">
      <section className="service-detail-hero responsive-hero">
        <div className="service-detail-bg-text">Responsive</div>
        <div className="responsive-orb responsive-orb-one" />
        <div className="responsive-orb responsive-orb-two" />

        <div className="container service-detail-hero-grid">
          <motion.div initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="service-detail-category"
            >
              Web Design &amp; Development
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="service-detail-title"
            >
              Responsive Web Design
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="service-detail-intro"
            >
              We design websites that look polished and perform smoothly across
              desktops, tablets, and mobile devices for a seamless experience
              everywhere.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="service-detail-actions"
            >
              <Link href="/contact" className="btn-primary">
                Build Your Website
              </Link>

              <a href="#responsive-process" className="btn-secondary">
                See Process
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="responsive-metrics"
            >
              <div className="responsive-metric-card">
                <span className="responsive-metric-value">Adaptive</span>
                <span className="responsive-metric-label">Optimised for every screen</span>
              </div>

              <div className="responsive-metric-card">
                <span className="responsive-metric-value">Fast</span>
                <span className="responsive-metric-label">Smooth browsing experience</span>
              </div>

              <div className="responsive-metric-card">
                <span className="responsive-metric-value">Modern</span>
                <span className="responsive-metric-label">Clean layouts that convert</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="responsive-image-wrap"
          >
            <div className="responsive-image-frame">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
                className="service-detail-image responsive-image"
                alt="Responsive website design across devices"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="responsive-floating-panel"
            >
              <p className="responsive-floating-label">Web Focus</p>
              <p className="responsive-floating-text">
                Layout flexibility, mobile-friendly design, and smooth user
                experiences for every device size.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="service-detail-section responsive-overview-section">
        <div className="container service-detail-content-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="service-detail-subtitle">Websites That Adapt</p>

            <h2 className="service-detail-heading">
              Built to perform on every screen
            </h2>

            <p className="service-text">
              Today’s users access websites from many different devices. We
              create responsive designs that keep your brand looking clean,
              professional, and functional whether viewed on desktop, tablet, or
              mobile.
            </p>
          </motion.div>

          <div className="service-detail-points">
            {[
              "Mobile-friendly layouts and modern page structure",
              "Smooth scaling across screen sizes and devices",
              "Better readability, spacing, and usability",
              "Responsive design that supports stronger engagement",
            ].map((text, i) => (
              <motion.div
                key={text}
                className="service-point-card responsive-point-card"
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

      <section className="responsive-feature-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="responsive-heading-center"
          >
            <p className="service-detail-subtitle">Why responsiveness matters</p>
            <h2 className="service-detail-heading">
              Consistency, usability, and performance
            </h2>
          </motion.div>

          <div className="responsive-feature-grid">
            {[
              {
                title: "Better mobile experience",
                text: "Your visitors can browse comfortably and interact with your content without awkward zooming or broken layouts.",
              },
              {
                title: "Stronger brand presentation",
                text: "A responsive website keeps your business looking polished and professional across every device.",
              },
              {
                title: "Improved engagement",
                text: "Smooth, accessible design reduces frustration and helps users stay on your site for longer.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="responsive-feature-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <div className="responsive-feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="responsive-process" className="service-process responsive-process">
        <div className="container">
          <motion.p
            className="service-detail-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Web Design Process
          </motion.p>

          <motion.h2
            className="service-detail-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            viewport={{ once: true }}
          >
            Designing responsive digital experiences
          </motion.h2>

          <div className="process-grid">
            {[
              {
                title: "Planning",
                text: "Define page goals, content hierarchy, and layout priorities for different screen sizes.",
              },
              {
                title: "Responsive Design",
                text: "Create flexible layouts, spacing systems, and visual structures that adapt beautifully.",
              },
              {
                title: "Development",
                text: "Build responsive sections and components that remain functional and polished across devices.",
              },
              {
                title: "Testing & Refinement",
                text: "Review the design across breakpoints and improve usability, consistency, and performance.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="process-card responsive-process-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.14, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <span className="responsive-process-step">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-section responsive-cta-section">
        <motion.div
          className="container service-cta-box responsive-cta-box"
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="responsive-cta-tag">Make it work everywhere</p>
            <h2 className="service-cta-title">
              Ready for a website that looks great on every device?
            </h2>
            <p className="responsive-cta-text">
              Let’s create a responsive website that feels modern, smooth, and
              professional no matter where your audience views it.
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