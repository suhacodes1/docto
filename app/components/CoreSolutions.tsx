"use client";

import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/17.webp";
import Img2 from "../../public/assets/img/homepage/6.webp";
import Img3 from "../../public/assets/img/homepage/5.webp";
import Img4 from "../../public/assets/img/homepage/16.webp";

const solutions = [
  {
    step: "01",
    title: "Launch System",
    description: "Get your first 50–100 patients in 60 days.",
  },
  {
    step: "02",
    title: "Growth Engine",
    description: "Consistent weekly patient bookings without relying on referrals.",
  },
  {
    step: "03",
    title: "PatientFlow AI",
    description: "Turn more inquiries into bookings automatically.",
  },
  {
    step: "04",
    title: "Authority Builder",
    description: "Become the most trusted clinic in your area.",
  },
  {
    step: "05",
    title: "Intelligence Dashboard",
    description: "Know exactly what's working.",
  },
];

export default function CoreSolutions() {
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
        Growth Solutions
      </h3>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Growth Solutions For Healthcare
          </p>

          <h2
            className="text-black md:text-5xl text-3xl font-extrabold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The 5-Step Clinic Growth System
          </h2>

          <div className="w-24 h-1.5 bg-[#97bb67] mb-8 md:mb-12 mx-auto" />
        </div>

        <div className="flex md:flex-row flex-col md:flex-wrap justify-center gap-6">
          <div className="relative w-full">
            <div data-aos="fade-up" data-aos-delay="800" className="absolute inset-x-0 top-1/2 h-[4px] w-[90%] mx-auto bg-[#ef2f6b] opacity-90 z-0" />
            <div className="flex md:flex-row flex-col md:flex-wrap justify-center gap-6 relative z-10">
              {solutions.map((solution, index) => (
                <article
                  key={solution.title}
                  className="w-full md:w-[calc(25%-1.5rem)] bg-[#ef2f6b] hover:bg-[#f21c60] transition-all duration-300 lg:w-[calc(20%-1.2rem)] rounded-lg overflow-hidden hover:shadow-lg flex flex-col p-5"
                 
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <p className="text-white text-sm md:text-base font-semibold mb-3 opacity-90">
                        {solution.step}
                      </p>
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-6">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-white text-sm md:text-base">
                      {solution.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mt-10">
            From first click to confirmed booking, we build and manage the
            entire system that grows your clinic.
          </p>
        </div>
      </div>
    </section>
  );
}
