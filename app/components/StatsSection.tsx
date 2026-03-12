"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
    <section className="stats-section bg-gray-50 py-8 relative">
      <div className="stats-bg-text absolute inset-0 opacity-10 text-9xl flex items-center justify-center">
        Statistics
      </div>

      <div className="container mx-auto px-4 stats-grid grid md:grid-cols-2 gap-12">
        <div className="stats-left space-y-6">
          <p className="contact-eyebrow text-sm uppercase text-pink-500">
            Let’s talk
          </p>
          <h2 className="text-white md:text-7xl text-5xl font-bold">
            Let’s discuss your next digital project
          </h2>
          <p className="text-base md:text-lg text-white">
            Tell us what you’re building, what challenges you’re facing, and
            what kind of support you need. We’ll help shape the right solution.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-4 bg-slate-200 rounded-md shadow">
              <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
              <p className="text-black text-base">hello@digitalparadigm.com.au</p>
            </div>

            <div className="p-4 bg-slate-200 rounded-md shadow">
              <h3 className="font-semibold text-gray-900 text-lg">Phone</h3>
              <p className="text-black text-base">+61 400 000 000</p>
            </div>

            <div className="p-4 bg-slate-200 rounded-md shadow">
              <h3 className="font-semibold text-gray-900 text-lg">Response Time</h3>
              <p className="text-black text-base">Usually within 1 business day</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-200 shadow-lg rounded-lg p-6 md:p-8 relative">
          <p className="text-sm text-black md:text-base uppercase">Make an</p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Appointment
          </h3>

          <form className="">
            <div className="contact-form-row flex flex-col md:flex-row gap-4">
              <div className="contact-field flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div className="contact-field flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            <div className="contact-form-row flex flex-col md:flex-row gap-4">
              <div className="contact-field flex-1">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-white"
                >
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div className="contact-field flex-1">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-white"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  defaultValue=""
                  className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
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

            <div className="contact-field">
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-white"
              >
                Budget Range
              </label>
              <input
                id="budget"
                type="text"
                placeholder="e.g. $5k - $15k"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div className="contact-field">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Project Details
              </label>
              <textarea
                style={{ resize: "none" }}
                id="message"
                rows={6}
                placeholder="Tell us about your project, goals, and any specific features you need..."
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mt-6 flex items-center flex-col gap-4 justify-center">
              <button
                type="submit"
                className="contact-submit-btn w-full inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
              >
                Send Enquiry
              </button>
              <a
                href="https://calendly.com/digitalparadigm/product-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-submit-btn w-full inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
              >
                Book a Free Consultation
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
