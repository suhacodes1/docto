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

export default function InfluencerMarketing() {
  return (
    <main className="service-detail-page influencer-page">
      <section className="service-detail-hero influencer-hero">
        <div className="service-detail-bg-text">Influence</div>
        <div className="influencer-orb influencer-orb-one" />
        <div className="influencer-orb influencer-orb-two" />

        <div className="container service-detail-hero-grid">
          <motion.div initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="service-detail-category"
            >
              Digital Marketing &amp; Brand Campaigns
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="service-detail-title"
            >
              Influencer Marketing
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="service-detail-intro"
            >
              Build credibility and reach new audiences through authentic
              influencer partnerships that align with your brand and campaign
              goals.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="service-detail-actions"
            >
              <Link href="/contact" className="btn-primary">
                Launch Campaigns
              </Link>

              <a href="#influencer-process" className="btn-secondary">
                See Process
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="influencer-metrics"
            >
              <div className="influencer-metric-card">
                <span className="influencer-metric-value">Authentic</span>
                <span className="influencer-metric-label">
                  Trusted creator partnerships
                </span>
              </div>

              <div className="influencer-metric-card">
                <span className="influencer-metric-value">Targeted</span>
                <span className="influencer-metric-label">
                  Reach niche audiences
                </span>
              </div>

              <div className="influencer-metric-card">
                <span className="influencer-metric-value">Impactful</span>
                <span className="influencer-metric-label">
                  Stronger campaign visibility
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="influencer-image-wrap"
          >
            <div className="influencer-image-frame">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                className="service-detail-image influencer-image"
                alt="Influencer marketing collaboration"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="influencer-floating-panel"
            >
              <p className="influencer-floating-label">Campaign Focus</p>
              <p className="influencer-floating-text">
                Creator partnerships, branded campaigns, audience trust, and
                social reach designed for stronger brand awareness.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="service-detail-section influencer-overview-section">
        <div className="container service-detail-content-grid">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="service-detail-subtitle">Brand Partnerships</p>

            <h2 className="service-detail-heading">
              Reach audiences through trusted voices
            </h2>

            <p className="service-text">
              Influencer marketing helps brands connect with people in a more
              human and relatable way. We shape collaborations that feel
              authentic, aligned, and valuable for both your brand and your
              audience.
            </p>
          </motion.div>

          <div className="service-detail-points">
            {[
              "Influencer research and campaign matching",
              "Creator outreach and collaboration planning",
              "Branded content strategy and campaign support",
              "Audience alignment and campaign visibility",
            ].map((text, i) => (
              <motion.div
                key={text}
                className="service-point-card influencer-point-card"
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

      <section className="influencer-feature-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="influencer-heading-center"
          >
            <p className="service-detail-subtitle">Why influencer marketing works</p>
            <h2 className="service-detail-heading">
              Authentic promotion with stronger audience trust
            </h2>
          </motion.div>

          <div className="influencer-feature-grid">
            {[
              {
                title: "Build credibility",
                text: "Influencer partnerships help your brand feel more relatable and trusted through real audience connections.",
              },
              {
                title: "Expand your reach",
                text: "Reach communities and audiences that may not find your brand through traditional channels alone.",
              },
              {
                title: "Create campaign momentum",
                text: "Well-planned collaborations can support awareness, content creation, and stronger social engagement.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="influencer-feature-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <div className="influencer-feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="influencer-process" className="service-process influencer-process">
        <div className="container">
          <motion.p
            className="service-detail-subtitle"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Influencer Campaign Process
          </motion.p>

          <motion.h2
            className="service-detail-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            viewport={{ once: true }}
          >
            Building meaningful brand collaborations
          </motion.h2>

          <div className="process-grid">
            {[
              {
                title: "Campaign Discovery",
                text: "Define your brand goals, audience, campaign direction, and the type of creators that fit best.",
              },
              {
                title: "Creator Selection",
                text: "Identify relevant influencers whose audience and content align with your business.",
              },
              {
                title: "Campaign Planning",
                text: "Structure the collaboration, creative direction, messaging, and campaign deliverables.",
              },
              {
                title: "Performance Review",
                text: "Review reach, engagement, and campaign impact to inform future partnerships.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="process-card influencer-process-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.14, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <span className="influencer-process-step">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta-section influencer-cta-section">
        <motion.div
          className="container service-cta-box influencer-cta-box"
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="influencer-cta-tag">Create influence</p>
            <h2 className="service-cta-title">
              Ready to launch an influencer campaign?
            </h2>
            <p className="influencer-cta-text">
              Let’s build meaningful collaborations that strengthen awareness,
              credibility, and brand reach.
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