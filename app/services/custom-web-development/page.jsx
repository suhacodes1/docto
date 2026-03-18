"use client";
 
import { useState } from "react";
 
 
const faqs = [
  { q: "What types of websites do you build?", a: "We build everything from marketing websites and landing pages to complex web apps, client portals, booking systems, and internal platforms — all custom-built around your workflows." },
  { q: "How long does a custom website take?", a: "Timelines vary by complexity. A marketing site typically takes 4–8 weeks. A complex platform or portal can take 10–16 weeks. We'll give you a clear timeline after discovery." },
  { q: "Do you build on WordPress or custom frameworks?", a: "We build on the best stack for your needs — Next.js, React, or headless CMS setups. We avoid limiting you to rigid page builders unless it suits the brief." },
  { q: "Will my site be SEO-friendly?", a: "Absolutely. SEO structure, performance optimisation, semantic HTML, and Core Web Vitals are built in from the start — not bolted on at the end." },
  { q: "Can you integrate with our existing tools?", a: "Yes. We regularly integrate with CRMs, booking systems, payment gateways, email platforms, ERPs, and custom APIs." },
  { q: "Do you provide ongoing support after launch?", a: "We offer ongoing support and maintenance packages so your platform stays fast, secure, and evolving with your business." },
];
 
export default function CustomWebDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);
 

 
  return (
    <main style={{ background: "#f5f5f5", fontFamily: "inherit" }}>
 
      {/* ── HERO ── */}
      <section style={{
        background: "#f5f5f5",
        padding: "100px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Dashed decorative circle */}
        <svg style={{ position: "absolute", top: 40, right: "8%", opacity: 0.5, pointerEvents: "none" }}
          width="160" height="160" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="70" fill="none" stroke="#243847" strokeWidth="1.5" strokeDasharray="6 7" />
        </svg>
 
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div data-aos="fade-right">
            <p style={{ fontFamily: "inherit", fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ef2f6b", marginBottom: 16 }}>
              Web &amp; Software Solutions
            </p>
            <h1 style={{
              fontFamily: "inherit",
              fontSize: "clamp(3rem, 6vw, 5.2rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#1a1a1a",
              marginBottom: 28,
              letterSpacing: "-1px",
            }}>
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "#777" }}>Your</span>
              <br />
              Custom Web
              <br />
              Development
            </h1>
 
            <div style={{ width: 48, height: 3, background: "#ef2f6b", marginBottom: 24 }} />

            <p style={{ fontFamily: "inherit", fontSize: 17, lineHeight: 1.85, color: "#444", maxWidth: 540, marginBottom: 36 }}>
              We build custom websites and web platforms designed around your workflows, users, and growth goals — not generic templates. Every solution is built to scale with your business.
            </p>
 
            <a href="/contact" style={{
              display: "inline-block",
              background: "#ef2f6b",
              color: "#fff",
              fontFamily: "inherit",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "16px 36px",
              borderRadius: 999,
              textDecoration: "none",
            }}>
              Book a Consultation
            </a>
          </div>
 
          <div data-aos="fade-left" data-aos-delay="150" style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
              alt="Custom web development"
              style={{ width: "100%", borderRadius: 4, display: "block", objectFit: "cover", height: 460 }}
            />
          </div>
        </div>
      </section>
 
      {/* ── COMPETITORS SECTION (mirrored layout) ── */}
      <section style={{ background: "#f5f5f5", padding: "90px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
 
          {/* Left: visual */}
          <div data-aos="fade-right" style={{ position: "relative" }}>
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-60%, -50%)",
              width: 320, height: 320,
              background: "#ef2f6b",
              borderRadius: "50%",
              zIndex: 0,
              opacity: 0.08,
            }} />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
              alt="Competitor landscape"
              style={{ position: "relative", zIndex: 1, width: "85%", borderRadius: 4, display: "block" }}
            />
          </div>
 
          {/* Right: text */}
          <div data-aos="fade-left" data-aos-delay="100">
            <h2 style={{
              fontFamily: "inherit",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: 16,
            }}>
              Your competitors have great websites. Do you?
            </h2>
            <div style={{ width: 48, height: 3, background: "#ef2f6b", marginBottom: 24 }} />
            <p style={{ fontFamily: "inherit", fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 20 }}>
              The difference between a business that grows online and one that doesn't often comes down to the quality of their digital presence. A generic template won't cut it when your competitors are investing in custom platforms built for conversion.
            </p>
            <p style={{ fontFamily: "inherit", fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 20 }}>
              We build websites that are fast, scalable, and designed with your specific users and workflows in mind — giving you a platform that works as hard as you do.
            </p>
          </div>
        </div>
      </section>
 
      {/* ── FEATURES STRIP (3 cards on coloured bg) ── */}
      <section style={{ background: "#243847", padding: "80px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {[
            { icon: "⚡", title: "Performance-First Builds", text: "Every project is optimised for Core Web Vitals, fast load times, and smooth interactions from day one." },
            { icon: "📐", title: "Strategy-Led Design", text: "We start with your business goals, user journeys, and conversion targets — then design around them." },
            { icon: "🔗", title: "Deep Integrations", text: "CRMs, booking systems, payment gateways, APIs — we connect your web platform to your entire business stack." },
          ].map((item, i) => (
            <div key={item.title} data-aos="fade-up" data-aos-delay={i * 100} style={{
              background: "rgba(255,255,255,0.06)",
              borderRadius: 4,
              padding: "36px 32px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
              <div style={{ fontSize: 40, marginBottom: 18 }}>{item.icon}</div>
              <h3 style={{ fontFamily: "inherit", fontSize: "1.25rem", color: "#fff", marginBottom: 12, fontWeight: 700 }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "inherit", fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.7)" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
 
      {/* ── CONVERSIONS SECTION ── */}
      <section style={{ background: "#f5f5f5", padding: "90px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div data-aos="fade-right">
            <h2 style={{
              fontFamily: "inherit",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: 16,
            }}>
              More leads with a website built for conversion
            </h2>
            <div style={{ width: 48, height: 3, background: "#ef2f6b", marginBottom: 24 }} />
            <p style={{ fontFamily: "inherit", fontSize: 16, lineHeight: 1.85, color: "#555", marginBottom: 20 }}>
              A beautiful website that doesn't convert is just an expensive business card. We build with conversion architecture in mind — structuring every page, CTA, and user journey to turn visitors into enquiries.
            </p>
            <p style={{ fontFamily: "inherit", fontSize: 16, lineHeight: 1.85, color: "#555" }}>
              From landing pages to full platforms, we focus on what actually matters: measurable results for your business.
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="100" style={{ position: "relative" }}>
            <div style={{
              position: "absolute", bottom: -20, right: -20,
              width: 200, height: 200,
              background: "#99c36b",
              borderRadius: "50%",
              opacity: 0.12,
            }} />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              alt="Conversion analytics"
              style={{ position: "relative", zIndex: 1, width: "100%", borderRadius: 4, display: "block", objectFit: "cover", height: 380 }}
            />
          </div>
        </div>
      </section>
 
      {/* ── FREE CONSULTATION CTA BAR ── */}
      <section style={{ background: "#ef2f6b", padding: "56px 0", textAlign: "center" }}>
        <div className="container">
          <p data-aos="fade-up" style={{ fontFamily: "inherit", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#fff", fontWeight: 700, marginBottom: 24 }}>
            Looking for a Free Web Development Consultation?
          </p>
          <a data-aos="fade-up" data-aos-delay="100"
            href="/contact"
            style={{
              display: "inline-block",
              background: "#fff",
              color: "#ef2f6b",
              fontFamily: "inherit",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "16px 44px",
              borderRadius: 999,
              textDecoration: "none",
            }}>
            Book Now
          </a>
        </div>
      </section>
 
      {/* ── WHAT WE BUILD (features list, image right) ── */}
      <section style={{ background: "#f5f5f5", padding: "90px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
          <div data-aos="fade-right">
            <h2 style={{
              fontFamily: "inherit",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: 16,
            }}>
              We build digital platforms for every use case
            </h2>
            <div style={{ width: 48, height: 3, background: "#99c36b", marginBottom: 28 }} />
            {[
              "Custom marketing websites & landing pages",
              "Web applications & SaaS platforms",
              "Client portals & internal dashboards",
              "Booking & appointment systems",
              "eCommerce & payment integrations",
              "API integrations with third-party tools",
            ].map((item, i) => (
              <div key={item} data-aos="fade-right" data-aos-delay={i * 60} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "14px 0",
                borderBottom: "1px solid #e5e5e5",
                fontFamily: "inherit", fontSize: 16, color: "#333",
              }}>
                <span style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: "#99c36b", flexShrink: 0,
                }} />
                {item}
              </div>
            ))}
          </div>
 
          <div data-aos="fade-left" data-aos-delay="150" style={{ position: "relative" }}>
            {/* Dashed decorative arc */}
            <svg style={{ position: "absolute", top: -30, right: -20, opacity: 0.4, pointerEvents: "none" }}
              width="120" height="120" viewBox="0 0 120 120">
              <path d="M 10 110 Q 110 110 110 10" fill="none" stroke="#243847" strokeWidth="1.5" strokeDasharray="5 6" />
            </svg>
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop"
              alt="Digital platform development"
              style={{ width: "100%", borderRadius: 4, display: "block", objectFit: "cover", height: 480 }}
            />
          </div>
        </div>
      </section>
 
      {/* ── PROCESS ── */}
      <section id="process" style={{ background: "#eef3f8", padding: "90px 0" }}>
        <div className="container">
          <div data-aos="fade-up" style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ef2f6b", marginBottom: 12 }}>
              Our Process
            </p>
            <h2 style={{ fontFamily: "inherit", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1a1a" }}>
              How we build your platform
            </h2>
            <div style={{ width: 48, height: 3, background: "#ef2f6b", margin: "16px auto 0" }} />
          </div>
 
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            {[
              { step: "01", title: "Discovery", text: "We analyse your goals, workflows, and users to define the structure and functionality of your platform." },
              { step: "02", title: "Design", text: "Wireframes and high-fidelity designs focused on usability, clarity, brand, and conversion performance." },
              { step: "03", title: "Development", text: "Clean, scalable code built with modern frameworks — with performance and maintainability baked in." },
              { step: "04", title: "Launch", text: "After rigorous testing and optimisation, we launch your platform ready to grow with your business." },
            ].map((item, i) => (
              <div key={item.step} data-aos="fade-up" data-aos-delay={i * 100} style={{
                background: "#fff",
                borderRadius: 4,
                padding: "32px 26px",
                border: "1px solid #e8edf2",
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "#ef2f6b", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "inherit", fontSize: 15, fontWeight: 800,
                  marginBottom: 22,
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontFamily: "inherit", fontSize: "1.2rem", fontWeight: 700, color: "#1a1a1a", marginBottom: 10 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "inherit", fontSize: 15, lineHeight: 1.75, color: "#666" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── QUOTE / TESTIMONIAL BAR ── */}
      <section style={{ background: "#243847", padding: "80px 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p data-aos="fade-up" style={{
            fontFamily: "inherit",
            fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
            fontStyle: "italic",
            color: "#fff",
            lineHeight: 1.7,
            marginBottom: 32,
          }}>
            "Our team builds platforms with strategy, precision, and a focus on real business outcomes — not just pixel-perfect designs that don't convert."
          </p>
          <a data-aos="fade-up" data-aos-delay="100"
            href="/contact"
            style={{
              display: "inline-block",
              background: "#ef2f6b",
              color: "#fff",
              fontFamily: "inherit",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "16px 44px",
              borderRadius: 999,
              textDecoration: "none",
            }}>
            Book Your Free Consultation
          </a>
        </div>
      </section>
 
      {/* ── RELATED SERVICES ── */}
      <section style={{ background: "#f5f5f5", padding: "90px 0" }}>
        <div className="container">
          <div data-aos="fade-up" style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "inherit", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1a1a" }}>
              <span style={{ fontStyle: "italic", fontWeight: 600, color: "#aaa" }}>Our  </span>{" "}
              <span style={{ fontWeight: 700 }}> Related Services</span>
            </h2>
            <div style={{ width: 48, height: 3, background: "#ef2f6b", margin: "16px auto 0" }} />
          </div>
 
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {[
              { icon: "🎨", title: "UI/UX Design", text: "User-centred interface design that turns complex workflows into simple, intuitive digital experiences." },
              { icon: "📱", title: "Responsive Web Design", text: "Every platform we build is optimised for all screen sizes — desktop, tablet, and mobile." },
              { icon: "🏢", title: "Enterprise Solutions", text: "Large-scale platforms built for complex organisational needs, multiple users, and deep integrations." },
            ].map((item, i) => (
              <div key={item.title} data-aos="fade-up" data-aos-delay={i * 100} style={{
                background: "#fff",
                borderRadius: 4,
                padding: "36px 30px",
                border: "1px solid #e8edf2",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 38, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "inherit", fontSize: "1.05rem", fontWeight: 800, color: "#1a1a1a", marginBottom: 12 }}>
                  {item.title}
                </h3>
                <div style={{ width: 32, height: 3, background: "#ef2f6b", margin: "0 auto 16px" }} />
                <p style={{ fontFamily: "inherit", fontSize: 15, lineHeight: 1.75, color: "#666" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ── FAQ ── */}
      <section style={{ background: "#eef3f8", padding: "90px 0" }}>
        <div className="container">
          <div data-aos="fade-up" style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "inherit", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#1a1a1a" }}>
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "#aaa" }}>Frequently</span>{" "}
              <span>Asked Questions</span>
            </h2>
            <div style={{ width: 48, height: 3, background: "#ef2f6b", margin: "16px auto 0" }} />
          </div>
 
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }}>
            {faqs.map((faq, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={(i % 2) * 80} style={{
                borderTop: "1px solid #d0d9e2",
                padding: "20px 0",
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    width: "100%", background: "none", border: "none",
                    cursor: "pointer", textAlign: "left", padding: 0,
                  }}>
                  <span style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: "#ef2f6b", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, fontWeight: 700, flexShrink: 0,
                    fontFamily: "inherit",
                  }}>
                    {openFaq === i ? "−" : "›"}
                  </span>
                  <span style={{ fontFamily: "inherit", fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>
                    {faq.q}
                  </span>
                </button>
                {openFaq === i && (
                  <p style={{
                    fontFamily: "inherit", fontSize: 15, lineHeight: 1.75,
                    color: "#555", marginTop: 12, paddingLeft: 46,
                  }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
 
          <div data-aos="fade-up" style={{ textAlign: "center", marginTop: 56 }}>
            <a href="/contact" style={{
              display: "inline-block",
              background: "#1a1a1a",
              color: "#fff",
              fontFamily: "inherit",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "18px 52px",
              borderRadius: 999,
              textDecoration: "none",
            }}>
              Book Your <u>Free</u> Consultation
            </a>
          </div>
        </div>
      </section>
 
      {/* ── FINAL CTA ── */}
      <section style={{ background: "#ef2f6b", padding: "80px 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p data-aos="fade-up" style={{
            fontFamily: "inherit",
            fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
            fontStyle: "italic",
            color: "#fff",
            lineHeight: 1.7,
            marginBottom: 32,
          }}>
            Our team builds digital platforms with strategy, precision, and a focus on outcomes — giving you complete transparency throughout every stage of the project.
          </p>
          <a data-aos="fade-up" data-aos-delay="100"
            href="/contact"
            style={{
              display: "inline-block",
              background: "#fff",
              color: "#ef2f6b",
              fontFamily: "inherit",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "18px 52px",
              borderRadius: 999,
              textDecoration: "none",
            }}>
            Book Your Free Web Consultation
          </a>
        </div>
      </section>
 
    </main>
  );
}
 