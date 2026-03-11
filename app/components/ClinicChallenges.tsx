import Image from "next/image";
import Img1 from "../../public/assets/img/homepage/2.webp";

export default function ClinicChallenges() {
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
            Most healthcare providers struggle with outdated digital systems.
          </p>

          <ul className="clinic-challenges-list">
            <li>Websites that don’t convert visitors into appointments</li>
            <li>Low Google visibility when patients search nearby</li>
            <li>Inefficient processes and disconnected tools</li>
            <li>Poor online reputation and lack of reviews</li>
          </ul>
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
