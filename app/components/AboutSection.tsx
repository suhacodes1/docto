"use client";

import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/8.webp";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

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

    tl.from(imageRef.current, {
      opacity: 0,
      x: isMobile ? -20 : -60,
      duration: 0.8,
    }, 0)
      .from(subtitleRef.current, {
        opacity: 0,
        y: isMobile ? 15 : 20,
        duration: 0.6,
      }, 0.1)
      .from(titleRef.current, {
        opacity: 0,
        y: isMobile ? 20 : 40,
        duration: 0.8,
      }, 0.2);

    if (copyRef.current) {
      tl.from(copyRef.current.children, {
        opacity: 0,
        y: isMobile ? 15 : 20,
        duration: 0.6,
        stagger: 0.1,
      }, 0.3);
    }

    tl.from(actionsRef.current, {
      opacity: 0,
      y: isMobile ? 15 : 20,
      duration: 0.6,
    }, 0.5);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative py-16 md:py-20" ref={sectionRef}>
      <div 
        className="about-dp-bg-text" 
        ref={bgTextRef}
      >
        About
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div ref={imageRef}>
            <Image
              src={Img1}
              alt="About Digital Paradigm"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div>
            <p className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold" ref={subtitleRef}>
              About Digital Paradigm
            </p>

            <h2 className="text-black md:text-5xl text-3xl font-extrabold mb-6" ref={titleRef}>
              Technology &amp; Growth
              <br />
              Partner For Healthcare
              <br />
              Businesses
            </h2>

            <div className="w-24 h-1.5 bg-[#97bb67] mb-6" />

            <div className="space-y-4 mb-8 text-base md:text-lg text-gray-700" ref={copyRef}>
              <p>
                Digital Paradigm helps clinics, healthcare providers, and medical
                startups build modern digital systems that support their growth.
              </p>

              <p>
                From professional healthcare websites to custom software and
                patient acquisition strategies, we develop solutions that help
                clinics operate more efficiently and attract more patients.
              </p>

              <p className="font-semibold text-gray-900">Our goal is simple:</p>

              <p className="font-semibold text-gray-900">
                Handle the technology so healthcare professionals can focus on
                what matters most — patient care.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6" ref={actionsRef}>
              <a href="/contact">
                <button className="px-6 py-3 bg-[#ef2f6b] text-white font-semibold rounded-full hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <span>See more</span>
                  <span className="text-white">|</span>
                  <span>+</span>
                </button>
              </a>

              <a href="tel:61251194369" className="group">
                <span className="group-hover:text-[#d92a5a] transition-colors font-bold text-lg">
                  +612-5119-4369
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
