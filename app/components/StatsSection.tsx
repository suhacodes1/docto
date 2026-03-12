"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
type CountUpProps = {
  end: number;
  suffix?: string;
};

function CountUp({ end, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasAnimated, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: "1",
      value: 120,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      icon: "2",
      value: 40,
      suffix: "+",
      label: "Healthcare Clients",
    },
    {
      icon: "3",
      value: 6,
      suffix: "+",
      label: "Years Of Experience",
    },
    {
      icon: "4",
      value: 10,
      suffix: "+",
      label: "Countries Served",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-bg-text">Statistics</div>

      <div className="container stats-grid">
        <div className="stats-left">
          <h2 className="stats-title">Statistics Section</h2>
          <p className="stats-description">
            Replace healthcare stats with{" "}
            <strong>business credibility metrics.</strong>
          </p>

          <p className="stats-example">Example</p>

          <div className="stats-cards">
            {stats.map((item) => (
              <article className="stats-card" key={item.label}>
                <div className="stats-icon">{item.icon}</div>
                <div className="stats-value">
                  <CountUp end={item.value} suffix={item.suffix} />
                </div>
                <div className="stats-label">{item.label}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="stats-form-panel">
          <div className="stats-form-watermark">icon</div>

          <p className="stats-form-subtitle">Make an</p>
          <h3 className="stats-form-title">Appointment</h3>

          <div className="stats-form-fields">
            <div className="stats-form-field">
              <span>Choose A Service</span>
              <span>⌄</span>
            </div>

            <div className="stats-form-field">
              <span>Select Doctors</span>
              <span>⌄</span>
            </div>

            <div className="stats-form-field">
              <span>dd/mm/yyyy</span>
            </div>
          </div>

          <Link href="/contact" className="stats-submit-btn">
            <span>SUBMIT NOW</span>
            <span className="stats-submit-divider">|</span>
            <span>+</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
