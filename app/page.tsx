import Hero from "./components/Hero";
import ClinicChallenges from "./components/ClinicChallenges";
import CoreSolutions from "./components/CoreSolutions";
import AboutSection from "./components/AboutSection";
import GrowthSection from "./components/GrowthSection";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import CaseStudies from "./components/CaseStudies";
import CTASection from "./components/CTASection";
import StatsSection from "./components/StatsSection";
import ProcessSection from "./components/ProcessSection";
import FocusSection from "./components/FocusSection";
export default function Page() {
  return (
    <>
      <Hero />
      <ClinicChallenges />
      <CoreSolutions />
      <AboutSection />
      <GrowthSection />
      <WhoWeWorkWith />
      <CaseStudies />
      <CTASection />
      <StatsSection />
      <ProcessSection />
      <FocusSection />
    </>
  );
}
