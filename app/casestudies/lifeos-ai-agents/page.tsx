"use client";

import React from "react";

const CaseStudyLifeosAiAgents = () => {
  const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/4.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/5.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/6.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/7.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/8.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/9.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/10.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/11.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/12.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/13.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/14.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/15.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/lifeos-ai-agents/16.webp",
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

export default CaseStudyLifeosAiAgents;
