"use client";
import Image from "next/image";
import ImgHero from "../../public/assets/img/homepage/whychooseus.webp";

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-[#ef2f6b] font-semibold text-base md:text-lg">
            Differentiation
          </p>
          <h2 className="text-black md:text-5xl text-3xl font-extrabold mt-3">
            Why Choose Us
          </h2>
          <div className="mx-auto mt-4 w-20 h-1.5 bg-[#97bb67]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div
              className="space-y-4"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <h3 className="text-2xl font-bold">Most agencies:</h3>
              <ul className="space-y-2 text-gray-700 text-base md:text-lg">
                <li>- Focus only on ads</li>
                <li>- Deliver leads without systems</li>
                <li>- Lack healthcare understanding</li>
              </ul>
            </div>
            <div
              className="space-y-4 mt-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold">We do things differently:</h3>
              <ul className="space-y-2 text-gray-700 text-base md:text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-[#ef2f6b] font-bold">✔</span>Combine
                  marketing + systems + video marketing + event marketing +
                  reputation marketing + AI
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ef2f6b] font-bold">✔</span>Focus on
                  patient journey, not just clicks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ef2f6b] font-bold">✔</span>Build
                  scalable growth infrastructure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ef2f6b] font-bold">✔</span>AHPRA-aware
                  marketing strategies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ef2f6b] font-bold">✔</span>
                  Privacy-conscious systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ef2f6b] font-bold">✔</span>Ethical
                  patient acquisition
                </li>
              </ul>
            </div>
          </div>

          <div
            className="flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <Image
              src={ImgHero}
              alt="Why choose us in healthcare marketing"
              className="object-contain w-full h-full max-h-[500px]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
