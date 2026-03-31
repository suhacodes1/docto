"use client";

import React from "react";

const CaseStudyHaigeia = () => {
  const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/4.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/5.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/6.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/7.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/8.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/9.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/10.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/11.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/12.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/13.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/14.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/15.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/haigeia/16.webp",
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

export default CaseStudyHaigeia;
