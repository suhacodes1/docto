"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-bg-text">Contact</div>
        <div className="contact-orb contact-orb-one" />
        <div className="contact-orb contact-orb-two" />

        <div className="container contact-hero-grid">
          <motion.div
            initial="hidden"
            animate="visible"
            className="contact-left"
          >
            <motion.p custom={0} variants={fadeUp} className="contact-eyebrow">
              Let’s talk
            </motion.p>

            <motion.h1 custom={0.1} variants={fadeUp} className="contact-title">
              Let’s discuss your next digital project
            </motion.h1>

            <motion.p custom={0.2} variants={fadeUp} className="contact-intro">
              Tell us what you’re building, what challenges you’re facing, and
              what kind of support you need. We’ll help shape the right
              solution.
            </motion.p>

            <motion.div
              custom={0.3}
              variants={fadeUp}
              className="contact-info-grid"
            >
              <div className="contact-info-card">
                <h3>Email</h3>
                <a href="mailto:info@digitalparadigm.com.au" className="group">
                  <span className="group-hover:text-[#ef2f6b] transition-colors text-sm">
                    info@digitalparadigm.com.au
                  </span>
                </a>
              </div>

              <div className="contact-info-card">
                <h3>Phone</h3>
                <a href="tel:61251194369" className="group">
                  <span className="group-hover:text-[#ef2f6b] transition-colors text-sm">
                    +612-5119-4369
                  </span>
                </a>
              </div>

              <div className="contact-info-card">
                <h3>Services</h3>
                <p>Web, Software, Design & Marketing</p>
              </div>

              <div className="contact-info-card">
                <h3>Response Time</h3>
                <p>Usually within 1 business day</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="contact-form-wrap"
          >
            <form className="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" placeholder="Your full name" />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="Your email" />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="company">Company</label>
                  <input id="company" type="text" placeholder="Your company" />
                </div>

                <div className="contact-field">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Custom Web Development</option>
                    <option>MVP Development</option>
                    <option>SaaS Development</option>
                    <option>Enterprise Software Development</option>
                    <option>Web Portal Development</option>
                    <option>UI/UX Design</option>
                    <option>Responsive Web Design</option>
                    <option>Graphic Design</option>
                    <option>SEO</option>
                    <option>Social Media Marketing</option>
                    <option>Influencer Marketing</option>
                    <option>PPC</option>
                  </select>
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="budget">Budget Range</label>
                <input id="budget" type="text" placeholder="e.g. $5k - $15k" />
              </div>

              <div className="contact-field">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your project, goals, and any specific features you need..."
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}