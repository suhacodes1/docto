"use client";

import { useState } from "react";
import {
  Code,
  Rocket,
  Palette,
  ChartNoAxesCombined,
  Lightbulb,
  SearchSlash,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    label: "DISCOVER",
    icon: Lightbulb,
    title: "Discovery",
    description:
      "We start by understanding your vision, goals, and users. Through deep-dive discovery sessions we build a clear picture of what needs to be built and why — creating a roadmap that aligns with your business objectives.",
  },
  {
    number: "02",
    label: "DESIGN",
    icon: Palette,
    title: "Design",
    description:
      "Our designers translate the strategy into intuitive, high-fidelity interfaces. Every screen is crafted to guide users clearly, reduce friction, and reinforce your brand identity.",
  },
  {
    number: "03",
    label: "DEVELOP",
    icon: Code,
    title: "Develop",
    description:
      "We build with clean, scalable code using modern frameworks. Performance, security, and maintainability are built in from day one — not bolted on at the end.",
  },
  {
    number: "04",
    label: "TEST",
    icon: SearchSlash,
    title: "Test",
    description:
      "Rigorous QA across devices, browsers, and use cases. We test for edge cases, accessibility, and performance to ensure everything works perfectly before it goes live.",
  },
  {
    number: "05",
    label: "LAUNCH",
    icon: Rocket,
    title: "Launch",
    description:
      "A smooth, co-ordinated go-live process. We handle deployment, monitoring, and any immediate post-launch issues so your platform launches without a hitch.",
  },
  {
    number: "06",
    label: "GROW",
    icon: ChartNoAxesCombined,
    title: "Grow",
    description:
      "After launch we continue as your partner — tracking performance, iterating on feedback, and evolving the platform as your business scales.",
  },
];

export default function ProcessSectionServices() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: "#f5f7fa", padding: "90px 0 0" }}>
      <div style={{ textAlign: "center", padding: "0 20px 56px" }}>
        <h2
          style={{
            fontFamily: "inherit",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 800,
            color: "#1f3347",
            marginBottom: 16,
          }}
        >
          Our Process <span style={{ color: "#ef2f6b" }}>Development</span>
        </h2>

        <p
          style={{
            fontFamily: "inherit",
            fontSize: 17,
            color: "#687587",
            lineHeight: 1.8,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          We deliver successful products by doing three things: being accountable
          for our projects, making our methods transparent, and building strong
          relationships with our clients.
        </p>
      </div>

      <div
        className="process-desktop"
        style={{
          display: "flex",
          height: 480,
          overflow: "hidden",
        }}
      >
        {processSteps.map((step, i) => {
          const isActive = i === active;
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              onClick={() => setActive(i)}
              style={{
                position: "relative",
                flex: isActive ? "1 1 auto" : "0 0 72px",
                transition: "flex 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                overflow: "hidden",
                background: isActive
                  ? "linear-gradient(135deg, #1a0a14 0%, #ef2f6b 60%, #c0204f 100%)"
                  : "#1f3347",
                borderRight:
                  i < processSteps.length - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  left: isActive ? 40 : "50%",
                  transform: isActive ? "none" : "translateX(-50%)",
                  fontFamily: "inherit",
                  fontSize: 13,
                  fontWeight: 800,
                  color: isActive
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.5)",
                  letterSpacing: "0.05em",
                  transition: "all 0.35s ease",
                  zIndex: 2,
                }}
              >
                {step.number}
              </div>

              {!isActive && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 60,
                    left: "50%",
                    transform: "translateX(-50%) rotate(-90deg)",
                    transformOrigin: "center center",
                    whiteSpace: "nowrap",
                    fontFamily: "inherit",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    userSelect: "none",
                  }}
                >
                  {step.label}
                </div>
              )}

              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 52,
                    left: 40,
                    right: 40,
                    opacity: 1,
                    transform: "translateY(0)",
                    transition:
                      "opacity 0.3s ease 0.2s, transform 0.3s ease 0.2s",
                  }}
                >
                  <div style={{ marginBottom: 18, lineHeight: 1 }}>
                    <Icon size={44} color="white" strokeWidth={2} />
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: -160,
                      left: -14,
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      transform: "rotate(180deg)",
                      fontFamily: "inherit",
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: "0.2em",
                      color: "rgba(255,255,255,0.45)",
                      textTransform: "uppercase",
                    }}
                  >
                    {step.label}
                  </div>

                  <h3
                    style={{
                      fontFamily: "inherit",
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      fontWeight: 800,
                      color: "#fff",
                      marginBottom: 16,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {step.title.toUpperCase()}
                  </h3>

                  <p
                    style={{
                      fontFamily: "inherit",
                      fontSize: 16,
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.82)",
                      maxWidth: 560,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="process-mobile" style={{ padding: "0 20px 60px" }}>
        {processSteps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              onClick={() => setActive(active === i ? -1 : i)}
              style={{
                marginBottom: 12,
                borderRadius: 12,
                overflow: "hidden",
                cursor: "pointer",
                background:
                  active === i
                    ? "linear-gradient(135deg, #1a0a14 0%, #ef2f6b 100%)"
                    : "#1f3347",
                transition: "background 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "inherit",
                    fontSize: 13,
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.5)",
                    minWidth: 28,
                  }}
                >
                  {step.number}
                </span>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <Icon size={22} color="white" strokeWidth={2} />
                </div>

                <span
                  style={{
                    fontFamily: "inherit",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#fff",
                    flex: 1,
                  }}
                >
                  {step.title}
                </span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{
                    transition: "transform 0.25s",
                    transform: active === i ? "rotate(180deg)" : "rotate(0)",
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {active === i && (
                <div style={{ padding: "0 20px 22px 64px" }}>
                  <p
                    style={{
                      fontFamily: "inherit",
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.82)",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-desktop { display: none !important; }
          .process-mobile { display: block !important; }
        }

        @media (min-width: 769px) {
          .process-desktop { display: flex !important; }
          .process-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}

