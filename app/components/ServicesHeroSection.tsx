"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ServicesHeroSection = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
        },
      });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: -30,
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 40,
          },
          "-=0.4",
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 30,
          },
          "-=0.5",
        )
        .from(
          btnRef.current,
          {
            opacity: 0,
            scale: 0.9,
          },
          "-=0.3",
        );

      // Floating icons animation
      gsap.from([icon1Ref.current, icon2Ref.current, icon3Ref.current], {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: "power2.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 md:pt-32 pb-20 bg-[#ebebeb] relative flex items-center justify-center overflow-hidden"
    >
      {/* Glow background */}
      <div
        className="absolute z-[1] right-32 bottom-0 w-[200px] h-[200px] rounded-full blur-[200px] pointer-events-none glow-pulse"
        style={{
          background: "linear-gradient(180deg, #ef2f6b 0%, #F37926 100%)",
        }}
      ></div>
      <div
        className="absolute z-[1] left-4 top-0 w-[200px] h-[200px] rounded-full blur-[200px] pointer-events-none glow-pulse"
        style={{
          background: "linear-gradient(180deg, #ef2f6b 0%, #F37926 100%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-[3]">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 bg-[#292929] border border-[#2D2D2D] text-black text-sm px-4 py-1 rounded-full mb-4"
          >
            <span className="text-white">We release now v 1.8</span>
            <ArrowRight className="text-white w-4 h-4" />
          </div>

          {/* Heading */}
          <h1
            ref={titleRef}
            className="mb-4 text-4xl font-bold leading-tight text-black md:text-5xl"
          >
            <span className="text-[#ef2f6b]">Digital Systems for Clinics,</span>{" "}
            Healthcare Providers & Medical Startups
          </h1>

          {/* Description */}
          <p
            ref={descRef}
            className="max-w-lg mx-auto mb-8 text-base text-black"
          >
            Creating modern and easy-to-use websites and applications through
            top-notch IT services. Helping you scale and succeed online.
          </p>

          {/* Buttons */}
          <div
            ref={btnRef}
            className="flex justify-center md:flex-row flex-col gap-4"
          >
            <Link
              href="/contact"
              className="px-6 py-3 md:justify-start justify-center md:mx-0 mx-4 bg-transparent text-black hover:text-white border-2 border-[#ef2f6b] font-semibold rounded-full hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <span className="hero-services-divider">|</span>
              <span>+</span>
            </Link>
            <a
              href="https://calendly.com/digitalparadigm/product-strategy-call"
              target="_blank"
              className="px-6 py-3 md:justify-start justify-center md:mx-0 mx-4 bg-[#ef2f6b] text-white border-2 border-[#ef2f6b] font-semibold rounded-full hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>Book a Free Consultation</span>
              <span className="hero-services-divider">|</span>
              <span>+</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div
        ref={icon1Ref}
        className="w-[90px] h-[90px] absolute z-[2] top-1/2 left-20 md:block hidden text-[#ef2f6b] opacity-50"
      >
        <Code size={90} />
      </div>
      <div
        ref={icon2Ref}
        className="w-[90px] h-[90px] absolute z-[2] top-1/4 right-20 md:block hidden text-[#ef2f6b] opacity-50"
      >
        <Palette size={90} />
      </div>
      <div
        ref={icon3Ref}
        className="w-[90px] h-[90px] absolute z-[2] bottom-1/4 right-40 md:block hidden text-[#ef2f6b] opacity-50"
      >
        <Zap size={90} />
      </div>

      {/* Line - Placeholder, as original had an image */}
      {/* <img
        className="absolute left-0 w-full bottom-4 smooth-up-down-anim"
        src={HeroLineImg}
        alt=""
      /> */}
    </section>
  );
};

export default ServicesHeroSection;
