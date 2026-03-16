"use client";

import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/4.webp";
import Img2 from "../../public/assets/img/homepage/5.webp";
import Img3 from "../../public/assets/img/homepage/6.webp";
import Img4 from "../../public/assets/img/homepage/7.webp";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Web Development",
    description:
      "Modern websites designed to convert visitors into patient bookings.",
    image: Img1,
    placeholder: false,
  },
  {
    title: "Custom Software",
    description:
      "Systems that streamline operations and improve clinic efficiency.",
    image: Img2,
    placeholder: false,
  },
  {
    title: "Design Experience",
    description: "User-focused interfaces that make digital healthcare simple.",
    image: Img3,
    placeholder: false,
  },
  {
    title: "Marketing",
    description:
      "SEO, Google Ads, and digital strategies that bring more patients to your clinic.",
    image: Img4,
    placeholder: false,
  },
];

export default function CoreSolutions() {
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
      <div className="core-solutions-bg-text" ref={bgTextRef}>
        Core Solutions
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold"
            ref={subtitleRef}
          >
            Our Core Solutions
          </p>

          <h2
            className="text-black md:text-5xl text-3xl font-extrabold mb-6"
            ref={titleRef}
          >
            Technology &amp; Growth Solutions For Healthcare
          </h2>

          <div className="w-24 h-1.5 bg-[#97bb67] mb-8 md:mb-12 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" ref={gridRef}>
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                {solution.placeholder ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full" />
                  </div>
                ) : (
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  {solution.title === "Design Experience" ? (
                    <>
                      Design
                      <br />
                      Experience
                    </>
                  ) : (
                    solution.title
                  )}
                </h3>

                <p className="text-base text-gray-600">
                  {solution.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
