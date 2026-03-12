"use client";

import { useState } from "react";
import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/15.webp";
import Img2 from "../../public/assets/img/homepage/16.webp";
import Img3 from "../../public/assets/img/homepage/17.webp";
import Img4 from "../../public/assets/img/homepage/18.webp";
import Img5 from "../../public/assets/img/homepage/19.webp";

const audienceItems = [
  {
    title: "Dental Clinics",
    image: Img1,
  },
  {
    title: "Physiotherapy Clinics",
    image: Img2,
  },
  {
    title: "Private Healthcare Providers",
    image: Img3,
  },
  {
    title: "GP Clinics",
    image: Img4,
  },
  {
    title: "HealthTech Startups",
    image: Img5,
  },
];

export default function WhoWeWorkWith() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = [
    audienceItems[startIndex % audienceItems.length],
    audienceItems[(startIndex + 1) % audienceItems.length],
    audienceItems[(startIndex + 2) % audienceItems.length],
  ];

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? audienceItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % audienceItems.length);
  };

  return (
    <section className="who-section">
      <div className="who-bg-text">Healthcare</div>

      <div className="container who-container">
        <p className="who-subtitle">Built for Healthcare Providers</p>
        <h2 className="who-title">Who We Work With</h2>
        <div className="who-line" />

        <div className="who-slider-controls">
          <button
            className="who-arrow"
            onClick={handlePrev}
            aria-label="Previous"
          >
            ←
          </button>
          <button className="who-arrow" onClick={handleNext} aria-label="Next">
            →
          </button>
        </div>

        <div className="who-grid">
          {visibleCards.map((item, index) => (
            <article className="who-card" key={`${item.title}-${index}`}>
              <div className="who-image-wrap">
                <Image src={item.image} alt={item.title} className="who-image" />
                {/* <button className="who-explore">
                  <span>
                    Explore
                    <br />
                    More
                  </span>
                </button> */}
              </div>

              <h3 className="who-card-title">{item.title}</h3>
            </article>
          ))}
        </div>

        <p className="who-bottom-text">
          Whether you are launching a new clinic or modernizing an existing one,
          we help build the systems needed to scale.
        </p>
      </div>
    </section>
  );
}
