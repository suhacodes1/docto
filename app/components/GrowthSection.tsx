import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/14.webp";

const growthCards = {
  leftTop: {
    title: "More Online Patient Bookings",
    description:
      "We build optimized healthcare websites and booking systems that convert visitors into patient appointments.",
    icon: "🧠",
  },
  leftBottom: {
    title: "Better Internal Efficiency",
    description:
      "Integrated systems and streamlined workflows help clinics reduce admin overhead and improve day-to-day operations.",
    icon: "⚙️",
  },
  rightTop: {
    title: "Higher Google Visibility",
    description:
      "Our SEO and local search strategies help clinics appear when patients search for healthcare services nearby.",
    icon: "🦷",
  },
  rightBottom: {
    title: "Stronger Online Reputation",
    description:
      "We help healthcare providers build trust online through stronger branding, review strategies, and better digital experiences.",
    icon: "⭐",
  },
};

export default function GrowthSection() {
  return (
    <section className="relative py-16 bg-gray-50">
      <div className="who-bg-text">Clinics</div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <p className="who-subtitle">Clinics Grow with Technology</p>
        <h2 className="who-title">Helping Clinics Grow With Technology</h2>
        <div className="who-line" />

        <div className="relative md:flex md:items-center md:justify-between md:space-x-6 mt-6">
          {/* left column - vertical stack */}
          <div className="flex flex-col space-y-6 md:w-1/4 z-10">
            <article className="bg-white p-6 rounded shadow">
              <div className="text-3xl mb-2">{growthCards.leftTop.icon}</div>
              <h3 className="text-xl font-semibold">
                More Online Patient
                <br />
                Bookings
              </h3>
              <p className="mt-2">{growthCards.leftTop.description}</p>
              <a href="#" className="text-pink-500 mt-4 inline-block">
                Read More »
              </a>
            </article>

            <article className="bg-white p-6 rounded shadow md:ml-8 md:mt-8 md:relative left-8">
              <div className="text-3xl mb-2">{growthCards.leftBottom.icon}</div>
              <h3 className="text-xl font-semibold">
                Better Internal
                <br />
                Efficiency
              </h3>
              <p className="mt-2">{growthCards.leftBottom.description}</p>
              <a href="#" className="text-pink-500 mt-4 inline-block">
                Read More »
              </a>
            </article>
          </div>

          {/* center image, absolute on md+ */}
          <div className="md:absolute md:inset-0 md:flex md:justify-center md:items-center relative z-0">
            <Image
              src={Img1}
              alt="Healthcare professional placeholder"
              className="w-[50%] mx-auto"
            />
          </div>

          {/* right column - vertical stack */}
          <div className="flex flex-col space-y-6 md:w-1/4 z-10">
            <article className="bg-white p-6 rounded shadow">
              <div className="text-3xl mb-2">{growthCards.rightTop.icon}</div>
              <h3 className="text-xl font-semibold">
                Higher Google
                <br />
                Visibility
              </h3>
              <p className="mt-2">{growthCards.rightTop.description}</p>
              <a href="#" className="text-pink-500 mt-4 inline-block">
                Read More »
              </a>
            </article>

            <article className="bg-white p-6 rounded shadow md:mr-8 md:mt-8 md:relative right-8">
              <div className="text-3xl mb-2">
                {growthCards.rightBottom.icon}
              </div>
              <h3 className="text-xl font-semibold">
                Stronger Online
                <br />
                Reputation
              </h3>
              <p className="mt-2">{growthCards.rightBottom.description}</p>
              <a href="#" className="text-pink-500 mt-4 inline-block">
                Read More »
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
