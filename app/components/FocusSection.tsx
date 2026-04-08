"use client";

export default function FocusSection() {

  return (
    <section className="relative py-16 md:py-20">
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
        Patients
      </h3>

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


