"use client";

import ScrollToTopButton from "./ScrollToTopButton";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
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
    )
      .from(
        titleRef.current,
        {
          opacity: 0,
          y: isMobile ? 20 : 40,
          duration: 0.8,
        },
        0.1,
      )
      .from(
        textRef.current,
        {
          opacity: 0,
          y: isMobile ? 15 : 20,
          duration: 0.6,
        },
        0.2,
      );

    if (buttonsRef.current) {
      tl.from(
        buttonsRef.current.children,
        {
          opacity: 0,
          y: isMobile ? 15 : 20,
          duration: 0.6,
          stagger: 0.1,
        },
        0.3,
      );
    }

    tl.from(
      playButtonRef.current,
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
      },
      0.2,
    );

    // Logos animation
    if (logosRef.current) {
      tl.from(
        logosRef.current.children,
        {
          opacity: 0,
          x: isMobile ? 10 : 20,
          duration: 0.6,
          stagger: 0.05,
        },
        0.5,
      );
    }

    // Play button hover animation
    if (playButtonRef.current) {
      playButtonRef.current.addEventListener("mouseenter", () => {
        gsap.to(playButtonRef.current, {
          scale: 1.1,
          duration: 0.3,
          ease: "back.out",
        });
      });

      playButtonRef.current.addEventListener("mouseleave", () => {
        gsap.to(playButtonRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "back.out",
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="relative py-16 md:py-20"
      ref={sectionRef}
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1800&auto=format&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Black overlay with 70% opacity */}
      <div className="absolute inset-0 bg-black opacity-80" />

      <div
        className="container mx-auto px-4 max-w-7xl relative z-10"
        ref={ctaRef}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p
              className="text-base md:text-lg mb-2 text-pink-300 font-semibold"
              ref={subtitleRef}
            >
              Get In Touch
            </p>

            <h2
              className="text-white md:text-5xl text-3xl font-extrabold mb-6"
              ref={titleRef}
            >
              Best Medical &amp; Health
              <br />
              Care Near Your City
            </h2>

            <p
              className="text-base md:text-lg mb-8 text-pink-100"
              ref={textRef}
            >
              We&apos;ve 25 Years of experience in Medical Services.
            </p>

            <div className="flex flex-wrap gap-4" ref={buttonsRef}>
              <a href="/contact">
                <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors duration-300 flex items-center gap-2">
                  <span>Contact Us</span>
                  <span>|</span>
                  <span>+</span>
                </button>
              </a>

              <a href="/services" className="px-6 py-3 bg-white text-pink-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2">
                <span>Our Services</span>
                <span>|</span>
                <span>+</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-700 pt-8">
          <p className="text-pink-300 text-sm uppercase tracking-wider mb-6 text-center font-extrabold">
            Featured Clients
          </p>
          <div
            className="flex flex-wrap justify-center gap-8 items-center"
            ref={logosRef}
          >
            <div className="text-white font-bold text-lg">logotype</div>
            <div className="text-white font-bold text-lg">SAFEGUARD.</div>
            <div className="text-white font-bold text-lg">TERRENO</div>
            <div className="text-white font-bold text-lg">SAFEGUARD.</div>
            <div className="text-white font-bold text-lg">duragas</div>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </section>
  );
}
