"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CountUpProps = {
  end: number;
  suffix?: string;
};

function CountUp({ end, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasAnimated, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: "1",
      value: 120,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      icon: "2",
      value: 40,
      suffix: "+",
      label: "Healthcare Clients",
    },
    {
      icon: "3",
      value: 6,
      suffix: "+",
      label: "Years Of Experience",
    },
    {
      icon: "4",
      value: 10,
      suffix: "+",
      label: "Countries Served",
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

    // Timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      defaults: { ease: "power3.out" },
    });

    if (leftRef.current) {
      tl.from(
        leftRef.current.children,
        {
          opacity: 0,
          y: isMobile ? 20 : 30,
          duration: 0.6,
          stagger: 0.1,
        },
        0
      );
    }

    tl.from(
      formRef.current,
      {
        opacity: 0,
        y: isMobile ? 20 : 30,
        duration: 0.8,
      },
      0.2
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="relative bg-gray-50 py-16 md:py-20 overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 text-6xl md:text-9xl font-extrabold text-gray-200 opacity-10 whitespace-nowrap pointer-events-none"
        ref={bgTextRef}
      >
        Statistics
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8" ref={leftRef}>
            <div>
              <p className="text-sm uppercase text-pink-600 font-semibold tracking-wider mb-2">
                Let's talk
              </p>
              <h2 className="text-gray-900 md:text-5xl text-3xl font-extrabold mb-6">
                Let's discuss your next digital project
              </h2>
              <p className="text-base md:text-lg text-gray-700">
                Tell us what you're building, what challenges you're facing, and
                what kind of support you need. We'll help shape the right
                solution.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <a
                href="mailto:info@digitalparadigm.com.au"
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <span className="group-hover:text-[#ef2f6b] transition-colors flex flex-col gap-2">
                  <strong>Email:</strong>{" "}
                  <span>info@digitalparadigm.com.au</span>
                </span>
              </a>

              <a
                href="tel:61251194369"
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <span className="group-hover:text-[#ef2f6b] transition-colors flex flex-col gap-2">
                  <strong>Phone:</strong> <span>+612 5119 4369</span>
                </span>
              </a>

              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Response Time
                </h3>
                <p className="text-gray-600 text-base">
                  Usually within 1 business day
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-white shadow-xl rounded-lg p-6 md:p-8"
            ref={formRef}
          >
            <p className="text-sm text-gray-600 md:text-base uppercase font-semibold tracking-wider mb-2">
              Make an
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
              Appointment
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your company"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    defaultValue=""
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Custom Web Development</option>
                    <option>MVP Development</option>
                    <option>SaaS Development</option>
                    <option>Enterprise Software Development</option>
                    <option>Web Portal Development</option>
                    <option>UI/UX Design</option>
                    <option>Responsive Web Design</option>
                    <option>Graphic Design</option>
                    <option>SEO</option>
                    <option>Social Media Marketing</option>
                    <option>Influencer Marketing</option>
                    <option>PPC</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Budget Range
                </label>
                <input
                  id="budget"
                  type="text"
                  placeholder="e.g. $5k - $15k"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your project, goals, and any specific features you need..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent resize-none"
                />
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Enquiry
                </button>
                <a
                  href="https://calendly.com/digitalparadigm/product-strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Book a Free Audit
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
