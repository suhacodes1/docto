"use client";

import React from "react";

const CaseStudyDigitalHealthPlatform = () => {
  const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/4.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/5.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/6.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/7.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/8.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/9.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/10.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/11.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/12.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/13.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/14.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/15.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/16.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/17.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/18.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/digital-health-platform/19.webp",
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

export default CaseStudyDigitalHealthPlatform;
