import ServicesHeroSection from "../components/ServicesHeroSection";
import ServicesListSection from "../components/ServicesListSection";
import ServicesMarquee from "../components/ServicesMarquee";
import ServicesAbout from "../components/ServicesAbout";
import CaseStudies from "../components/CaseStudies";
import CTASection from "../components/CTASection";
import StatsSection from "../components/StatsSection";
import ProcessSectionServices from "../components/ProcessSectionServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Digital Paradigm - Healthcare Digital Solutions",
  description: "Health - Digital Paradigm: Explore our comprehensive digital services for healthcare: custom web development, SaaS platforms, UI/UX design, SEO, PPC, and more. Tailored solutions for clinics and medical brands.",
  keywords: "healthcare digital services, custom web development, SaaS development, UI/UX design, SEO services, PPC advertising, digital marketing healthcare",
  openGraph: {
    title: "Our Services | Digital Paradigm - Healthcare Digital Solutions",
    description: "Health - Digital Paradigm: Explore our comprehensive digital services for healthcare: custom web development, SaaS platforms, UI/UX design, SEO, PPC, and more.",
    url: "https://health.digitalparadigm.com/services",
    siteName: "Digital Paradigm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Digital Paradigm - Healthcare Digital Solutions",
    description: "Health - Digital Paradigm: Explore our comprehensive digital services for healthcare: custom web development, SaaS platforms, UI/UX design, SEO, PPC, and more.",
  },
  alternates: {
    canonical: "https://health.digitalparadigm.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="services-page">
      <ServicesHeroSection />
      <ServicesMarquee />
      <CaseStudies />
      {/* <ProcessSectionServices /> */}
      <ServicesAbout />
      <ServicesListSection />
      <CTASection />
      <StatsSection />
    </main>
  );
}

