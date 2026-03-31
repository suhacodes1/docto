"use client";

import React from "react";

const CaseStudyMedicoClinic = () => {
 const images = [
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/1.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/2.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/3.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/4.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/5.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/6.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/7.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/8.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/9.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/10.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/11.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/12.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/13.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/14.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/15.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/16.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/17.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/18.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/19.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/20.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/21.webp",
    "/assets/img/casestudyrevamp-pages/casestudy-pages/medico-clinic/22.webp",
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

export default CaseStudyMedicoClinic;
