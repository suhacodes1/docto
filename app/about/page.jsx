"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Img1 from "../../public/assets/img/aboutpage/1.webp";
import Img2 from "../../public/assets/img/aboutpage/2.webp";
import Img3 from "../../public/assets/img/aboutpage/3.webp";
import Img4 from "../../public/assets/img/aboutpage/4.webp";
import ImgWhyChooseUs from "../../public/assets/img/homepage/whychooseus.webp";
import ImgPhilosophy from "../../public/assets/img/aboutpage/philosopy-section.webp";
import { Check, Dot } from "lucide-react";
import WhoWeWorkWith from "../components/WhoWeWorkWith";

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
            <motion.p variants={fadeUp} custom={0} className="about-hero-label" style={{color: "#ef2f6b"}}>
              Modern Digital Growth for Healthcare
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="about-hero-title font-bold"
            >
              AI-Powered Healthcare Growth Systems
            </motion.h1>

            <motion.div
              variants={fadeUp}
              custom={0.2}
              className="about-hero-text"
            >
              <p className="text-black">We help healthcare providers:</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-1">
                  <Dot size={28} className="shrink-0 text-[#ef2f6b]" />
                  <span className="capitalize">attract high-intent patients</span>
                </li>
                <li className="flex items-center gap-1">
                  <Dot size={28} className="shrink-0 text-[#ef2f6b]" />
                  <span className="capitalize">convert more enquiries into bookings</span>
                </li>
                <li className="flex items-center gap-1">
                  <Dot size={28} className="shrink-0 text-[#ef2f6b]" />
                  <span className="capitalize">reduce no-shows and drop-offs</span>
                </li>
                <li className="flex items-center gap-1">
                  <Dot size={28} className="shrink-0 text-[#ef2f6b]" />
                  <span className="capitalize">build predictable revenue pipelines</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.3}
              className="about-hero-actions"
            >
              <a
                href="https://calendly.com/digitalparadigm/product-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#ef2f6b] text-white font-semibold rounded-full border-2 border-[#ef2f6b] hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Get a Free Growth Audit</span>
                <span className="hero-services-divider">|</span>
                <span>+</span>
              </a>
              <a
                href="https://calendly.com/digitalparadigm/product-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent text-black hover:text-white border-2 border-[#ef2f6b] font-semibold rounded-full hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Book a Strategy Call</span>
                <span className="hero-services-divider">|</span>
                <span>+</span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="about-hero-stats"
            >
              <div className="about-stat-card">
                <span className="about-stat-number">Step 1:</span>
                <span className="about-stat-label font-semibold">
                  Audit & Growth Strategy
                </span>
              </div>

              <div className="about-stat-card">
                <span className="about-stat-number">Step 2:</span>
                <span className="about-stat-label font-semibold">
                  Build Your Growth System
                </span>
              </div>

              <div className="about-stat-card">
                <span className="about-stat-number">Step 3:</span>
                <span className="about-stat-label font-semibold">
                  Optimize & Scale
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
              We believe healthcare businesses deserve digital systems that feel
              clear, professional, and human — because in a space built on
              trust, your patient experience should begin long before they walk
              through your doors.
            </p>

            <p>
              That’s why we partner with healthcare practices to build
              predictable, scalable patient growth systems.
            </p>

            <p>
              Unlike traditional marketing agencies or fragmented vendors, we
              focus on one outcome: consistent patient acquisition and
              sustainable revenue growth.
            </p>
            <p>
              Our work combines strategy, technology, and automation to install
              end-to-end growth systems inside your practice — covering
              visibility, conversion, and retention — while ensuring your brand
              continues to reflect the confidence, care, and professionalism
              patients expect.
            </p>
          </motion.div>
        </div>
      </section>

      <WhoWeWorkWith />

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

      <section className="relative py-16 md:py-24 bg-white" id="why-choose-us">
        <h3
          className="
pointer-events-none max-w-full overflow-hidden
tracking-[-4px] whitespace-nowrap text-slate-200 opacity-75 z-[1]
text-[clamp(60px,10vw,90px)] font-extrabold
absolute top-[70px] left-1/2 -translate-x-1/2
[mask-image:linear-gradient(#000_40%,#0000_100%)]
[-webkit-mask-image:linear-gradient(#000_40%,#0000_100%)]
"
        >
          What Makes Us Different
        </h3>
        <div className="container mx-auto px-4 relative z-[2]">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-[#ef2f6b] font-semibold text-base md:text-lg">
              Differentiation
            </p>
            <h2 className="text-black md:text-5xl text-3xl font-extrabold mt-3">
              What Makes Us Different
            </h2>
            <div className="mx-auto mt-4 w-20 h-1.5 bg-[#97bb67]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:items-center gap-8">
            <div className="flex flex-col gap-6 relative h-max">
              <div
                className="bg-gradient-to-br relative from-pink-50 to-pink-100 border border-pink-200 rounded-xl p-6 md:py-10 shadow-md hover:shadow-lg transition-shadow duration-300 flex-1"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Most healthcare businesses struggle with:
                </h3>
                <ul className="space-y-3 text-gray-700 text-base md:text-lg md:my-6 my-4">
                  <li className="flex items-start">
                    <span className="text-[#ef2f6b] font-bold text-xl">
                      <Dot size={28} />
                    </span>
                    <span>Inconsistent Patient Flow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ef2f6b] font-bold text-xl">
                      <Dot size={28} />
                    </span>
                    <span>Poor Lead Conversion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ef2f6b] font-bold text-xl">
                      <Dot size={28} />
                    </span>
                    <span>Lack of Visibility into Growth Performance</span>
                  </li>
                </ul>
                <p className=" text-black text-base md:text-lg mt-4">
                  We solve this by building integrated growth infrastructure,
                  not just running campaigns.{" "}
                </p>
              </div>
            </div>

            <div
              className="flex items-center justify-center relative"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <Image
                src={ImgWhyChooseUs}
                alt="Why choose us in healthcare marketing"
                className="object-contain w-full h-full max-h-[500px]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-philosophy-section py-16 md:py-24 bg-[#f8fbfd]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="about-section-subtitle">Our Philosophy</p>
              <h2 className="about-section-title font-semibold mb-4">
                Growth should not depend on luck, referrals, or inconsistent marketing.
              </h2>
              <p className="text-base leading-7 text-slate-700 mb-6">
                It should be:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check size={20} className="shrink-0 text-[#ef2f6b]" />
                  <span className="text-lg font-bold">Measurable</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="shrink-0 text-[#ef2f6b]" />
                  <span className="text-lg font-bold">Repeatable</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="shrink-0 text-[#ef2f6b]" />
                  <span className="text-lg font-bold">Systemised</span>
                </li>
              </ul>
              <p className="text-base md:text-lg font-semibold leading-7 text-slate-700 mt-6">
                That’s what we build. 
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={ImgPhilosophy}
                alt="Our Philosophy"
                className="object-contain w-full h-auto max-h-[500px]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </motion.div>
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
            <p className="about-section-text mt-4 max-w-3xl text-base leading-7 text-slate-700">
              We take full ownership of your growth by designing a tailored
              strategy, implementing the right systems, tracking performance in
              real time, and continuously optimizing every component to maximize
              ROI.
            </p>
          </motion.div>

          <div className="about-numbers-grid">
            {[
              {
                number: "Step 1",
                label: "Audit & Growth Strategy",
              },
              {
                number: "Step 2",
                label: "Build Your Growth System",
              },
              {
                number: "Step 3",
                label: "Optimize & Scale",
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
                <p className="font-bold">{item.label}</p>
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

          <Link
            href="/contact"
            className="inline-flex md:min-w-[180px] items-center justify-center bg-[#ef2f6b] border border-[#ef2f6b] text-white rounded-full px-7 py-3 font-bold hover:bg-pink-600 transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
