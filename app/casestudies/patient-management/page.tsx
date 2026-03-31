"use client";

import React from "react";

const CaseStudyPatientManagement = () => {
    const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/4.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/5.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/6.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/7.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/8.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/9.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/10.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/11.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/12.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/13.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/14.webp",
    // "/assets/img/casestudyrevamp-pages/casestudy-pages/patient-management/15.webp",
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

export default CaseStudyPatientManagement;