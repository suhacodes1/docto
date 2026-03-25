"use client";

import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/2.webp";
import { Check } from "lucide-react";

export default function ClinicChallenges() {
  const challenges = [
    {
      title: "Low appointment conversions",
      text: "Visitors browse your website but rarely book appointments.",
    },
    {
      title: "Poor Google visibility",
      text: "Patients searching for nearby clinics struggle to find yours.",
    },
    {
      title: "Disconnected systems",
      text: "Staff waste time managing manual or fragmented workflows.",
    },
    {
      title: "Weak online reputation",
      text: "Too few reviews means patients hesitate to trust your clinic.",
    },
  ];

  return (
    <section className="relative py-16 md:py-20">
      <div className="clinic-challenges-bg-text">
        Problem?
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:items-end">
          <div>
            <h2 
              className="text-black md:text-5xl text-3xl font-extrabold mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Running A Clinic Is
              <br />
              Hard Enough
            </h2>

            <div className="w-24 h-1.5 bg-[#97bb67] mb-6" />

            <p className="text-base md:text-lg mb-8 text-gray-700" data-aos="fade-up" data-aos-delay="200">
              Healthcare providers today face growing digital challenges. If these
              problems sound familiar, you're not alone.
            </p>

            <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
              {challenges.map((item, index) => (
                <div key={index} className="flex gap-4 bg-slate-50 border border-transparent hover:border-[#ef2f6b] p-4 rounded-xl hover:shadow-lg shadow-md transition-all duration-300" data-aos="fade-right" data-aos-delay={400 + index * 100}>
                  <Check className="text-green-600 mt-2" size={18} />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-base text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-end" data-aos="fade-left" data-aos-delay="500">
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


