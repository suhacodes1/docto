"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/Dental.webp";
import Img2 from "../../public/assets/img/homepage/Physiotherapists.webp";
import Img3 from "../../public/assets/img/homepage/Private.webp";
import Img4 from "../../public/assets/img/homepage/18.webp";
import Img5 from "../../public/assets/img/homepage/19.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

const audienceItems = [
  {
    title: "Medical Clinics",
    image: Img1,
  },
  {
    title: "Specialists",
    image: Img2,
  },
  {
    title: "Dental Practices",
    image: Img3,
  },
  {
    title: "Allied Health Providers",
    image: Img4,
  },
  {
    title: "Cosmetic Clinics",
    image: Img5,
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="who-bg-text">
        Healthcare
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Built specifically for healthcare providers
          </p>

          <h2
            className="text-black md:text-5xl text-3xl font-extrabold mb-6 relative z-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Who We Work With
          </h2>

          <div className="w-24 h-1.5 bg-[#97bb67] mb-8 md:mb-12 mx-auto" />
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="300">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {audienceItems.map((item, index) => (
              <SwiperSlide key={index}>
                <article className="group h-full">
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-48 md:h-96 bg-gray-200 mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center group-hover:text-pink-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300">
            <ArrowLeft size={20} />
          </button>
          <button className="swiper-button-next-custom absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300">
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="flex items-center justify-center mt-6 md:mt-10" data-aos="fade-up" data-aos-delay="400">
          <Link href="/contact">
            <button className="px-6 py-3 bg-[#ef2f6b] text-white font-semibold rounded-full hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Work With Us</span>
              <span className="text-white">|</span>
              <span>+</span>
            </button>
          </Link>
        </div>

        <p
          className="text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mt-10"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Whether you are launching a new clinic or modernizing an existing one,
          we help build the systems needed to scale.
        </p>
      </div>
    </section>
  );
}


