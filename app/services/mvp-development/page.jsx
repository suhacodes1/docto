"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";
import { Zap, Target, TrendingUp, Monitor, Rocket, BarChart } from 'lucide-react';

const faqs = [
  {
    q: "What is an MVP?",
    a: "A Minimum Viable Product (MVP) is a simplified version of your product that includes only the core features needed to launch and test your idea with real users.",
  },
  {
    q: "Why should I build an MVP first?",
    a: "An MVP allows you to validate your idea quickly, reduce risk, and gather real feedback before investing in full-scale development.",
  },
  {
    q: "How long does it take to build an MVP?",
    a: "Most MVPs can be built within a few weeks to a couple of months depending on complexity, features, and integrations.",
  },
  {
    q: "Can the MVP scale later?",
    a: "Yes. We build MVPs with scalable architecture so they can evolve into full products as your business grows.",
  },
  {
    q: "Do you help with product strategy?",
    a: "Absolutely. We help define your product direction, prioritise features, and plan a roadmap for growth.",
  },
  {
    q: "What happens after launch?",
    a: "We analyse user feedback, improve features, and continue building the product based on real-world usage.",
  },
];

export default function MVPDevelopment() {
  return (
    <><ServicePageLayout
      category="Web & Software Solutions"
      titleTop="Your"
      titleMain="MVP"
      titleBottom="Development"
      intro="Launch your product faster with a focused Minimum Viable Product that allows you to test ideas, attract early users, and validate your concept before scaling."
      primaryCtaText="Start Your MVP"
      primaryCtaLink="/contact"
      heroImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
      heroImageAlt="MVP product development workspace"

      sectionTwoTitle="Validate your idea before scaling"
      sectionTwoTextOne="MVP development helps startups and innovators bring products to market quickly without overbuilding. Instead of creating everything at once, we focus on the core features that matter most."
      sectionTwoTextTwo="This approach allows you to test your idea with real users, gather feedback, and refine your product before committing to a full-scale build."
      sectionTwoImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
      sectionTwoImageAlt="Startup product planning"

      featureCards={[
        {
          icon: <Zap size={38} />,
          title: "Fast Launch",
          text: "We prioritise speed so your product can reach users quickly and start generating feedback.",
        },
        {
          icon: <Target size={38} />,
          title: "Focused Features",
          text: "Only the essential features are built to reduce cost, complexity, and time to market.",
        },
        {
          icon: <TrendingUp size={38} />,
          title: "Scalable Foundation",
          text: "Your MVP is built with future growth in mind, allowing seamless expansion later.",
        },
      ]}

      valueTitle="Build smarter, not bigger"
      valueTextOne="Instead of investing heavily in a full product upfront, an MVP lets you test assumptions, validate demand, and refine your idea with minimal risk."
      valueTextTwo="We help you identify what matters most, build it efficiently, and create a strong foundation for future development."
      valueImage="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop"
      valueImageAlt="Startup product development process"

      consultationText="Have an idea you want to launch?"

      buildTitle="What we focus on in MVP development"
      buildItems={[
        "Product strategy and idea validation",
        "Core feature prioritisation",
        "User-friendly interfaces and flows",
        "Scalable backend architecture",
        "Rapid development and deployment",
        "Feedback collection and iteration planning",
      ]}
      buildImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
      buildImageAlt="MVP dashboard interface"

      processTitle="Our MVP development framework"
      processSteps={[
        {
          step: "01",
          title: "Product Strategy",
          text: "We define the problem, target users, and key value your product delivers.",
        },
        {
          step: "02",
          title: "Feature Planning",
          text: "We identify the essential features needed for launch and remove unnecessary complexity.",
        },
        {
          step: "03",
          title: "MVP Development",
          text: "We build a lean, functional product ready for early users and testing.",
        },
        {
          step: "04",
          title: "Iteration & Growth",
          text: "We refine the product based on real feedback and prepare for scaling.",
        },
      ]}

      quoteText="The goal of an MVP is not perfection — it’s learning fast, improving quickly, and building something users actually want."

      relatedServices={[
        {
          icon: <Monitor size={38} />,
          title: "Custom Web Development",
          text: "Build scalable platforms and applications tailored to your product idea.",
        },
        {
          icon: <Rocket size={38} />,
          title: "Startup Product Development",
          text: "End-to-end support for building and launching digital products.",
        },
        {
          icon: <BarChart size={38} />,
          title: "Data & Analytics",
          text: "Track user behaviour and make informed decisions as your product grows.",
        },
      ]}

      faqs={faqs}

      finalCtaText="We help founders and businesses turn ideas into real, testable products — giving you the clarity and confidence to grow."
      finalCtaButtonText="Book Your Free MVP Consultation"
      finalCtaButtonLink="/contact"
    />
    </>
  );
}

