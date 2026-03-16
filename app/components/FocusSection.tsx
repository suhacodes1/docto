"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FocusSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

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

    if (copyRef.current) {
      tl.from(
        copyRef.current.children,
        {
          opacity: 0,
          y: isMobile ? 15 : 20,
          duration: 0.6,
          stagger: 0.1,
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
        className="focus-bg-text"
        ref={bgTextRef}
      >
        Patients
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold"
            ref={subtitleRef}
          >
            Handle the Technology
          </p>

          <h2
            className="text-black md:text-5xl text-3xl font-extrabold mb-6"
            ref={titleRef}
          >
            Focus On Your Patients. We&apos;ll Handle The
            <br />
            Technology
          </h2>

          <div className="w-24 h-1.5 bg-[#97bb67] mb-8 md:mb-12 mx-auto" />
        </div>

        <div
          className="text-center space-y-2 text-base md:text-lg text-gray-700 "
          ref={copyRef}
        >
          <p>Running a healthcare business requires focus and precision.</p>
          <p>
            We build the technology and growth systems that support your clinic
            so you can focus on delivering quality care
          </p>
        </div>
      </div>
    </section>
  );
}
