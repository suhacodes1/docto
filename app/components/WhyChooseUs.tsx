"use client";
import Image from "next/image";
import ImgHero from "../../public/assets/img/homepage/whychooseus.webp";

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 bg-white" id="why-choose-us">
      <h3
        className="
pointer-events-none max-w-full overflow-hidden
tracking-[-4px] whitespace-nowrap text-slate-200 opacity-85 z-[1]
text-[clamp(60px,10vw,120px)] font-extrabold
absolute top-[50px] left-1/2 -translate-x-1/2
[mask-image:linear-gradient(#000_40%,#0000_100%)]
[-webkit-mask-image:linear-gradient(#000_40%,#0000_100%)]
"
      >
        Why Choose us
      </h3>
      <div className="container mx-auto px-4 relative z-[2]">
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
          <div className="flex flex-col gap-6 relative">
            <div
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex-1"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Most agencies:
              </h3>
              <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-red-500 font-bold">✗</span>Focus only on
                  ads
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500 font-bold">✗</span>Deliver leads
                  without systems
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500 font-bold">✗</span>Lack
                  healthcare understanding
                </li>
              </ul>
            </div>
            <div
              className="bg-gradient-to-br relative from-pink-50 to-pink-100 border border-pink-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex-1"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                We do things differently:
              </h3>
              <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#ef2f6b] font-bold text-xl">✔</span>
                  <span>Unify Marketing and AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ef2f6b] font-bold text-xl">✔</span>
                  <span>Focus on patient journey, not just clicks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ef2f6b] font-bold text-xl">✔</span>
                  <span>Build scalable growth infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ef2f6b] font-bold text-xl">✔</span>
                  <span>AHPRA-aware marketing strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ef2f6b] font-bold text-xl">✔</span>
                  <span>Privacy-conscious systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ef2f6b] font-bold text-xl">✔</span>
                  <span>Ethical patient acquisition</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="flex items-center justify-center relative"
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
