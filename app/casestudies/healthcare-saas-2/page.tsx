"use client";

import React from "react";

const CaseStudyHealthcareSaas2 = () => {
  const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas-2/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas-2/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas-2/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas-2/4.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas-2/5.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas-2/6.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas-2/7.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas-2/8.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas-2/9.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas-2/10.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas-2/11.webp",
    // "/assets/img/casestudyrevamp-pages/casestudy-pages/healthcare-saas-2/12.webp",
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

export default CaseStudyHealthcareSaas2;
