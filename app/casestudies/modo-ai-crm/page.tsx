"use client";

import React from "react";

const CaseStudyModoAiCrm = () => {
  const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/4.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/5.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/6.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/7.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/8.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/9.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/10.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/11.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/12.webp",
    // "/assets/img/casestudyrevamp-pages/casestudy-pages/modo-ai-crm/13.webp",
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

export default CaseStudyModoAiCrm;
