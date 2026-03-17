import ServicesHeroSection from "../components/ServicesHeroSection";
import ServicesListSection from "../components/ServicesListSection";
import ServicesMarquee from "../components/ServicesMarquee";
import ServicesAbout from "../components/ServicesAbout";
import CaseStudies from "../components/CaseStudies";
import CTASection from "../components/CTASection";
import StatsSection from "../components/StatsSection";

export default function ServicesPage() {
  return (
    <main className="services-page">
      <ServicesHeroSection />
      <ServicesMarquee />
      <CaseStudies />
      <ServicesAbout />
      <ServicesListSection />
      <CTASection />
      <StatsSection />
    </main>
  );
}