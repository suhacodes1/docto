"use client";

import React from "react";

const CaseStudySendricaDental = () => {
  const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/sendrica-dental/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/sendrica-dental/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/sendrica-dental/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/sendrica-dental/4.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/sendrica-dental/5.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/sendrica-dental/6.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/sendrica-dental/7.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/sendrica-dental/8.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/sendrica-dental/9.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/sendrica-dental/10.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/sendrica-dental/11.webp",
  ];

  return (
    <div className="w-full bg-black">
      {images.map((img, index) => (
        <div key={index} className="w-full">
          <img
            src={img}
            alt={`case-study-${index + 1}`}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-auto object-cover select-none"
          />
        </div>
      ))}
    </div>
  );
};

export default CaseStudySendricaDental;