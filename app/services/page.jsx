import ServicesHeroSection from "../components/ServicesHeroSection";
import ServicesListSection from "../components/ServicesListSection";
import ServicesMarquee from "../components/ServicesMarquee";
import ServicesAbout from "../components/ServicesAbout";
import CaseStudies from "../components/CaseStudies";
import CTASection from "../components/CTASection";
import StatsSection from "../components/StatsSection";
import ProcessSectionServices from "../components/ProcessSectionServices";

export default function ServicesPage() {
  return (
    <main className="services-page">
      <ServicesHeroSection />
      <ServicesMarquee />
      <CaseStudies />
      <ProcessSectionServices />
      <ServicesAbout />
      <ServicesListSection />
      <CTASection />
      <StatsSection />
    </main>
  );
}