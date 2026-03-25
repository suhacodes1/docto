"use client";

import ServicePageLayout from "@/app/components/ServicePageLayout";
import { Zap, Target, BarChart, TrendingUp, Smartphone } from 'lucide-react';

const faqs = [
  {
    q: "What is PPC advertising?",
    a: "Pay-Per-Click (PPC) advertising is a model where you pay each time someone clicks on your ad. It allows businesses to appear in front of high-intent users quickly.",
  },
  {
    q: "Which platforms do you run PPC campaigns on?",
    a: "We manage campaigns across Google Ads, Bing, YouTube, and social platforms like Facebook and Instagram depending on your audience.",
  },
  {
    q: "How quickly can PPC generate results?",
    a: "PPC can drive traffic almost immediately after launch, making it one of the fastest ways to generate visibility and leads.",
  },
  {
    q: "Do you optimise campaigns over time?",
    a: "Yes. We continuously monitor performance, adjust targeting, refine ads, and optimise budgets to improve results.",
  },
  {
    q: "How do you measure PPC success?",
    a: "We track key metrics such as clicks, conversions, cost-per-click, return on ad spend, and overall campaign performance.",
  },
  {
    q: "Can PPC work alongside SEO?",
    a: "Absolutely. PPC provides immediate traffic while SEO builds long-term visibility — together they create a strong marketing strategy.",
  },
];

export default function PayPerClick() {
  return (
    <><ServicePageLayout
        category="Paid Advertising & Digital Growth"
        titleTop="Your"
        titleMain="Pay-Per-Click"
        titleBottom="Campaigns"
        intro="Reach high-intent audiences faster with strategic PPC campaigns designed to drive clicks, conversions, and measurable business results."
        primaryCtaText="Launch Campaigns"
        primaryCtaLink="/contact"

        heroImage="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop"
        heroImageAlt="PPC campaign performance dashboard"

        sectionTwoTitle="Get in front of the right audience faster"
        sectionTwoTextOne="PPC advertising allows your business to appear exactly when people are searching for your products or services. This means higher intent, better targeting, and faster results."
        sectionTwoTextTwo="We build campaigns around strategy, keywords, and user behaviour to ensure your ads reach the right people at the right time."
        sectionTwoImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
        sectionTwoImageAlt="Digital marketing analytics dashboard"

        featureCards={[
          {
            icon: <Zap size={38} />,
            title: "Immediate Visibility",
            text: "Appear in front of potential customers instantly with well-targeted paid campaigns.",
          },
          {
            icon: <Target size={38} />,
            title: "Precise Targeting",
            text: "Reach specific audiences based on intent, location, and behaviour.",
          },
          {
            icon: <BarChart size={38} />,
            title: "Measurable Results",
            text: "Track performance clearly and optimise campaigns for better returns.",
          },
        ]}

        valueTitle="Turn clicks into real business results"
        valueTextOne="PPC is not just about traffic — it’s about attracting the right users who are ready to take action. With the right strategy, campaigns can generate leads, sales, and measurable growth."
        valueTextTwo="We focus on optimising every part of the funnel, from ad copy to landing pages, to ensure your campaigns perform efficiently."
        valueImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
        valueImageAlt="Marketing team analysing campaign data"

        consultationText="Ready to run high-performing PPC campaigns?"

        buildTitle="What we handle in PPC campaigns"
        buildItems={[
          "Keyword research and targeting strategy",
          "Ad copy creation and testing",
          "Landing page alignment and optimisation",
          "Campaign setup and management",
          "Budget management and performance tracking",
          "Ongoing optimisation and reporting",
        ]}
        buildImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
        buildImageAlt="Campaign analytics interface"

        processTitle="How we build PPC campaigns"
        processSteps={[
          {
            step: "01",
            title: "Campaign Planning",
            text: "We define your goals, audience, budget, and targeting strategy.",
          },
          {
            step: "02",
            title: "Ad Development",
            text: "We create high-performing ad copy and structure campaigns for success.",
          },
          {
            step: "03",
            title: "Campaign Launch",
            text: "We deploy campaigns with tracking and performance optimisation in place.",
          },
          {
            step: "04",
            title: "Optimisation & Reporting",
            text: "We refine campaigns continuously to improve ROI and performance.",
          },
        ]}

        quoteText="The most effective PPC campaigns don’t just drive clicks — they drive meaningful actions and measurable growth."

        relatedServices={[
          {
            icon: <TrendingUp size={38} />,
            title: "SEO Services",
            text: "Build long-term organic visibility alongside your paid campaigns.",
          },
          {
            icon: <Smartphone size={38} />,
            title: "Social Media Marketing",
            text: "Expand reach and engagement across key digital platforms.",
          },
          {
            icon: <Target />,
            title: "Digital Strategy",
            text: "Plan integrated campaigns that align with your business goals.",
          },
        ]}

        faqs={faqs}

        finalCtaText="We design PPC campaigns that are focused, measurable, and built to deliver real results — helping your business grow faster with smarter advertising."
        finalCtaButtonText="Book Your Free PPC Consultation"
        finalCtaButtonLink="/contact"
      />
    </>
  );
}

