"use client";

import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/2.webp";
import { Check } from "lucide-react";

export default function ClinicChallenges() {
  const challenges = [
    {
      title: "Inconsistent patient bookings",
      text: "Some weeks are full, others are quiet—making revenue unpredictable.",
    },
    {
      title: "Website traffic that doesn’t convert",
      text: "People visit your site but don’t take the next step to book.",
    },
    {
      title: "Low visibility in local searches",
      text: "Patients are choosing other clinics simply because they can find them first.",
    },
    {
      title: "No-shows and missed revenue",
      text: "Gaps in your schedule lead to lost income and wasted time.",
    },
    {
      title: "Weak or inconsistent online reputation",
      text: "Not enough quality reviews to build trust and attract new patients.",
    },
    {
      title: "Marketing that doesn’t deliver ROI",
      text: "Money is being spent, but results are unclear or inconsistent.",
    },
  ];

  return (
    <section className="relative py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:items-end relative">
          <h3
            className="
pointer-events-none max-w-full overflow-hidden
tracking-[-4px] whitespace-nowrap text-slate-200 opacity-85 z-[1]
text-[clamp(60px,10vw,120px)] font-extrabold
absolute -top-[30px] left-0
[mask-image:linear-gradient(#000_40%,#0000_100%)]
[-webkit-mask-image:linear-gradient(#000_40%,#0000_100%)]
"
          >
            Problem?
          </h3>
          <div className="relative z-[2]">
            <h2
              className="text-black md:text-5xl text-3xl font-extrabold mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Running a Clinic  
              <br className="md:block hidden" />
              is Hard Enough 
            </h2>

            <div className="w-24 h-1.5 bg-[#97bb67] mb-6" />

            <p
              className="text-base md:text-lg mb-8 text-gray-700"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Healthcare providers today face growing digital challenges. If
              these problems sound familiar, you're not alone.
            </p>

            <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
              {challenges.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-slate-50 border border-transparent hover:border-[#ef2f6b] p-4 rounded-xl hover:shadow-lg shadow-md transition-all duration-300"
                  data-aos="fade-right"
                  data-aos-delay={400 + index * 100}
                >
                  <Check className="text-green-600 mt-2" size={18} />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-base text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex items-end"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <Image
              src={Img1}
              alt="Doctor holding clipboard"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
