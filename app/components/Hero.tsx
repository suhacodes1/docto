"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img1 from "../../public/assets/img/homepage/banner/3.webp";
import Img2 from "../../public/assets/img/homepage/banner/2.webp";
import Img3 from "../../public/assets/img/homepage/banner/1.webp";

const banners = [
  {
    headline: "AI-Powered Healthcare Growth Systems",
    subheadline:
      "We help healthcare providers attract, convert, and manage more patients through compliant marketing, smart automation, and data-driven systems.",
    points: [],
    image: Img1,
  },
  {
    headline: "We don't just run marketing campaigns.",
    subheadline:
      "We build end-to-end patient growth systems that bring in patients and manage them seamlessly.",
    points: [
      "Patient Acquisition",
      "Automated Booking & Intake",
      "AI-Powered Follow-ups",
    ],
    image: Img2,
  },
  {
    headline: "Built for Healthcare. Designed for Compliance.",
    subheadline:
      "We understand the unique challenges of healthcare marketing, including patient privacy and AHPRA guidelines.",
    points: [
      "AHPRA-aware marketing strategies",
      "Privacy-conscious systems",
      "Ethical patient acquisition",
    ],
    image: Img3,
  },
];

export default function Hero() {
  return (
    <section className="bg-[#edf3f8] pt-32 relative overflow-clip">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="hero-swiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="container flex md:flex-row flex-col items-center gap-8 relative z-[1] min-h-[500px] py-5">
              {/* Left Content */}
              <div className="md:w-1/2 w-full relative">
                <h3
                  className="
pointer-events-none max-w-full overflow-hidden
tracking-[-4px] whitespace-nowrap text-white opacity-95 z-[1]
text-[clamp(60px,10vw,120px)] font-extrabold
absolute -top-[90px] left-0
[mask-image:linear-gradient(#000_40%,#0000_100%)]
[-webkit-mask-image:linear-gradient(#000_40%,#0000_100%)]
"
                >
                  Medical
                </h3>
                <h1
                  className="text-black relative z-[2] md:text-5xl text-3xl font-extrabold mb-6 md:text-start text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {banner.headline}
                </h1>
                <p
                  className="text-base relative z-[2] md:text-lg mb-6 md:text-start text-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {banner.subheadline}
                </p>

                {banner.points.length > 0 && (
                  <div
                    className="flex flex-col gap-3 mb-8 relative z-[2]"
                    data-aos="fade-up"
                    data-aos-delay="350"
                  >
                    {banner.points.map((point, idx) => (
                      <p
                        key={idx}
                        className="text-base md:text-lg flex items-center md:justify-start justify-center gap-2"
                      >
                        <span className="text-[#ef2f6b] font-bold">✔</span>
                        {point}
                      </p>
                    ))}
                  </div>
                )}

                <div className="hero-buttons relative z-[2] flex flex-col md:flex-row gap-4">
                  <a
                    href="https://calendly.com/digitalparadigm/product-strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#ef2f6b] text-white font-semibold rounded-full border-2 border-[#ef2f6b] hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Get a Free Growth Audit</span>
                    <span className="hero-services-divider">|</span>
                    <span>+</span>
                  </a>
                  <a
                    href="https://calendly.com/digitalparadigm/product-strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent text-black hover:text-white border-2 border-[#ef2f6b] font-semibold rounded-full hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Book a Strategy Call</span>
                    <span className="hero-services-divider">|</span>
                    <span>+</span>
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div
                className="md:w-1/2 w-full"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <Image
                  src={banner.image}
                  alt={banner.headline}
                  className="max-w-[500px] max-h-[470px] object-contain -mb-2.5"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
