"use client";

const processSteps = [
  {
    title: "Audit & Strategy",
    description:
      "We analyse your clinic, competitors, and growth gaps.",
  },
  {
    title: "Build Your Growth System",
    description:
      "We implement marketing + automation + tracking.",
  },
  {
    title: "Scale Patient Flow",
    description:
      "We implement SEO, paid ads, and growth strategies to attract patients.",
  },
];

export default function ProcessSection() {

  return (
    <section className="relative py-16 md:py-20">
      <div
        className="process-bg-text"
      >
        Process
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            How It Works
          </p>

          <h2
            className="text-black md:text-5xl text-3xl font-extrabold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A Simple Process Designed For Healthcare
            <br />
            Businesses
          </h2>

          <div className="w-24 h-1.5 bg-[#97bb67] mb-8 md:mb-12 mx-auto" data-aos="fade-up" data-aos-delay="300" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 leading-snug text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                {step.title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < step.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h3>

              <p className="text-base text-gray-600 mb-6">{step.description}</p>

              <div className="absolute bottom-6 right-6 text-2xl text-gray-300 group-hover:text-pink-600 transition-colors duration-300">
                »
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


