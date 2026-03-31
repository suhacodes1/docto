"use client";

import React from "react";

const CaseStudyAiHealthChatbot = () => {
  const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/ai-powered-healthcare/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/ai-powered-healthcare/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/ai-powered-healthcare/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/ai-powered-healthcare/4.webp",
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

export default CaseStudyAiHealthChatbot;
