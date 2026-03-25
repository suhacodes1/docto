"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";
import { Cloud, Lock, BarChart, Rocket, Monitor } from 'lucide-react';

const faqs = [
  {
    q: "What is SaaS development?",
    a: "SaaS (Software as a Service) development involves building cloud-based applications that users can access through a browser, often with subscription-based access.",
  },
  {
    q: "Can you build subscription-based platforms?",
    a: "Yes. We develop SaaS products with subscription systems, user authentication, billing, and account management.",
  },
  {
    q: "Is SaaS scalable?",
    a: "Absolutely. SaaS platforms are designed to scale with users, data, and features over time.",
  },
  {
    q: "Do you build dashboards and admin panels?",
    a: "Yes. We create intuitive dashboards, admin panels, and analytics tools for managing your platform.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern stacks like React, Node.js, cloud services, and scalable databases depending on your project needs.",
  },
  {
    q: "Can you improve an existing SaaS product?",
    a: "Yes. We can enhance features, improve UX, and optimise performance for existing platforms.",
  },
];

export default function SaaSDevelopment() {
  return (
    <><ServicePageLayout
        category="Web & Software Solutions"
        titleTop="Scalable"
        titleMain="SaaS"
        titleBottom="Development"
        intro="We design and develop scalable SaaS platforms that deliver powerful functionality while maintaining clean user experiences."
        primaryCtaText="Build Your SaaS"
        primaryCtaLink="/contact"

        heroImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
        heroImageAlt="SaaS platform dashboard"

        sectionTwoTitle="Software built to scale"
        sectionTwoTextOne="SaaS platforms require strong architecture, intuitive design, and reliable performance. We build systems that support subscriptions, dashboards, analytics, and long-term growth."
        sectionTwoTextTwo="Our approach ensures your product remains scalable, secure, and easy to use as your user base expands."
        sectionTwoImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
        sectionTwoImageAlt="Software analytics dashboard"

        featureCards={[
          {
            icon: <Cloud size={38} />,
            title: "Cloud-Based",
            text: "Built on scalable cloud infrastructure for flexibility and growth.",
          },
          {
            icon: <Lock size={38} />,
            title: "Secure Systems",
            text: "User authentication, data protection, and secure access controls.",
          },
          {
            icon: <BarChart size={38} />,
            title: "Powerful Dashboards",
            text: "Clean interfaces for managing users, data, and insights.",
          },
        ]}

        valueTitle="Built for long-term growth"
        valueTextOne="A successful SaaS product is more than just software — it’s a system designed for continuous improvement, user retention, and scalability."
        valueTextTwo="We focus on building strong foundations so your product can evolve with new features, users, and business needs."
        valueImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
        valueImageAlt="Team working on software product"

        consultationText="Ready to build a scalable SaaS platform?"

        buildTitle="What we build in SaaS platforms"
        buildItems={[
          "User authentication and account systems",
          "Subscription and billing integration",
          "Admin dashboards and analytics tools",
          "Cloud-based scalable architecture",
          "API integrations and backend systems",
          "User-friendly product interfaces",
        ]}
        buildImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
        buildImageAlt="SaaS interface"

        processTitle="Our SaaS development process"
        processSteps={[
          {
            step: "01",
            title: "Product Planning",
            text: "Define architecture, features, and user roles for your SaaS platform.",
          },
          {
            step: "02",
            title: "UX Design",
            text: "Design intuitive dashboards and user flows for better usability.",
          },
          {
            step: "03",
            title: "Platform Development",
            text: "Build scalable systems with secure infrastructure and integrations.",
          },
          {
            step: "04",
            title: "Growth & Optimisation",
            text: "Refine features, improve performance, and scale your platform.",
          },
        ]}

        quoteText="Great SaaS products are built for scale from day one — combining usability, performance, and long-term vision."

        relatedServices={[
          {
            icon: <Rocket size={38} />,
            title: "MVP Development",
            text: "Launch your SaaS idea quickly with a focused MVP approach.",
          },
          {
            icon: <Monitor size={38} />,
            title: "Custom Software Development",
            text: "Build tailored systems designed for your business needs.",
          },
          {
            icon: <BarChart size={38} />,
            title: "Data & Analytics",
            text: "Track performance and gain insights to improve your product.",
          },
        ]}

        faqs={faqs}

        finalCtaText="We build SaaS platforms that are scalable, secure, and designed to grow with your business — helping you turn ideas into powerful digital products."
        finalCtaButtonText="Book Your Free SaaS Consultation"
        finalCtaButtonLink="/contact"
      />
    </>
  );
}

