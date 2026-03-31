"use client";

import React from "react";

const CaseStudyHealthMonitoring2 = () => {
  const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/oneraq/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/oneraq/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/oneraq/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/oneraq/4.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/oneraq/5.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/oneraq/6.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/oneraq/7.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/oneraq/8.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/oneraq/9.webp",
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

export default CaseStudyHealthMonitoring2;