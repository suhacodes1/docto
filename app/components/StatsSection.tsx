"use client";

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
  const ref = useRef<HTMLSpanElement>(null);

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");
    setIsError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send enquiry");
      }

      setStatusMessage("Your enquiry has been sent successfully.");
      setIsError(false);

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    gsap.to(bgTextRef.current, {
      y: isMobile ? 20 : 40,
      opacity: 0.15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

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
      className="relative overflow-hidden bg-gray-50 py-16 md:py-20"
      ref={sectionRef}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 whitespace-nowrap text-6xl font-extrabold text-gray-200 opacity-10 md:top-20 md:text-9xl"
        ref={bgTextRef}
      >
        Statistics
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="space-y-8" ref={leftRef}>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-pink-600">
                Let&apos;s talk
              </p>
              <h2 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
                Let&apos;s discuss your next digital project
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Tell us what you&apos;re building, what challenges you&apos;re
                facing, and what kind of support you need. We&apos;ll help shape
                the right solution.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-white p-5 shadow-lg"
                >
                  <div className="mb-2 text-sm font-semibold text-pink-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-extrabold text-gray-900">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6">
              <a
                href="mailto:info@digitalparadigm.com.au"
                className="group rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <span className="flex flex-col gap-2 transition-colors group-hover:text-[#ef2f6b]">
                  <strong>Email:</strong>
                  <span>info@digitalparadigm.com.au</span>
                </span>
              </a>

              <a
                href="tel:61251194369"
                className="group rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <span className="flex flex-col gap-2 transition-colors group-hover:text-[#ef2f6b]">
                  <strong>Phone:</strong>
                  <span>+612 5119 4369</span>
                </span>
              </a>

              <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Response Time
                </h3>
                <p className="text-base text-gray-600">
                  Usually within 1 business day
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg bg-white p-6 shadow-xl md:p-8"
            ref={formRef}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-600 md:text-base">
              Make an
            </p>
            <h3 className="mb-8 text-2xl font-semibold text-gray-900 md:text-3xl">
              Appointment
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600"
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
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Budget Range
                </label>
                <input
                  id="budget"
                  type="text"
                  placeholder="e.g. $5k - $15k"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your project, goals, and any specific features you need..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
              </div>

              {statusMessage && (
                <p
                  className={`text-sm ${
                    isError ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              <div className="flex flex-col gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>

                <a
                  href="https://calendly.com/digitalparadigm/product-strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-900 transition-colors duration-300 hover:bg-gray-300"
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
