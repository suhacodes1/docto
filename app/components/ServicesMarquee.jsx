"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const logos = [
  "Google",
  "Figma",
  "Stripe",
  "HubSpot",
  "WordPress",
  "Shopify",
  "Google",
  "Figma",
  "Stripe",
  "HubSpot",
  "WordPress",
  "Shopify",
];

const ServicesMarquee = () => {
  return (
    <section className="bg-[#ef2f6b] py-3">
      <Splide
        options={{
          type: "loop",
          perPage: 10,
          gap: "2rem",
          arrows: false,
          pagination: false,
          drag: false,
          autoScroll: {
            speed: 0.8, // Adjust for smoothness
            pauseOnHover: true,
            pauseOnFocus: false,
          },
          easing: "linear",
          clones: 30, // ✅ preload more clones so it doesn't need to jump often
        }}
        extensions={{ AutoScroll }}
        className="w-full"
      >
        {logos.map((logo, index) => (
          <SplideSlide key={index}>
            <div>
              <span className="text-white font-bold text-lg">{logo}</span>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default ServicesMarquee;

