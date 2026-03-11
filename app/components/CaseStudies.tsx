"use client";

import { useState } from "react";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Images
import Img1 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/synapse.webp";
import Img1mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/synapse.webp";
import Img2 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/huntai.webp";
import Img2mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/huntai.webp";
import Img3 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/shiptrack.webp";
import Img3mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/shiptrack.webp";
import Img4 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/aitravel.webp";
import Img4mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/aitravel.webp";
import Img5 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/aitherapy.webp";
import Img5mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/aitherapy.webp";
import Img6 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/tripzy.webp";
import Img6mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/tripzy.webp";
import Img7 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/docily.webp";
import Img7mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/docily.webp";
import Img8 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/fintro.webp";
import Img8mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/fintro.webp";
import Img9 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/fraizro.webp";
import Img9mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/fraizro.webp";
import Img10 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/lumex.webp";
import Img10mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/lumex.webp";
import Img11 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/lumina.webp";
import Img11mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/lumina.webp";
import Img12 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/melovian.webp";
import Img12mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/melovian.webp";
import Img13 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/nalixo.webp";
import Img13mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/nalixo.webp";
import Img14 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/niore.webp";
import Img14mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/niore.webp";
import Img16 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/infinyte.webp";
import Img16mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/infinyte.webp";
import Img17 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/revoltise.webp";
import Img17mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/revoltise.webp";
import Img18 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/studystream.webp";
import Img18mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/studystream.webp";
import Img19 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/adspace.webp";
import Img19mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/adspace.webp";
import Img20 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/velvet.webp";
import Img20mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/velvet.webp";
import Img21 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/vroom.webp";
import Img21mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/vroom.webp";
import Img22 from "../../public/assets/img/casestudyrevamp-pages/preview-banners/gatemint.webp";
import Img22mobile from "../../public/assets/img/casestudyrevamp-pages/preview-banners/mobile/gatemint.webp";

export default function CaseStudies() {
  const projects = [
    {
      id: 1,
      title: "Synapse",
      category: "AI Agent",
      platform: "Flutter App",
      services: "UX/UI Design, AI Development, AI Automation, Web Application",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/synapse.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/synapse.webp",
      link: "/synapse",
      positioning: "left",
    },
    {
      id: 2,
      title: "Lumina",
      category: "Health",
      platform: "Custom web development",
      services:
        "UX/UI Design, Brand Identity, Web Development, Web Design, Poster Design",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/lumina.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/lumina.webp",
      link: "/lumina",
      positioning: "right",
    },
    {
      id: 3,
      title: "Ship Tracker",
      category: "Business",
      platform: "Mobile App",
      services:
        "UX/UI Design, Mobile App Development, Dashboard Design, Branding",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/shiptrack.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/shiptrack.webp",
      link: "/ship-tracker",
      positioning: "left",
    },
    {
      id: 4,
      title: "Nalixo",
      category: "Crypto",
      platform: "Ios and Android",
      services: "Dashboard Development, AI Integration, Blockchain",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/nalixo.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/nalixo.webp",
      link: "/nalixo",
      positioning: "left",
    },

    {
      id: 5,
      title: "Revoltise",
      category: "Electric Vehicle",
      platform: "Mobile App",
      services: "UI/UX Design",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/revoltise.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/revoltise.webp",
      link: "/revoltise",
      positioning: "left",
    },

    {
      id: 6,
      title: "Tripzy",
      category: "Car Rental",
      platform: "Custom Web Deisgn",
      services:
        "UX/UI Design, Website Design, Custom Web Development, Dashboard",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/tripzy.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/tripzy.webp",
      link: "/tripzy",
      positioning: "left",
    },

    {
      id: 7,
      title: "Fraizro",
      category: "Trading",
      platform: "Branding",
      services: "Brand design, Brand Identity, Poster Design, Banner Design",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/fraizro.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/fraizro.webp",
      link: "/fraizro",
      positioning: "left",
    },

    {
      id: 8,
      title: "Melovian",
      category: "Entertainment",
      platform: "Mobile App",
      services: "App Development, Marketing, Branding",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/melovian.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/melovian.webp",
      link: "/melovian",
      positioning: "left",
    },
    {
      id: 9,
      title: "Hunt AI",
      category: "Technology",
      platform: "AI Agent",
      services: "UX/UI Design, Web App development, Mobile App Dsevelopment",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/huntai.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/huntai.webp",
      link: "/hunt-ai",
      positioning: "right",
    },
    {
      id: 10,
      title: "AI Travel",
      category: "Travel",
      platform: "Flutter",
      services: "Logo Design, UI Design, Branding, Mobile App",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/aitravel.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/aitravel.webp",
      link: "/ai-travel",
      positioning: "right",
    },
    {
      id: 11,
      title: "Niore",
      category: "Fashion",
      platform: "Ios and Android",
      services: "UX/UI Design, Branding, Logo, Mobile App",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/niore.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/niore.webp",
      link: "/niore",
      positioning: "left",
    },
    {
      id: 12,
      title: "AI Therapy",
      category: "Health",
      platform: "Ios and Android",
      services: "AI Integration, Mobile App, Marketing",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/aitherapy.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/aitherapy.webp",
      link: "/ai-therapy",
      positioning: "right",
    },

    {
      id: 13,
      title: "Fintro",
      category: "Finance",
      platform: "Web Design",
      services: "Dashboard, Backend, Landing Page, Figma, UX/UI Design",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/fintro.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/fintro.webp",
      link: "/fintro",
      positioning: "left",
    },

    {
      id: 14,
      title: "Study Stream",
      category: "Education",
      platform: "App Design",
      services: "Mobile App Design, Logo, Branding, Marketing, UX/UI Design",
      image:
        "/assets/img/casestudyrevamp-pages/preview-banners/studystream.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/studystream.webp",
      link: "/study-stream",
      positioning: "right",
    },
    {
      id: 15,
      title: "ADSPACE",
      category: "Marketing",
      platform: "Website Design",
      services: "Website Design, Brand Identity, Logo Design",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/adspace.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/adspace.webp",
      link: "/adspace",
      positioning: "left",
    },
    {
      id: 16,
      title: "Velvet",
      category: "Recruitment",
      platform: "Web Development",
      services:
        "Branding, Marketing, Design, Web Development, Backend, Dashboard",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/velvet.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/velvet.webp",
      link: "/velvet",
      positioning: "right",
    },
    {
      id: 17,
      title: "Vroom",
      category: "Travel",
      platform: "Mobile (iOS & Android)",
      services: "Mobile App Development, UI/UX Design, Backend Integration",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/vroom.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/vroom.webp",
      link: "/vroom",
      positioning: "right",
    },

    {
      id: 18,
      title: "GateMint",
      category: "Trading",
      platform: "Website",
      services: "Mobile App Development, UI/UX Design, Backend Integration",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/gatemint.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/gatemint.webp",
      link: "/gatemint",
      positioning: "right",
    },
    {
      id: 19,
      title: "Infinyte",
      category: "Financial Planning",
      platform: "Flutter",
      services: "App design, Mobile app development",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/infinyte.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/infinyte.webp",
      link: "/infinyte",
      positioning: "left",
    },
    {
      id: 20,
      title: "Lumex",
      category: "Immersive Technology",
      platform: "Web Design",
      services: "Responsive Design, Branding",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/lumex.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/lumex.webp",
      link: "/lumex",
      positioning: "right",
    },
    {
      id: 21,
      title: "Docily Telemedicine",
      category: "Health",
      platform: "Mobile App",
      services: "Mobile app development, Design, branding",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/docily.webp",
      imageMobile:
        "/assets/img/casestudyrevamp-pages/preview-banners/mobile/docily.webp",
      link: "/docily",
      positioning: "left",
    },
  ];

  return (
    <section className="case-studies-section">
      <div className="case-studies-bg-text">Case Studies</div>

      <div className="container case-studies-container">
        <div className="case-studies-header">
          <div className="case-studies-heading-block">
            <p className="case-studies-subtitle">Case Studies</p>
            <h2 className="case-studies-title">
              Real Results For
              <br />
              Healthcare Clients
            </h2>
            <div className="case-studies-line mb-4" />
          </div>

          {/* <div className="case-studies-controls">
            <button
              className="case-studies-arrow"
              onClick={handlePrev}
              aria-label="Previous case study"
            >
              ←
            </button>
            <button
              className="case-studies-arrow"
              onClick={handleNext}
              aria-label="Next case study"
            >
              →
            </button>
          </div> */}
        </div>

        {/* 🔹 Swiper Slider */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="mx-auto max-w-7xl"
        >
          {projects.map((p, index) => (
            <SwiperSlide key={p.id}>
              <div
                className={`relative block overflow-hidden group w-full
                                    md:rounded-none rounded-2xl
                                    md:border-none border border-[#292929]
                                    ${p.positioning === "full" ? "w-full" : ""}
                                  `}
              >
                {/* Image */}
                <div className="w-full">
                  <picture>
                    <source media="(max-width: 768px)" srcSet={p.imageMobile} />
                    <img
                      className="object-cover w-full md:h-auto md:max-h-[450px] md:object-contain h-[250px] rounded-xl"
                      src={p.image}
                      alt={p.title}
                    />
                  </picture>
                </div>

                {/* Content Overlay */}
                <div className="flex flex-col justify-between p-4 md:pt-14 md:text-white text-black md:absolute md:inset-0 md:p-10">
                  <div
                    className={`
                                        ${
                                          p.positioning === "right"
                                            ? "md:ml-auto md:w-1/2 md:pr-10"
                                            : ""
                                        }
                                        ${
                                          p.positioning === "left"
                                            ? "md:w-1/2 md:pl-20"
                                            : ""
                                        }
                                        ${
                                          p.positioning === "full"
                                            ? "md:w-2/3 md:pl-20"
                                            : ""
                                        }
                                      `}
                  >
                    {/* Category Badge */}
                    <span className="block w-max text-[12px] font-medium text-white uppercase rounded-full bg-[#010b11] border-[#535e62] border px-6 py-1 mb-3">
                      {p.category}
                    </span>

                    {/* Title */}
                    <h3 className="mb-2 text-2xl font-bold md:text-white text-black md:text-4xl">
                      {p.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex flex-col gap-2 mb-7 md:mb-10 mt-4 text-sm md:text-base">
                      <div className="flex flex-col gap-4 md:flex-row md:gap-10">
                        <div className="flex flex-row gap-1 md:gap-0 md:flex-col">
                          <span className="text-sm font-medium md:text-slate-300 text-slate-700">
                            Category:
                          </span>
                          <span>{p.category}</span>
                        </div>
                        <div className="flex flex-row gap-1 md:gap-0 md:flex-col">
                          <span className="text-sm font-medium md:md:text-slate-300 text-slate-700">
                            Platform:
                          </span>
                          <span>{p.platform}</span>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm font-medium md:md:text-slate-300 text-slate-700">
                          Services:
                        </span>
                        <span className="whitespace-pre-line">
                          {p.services}
                        </span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <a
                        href="/contact"
                        className="bg-[#ff7a3d] hover:bg-[#ff4d2d] md:text-white text-black px-10 py-3 rounded-md font-medium transition text-sm text-center"
                      >
                        Get a quote now
                      </a>

                      {/* <a
                        href={p.link}
                        className="border justify-center border-[#ff7a3d] hover:bg-[#ff4d2d] md:text-white text-black px-6 py-3 rounded-md font-medium transition flex items-center gap-2 text-sm"
                      >
                        View Case Studies
                      </a> */}
                    </div>
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
