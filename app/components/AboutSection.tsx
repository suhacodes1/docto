"use client";
import Link from "next/link";
import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/8.webp";

export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-20">
      <div
        className="about-dp-bg-text"
      >
        About
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right" data-aos-delay="100">
            <Image
              src={Img1}
              alt="About Digital Paradigm"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div>
            <p className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold" data-aos="fade-up" data-aos-delay="200">
              About Digital Paradigm
            </p>

            <h2 className="text-black md:text-5xl text-3xl font-extrabold mb-6" data-aos="fade-up" data-aos-delay="300">
              Technology &amp; Growth
              <br />
              Partner For Healthcare
              <br />
              Businesses
            </h2>

            <div className="w-24 h-1.5 bg-[#97bb67] mb-6" />

            <div className="space-y-4 mb-8 text-base md:text-lg text-gray-700" data-aos="fade-up" data-aos-delay="400">
              <p>
                Digital Paradigm helps clinics, healthcare providers, and medical
                startups build modern digital systems that support their growth.
              </p>

              <p>
                From professional healthcare websites to custom software and
                patient acquisition strategies, we develop solutions that help
                clinics operate more efficiently and attract more patients.
              </p>

              <p className="font-semibold text-gray-900">Our goal is simple:</p>

              <p className="font-semibold text-gray-900">
                Handle the technology so healthcare professionals can focus on
                what matters most — patient care.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6" data-aos="fade-up" data-aos-delay="500">
<Link href="/about">
              <button className="px-6 py-3 bg-[#ef2f6b] text-white font-semibold rounded-full hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <span>See more</span>
                <span className="text-white">|</span>
                <span>+</span>
              </button>
            </Link>

              <a href="tel:61251194369" className="group">
                <span className="group-hover:text-[#d92a5a] transition-colors font-bold text-lg">
                  +612-5119-4369
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


