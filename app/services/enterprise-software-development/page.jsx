"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";
import { Settings, Lock, TrendingUp, Puzzle, BarChart, RefreshCw } from 'lucide-react';

const faqs = [
  {
    q: "What kind of enterprise software do you build?",
    a: "We build internal business systems, workflow automation platforms, staff portals, admin dashboards, reporting tools, and custom enterprise applications tailored to your organisation’s operations.",
  },
  {
    q: "Can you integrate enterprise software with our existing systems?",
    a: "Yes. We regularly integrate enterprise platforms with CRMs, ERPs, payment systems, databases, third-party APIs, and other internal tools so your software works as part of a connected ecosystem.",
  },
  {
    q: "Is enterprise software scalable for growing teams?",
    a: "Absolutely. We design enterprise systems with scalability in mind so they can support more users, departments, workflows, and business requirements as your organisation grows.",
  },
  {
    q: "How do you handle security and permissions?",
    a: "Security is built into the development process from the start. We implement role-based permissions, secure authentication flows, protected data handling, and access controls suited to enterprise environments.",
  },
  {
    q: "How long does enterprise software development take?",
    a: "Timelines depend on complexity, integrations, and workflow requirements. Smaller systems may take several weeks, while larger enterprise platforms can take several months. We provide a clear roadmap after discovery.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We offer ongoing support, maintenance, optimisation, and future feature development so your enterprise platform continues to perform as your business evolves.",
  },
];

export default function EnterpriseSoftwareDevelopment() {
  return (
    <><ServicePageLayout
        category="Web & Software Solutions"
        titleTop="Your"
        titleMain="Enterprise Software"
        titleBottom="Development"
        intro="We build robust enterprise software solutions that streamline operations, support complex workflows, and help organisations work more efficiently at scale."
        primaryCtaText="Start Your Project"
        primaryCtaLink="/contact"
        heroImage="/assets/img/services-page/enterprise-software-development/001.webp"
        heroImageAlt="Enterprise software dashboard"
        sectionTwoTitle="Software designed for complex business operations"
        sectionTwoTextOne="Enterprise software needs to do more than function well — it must support departments, connect business processes, and improve how teams work every day. Generic tools often create friction instead of solving it."
        sectionTwoTextTwo="We create enterprise platforms tailored to your organisation’s workflows, permissions, reporting needs, and long-term digital strategy, so your software fits the way your business actually operates."
        sectionTwoImage="/assets/img/services-page/enterprise-software-development/002.webp"
        sectionTwoImageAlt="Service page image 2"
        featureCards={[
          {
            icon: <Settings size={38} />,
            title: "Workflow-Driven Systems",
            text: "We build software around the real processes your teams follow, improving efficiency across departments and day-to-day operations.",
          },
          {
            icon: <Lock size={38} />,
            title: "Secure Access Control",
            text: "Role-based permissions, protected data flows, and structured access levels help your organisation stay secure and well governed.",
          },
          {
            icon: <TrendingUp size={38} />,
            title: "Built To Scale",
            text: "Our enterprise platforms are designed to support growing teams, more complex workflows, and future system expansion.",
          },
        ]}
        valueTitle="Better efficiency with software built around your organisation"
        valueTextOne="When teams rely on disconnected tools and manual workarounds, operations become slower, more error-prone, and harder to scale. Enterprise software solves this by centralising workflows and giving your teams the tools they actually need."
        valueTextTwo="From internal dashboards to process automation and reporting systems, we focus on building platforms that create measurable efficiency, visibility, and long-term business value."
        valueImage="/assets/img/services-page/enterprise-software-development/003.webp"
        valueImageAlt="Service page image 3"
        consultationText="Looking for a tailored enterprise software solution?"
        buildTitle="We build enterprise platforms for complex business needs"
        buildItems={[
          "Internal business systems and admin portals",
          "Workflow automation and operational dashboards",
          "Role-based platforms with secure permissions",
          "Custom reporting and analytics interfaces",
          "Cross-system integrations and data syncing",
          "Scalable enterprise applications for growing teams",
        ]}
        buildImage="/assets/img/services-page/enterprise-software-development/004.webp"
        buildImageAlt="Enterprise platform development"
        processTitle="How we develop enterprise software"
        processSteps={[
          {
            step: "01",
            title: "Business Analysis",
            text: "We map your workflows, users, teams, and operational requirements before defining the software structure.",
          },
          {
            step: "02",
            title: "System Design",
            text: "Architecture, permissions, interfaces, and integrations are planned around how your organisation actually works.",
          },
          {
            step: "03",
            title: "Development",
            text: "We build secure, scalable enterprise software using modern technologies and clean implementation practices.",
          },
          {
            step: "04",
            title: "Deployment & Support",
            text: "Testing, rollout, optimisation, and ongoing support ensure the platform performs reliably over time.",
          },
        ]}
        quoteText="The best enterprise software doesn’t just support operations — it improves visibility, reduces friction, and helps the entire organisation work more effectively."
        relatedServices={[
          {
            icon: <Puzzle size={38} />,
            title: "Custom Web Development",
            text: "Tailored web platforms and digital experiences built around your workflows, users, and growth goals.",
          },
          {
            icon: <BarChart size={38} />,
            title: "Web Portal Development",
            text: "Secure portals for staff, clients, or stakeholders with structured access and streamlined user journeys.",
          },
          {
            icon: <RefreshCw size={38} />,
            title: "Workflow Automation",
            text: "Automated processes and integrated systems that reduce manual admin and improve operational efficiency.",
          },
        ]}
        faqs={faqs}
        finalCtaText="Our team builds enterprise software with strategy, structure, and a focus on long-term operational value — giving you a solution that supports your teams now and scales with your business later."
        finalCtaButtonText="Book Your Free Enterprise Consultation"
        finalCtaButtonLink="/contact"
      />
    </>
  );
}

