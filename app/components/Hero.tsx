"use client";

import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/3.webp";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.innerWidth < 768;

    // Create animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Background text animation - subtle floating effect
    gsap.to(bgTextRef.current, {
      y: isMobile ? 20 : 40,
      opacity: 0.15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Staggered text animations
    tl.from(
      paragraphRef.current,
      {
        opacity: 0,
        y: isMobile ? 20 : 30,
        duration: 0.8,
      },
      0
    )
      .from(
        headingRef.current,
        {
          opacity: 0,
          y: isMobile ? 20 : 40,
          duration: 0.8,
        },
        0.2
      )
      .from(
        descriptionRef.current,
        {
          opacity: 0,
          y: isMobile ? 20 : 30,
          duration: 0.8,
        },
        0.4
      )
      .from(
        buttonsRef.current,
        {
          opacity: 0,
          y: isMobile ? 15 : 20,
          duration: 0.8,
        },
        0.6
      );



    // Subtle hover animation for button
    const button = document.querySelector(".hero-services-btn");
    if (button) {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "back.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "back.out",
        });
      });
    }

    // Cleanup for ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-[#edf3f8] md:pt-8 pt-12" ref={heroSectionRef}>
      <div className="hero-bg-text" ref={bgTextRef}>
        Medical
      </div>

      <div className="container flex md:flex-row flex-col items-center gap-8 relative z-[1]">
        <div className="md:w-1/2 w-full">
          <p className="text-base md:text-lg mb-4" ref={paragraphRef}>
            Custom software and websites that support modern clinics.
          </p>

          <h1
            className="text-black md:text-6xl text-3xl font-extrabold mb-6"
            ref={headingRef}
          >
            Smarter Digital Systems for Healthcare
          </h1>

          <p className="text-base md:text-lg mb-6" ref={descriptionRef}>
            Reliable technology built to scale with your practice.
          </p>

          <div className="hero-buttons" ref={buttonsRef}>
            <a href="/services" className="px-6 py-3 bg-[#ef2f6b] text-white font-semibold rounded-full border-2 border-[#ef2f6b] hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Our Services</span>
              <span className="hero-services-divider">|</span>
              <span>+</span>
            </a>
            <a href="/contact" className="px-6 py-3 bg-transparent text-black hover:text-white border-2 border-[#ef2f6b] font-semibold rounded-full hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Get in Touch</span>
              <span className="hero-services-divider">|</span>
              <span>+</span>
            </a>

            {/* <button className="play-button" aria-label="Play video">
              ▶
            </button> */}
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <Image
            src={Img1}
            alt="Healthcare professional"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
