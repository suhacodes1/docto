import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/2.webp";

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
    <section className="clinic-challenges-section">
      <div className="clinic-challenges-bg-text">Problem?</div>

      <div className="container clinic-challenges-grid">
        <div className="clinic-challenges-content">
          <h2 className="clinic-challenges-title">
            Running A Clinic Is
            <br />
            Hard Enough
          </h2>

          <div className="clinic-challenges-line" />

          <p className="clinic-challenges-text">
            Healthcare providers today face growing digital challenges. If these
            problems sound familiar, you're not alone.
          </p>

          <div className="clinic-challenges-cards">
            {challenges.map((item, index) => (
              <div key={index} className="challenge-card">
                <div className="challenge-icon shrink-0">✓</div>

                <div>
                  <h4 className="challenge-title">{item.title}</h4>
                  <p className="challenge-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="clinic-challenges-image-wrap">
          <Image
            src={Img1}
            alt="Doctor holding clipboard"
            className="clinic-challenges-image"
          />
        </div>
      </div>
    </section>
  );
}
