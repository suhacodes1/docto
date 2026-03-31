"use client";

import React from "react";

const CaseStudyHealthcareSaas = () => {
   const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas/4.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas/5.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas/6.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas/7.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas/8.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas/9.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas/10.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas/11.webp",
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

export default CaseStudyHealthcareSaas;