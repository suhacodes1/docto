"use client";

const processSteps = [
  {
    title: "Audit & Growth Strategy",
    description:
      "We deep-dive into your clinic, competitors, and local market to uncover missed opportunities and growth gaps. You get a clear, data-backed roadmap to increase patient bookings.",
  },
  {
    title: "Build Your Growth System",
    description:
      "We implement your complete patient acquisition engine—website, ads, AI automation, and tracking—fully integrated and ready to perform. Everything is designed to capture, convert, and manage patient enquiries seamlessly.",
  },
  {
    title: "Optimize & Scale",
    description:
      "We continuously track performance, refine campaigns, and improve conversions to drive consistent, predictable patient growth. As results improve, we scale what’s working to maximize ROI.",
  },
];

export default function ProcessSection() {

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
        Process
      </h3>

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
           Our Proven 3-Step Patient 
            <br className="md:block hidden" />
           Growth Framework
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


