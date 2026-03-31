"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Img1 from "../../public/assets/img/aboutpage/1.webp";
import Img2 from "../../public/assets/img/aboutpage/2.webp";
import Img3 from "../../public/assets/img/aboutpage/3.webp";
import Img4 from "../../public/assets/img/aboutpage/4.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
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

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-glow about-hero-glow-one" />
        <div className="about-hero-glow about-hero-glow-two" />
        <div className="about-bg-text">About</div>

        <div className="container about-hero-grid">
          <motion.div initial="hidden" animate="show">
            <motion.p variants={fadeUp} custom={0} className="about-hero-label">
              Modern Digital Growth for Healthcare
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="about-hero-title font-bold"
            >
              Helping healthcare brands grow with clarity, trust, and strategy
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="about-hero-text"
            >
              We help clinics, healthcare providers, and medical brands build a
              stronger digital presence through thoughtful strategy, clean
              design, and marketing systems that support long-term growth.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="about-hero-actions"
            >
              <Link href="/contact" className="inline-flex items-center justify-center bg-[#ef2f6b] border border-[#ef2f6b] text-white rounded-full px-7 py-3 font-bold hover:bg-pink-600 transition-colors">
                Work With Us
              </Link>

              <Link href="/services" className="inline-flex items-center justify-center bg-transparent text-black hover:text-white border border-[#ef2f6b] rounded-full px-7 py-3 font-bold hover:bg-pink-600 transition-colors">
                View Services
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="about-hero-stats"
            >
              <div className="about-stat-card">
                <span className="about-stat-number">Strategy</span>
                <span className="about-stat-label">
                  Built around real healthcare goals
                </span>
              </div>

              <div className="about-stat-card">
                <span className="about-stat-number">Design</span>
                <span className="about-stat-label">
                  Clean, trustworthy digital experiences
                </span>
              </div>

              <div className="about-stat-card">
                <span className="about-stat-number">Growth</span>
                <span className="about-stat-label">
                  Smarter visibility and patient reach
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-hero-image-wrap"
            initial={{ opacity: 0, x: 60, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="about-hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop"
                alt="Healthcare team discussion"
                className="about-hero-image"
              />
            </div>

            <motion.div
              className="about-floating-card"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <p className="about-floating-label">Our Focus</p>
              <p className="about-floating-text">
                Helping healthcare businesses attract the right audience with
                modern digital strategy, stronger visibility, and refined brand
                experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="about-story-section">
        <div className="container about-story-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="about-section-subtitle">Who We Are</p>
            <h2 className="about-section-title font-semibold">
              A digital partner built for modern healthcare brands
            </h2>
          </motion.div>

          <motion.div
            className="about-story-content"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>
              We believe healthcare businesses deserve digital solutions that
              feel clear, professional, and human. In a space built on trust,
              your online presence should reflect the same confidence and care
              that patients expect in person.
            </p>

            <p>
              Our work combines strategy, creativity, and performance to help
              healthcare providers strengthen visibility, improve brand
              perception, and build digital systems that support real business
              growth.
            </p>

            <p>
              From SEO and paid campaigns to web design and digital branding, we
              focus on creating solutions that feel polished, practical, and
              aligned with your long-term goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="container">
          <motion.div
            className="about-heading-center"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="about-section-subtitle">What Guides Us</p>
            <h2 className="about-section-title font-semibold">
              The values behind the work we do
            </h2>
          </motion.div>

          <div className="about-values-grid">
            {[
              {
                title: "Clarity",
                text: "We create digital strategies and experiences that feel simple, structured, and easy for your audience to trust.",
                icon: Img1,
              },
              {
                title: "Care",
                text: "Healthcare communication should feel thoughtful and human. We build with empathy, professionalism, and purpose.",
                icon: Img2,
              },
              {
                title: "Consistency",
                text: "Strong brands grow through consistency across website design, content, search presence, and advertising.",
                icon: Img3,
              },
              {
                title: "Growth",
                text: "Everything we do is designed to support stronger visibility, better positioning, and long-term business results.",
                icon: Img4,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="about-value-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.65 }}
                viewport={{ once: true }}
              >
                <div className="mb-3">
                  <Image
                    className="object-contain"
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-why-section">
        <div className="container about-why-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="about-section-subtitle">Why Choose Us</p>
            <h2 className="about-section-title font-semibold">
              Strategy, creativity, and healthcare-focused digital thinking
            </h2>
            <p className="about-section-text">
              We understand that healthcare marketing needs more than just good
              visuals. It needs trust, strong communication, and a digital
              experience that makes patients feel confident from the very first
              interaction.
            </p>
          </motion.div>

          <div className="about-why-points">
            {[
              "Healthcare-focused digital strategy",
              "Clean, premium, and trustworthy design direction",
              "Growth-driven marketing across SEO, PPC, and social media",
              "Consistent branding across every patient touchpoint",
              "Practical solutions tailored to long-term business goals",
            ].map((text, i) => (
              <motion.div
                key={text}
                className="about-why-point"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                viewport={{ once: true }}
              >
                <span className="about-why-dot" />
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-numbers-section">
        <div className="container">
          <motion.div
            className="about-heading-center"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="about-section-subtitle">Our Approach</p>
            <h2 className="about-section-title font-semibold">
              Built around visibility, trust, and digital growth
            </h2>
          </motion.div>

          <div className="about-numbers-grid">
            {[
              {
                number: "01",
                label: "Understand your goals and audience",
              },
              {
                number: "02",
                label: "Build a clear digital strategy",
              },
              {
                number: "03",
                label: "Create polished brand experiences",
              },
              {
                number: "04",
                label: "Refine for stronger long-term growth",
              },
            ].map((item, i) => (
              <motion.div
                key={item.number}
                className="about-number-card"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="about-number">{item.number}</span>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <motion.div
          className="container about-cta-box"
          initial={{ opacity: 0, scale: 0.98, y: 18 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="about-cta-tag">Let’s grow your brand</p>
            <h2 className="about-cta-title font-semibold">
              Ready to build a stronger healthcare presence?
            </h2>
            <p className="about-cta-text">
              Let’s create a digital strategy that helps your brand look
              credible, feel modern, and reach the right audience with
              confidence.
            </p>
          </div>

          <Link href="/contact" className="inline-flex md:min-w-[180px] items-center justify-center bg-[#ef2f6b] border border-[#ef2f6b] text-white rounded-full px-7 py-3 font-bold hover:bg-pink-600 transition-colors">
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
