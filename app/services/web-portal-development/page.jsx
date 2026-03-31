"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";
import { Settings, Lock, TrendingUp, Monitor, Cloud, BarChart } from 'lucide-react';

const faqs = [
  {
    q: "What is enterprise software?",
    a: "Enterprise software is built to support large-scale business operations, including internal workflows, data systems, and organisational processes.",
  },
  {
    q: "Can you build custom internal tools?",
    a: "Yes. We develop tailored systems that align with your workflows, teams, and operational requirements.",
  },
  {
    q: "Is enterprise software scalable?",
    a: "Absolutely. Our solutions are designed to grow with your business, supporting more users, features, and integrations over time.",
  },
  {
    q: "Do you handle system integrations?",
    a: "Yes. We integrate platforms, APIs, and data systems to ensure smooth communication across your tools.",
  },
  {
    q: "How secure are your systems?",
    a: "We build enterprise-grade systems with strong authentication, access control, and data security practices.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We offer maintenance, optimisation, and improvements as your business evolves.",
  },
];

export default function EnterpriseSoftwareDevelopment() {
  return (
    <><ServicePageLayout
        category="Web & Software Solutions"
        titleTop="Enterprise"
        titleMain="Software"
        titleBottom="Development"
        intro="We build robust enterprise software solutions that streamline operations, support complex workflows, and help organisations work more efficiently at scale."
        primaryCtaText="Start Your Project"
        primaryCtaLink="/contact"

        heroImage="/assets/img/services-page/web-portal-development/001.webp"
        heroImageAlt="Enterprise software dashboard"

        sectionTwoTitle="Software designed for complex business needs"
        sectionTwoTextOne="Enterprise software requires more than just functionality — it must align with business operations, support teams, and improve efficiency across departments."
        sectionTwoTextTwo="We build tailored platforms that integrate workflows, systems, and processes into a scalable and structured solution."
        sectionTwoImage="/assets/img/services-page/web-portal-development/002.webp"
        sectionTwoImageAlt="Service page image 2"

        featureCards={[
          {
            icon: <Settings size={38} />,
            title: "Workflow Automation",
            text: "Streamline internal processes and reduce manual work across teams.",
          },
          {
            icon: <Lock size={38} />,
            title: "Secure Systems",
            text: "Enterprise-grade permissions and access control for your organisation.",
          },
          {
            icon: <TrendingUp size={38} />,
            title: "Scalable Architecture",
            text: "Systems designed to grow with your business and operations.",
          },
        ]}

        valueTitle="Built for reliability and long-term performance"
        valueTextOne="Enterprise systems must be stable, scalable, and aligned with real business operations. We design solutions that support teams, workflows, and long-term growth."
        valueTextTwo="Our approach focuses on performance, structure, and adaptability to ensure your system continues delivering value as your organisation evolves."
        valueImage="/assets/img/services-page/web-portal-development/003.webp"
        valueImageAlt="Service page image 3"

        consultationText="Need software tailored to your business operations?"

        buildTitle="What we build for enterprise systems"
        buildItems={[
          "Internal business tools and workflow systems",
          "Role-based access and user management",
          "Cross-platform integrations and APIs",
          "Data management and reporting systems",
          "Scalable infrastructure for growth",
          "Custom dashboards and operational tools",
        ]}
        buildImage="/assets/img/services-page/web-portal-development/004.webp"
        buildImageAlt="Enterprise dashboard"

        processTitle="How we develop enterprise platforms"
        processSteps={[
          {
            step: "01",
            title: "Business Analysis",
            text: "Map workflows, users, and system requirements.",
          },
          {
            step: "02",
            title: "System Design",
            text: "Plan architecture, integrations, and permissions.",
          },
          {
            step: "03",
            title: "Software Development",
            text: "Build scalable and secure systems tailored to operations.",
          },
          {
            step: "04",
            title: "Deployment & Support",
            text: "Launch, optimise, and support long-term usage.",
          },
        ]}

        quoteText="Enterprise software isn’t just about features — it’s about building systems that support how your business actually works."

        relatedServices={[
          {
            icon: <Monitor size={38} />,
            title: "Custom Software Development",
            text: "Tailored systems built for your specific business needs.",
          },
          {
            icon: <Cloud size={38} />,
            title: "SaaS Development",
            text: "Build scalable cloud-based platforms and applications.",
          },
          {
            icon: <BarChart size={38} />,
            title: "Data & Analytics",
            text: "Turn business data into actionable insights.",
          },
        ]}

        faqs={faqs}

        finalCtaText="We design enterprise software that is scalable, secure, and built around your operations — helping your organisation run more efficiently and grow with confidence."
        finalCtaButtonText="Book Your Free Consultation"
        finalCtaButtonLink="/contact"
      />
    </>
  );
}

