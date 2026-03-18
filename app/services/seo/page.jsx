"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";

const faqs = [
  {
    q: "What is SEO?",
    a: "Search Engine Optimization (SEO) is the process of improving your website’s visibility on search engines like Google to attract more organic traffic.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. You may start seeing improvements within a few months, but strong results typically build over time.",
  },
  {
    q: "What does SEO include?",
    a: "SEO includes keyword research, on-page optimisation, technical improvements, content strategy, and ongoing performance tracking.",
  },
  {
    q: "Can SEO help my business grow?",
    a: "Yes. SEO helps attract high-intent users who are actively searching for your services, leading to more qualified traffic and conversions.",
  },
  {
    q: "Do you provide ongoing SEO support?",
    a: "Yes. We continuously monitor, optimise, and refine your strategy to improve performance over time.",
  },
  {
    q: "Is SEO better than paid ads?",
    a: "Both are valuable. SEO builds long-term organic growth, while paid ads provide immediate visibility. Together, they create a strong strategy.",
  },
];

export default function SearchEngineOptimization() {
  return (
    <ServicePageLayout
      category="Digital Marketing & Growth"
      titleTop="Search Engine"
      titleMain="Optimization"
      titleBottom="(SEO)"
      intro="Improve your search visibility and attract more qualified traffic with SEO strategies designed to strengthen your rankings and grow your online presence."
      primaryCtaText="Grow With SEO"
      primaryCtaLink="/contact"

      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
      heroImageAlt="SEO analytics dashboard"

      sectionTwoTitle="Get discovered where people are searching"
      sectionTwoTextOne="SEO helps your business appear in front of people actively searching for your services. This means more relevant traffic and better opportunities for growth."
      sectionTwoTextTwo="We build strategies that improve rankings, strengthen your website structure, and support consistent, long-term visibility."
      sectionTwoImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
      sectionTwoImageAlt="SEO performance analytics"

      featureCards={[
        {
          icon: "🔍",
          title: "Better Visibility",
          text: "Improve your rankings and appear more often in search results.",
        },
        {
          icon: "🎯",
          title: "Targeted Traffic",
          text: "Attract users actively searching for your services.",
        },
        {
          icon: "📈",
          title: "Sustainable Growth",
          text: "Build long-term visibility that continues to grow over time.",
        },
      ]}

      valueTitle="Build a strong digital foundation"
      valueTextOne="SEO is more than rankings — it’s about building a website that performs well, provides value, and supports your business goals."
      valueTextTwo="We optimise structure, content, and performance to create a foundation that supports long-term growth."
      valueImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
      valueImageAlt="Team analysing SEO data"

      consultationText="Ready to improve your search rankings?"

      buildTitle="What we handle in SEO"
      buildItems={[
        "Keyword research and search intent analysis",
        "On-page optimisation and content structure",
        "Technical SEO and site performance improvements",
        "Content strategy for better rankings",
        "Website audits and performance reviews",
        "Ongoing optimisation and reporting",
      ]}
      buildImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
      buildImageAlt="SEO dashboard"

      processTitle="Our SEO process"
      processSteps={[
        {
          step: "01",
          title: "SEO Audit",
          text: "Analyse your website performance, technical issues, and search visibility.",
        },
        {
          step: "02",
          title: "Strategy Planning",
          text: "Define keywords, opportunities, and optimisation priorities.",
        },
        {
          step: "03",
          title: "Implementation",
          text: "Apply technical, on-page, and content improvements.",
        },
        {
          step: "04",
          title: "Monitoring & Growth",
          text: "Track results, refine strategy, and improve performance over time.",
        },
      ]}

      quoteText="SEO is not just about ranking higher — it’s about being found by the right people at the right time."

      relatedServices={[
        {
          icon: "📊",
          title: "PPC Advertising",
          text: "Drive immediate traffic alongside your long-term SEO strategy.",
        },
        {
          icon: "📱",
          title: "Social Media Marketing",
          text: "Expand reach and engagement across digital platforms.",
        },
        {
          icon: "💻",
          title: "Web Development",
          text: "Build fast, optimised websites that support SEO performance.",
        },
      ]}

      faqs={faqs}

      finalCtaText="We create SEO strategies that improve visibility, attract the right audience, and support sustainable business growth over time."
      finalCtaButtonText="Book Your Free SEO Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}