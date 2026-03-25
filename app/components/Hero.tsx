"use client";
import Link from "next/link";
import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/3.webp";

export default function Hero() {
  return (
    <section className="bg-[#edf3f8] md:pt-28 pt-32">
      <div className="hero-bg-text">
        Medical
      </div>

      <div className="container flex md:flex-row flex-col items-center gap-8 relative z-[1]">
        <div className="md:w-1/2 w-full">
          <p className="text-base md:text-lg mb-4" data-aos="fade-up" data-aos-delay="100">
            Custom software and websites that support modern clinics.
          </p>

          <h1
            className="text-black md:text-6xl text-3xl font-extrabold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Smarter Digital Systems for Healthcare
          </h1>

          <p className="text-base md:text-lg mb-6" data-aos="fade-up" data-aos-delay="300">
            Reliable technology built to scale with your practice.
          </p>

          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
            <Link href="/services" className="px-6 py-3 bg-[#ef2f6b] text-white font-semibold rounded-full border-2 border-[#ef2f6b] hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Our Services</span>
              <span className="hero-services-divider">|</span>
              <span>+</span>
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-transparent text-black hover:text-white border-2 border-[#ef2f6b] font-semibold rounded-full hover:bg-[#d92a5a] hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Get in Touch</span>
              <span className="hero-services-divider">|</span>
              <span>+</span>
            </Link>

            {/* <button className="play-button" aria-label="Play video">
              ▶
            </button> */}
          </div>
        </div>

        <div className="md:w-1/2 w-full" data-aos="fade-left" data-aos-delay="500">
          <Image
            src={Img1}
            alt="Healthcare professional"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}


