"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function RevealServiceCard({
  href,
  title,
  description,
  delay = 0,
  icon: Icon,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      href={href}
      className={`service-card service-reveal ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="service-card-icon-wrap">
        {Icon && <Icon size={32} className="text-pink-500" />}
      </div>

      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>

      <div className="service-card-link">
        <span>Read More</span>
        <span className="service-card-arrow">↗</span>
      </div>
    </Link>
  );
}

