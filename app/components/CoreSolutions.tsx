import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/4.webp";
import Img2 from "../../public/assets/img/homepage/5.webp";
import Img3 from "../../public/assets/img/homepage/6.webp";
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
    <section className="core-solutions-section">
      <div className="core-solutions-bg-text">Core Solutions</div>

      <div className="container core-solutions-container">
        <p className="core-solutions-subtitle">Our Core Solutions</p>

        <h2 className="core-solutions-title">
          Technology &amp; Growth Solutions For Healthcare
        </h2>

        <div className="core-solutions-line" />

        <div className="core-solutions-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.title}>
              <div className="solution-image-wrap">
                {solution.placeholder ? (
                  <div className="solution-placeholder">
                    <div className="placeholder-dot" />
                    <div className="placeholder-shape-1" />
                    <div className="placeholder-shape-2" />
                  </div>
                ) : (
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    className="solution-image"
                  />
                )}
              </div>

              <div className="solution-content">
                <h3 className="solution-card-title">
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

                <p className="solution-card-text">{solution.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
