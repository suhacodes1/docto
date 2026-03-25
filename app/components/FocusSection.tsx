"use client";

export default function FocusSection() {

  return (
    <section className="relative py-16 md:py-20">
      <div
        className="focus-bg-text"
      >
        Patients
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center">
          <p
            className="text-base md:text-lg mb-2 text-[#ef2f6b] font-semibold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Handle the Technology
          </p>

          <h2
            className="text-black md:text-5xl text-3xl font-extrabold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Focus On Your Patients. We&apos;ll Handle The
            <br />
            Technology
          </h2>

          <div className="w-24 h-1.5 bg-[#97bb67] mb-8 md:mb-12 mx-auto" data-aos="fade-up" data-aos-delay="300" />
        </div>

        <div
          className="text-center space-y-2 text-base md:text-lg text-gray-700"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>Running a healthcare business requires focus and precision.</p>
          <p>
            We build the technology and growth systems that support your clinic
            so you can focus on delivering quality care
          </p>
        </div>
      </div>
    </section>
  );
}


