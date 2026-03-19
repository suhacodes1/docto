"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";

const faqs = [
  {
    q: "What types of websites do you build?",
    a: "We build everything from marketing websites and landing pages to complex web apps, client portals, booking systems, and internal platforms — all custom-built around your workflows.",
  },
  {
    q: "How long does a custom website take?",
    a: "Timelines vary by complexity. A marketing site typically takes 4–8 weeks. A complex platform or portal can take 10–16 weeks. We’ll give you a clear timeline after discovery.",
  },
  {
    q: "Do you build on WordPress or custom frameworks?",
    a: "We build on the best stack for your needs — Next.js, React, or headless CMS setups. We avoid limiting you to rigid page builders unless it suits the brief.",
  },
  {
    q: "Will my site be SEO-friendly?",
    a: "Absolutely. SEO structure, performance optimisation, semantic HTML, and Core Web Vitals are built in from the start — not bolted on at the end.",
  },
  {
    q: "Can you integrate with our existing tools?",
    a: "Yes. We regularly integrate with CRMs, booking systems, payment gateways, email platforms, ERPs, and custom APIs.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "We offer ongoing support and maintenance packages so your platform stays fast, secure, and evolving with your business.",
  },
];

export default function CustomWebDevelopment() {
  return (
    <ServicePageLayout
      category="Web & Software Solutions"
      titleTop="Your"
      titleMain="Custom Web"
      titleBottom="Development"
      intro="We build custom websites and web platforms designed around your workflows, users, and growth goals — not generic templates. Every solution is built to scale with your business."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
      heroImageAlt="Custom web development"
      sectionTwoTitle="Your competitors have great websites. Do you?"
      sectionTwoTextOne="The difference between a business that grows online and one that doesn't often comes down to the quality of their digital presence. A generic template won't cut it when your competitors are investing in custom platforms built for conversion."
      sectionTwoTextTwo="We build websites that are fast, scalable, and designed with your specific users and workflows in mind — giving you a platform that works as hard as you do."
      sectionTwoImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
      sectionTwoImageAlt="Competitor landscape"
      featureCards={[
        {
          icon: "⚡",
          title: "Performance-First Builds",
          text: "Every project is optimised for Core Web Vitals, fast load times, and smooth interactions from day one.",
        },
        {
          icon: "📐",
          title: "Strategy-Led Design",
          text: "We start with your business goals, user journeys, and conversion targets — then design around them.",
        },
        {
          icon: "🔗",
          title: "Deep Integrations",
          text: "CRMs, booking systems, payment gateways, APIs — we connect your web platform to your entire business stack.",
        },
      ]}
      valueTitle="More leads with a website built for conversion"
      valueTextOne="A beautiful website that doesn't convert is just an expensive business card. We build with conversion architecture in mind — structuring every page, CTA, and user journey to turn visitors into enquiries."
      valueTextTwo="From landing pages to full platforms, we focus on what actually matters: measurable results for your business."
      valueImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
      valueImageAlt="Conversion analytics"
      consultationText="Looking for a Free Web Development Consultation?"
      buildTitle="We build digital platforms for every use case"
      buildItems={[
        "Custom marketing websites & landing pages",
        "Web applications & SaaS platforms",
        "Client portals & internal dashboards",
        "Booking & appointment systems",
        "eCommerce & payment integrations",
        "API integrations with third-party tools",
      ]}
      buildImage="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop"
      buildImageAlt="Digital platform development"
      processTitle="How we build your platform"
      processSteps={[
        {
          step: "01",
          title: "Discovery",
          text: "We analyse your goals, workflows, and users to define the structure and functionality of your platform.",
        },
        {
          step: "02",
          title: "Design",
          text: "Wireframes and high-fidelity designs focused on usability, clarity, brand, and conversion performance.",
        },
        {
          step: "03",
          title: "Development",
          text: "Clean, scalable code built with modern frameworks — with performance and maintainability baked in.",
        },
        {
          step: "04",
          title: "Launch",
          text: "After rigorous testing and optimisation, we launch your platform ready to grow with your business.",
        },
      ]}
      quoteText="Our team builds platforms with strategy, precision, and a focus on real business outcomes — not just pixel-perfect designs that don't convert."
      relatedServices={[
        {
          icon: "🎨",
          title: "UI/UX Design",
          text: "User-centred interface design that turns complex workflows into simple, intuitive digital experiences.",
        },
        {
          icon: "📱",
          title: "Responsive Web Design",
          text: "Every platform we build is optimised for all screen sizes — desktop, tablet, and mobile.",
        },
        {
          icon: "🏢",
          title: "Enterprise Solutions",
          text: "Large-scale platforms built for complex organisational needs, multiple users, and deep integrations.",
        },
      ]}
      faqs={faqs}
      finalCtaText="Our team builds digital platforms with strategy, precision, and a focus on outcomes — giving you complete transparency throughout every stage of the project."
      finalCtaButtonText="Book Your Free Web Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}