"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";

const faqs = [
  {
    q: "What is influencer marketing?",
    a: "Influencer marketing involves partnering with content creators to promote your brand to their audience in an authentic and engaging way.",
  },
  {
    q: "How do you choose the right influencers?",
    a: "We identify influencers based on audience alignment, engagement quality, content style, and relevance to your brand goals.",
  },
  {
    q: "Can influencer marketing work for small businesses?",
    a: "Yes. Micro-influencers can be highly effective for niche audiences and often deliver strong engagement and trust.",
  },
  {
    q: "What platforms do you work with?",
    a: "We work across Instagram, TikTok, YouTube, LinkedIn, and other platforms depending on your target audience.",
  },
  {
    q: "How do you measure campaign success?",
    a: "We track reach, engagement, clicks, conversions, and overall campaign performance to evaluate impact.",
  },
  {
    q: "Do you manage the full campaign?",
    a: "Yes. We handle outreach, planning, coordination, and performance tracking for end-to-end campaign execution.",
  },
];

export default function InfluencerMarketing() {
  return (
    <ServicePageLayout
      category="Digital Marketing & Brand Campaigns"
      titleTop="Your"
      titleMain="Influencer"
      titleBottom="Marketing"
      intro="Build credibility and reach new audiences through authentic influencer partnerships that align with your brand and campaign goals."
      primaryCtaText="Launch Campaigns"
      primaryCtaLink="/contact"
      heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
      heroImageAlt="Influencer marketing collaboration"
      sectionTwoTitle="Reach audiences through trusted voices"
      sectionTwoTextOne="Influencer marketing helps brands connect with audiences in a more human and relatable way. People trust creators they follow, making recommendations feel more authentic."
      sectionTwoTextTwo="We build partnerships that align with your brand, ensuring campaigns feel natural, engaging, and effective for both your business and your audience."
      sectionTwoImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
      sectionTwoImageAlt="Influencer collaboration planning"
      featureCards={[
        {
          icon: "🤝",
          title: "Authentic Partnerships",
          text: "We connect your brand with creators who genuinely align with your audience and values.",
        },
        {
          icon: "🎯",
          title: "Targeted Reach",
          text: "Reach niche communities that are more likely to engage and convert.",
        },
        {
          icon: "📢",
          title: "Campaign Impact",
          text: "Drive awareness, engagement, and visibility through strategic collaborations.",
        },
      ]}
      valueTitle="Stronger brand trust through real connections"
      valueTextOne="Influencer marketing builds credibility by placing your brand within trusted content rather than traditional ads."
      valueTextTwo="By leveraging creators and their communities, your business can expand reach while maintaining authenticity and relevance."
      valueImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
      valueImageAlt="Social media content creation"
      consultationText="Looking to launch an influencer campaign?"
      buildTitle="We manage influencer campaigns end-to-end"
      buildItems={[
        "Influencer research and selection",
        "Creator outreach and negotiations",
        "Campaign planning and content direction",
        "Brand collaboration management",
        "Content review and approval",
        "Performance tracking and reporting",
      ]}
      buildImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
      buildImageAlt="Campaign management dashboard"
      processTitle="How we build influencer campaigns"
      processSteps={[
        {
          step: "01",
          title: "Campaign Discovery",
          text: "We define your goals, audience, and campaign direction.",
        },
        {
          step: "02",
          title: "Creator Selection",
          text: "We identify influencers that align with your brand.",
        },
        {
          step: "03",
          title: "Campaign Execution",
          text: "We manage collaborations, content, and delivery.",
        },
        {
          step: "04",
          title: "Performance Review",
          text: "We analyse results and optimise future campaigns.",
        },
      ]}
      quoteText="The best influencer campaigns don’t feel like ads — they feel like genuine recommendations people trust."
      relatedServices={[
        {
          icon: "📱",
          title: "Social Media Marketing",
          text: "Build your presence and engagement across key platforms.",
        },
        {
          icon: "📊",
          title: "Digital Marketing Strategy",
          text: "Plan campaigns that align with your growth goals.",
        },
        {
          icon: "🎨",
          title: "Content Creation",
          text: "High-quality visuals and content for your campaigns.",
        },
      ]}
      faqs={faqs}
      finalCtaText="We help brands build authentic influencer campaigns that connect with audiences, strengthen credibility, and drive real results."
      finalCtaButtonText="Book Your Free Marketing Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}