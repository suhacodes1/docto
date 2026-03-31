"use client";

import { PhoneCall, RocketIcon } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="relative py-16 md:py-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1800&auto=format&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Black overlay with 70% opacity */}
      <div className="absolute inset-0 bg-black opacity-80" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-1 gap-12 items-center mb-12">
          <div>
            <p
              className="text-base md:text-lg mb-2 text-pink-300 font-semibold"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Get In Touch
            </p>

            <h2
              className="text-white md:text-6xl text-3xl font-extrabold mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Ready to Grow Your
              <br className="md:block hidden" />
               Patient Bookings?
            </h2>

            <p
              className="text-base md:text-lg mb-8 text-pink-100"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Get a clear roadmap to attract and convert more patients — without wasting time or budget.
            </p>

            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a href="https://calendly.com/digitalparadigm/product-strategy-call" target="_blank">
                <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors duration-300 flex items-center gap-2">
                  <span>Get Free Growth Audit</span>
                  <span>|</span>
                  <span><RocketIcon size={14} /></span>
                </button>
              </a>

              <a
                href="https://calendly.com/digitalparadigm/product-strategy-call"
                target="_blank"
                className="px-6 py-3 bg-white text-pink-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
              >
                <span>Book a Strategy Call</span>
                <span>|</span>
                <span><PhoneCall size={14} /></span>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="border-t border-pink-700 pt-8">
          <p className="text-pink-300 text-sm uppercase tracking-wider mb-6 text-center font-extrabold" data-aos="fade-up" data-aos-delay="500">
            Featured Clients
          </p>
          <div
            className="flex flex-wrap justify-center gap-8 items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="text-white font-bold text-lg">logotype</div>
            <div className="text-white font-bold text-lg">SAFEGUARD.</div>
            <div className="text-white font-bold text-lg">TERRENO</div>
            <div className="text-white font-bold text-lg">SAFEGUARD.</div>
            <div className="text-white font-bold text-lg">duragas</div>
          </div>
        </div> */}
      </div>

      <ScrollToTopButton />
    </section>
  );
}
