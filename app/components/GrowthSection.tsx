"use client";

import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/14.webp";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Settings, Search, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const growthCards = {
  leftTop: {
    title: "More Online Patient Bookings",
    description:
      "We build optimized healthcare websites and booking systems that convert visitors into patient appointments.",
    icon: "🧠",
  },
  leftBottom: {
    title: "Better Internal Efficiency",
    description:
      "Integrated systems and streamlined workflows help clinics reduce admin overhead and improve day-to-day operations.",
    icon: "⚙️",
  },
  rightTop: {
    title: "Higher Google Visibility",
    description:
      "Our SEO and local search strategies help clinics appear when patients search for healthcare services nearby.",
    icon: "🦷",
  },
  rightBottom: {
    title: "Stronger Online Reputation",
    description:
      "We help healthcare providers build trust online through stronger branding, review strategies, and better digital experiences.",
    icon: "⭐",
  },
};

export default function GrowthSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftCardsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rightCardsRef = useRef<HTMLDivElement>(null);

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
        imageRef.current,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
        },
        0.2,
      );

    if (leftCardsRef.current) {
      tl.from(
        leftCardsRef.current.children,
        {
          opacity: 0,
          x: -30,
          duration: 0.6,
          stagger: 0.15,
        },
        0.3,
      );
    }

    if (rightCardsRef.current) {
      tl.from(
        rightCardsRef.current.children,
        {
          opacity: 0,
          x: 30,
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
    <section className="relative py-16 md:py-20 bg-gray-50" ref={sectionRef}>
      <div
        className="absolute top-10 md:top-20 right-4 md:right-8 text-4xl md:text-6xl font-extrabold text-gray-200 opacity-20 pointer-events-none"
        ref={bgTextRef}
      >
        Clinics
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold"
            ref={subtitleRef}
          >
            Clinics Grow with Technology
          </p>

          <h2
            className="text-black md:text-5xl text-3xl font-extrabold mb-6"
            ref={titleRef}
          >
            Helping Clinics Grow With Technology
          </h2>

          <div className="w-24 h-1.5 bg-[#97bb67] mb-8 md:mb-12 mx-auto" />
        </div>

        <div className="relative md:flex md:items-center md:justify-between md:space-x-6 mt-6">
          {/* left column - vertical stack */}
          <div
            className="flex flex-col space-y-6 md:w-1/4 z-10"
            ref={leftCardsRef}
          >
            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Brain className="w-8 h-8 mb-3 text-[#ef2f6b]" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                More Online Patient
                <br />
                Bookings
              </h3>
              <p className="text-base text-gray-600">
                {growthCards.leftTop.description}
              </p>
              <a
                href="/contact"
                className="text-pink-600 hover:text-pink-700 mt-4 inline-block font-medium"
              >
                Read More »
              </a>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 md:ml-8 md:mt-8">
              <Settings className="w-8 h-8 mb-3 text-[#ef2f6b]" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Better Internal
                <br />
                Efficiency
              </h3>
              <p className="text-base text-gray-600">
                {growthCards.leftBottom.description}
              </p>
              <a
                href="/contact"
                className="text-pink-600 hover:text-pink-700 mt-4 inline-block font-medium"
              >
                Read More »
              </a>
            </article>
          </div>

          {/* center image */}
          <div
            className="md:absolute md:inset-0 md:flex md:justify-center md:items-center relative z-0 my-8 md:my-0"
            ref={imageRef}
          >
            <Image
              src={Img1}
              alt="Healthcare professional placeholder"
              className="w-1/2 md:w-auto mx-auto"
            />
          </div>

          {/* right column - vertical stack */}
          <div
            className="flex flex-col space-y-6 md:w-1/4 z-10"
            ref={rightCardsRef}
          >
            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Search className="w-8 h-8 mb-3 text-[#ef2f6b]" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Higher Google
                <br />
                Visibility
              </h3>
              <p className="text-base text-gray-600">
                {growthCards.rightTop.description}
              </p>
              <a
                href="/contact"
                className="text-pink-600 hover:text-pink-700 mt-4 inline-block font-medium"
              >
                Read More »
              </a>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 md:mr-8 md:mt-8">
              <Star className="w-8 h-8 mb-3 text-[#ef2f6b]" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                Stronger Online
                <br />
                Reputation
              </h3>
              <p className="text-base text-gray-600">
                {growthCards.rightBottom.description}
              </p>
              <a
                href="/contact"
                className="text-pink-600 hover:text-pink-700 mt-4 inline-block font-medium"
              >
                Read More »
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
