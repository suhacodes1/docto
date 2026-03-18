"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";

const faqs = [
  {
    q: "What does social media marketing include?",
    a: "It includes content creation, posting strategies, audience engagement, campaign planning, and performance tracking across social platforms.",
  },
  {
    q: "Which platforms do you manage?",
    a: "We work with platforms like Instagram, Facebook, LinkedIn, and others depending on your target audience.",
  },
  {
    q: "How often should I post on social media?",
    a: "Posting frequency depends on your strategy, but consistency is key. We help define a schedule that aligns with your goals.",
  },
  {
    q: "Can social media help grow my business?",
    a: "Yes. Social media helps increase visibility, build trust, and drive engagement that can lead to enquiries and sales.",
  },
  {
    q: "Do you create content as well?",
    a: "Yes. We design and develop branded content tailored to your audience and platform.",
  },
  {
    q: "Do you track performance?",
    a: "Absolutely. We monitor engagement, reach, and growth to optimise your strategy over time.",
  },
];

export default function SocialMediaMarketing() {
  return (
    <ServicePageLayout
      category="Digital Marketing & Brand Growth"
      titleTop="Social Media"
      titleMain="Marketing"
      titleBottom=""
      intro="Build stronger brand awareness and connect with your audience through strategic social media content, campaigns, and platform growth."
      primaryCtaText="Grow Your Brand"
      primaryCtaLink="/contact"

      heroImage="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop"
      heroImageAlt="Social media marketing planning"

      sectionTwoTitle="Social media designed for engagement and trust"
      sectionTwoTextOne="Social media helps your business stay visible, communicate your message, and build real connections with your audience."
      sectionTwoTextTwo="We create strategies that balance creativity and performance to support awareness, engagement, and long-term growth."
      sectionTwoImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
      sectionTwoImageAlt="Social media strategy session"

      featureCards={[
        {
          icon: "💬",
          title: "Engaging Content",
          text: "Create posts and campaigns that capture attention and encourage interaction.",
        },
        {
          icon: "📅",
          title: "Consistent Presence",
          text: "Maintain a steady and professional brand voice across platforms.",
        },
        {
          icon: "📈",
          title: "Strategic Growth",
          text: "Grow your audience with targeted and platform-specific strategies.",
        },
      ]}

      valueTitle="Build a stronger brand presence"
      valueTextOne="Social media is more than posting — it’s about creating meaningful interactions that build trust and recognition."
      valueTextTwo="We align your content, messaging, and visuals to create a cohesive and impactful digital presence."
      valueImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
      valueImageAlt="Team planning social media content"

      consultationText="Ready to grow your social media presence?"

      buildTitle="What we handle in social media marketing"
      buildItems={[
        "Content planning and strategy",
        "Platform-specific content creation",
        "Brand consistency across channels",
        "Campaign development and execution",
        "Audience engagement and communication",
        "Performance tracking and optimisation",
      ]}
      buildImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
      buildImageAlt="Social media dashboard"

      processTitle="Our social media process"
      processSteps={[
        {
          step: "01",
          title: "Brand Review",
          text: "Understand your audience, positioning, and platform focus.",
        },
        {
          step: "02",
          title: "Content Strategy",
          text: "Define messaging, themes, and posting structure.",
        },
        {
          step: "03",
          title: "Creative Execution",
          text: "Design and publish engaging branded content.",
        },
        {
          step: "04",
          title: "Optimisation",
          text: "Track results and refine your strategy for better growth.",
        },
      ]}

      quoteText="Social media isn’t just about posting — it’s about building relationships that turn into real business growth."

      relatedServices={[
        {
          icon: "📈",
          title: "SEO Services",
          text: "Improve your visibility across search engines.",
        },
        {
          icon: "🎯",
          title: "PPC Advertising",
          text: "Drive targeted traffic with paid campaigns.",
        },
        {
          icon: "💻",
          title: "Web Development",
          text: "Create high-performing websites that support your growth.",
        },
      ]}

      faqs={faqs}

      finalCtaText="We create social media strategies that are consistent, engaging, and designed to grow your brand presence across the platforms that matter most."
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}