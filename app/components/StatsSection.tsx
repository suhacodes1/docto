"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";

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
      { threshold: 0.4 },
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

  return (
    <section
      className="relative bg-gray-50 py-16 md:py-20 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 relative" ref={leftRef}>
            <h3
              ref={bgTextRef}
              data-aos="zoom-out"
              data-aos-duration="1000"
              className="
pointer-events-none max-w-full overflow-hidden
tracking-[-4px] whitespace-nowrap text-slate-200 opacity-85 z-[1]
text-[clamp(60px,10vw,120px)] font-extrabold
absolute -top-[30px] left-0
[mask-image:linear-gradient(#000_40%,#0000_100%)]
[-webkit-mask-image:linear-gradient(#000_40%,#0000_100%)]
"
            >
             Contact
            </h3>
            <div data-aos="fade-up" data-aos-delay="100" className="relative z-[2]">
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

            <div className="grid grid-cols-1 gap-6 relative z-[2]">
              <a
                href="mailto:info@digitalparadigm.com.au"
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="group-hover:text-[#ef2f6b] transition-colors flex flex-col gap-2">
                  <strong>Email:</strong>{" "}
                  <span>info@digitalparadigm.com.au</span>
                </span>
              </a>

              <a
                href="tel:61251194369"
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="group-hover:text-[#ef2f6b] transition-colors flex flex-col gap-2">
                  <strong>Phone:</strong> <span>+612 5119 4369</span>
                </span>
              </a>

              {/* <div
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  Response Time
                </h3>
                <p className="text-gray-600 text-base">
                  Usually within 1 business day
                </p>
              </div> */}
            </div>
          </div>

          <div ref={formRef} data-aos="fade-up" data-aos-delay="300">
            <ContactForm
              title="Appointment"
              subtitle="Make an"
              showBookAuditButton={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
