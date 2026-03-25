
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
import { useGSAPAnimation } from "./hooks/useGSAPAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Paradigm | Smarter Digital Systems for Healthcare",
  description: "Health - Digital Paradigm: Transform your healthcare business with custom web development, SaaS solutions, and digital marketing. We build scalable platforms that drive growth and improve patient experiences.",
  keywords: "healthcare digital solutions, custom web development, SaaS for healthcare, medical software, digital marketing healthcare",
  openGraph: {
    title: "Digital Paradigm | Smarter Digital Systems for Healthcare",
    description: "Health - Digital Paradigm: Transform your healthcare business with custom web development, SaaS solutions, and digital marketing. We build scalable platforms that drive growth and improve patient experiences.",
    url: "https://digitalparadigm.com/health",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Paradigm | Smarter Digital Systems for Healthcare",
    description: "Health - Digital Paradigm: Transform your healthcare business with custom web development, SaaS solutions, and digital marketing.",
  },
  alternates: {
    canonical: "https://digitalparadigm.com/health",
  },
};

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


