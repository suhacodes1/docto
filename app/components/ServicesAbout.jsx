"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img1 from "../../public/assets/img/services-page/1.png";
import Img2 from "../../public/assets/img/services-page/2.png";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ServicesAbout = () => {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(titleRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
        }, "-=0.3");

      // Cards animation
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gray-100 md:py-16 py-12 text-black relative"
    >
      {/* Glow background - optional for light theme */}
      <div
        className="absolute z-[1] right-32 bottom-0 w-[200px] h-[200px] rounded-full blur-[200px] pointer-events-none glow-pulse"
        style={{
          background: "linear-gradient(180deg, #ef2f6b 0%, #F37926 100%)",
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto z-[2]">
        {/* Section Title */}
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold"
            ref={subtitleRef}
          >
            About Us
          </p>

          <h2
            className="text-black md:text-5xl text-3xl font-extrabold mb-6 relative z-10"
            ref={titleRef}
          >
            We Make Things Look Good
          </h2>

          <div className="w-24 h-1.5 bg-[#97bb67] mb-8 md:mb-12 mx-auto" />
        </div>

        {/* === Main Content === */}
        <div className="global-container md:px-0 px-4">
          {/* === Cards === */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* === Card 1 === */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="bg-white border border-gray-200 rounded-2xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden shadow-lg"
            >
              <div className="pt-8 pb-8 pl-6 pr-2 md:w-1/2">
                <h3 className="mb-2 text-xl font-semibold text-black md:text-2xl">
                  About Our Agency
                </h3>
                <p className="mb-5 text-sm md:text-base leading-relaxed text-gray-700">
                  Choose between two subscription packages depending on your
                  company needs and decide if you'd like to pay yearly,
                  quarterly, or monthly.
                </p>
                <Link
                  href="/contact"
                  className="px-6 py-3 w-max bg-[#ef2f6b] text-white border-2 border-[#ef2f6b] font-semibold rounded-full hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Get in Touch</span>
                  <span className="hero-services-divider">|</span>
                  <span>+</span>
                </Link>
              </div>
              <div className="md:w-1/2 w-full">
                <Image
                  className="w-full h-full max-h-[220px] md:max-h-[350px] object-cover"
                  src={Img1}
                  alt=""
                />
              </div>
            </div>

            {/* === Card 2 === */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="bg-white border border-gray-200 rounded-2xl flex flex-col md:flex-row items-center md:items-stretch overflow-hidden shadow-lg"
            >
              <div className="pt-8 pb-8 pl-6 pr-2 md:w-1/2">
                <h3 className="mb-2 text-xl font-semibold text-black md:text-2xl">
                  Is Your Marketing Unique?
                </h3>
                <p className="mb-5 text-sm md:text-base leading-relaxed text-gray-700">
                  Customers today face a huge choice of products, services, and
                  brands.
                </p>
                <Link
                  href="/contact"
                  className="px-6 py-3 w-max bg-[#ef2f6b] text-white border-2 border-[#ef2f6b] font-semibold rounded-full hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Get in Touch</span>
                  <span className="hero-services-divider">|</span>
                  <span>+</span>
                </Link>
              </div>
              <div className="md:w-1/2 w-full">
                <Image
                  className="w-full h-full max-h-[220px] md:max-h-[350px] object-cover"
                  src={Img2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAbout;


