"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    title: "Discovery &\nStrategy",
    description:
      "We understand your clinic's goals, operations, and patient journey.",
  },
  {
    title: "Design &\nDevelopment",
    description:
      "We build modern digital platforms designed for healthcare businesses.",
  },
  {
    title: "Launch & Marketing",
    description:
      "We implement SEO, paid ads, and growth strategies to attract patients.",
  },
  {
    title: "Optimization &\nGrowth",
    description:
      "We continuously improve performance and scale your digital systems.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Background text animation
    gsap.to(bgTextRef.current, {
      y: isMobile ? 20 : 40,
      opacity: 0.15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      defaults: { ease: "power3.out" },
    });

    tl.from(
      subtitleRef.current,
      {
        opacity: 0,
        y: isMobile ? 15 : 20,
        duration: 0.6,
      },
      0,
    ).from(
      titleRef.current,
      {
        opacity: 0,
        y: isMobile ? 20 : 40,
        duration: 0.8,
      },
      0.1,
    );

    if (gridRef.current) {
      tl.from(
        gridRef.current.children,
        {
          opacity: 0,
          y: isMobile ? 20 : 30,
          duration: 0.6,
          stagger: 0.15,
        },
        0.3,
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative py-16 md:py-20" ref={sectionRef}>
      <div
        className="process-bg-text"
        ref={bgTextRef}
      >
        Process
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold"
            ref={subtitleRef}
          >
            Our Process
          </p>

          <h2
            className="text-black md:text-5xl text-3xl font-extrabold mb-6"
            ref={titleRef}
          >
            A Simple Process Designed For Healthcare
            <br />
            Businesses
          </h2>

          <div className="w-24 h-1.5 bg-[#97bb67] mb-8 md:mb-12 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" ref={gridRef}>
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 leading-snug text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                {step.title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < step.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h3>

              <p className="text-base text-gray-600 mb-6">{step.description}</p>

              <div className="absolute bottom-6 right-6 text-2xl text-gray-300 group-hover:text-pink-600 transition-colors duration-300">
                »
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
