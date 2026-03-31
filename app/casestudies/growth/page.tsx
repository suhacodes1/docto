"use client";

import React from "react";

const CaseStudyGrowth = () => {
  const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/growth/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/growth/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/growth/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/growth/4.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/growth/5.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/growth/6.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/growth/7.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/growth/8.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/growth/9.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/growth/10.webp",
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

export default CaseStudyGrowth;
