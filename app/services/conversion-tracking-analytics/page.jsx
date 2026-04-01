import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  BarChart3,
  ChartNoAxesCombined,
  MousePointerClick,
  ScanSearch,
  Target,
  TrendingUp,
} from "lucide-react";

export default function ConversionTrackingAnalyticsPage() {
  return (
    <ServicePageLayout
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Conversion Tracking "
      titleMain="& Analytics"
      titleBottom=""
      intro={`Stop guessing where your patients come from.

We set up advanced tracking systems so you can see exactly what’s working — and scale it with confidence.`}
      primaryCtaText="GET A FREE TRACKING AUDIT"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/Conversion Tracking & Analytics/001.jpg"
      heroImageAlt="Conversion tracking and analytics for clinics"

      sectionTwoTitle="If you can’t track it, you can’t grow it."
      sectionTwoTextOne={`Most clinics don’t know what’s actually driving results.

Ads, website, WhatsApp, calls — all disconnected.`}
      sectionTwoTextTwo={`This leads to wasted budget, poor decisions, and slow growth.

We build your Conversion Tracking & Analytics System — giving you full visibility into your patient journey, from first click to confirmed booking.`}
      sectionTwoImage="/assets/img/inner-pages/Conversion Tracking & Analytics/002.png"
      sectionTwoImageAlt="Clinic analytics and tracking setup"

      featureCards={[
        {
          icon: <Target size={28} />,
          title: "Accurate Conversion Tracking",
          text: "Track every lead, call, and booking across all channels.",
        },
        {
          icon: <MousePointerClick size={28} />,
          title: "Multi-Channel Attribution",
          text: "Know exactly which platform is bringing in real patients.",
        },
        {
          icon: <ScanSearch size={28} />,
          title: "Data-Driven Insights",
          text: "Make smarter decisions based on real performance data.",
        },
      ]}

      valueTitle="Turn data into predictable growth"
      valueTextOne={`Without proper tracking, you’re making decisions blindly.

We connect all your data points — ads, website, CRM, and booking systems — so you can clearly see what’s driving results.`}
      valueResultItems={[
        { text: "Better ROI on marketing", tag: "Higher returns", tagColor: "pink" },
        { text: "Smarter budget allocation", tag: "Less waste", tagColor: "green" },
        { text: "Confident scaling decisions", tag: "Predictable growth", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/Conversion Tracking & Analytics/003.png"
      valueImageAlt="Clinic performance analytics dashboard"

      consultationText="Do you know exactly where your patients are coming from?"

      buildTitle="Built for clinics that want clarity and control"
      buildItems={[
        "Clinics running ads without clear ROI",
        "Clinics using multiple marketing channels",
        "Clinics struggling to track conversions",
        "Clinics scaling ad budgets",
        "Data-driven clinic owners",
        "Clinics wanting better decision-making",
      ]}
      buildImage="/assets/img/inner-pages/Conversion Tracking & Analytics/004.png"
      buildImageAlt="Analytics implementation for clinics"

      quoteText="Guessing costs money. Data makes money."

      relatedServices={[
        {
          icon: <TrendingUp size={26} />,
          title: "Intelligence Dashboard",
          text: "See real-time performance in one place.",
        },
        {
          icon: <BarChart3 size={26} />,
          title: "Patient Acquisition Campaigns",
          text: "Drive traffic that can be tracked and optimized.",
        },
        {
          icon: <ChartNoAxesCombined size={26} />,
          title: "Growth Engine",
          text: "Scale campaigns based on real data insights.",
        },
      ]}

      faqs={[
        {
          q: "What does conversion tracking include?",
          a: "Website actions, form submissions, calls, bookings, and ad performance.",
        },
        {
          q: "Will this work with my current tools?",
          a: "Yes — we integrate with most platforms and systems.",
        },
        {
          q: "How accurate is the tracking?",
          a: "We aim for maximum accuracy using advanced setup and best practices.",
        },
        {
          q: "Do I need technical knowledge?",
          a: "No — we handle everything and simplify reporting for you.",
        },
        {
          q: "Can this improve my ad performance?",
          a: "Yes — better tracking leads to better optimization and results.",
        },
        {
          q: "How long does setup take?",
          a: "Typically 1–2 weeks depending on complexity.",
        },
      ]}

      finalCtaText={`Ready to Make Smarter Growth Decisions?

Get full clarity on your marketing performance and scale your clinic with confidence.`}
      finalCtaButtonText="Get Free Tracking Audit"
      finalCtaButtonLink="/contact"
    />
  );
}