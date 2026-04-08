"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

export default function CaseStudies() {

  // const projects = [
  //   {
  //     id: 1,
  //     title: "Synapse",
  //     category: "AI Agent",
  //     platform: "Flutter App",
  //     services: "UX/UI Design, AI Development, AI Automation, Web Application",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/synapse.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/synapse.webp",
  //     link: "/synapse",
  //     positioning: "left",
  //   },
  //   {
  //     id: 2,
  //     title: "Lumina",
  //     category: "Health",
  //     platform: "Custom web development",
  //     services:
  //       "UX/UI Design, Brand Identity, Web Development, Web Design, Poster Design",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/lumina.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/lumina.webp",
  //     link: "/lumina",
  //     positioning: "right",
  //   },
  //   {
  //     id: 3,
  //     title: "Ship Tracker",
  //     category: "Business",
  //     platform: "Mobile App",
  //     services:
  //       "UX/UI Design, Mobile App Development, Dashboard Design, Branding",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/shiptrack.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/shiptrack.webp",
  //     link: "/ship-tracker",
  //     positioning: "left",
  //   },
  //   {
  //     id: 4,
  //     title: "Nalixo",
  //     category: "Crypto",
  //     platform: "Ios and Android",
  //     services: "Dashboard Development, AI Integration, Blockchain",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/nalixo.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/nalixo.webp",
  //     link: "/nalixo",
  //     positioning: "left",
  //   },

  //   {
  //     id: 5,
  //     title: "Revoltise",
  //     category: "Electric Vehicle",
  //     platform: "Mobile App",
  //     services: "UI/UX Design",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/revoltise.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/revoltise.webp",
  //     link: "/revoltise",
  //     positioning: "left",
  //   },

  //   {
  //     id: 6,
  //     title: "Tripzy",
  //     category: "Car Rental",
  //     platform: "Custom Web Deisgn",
  //     services:
  //       "UX/UI Design, Website Design, Custom Web Development, Dashboard",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/tripzy.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/tripzy.webp",
  //     link: "/tripzy",
  //     positioning: "left",
  //   },

  //   {
  //     id: 7,
  //     title: "Fraizro",
  //     category: "Trading",
  //     platform: "Branding",
  //     services: "Brand design, Brand Identity, Poster Design, Banner Design",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/fraizro.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/fraizro.webp",
  //     link: "/fraizro",
  //     positioning: "left",
  //   },

  //   {
  //     id: 8,
  //     title: "Melovian",
  //     category: "Entertainment",
  //     platform: "Mobile App",
  //     services: "App Development, Marketing, Branding",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/melovian.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/melovian.webp",
  //     link: "/melovian",
  //     positioning: "left",
  //   },
  //   {
  //     id: 9,
  //     title: "Hunt AI",
  //     category: "Technology",
  //     platform: "AI Agent",
  //     services: "UX/UI Design, Web App development, Mobile App Dsevelopment",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/huntai.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/huntai.webp",
  //     link: "/hunt-ai",
  //     positioning: "right",
  //   },
  //   {
  //     id: 10,
  //     title: "AI Travel",
  //     category: "Travel",
  //     platform: "Flutter",
  //     services: "Logo Design, UI Design, Branding, Mobile App",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/aitravel.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/aitravel.webp",
  //     link: "/ai-travel",
  //     positioning: "right",
  //   },
  //   {
  //     id: 11,
  //     title: "Niore",
  //     category: "Fashion",
  //     platform: "Ios and Android",
  //     services: "UX/UI Design, Branding, Logo, Mobile App",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/niore.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/niore.webp",
  //     link: "/niore",
  //     positioning: "left",
  //   },
  //   {
  //     id: 12,
  //     title: "AI Therapy",
  //     category: "Health",
  //     platform: "Ios and Android",
  //     services: "AI Integration, Mobile App, Marketing",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/aitherapy.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/aitherapy.webp",
  //     link: "/ai-therapy",
  //     positioning: "right",
  //   },

  //   {
  //     id: 13,
  //     title: "Fintro",
  //     category: "Finance",
  //     platform: "Web Design",
  //     services: "Dashboard, Backend, Landing Page, Figma, UX/UI Design",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/fintro.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/fintro.webp",
  //     link: "/fintro",
  //     positioning: "left",
  //   },

  //   {
  //     id: 14,
  //     title: "Study Stream",
  //     category: "Education",
  //     platform: "App Design",
  //     services: "Mobile App Design, Logo, Branding, Marketing, UX/UI Design",
  //     image:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/studystream.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/studystream.webp",
  //     link: "/study-stream",
  //     positioning: "right",
  //   },
  //   {
  //     id: 15,
  //     title: "ADSPACE",
  //     category: "Marketing",
  //     platform: "Website Design",
  //     services: "Website Design, Brand Identity, Logo Design",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/adspace.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/adspace.webp",
  //     link: "/adspace",
  //     positioning: "left",
  //   },
  //   {
  //     id: 16,
  //     title: "Velvet",
  //     category: "Recruitment",
  //     platform: "Web Development",
  //     services:
  //       "Branding, Marketing, Design, Web Development, Backend, Dashboard",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/velvet.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/velvet.webp",
  //     link: "/velvet",
  //     positioning: "right",
  //   },
  //   {
  //     id: 17,
  //     title: "Vroom",
  //     category: "Travel",
  //     platform: "Mobile (iOS & Android)",
  //     services: "Mobile App Development, UI/UX Design, Backend Integration",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/vroom.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/vroom.webp",
  //     link: "/vroom",
  //     positioning: "right",
  //   },

  //   {
  //     id: 18,
  //     title: "GateMint",
  //     category: "Trading",
  //     platform: "Website",
  //     services: "Mobile App Development, UI/UX Design, Backend Integration",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/gatemint.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/gatemint.webp",
  //     link: "/gatemint",
  //     positioning: "right",
  //   },
  //   {
  //     id: 19,
  //     title: "Infinyte",
  //     category: "Financial Planning",
  //     platform: "Flutter",
  //     services: "App design, Mobile app development",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/infinyte.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/infinyte.webp",
  //     link: "/infinyte",
  //     positioning: "left",
  //   },
  //   {
  //     id: 20,
  //     title: "Lumex",
  //     category: "Immersive Technology",
  //     platform: "Web Design",
  //     services: "Responsive Design, Branding",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/lumex.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/lumex.webp",
  //     link: "/lumex",
  //     positioning: "right",
  //   },
  //   {
  //     id: 21,
  //     title: "Docily Telemedicine",
  //     category: "Health",
  //     platform: "Mobile App",
  //     services: "Mobile app development, Design, branding",
  //     image: "/assets/img/casestudyrevamp-pages/preview-banners/docily.webp",
  //     imageMobile:
  //       "/assets/img/casestudyrevamp-pages/preview-banners/mobile/docily.webp",
  //     link: "/docily",
  //     positioning: "left",
  //   },
  // ];

  const projects = [
    {
      id: 1,
      title: "Growth Habit Tracker & Mental Health App",
      category: "Health",
      platform: "Mobile App",
      services: "UX/UI Design, Mobile App Development, Mental Health",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/1.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/1.webp",
      link: "/casestudies/growth",
      positioning: "left",
    },
    {
      id: 2,
      title: "Healthcare SaaS Dashboard",
      category: "Health",
      platform: "Web App",
      services: "UI/UX Design, Dashboard Design, SaaS Development",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/2.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/2.webp",
      link: "/casestudies/healthcare-saas",
      positioning: "right",
    },
    {
      id: 3,
      title: "Docsy",
      category: "Health",
      platform: "Mobile App",
      services: "UX/UI Design, Mobile App Development, Health Monitoring",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/3.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/3.webp",
      link: "/casestudies/health-monitoring",
      positioning: "left",
    },
    {
      id: 4,
      title: "Patient Management Software",
      category: "Health",
      platform: "Web App",
      services: "UX/UI Design, Web Development, Patient Management",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/4.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/4.webp",
      link: "/casestudies/patient-management",
      positioning: "right",
    },
    {
      id: 5,
      title: "Sedrica Dental",
      category: "Health",
      platform: "Web App",
      services: "UX/UI Design, Web Development, Dental",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/5.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/5.webp",
      link: "/casestudies/sedrica-dental",
      positioning: "left",
    },
    {
      id: 6,
      title: "OneraQ Care",
      category: "Health",
      platform: "Mobile App",
      services: "UX/UI Design, Mobile App Development, Health Monitoring",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/6.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/6.webp",
      link: "/casestudies/health-monitoring-2",
      positioning: "left",
    },
    {
      id: 7,
      title: "AI-Powered Healthcare Chatbots",
      category: "Health",
      platform: "Mobile App",
      services: "UX/UI Design, Mobile App Development, AI Integration",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/7.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/7.webp",
      link: "/casestudies/ai-health-chatbot",
      positioning: "left",
    },
    {
      id: 8,
      title: "Digital Health Platform",
      category: "Health",
      platform: "Mobile App",
      services: "UX/UI Design, Mobile App Development, Health Management",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/8.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/8.webp",
      link: "/casestudies/digital-health-platform",
      positioning: "right",
    },
    
    {
      id: 9,
      title: "Healthcare SAAS Platform and Web Design",
      category: "Health",
      platform: "Mobile App",
      services: "UX/UI Design, Mobile App Development, Health Management",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/9.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/9.webp",
      link: "/casestudies/healthcare-saas-2",
      positioning: "left",
    },
    {
      id: 10,
      title: "LifeOS – Personal AI Agents App & UX UI Design",
      category: "Health",
      platform: "Mobile App",
      services: "UX/UI Design, Mobile App Development, AI Integration",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/10.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/10.webp",
      link: "/casestudies/lifeos-ai-agents",
      positioning: "right",
    },
    {
      id: 11,
      title: "Medico Clinic",
      category: "Health",
      platform: "Mobile App",
      services: "UX/UI Design, Mobile App Development, Clinic Management",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/11.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/11.webp",
      link: "/casestudies/medico-clinic",
      positioning: "right",
    },
    {
      id: 12,
      title: "Modo – AI-Enhanced CRM Platform for Manufacturing",
      category: "Health",
      platform: "Mobile App",
      services: "UX/UI Design, Mobile App Development, AI Integration",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/13.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/13.webp",
      link: "/casestudies/modo-ai-crm",
      positioning: "left",
    },
    {
      id: 13,
      title: "Sentos — AI Ophthalmology Clinic",
      category: "Health",
      platform: "Mobile App",
      services: "UX/UI Design, Mobile App Development, AI Integration",
      image: "/assets/img/casestudyrevamp-pages/preview-banners/14.webp",
      imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/14.webp",
      link: "/casestudies/sentos-ai",
      positioning: "left",
    },
    // {
    //   id: 14,
    //   title: "Haigeia",
    //   category: "Health",
    //   platform: "Mobile App",
    //   services: "UX/UI Design, Mobile App Development, Health Management",
    //   image: "/assets/img/casestudyrevamp-pages/preview-banners/9.webp",
    //   imageMobile: "/assets/img/casestudyrevamp-pages/preview-banners/mobile/9.webp",
    //   link: "/casestudies/haigeia",
    //   positioning: "left",
    // },
  ];

  return (
    <section className="relative py-16 md:py-20">
      <h3
        className="
pointer-events-none max-w-full overflow-hidden
tracking-[-4px] whitespace-nowrap text-slate-200 opacity-85 z-[1]
text-[clamp(60px,10vw,120px)] font-extrabold
absolute top-[40px] left-1/2 -translate-x-1/2
[mask-image:linear-gradient(#000_40%,#0000_100%)]
[-webkit-mask-image:linear-gradient(#000_40%,#0000_100%)]
"
      >
        Case Studies
      </h3>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Case Studies
          </p>

          <h2
            className="text-black md:text-5xl text-3xl font-extrabold mb-6 relative z-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Real Results For Healthcare Clients
          </h2>

          <div className="w-24 h-1.5 bg-[#97bb67] mb-8 md:mb-12 mx-auto" data-aos="fade-up" data-aos-delay="300" />
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
            pauseOnMouseEnter: true,
          }}
          className="mx-auto max-w-7xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {projects.map((p, index) => (
            <SwiperSlide key={p.id}>
              <div
                className={`relative block overflow-hidden group w-full md:rounded-none rounded-2xl md:border-none border border-[#292929] ${p.positioning === "full" ? "w-full" : ""}`}
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
                <div className="flex flex-col justify-between p-4 md:pt-14 md:pb-10  text-black md:absolute md:inset-0 md:p-10">
                  <div
                    className={`${p.positioning === "right" ? "md:ml-auto md:w-1/2 md:pr-10 md:pl-16" : ""} ${p.positioning === "left" ? "md:w-1/2 md:pl-16" : ""} ${p.positioning === "full" ? "md:w-2/3 md:pl-20" : ""}`}
                  >
                    {/* Category Badge */}
                    <span className="block w-max text-[12px] font-medium text-white uppercase rounded-full bg-[#010b11] border-[#535e62] border px-6 py-1 mb-3">
                      {p.category}
                    </span>

                    {/* Title */}
                    <h3 className="mb-2 text-2xl font-bold text-black md:text-3xl">
                      {p.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex flex-col gap-4 mb-7 md:mb-10 mt-4 text-sm md:text-base">
                      <div className="flex flex-col gap-4 md:flex-row md:gap-10">
                        {/* <div className="flex flex-row gap-1 md:gap-0 md:flex-col">
                          <span className="text-sm font-medium text-slate-700">
                            Category:
                          </span>
                          <span className="font-semibold">{p.category}</span>
                        </div> */}
                        <div className="flex flex-row gap-1 md:gap-0 md:flex-col">
                          <span className="text-sm font-medium text-slate-700">
                            Platform:
                          </span>
                          <span className="font-semibold">{p.platform}</span>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700">
                          Services:
                        </span>
                        <span className="whitespace-pre-line font-semibold">
                          {p.services}
                        </span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Link
                        href="/contact"
                        className="bg-[#ef2f6b] hover:bg-[#d92a5a] text-white px-10 py-3 rounded-md font-medium transition text-sm text-center"
                      >
                        Get a quote now
                      </Link>

                      <Link
                        href={p.link}
                        className="justify-center border-[#ef2f6b] border-2 hover:bg-[#ef2f6b] text-black hover:text-white px-6 py-3 rounded-md font-medium transition flex items-center gap-2 text-sm"
                      >
                        View Case Study
                      </Link>
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


