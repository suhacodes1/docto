"use client";

import React from "react";

const CaseStudyHealthMonitoring = () => {
 const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/4.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/5.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/6.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/7.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/8.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/9.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/10.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/11.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/12.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/13.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/14.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/15.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/16.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/17.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/18.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/docsy/19.webp",
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

export default CaseStudyHealthMonitoring;