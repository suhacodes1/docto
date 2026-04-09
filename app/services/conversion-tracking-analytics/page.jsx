
import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesSix from "@/app/components/ProcessSectionServicesSix";
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
      titleTop="Know Exactly What's Driving"
      titleMain="Your Patient Bookings"
      titleBottom=""
      intro="Stop relying on guesswork. We build a complete tracking system that shows you exactly where your patients come from — so every decision you make is backed by real data."
      primaryCtaText="Get Your Free Tracking Audit"
      primaryCtaLink="/contact"
 
      heroImage="/assets/img/inner-pages/conversion-tracking-analytics/001.webp"
      heroImageAlt="Conversion tracking and analytics for clinics"
 
      sectionTwoTitle="Most clinics are flying blind."
      sectionTwoTextOne={`You're investing in ads, SEO, and your website… but you don't truly know what's working.
 
Leads come in — but from where? Calls happen — but from which campaign? Bookings increase — but why?`}
      sectionTwoTextTwo="Without clear tracking, growth becomes inconsistent and expensive. We implement a Conversion Intelligence System that connects every touchpoint — from first click to confirmed booking."
      sectionTwoImage="/assets/img/inner-pages/conversion-tracking-analytics/002.webp"
      sectionTwoImageAlt="Clinic analytics and tracking setup"
 
      showGrowthSystem={true}
      growthSystemHighlightIndex={0}
 
      featureCards={[
        {
          icon: <Target size={28} />,
          title: "End-to-End Tracking",
          text: "Track every patient interaction — clicks, calls, forms, and bookings.",
        },
        {
          icon: <MousePointerClick size={28} />,
          title: "True Source Attribution",
          text: "Know exactly which channel, campaign, and keyword drives results.",
        },
        {
          icon: <ScanSearch size={28} />,
          title: "Decision-Ready Data",
          text: "Clear insights that guide where to invest, cut, and scale.",
        },
      ]}
 
      valueTitle="Turn marketing into a predictable system"
      valueTextOne="When your data is clear, your growth becomes controllable. We unify your marketing, website, CRM, and booking systems into one tracking ecosystem."
      valueResultLabel="The result:"
      valueResultItems={[
        { text: "You stop wasting budget", tag: "Less waste", tagColor: "pink" },
        { text: "You double down on what works", tag: "Better ROI", tagColor: "green" },
        { text: "You scale with confidence", tag: "Predictable growth", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/conversion-tracking-analytics/003.webp"
      valueImageAlt="Clinic performance analytics dashboard"
 
      consultationText="If you paused your marketing today — would you know what actually worked?"
 
      buildTitle="Built for clinics that want clarity and control"
      buildItems={[
        "Clinics spending on ads without clear ROI",
        "Multi-channel marketing without visibility",
        "Scaling clinics needing accurate data",
        "Owners making decisions based on assumptions",
        "Clinics preparing to grow aggressively",
        "Teams lacking performance clarity",
      ]}
      buildImage="/assets/img/inner-pages/conversion-tracking-analytics/004.webp"
      buildImageAlt="Analytics implementation for clinics"
 
      processComponent={
        <>
          <ProcessSectionServicesSix />
 
        </>
      }
 
      quoteText=" The difference between guessing and scaling is data."
 
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
 
      finalCtaText="Ready to Turn Data Into Growth? Get full clarity on what's working — and scale your clinic with confidence."
      finalCtaButtonText="Get Free Tracking Audit"
      finalCtaButtonLink="/contact"
    />
  );
}