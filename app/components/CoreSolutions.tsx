"use client";

import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/4.webp";
import Img2 from "../../public/assets/img/homepage/6.webp";
import Img3 from "../../public/assets/img/homepage/5.webp";
import Img4 from "../../public/assets/img/homepage/7.webp";

const solutions = [
  {
    title: "Web Development",
    description:
      "Modern websites designed to convert visitors into patient bookings.",
    image: Img1,
    placeholder: false,
  },
  {
    title: "Custom Software",
    description:
      "Systems that streamline operations and improve clinic efficiency.",
    image: Img2,
    placeholder: false,
  },
  {
    title: "Design Experience",
    description: "User-focused interfaces that make digital healthcare simple.",
    image: Img3,
    placeholder: false,
  },
  {
    title: "Marketing",
    description:
      "SEO, Google Ads, and digital strategies that bring more patients to your clinic.",
    image: Img4,
    placeholder: false,
  },
];

export default function CoreSolutions() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="core-solutions-bg-text">
        Core Solutions
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Core Solutions
          </p>

          <h2
            className="text-black md:text-5xl text-3xl font-extrabold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Technology &amp; Growth Solutions For Healthcare
          </h2>

          <div className="w-24 h-1.5 bg-[#97bb67] mb-8 md:mb-12 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <div className="relative h-48 bg-gray-200">
                {solution.placeholder ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full" />
                  </div>
                ) : (
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  {solution.title === "Design Experience" ? (
                    <>
                      Design
                      <br />
                      Experience
                    </>
                  ) : (
                    solution.title
                  )}
                </h3>

                <p className="text-base text-gray-600">
                  {solution.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


