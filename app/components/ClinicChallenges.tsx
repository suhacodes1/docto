"use client";

import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/2.webp";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ClinicChallenges() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const challenges = [
    {
      title: "Low appointment conversions",
      text: "Visitors browse your website but rarely book appointments.",
    },
    {
      title: "Poor Google visibility",
      text: "Patients searching for nearby clinics struggle to find yours.",
    },
    {
      title: "Disconnected systems",
      text: "Staff waste time managing manual or fragmented workflows.",
    },
    {
      title: "Weak online reputation",
      text: "Too few reviews means patients hesitate to trust your clinic.",
    },
  ];

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

    // Timeline for text animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        markers: false,
      },
      defaults: { ease: "power3.out" },
    });

    tl.from(titleRef.current, {
      opacity: 0,
      y: isMobile ? 20 : 40,
      duration: 0.8,
      immediateRender: false,
    }, 0)
      .from(descriptionRef.current, {
        opacity: 0,
        y: isMobile ? 20 : 30,
        duration: 0.8,
        immediateRender: false,
      }, 0.2);

    if (cardsRef.current) {
      tl.from(cardsRef.current.children, {
        opacity: 0,
        y: isMobile ? 15 : 20,
        duration: 0.6,
        stagger: 0.1,
        immediateRender: false,
      }, 0.4);
    }

    // Refresh after a short delay to ensure DOM is ready
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative py-16 md:py-20" ref={sectionRef}>
      <div className="clinic-challenges-bg-text" ref={bgTextRef}>
        Problem?
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:items-end">
          <div>
            <h2 
              className="text-black md:text-5xl text-3xl font-extrabold mb-6"
              ref={titleRef}
            >
              Running A Clinic Is
              <br />
              Hard Enough
            </h2>

            <div className="w-24 h-1.5 bg-[#97bb67] mb-6" />

            <p className="text-base md:text-lg mb-8 text-gray-700" ref={descriptionRef}>
              Healthcare providers today face growing digital challenges. If these
              problems sound familiar, you're not alone.
            </p>

            <div className="space-y-4" ref={cardsRef}>
              {challenges.map((item, index) => (
                <div key={index} className="flex gap-4 bg-slate-50 border border-transparent hover:border-[#ef2f6b] p-4 rounded-xl hover:shadow-lg shadow-md transition-all duration-300">
                  <Check className="text-green-600 mt-2" size={18} />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-base text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <Image
              src={Img1}
              alt="Doctor holding clipboard"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
