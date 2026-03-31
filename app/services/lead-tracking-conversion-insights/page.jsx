import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  ArrowRightLeft,
  ChartColumnIncreasing,
  Filter,
  SearchCheck,
  UsersRound,
  Waypoints,
} from "lucide-react";

export default function LeadTrackingConversionInsightsPage() {
  return (
    <ServicePageLayout
      category="Intelligence Dashboard"
      titleTop="Lead Tracking"
      titleMain="Conversion Insights"
      titleBottom="for Clinics"
      intro="Track how leads move from first enquiry to booked patient so your clinic can improve conversion pathways with clearer data and better insight."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/lead-tracking-conversion-insights/hero.webp"
      heroImageAlt="Lead tracking and conversion insights for clinics"
      sectionTwoTitle="Why Lead Tracking Matters"
      sectionTwoTextOne="Without lead tracking, clinics often do not know where enquiries are coming from, how leads are progressing, or where conversion opportunities are being lost."
      sectionTwoTextTwo="Lead tracking and conversion insights help your clinic understand the full patient journey from first touchpoint through to action, making optimisation easier and more targeted."
      sectionTwoImage="/assets/img/services/lead-tracking-conversion-insights/section-two.webp"
      sectionTwoImageAlt="Clinic lead tracking and conversions"
      featureCards={[
        {
          icon: <UsersRound size={28} />,
          title: "Clearer Lead Visibility",
          text: "Understand where leads are entering your system and how they move through it.",
        },
        {
          icon: <ArrowRightLeft size={28} />,
          title: "Better Conversion Insights",
          text: "See which stages of the patient journey are converting well and where drop-off happens.",
        },
        {
          icon: <SearchCheck size={28} />,
          title: "Smarter Optimisation",
          text: "Improve follow-up, campaigns, and landing pages using clearer lead data.",
        },
      ]}
      valueTitle="How Lead Tracking Supports Growth"
      valueTextOne="Lead tracking helps clinics improve conversion by showing how potential patients interact with your marketing, website, and follow-up systems."
      valueTextTwo="It becomes easier to improve results when you can identify where high-intent leads are being lost and where stronger processes are needed."
      valueImage="/assets/img/services/lead-tracking-conversion-insights/value.webp"
      valueImageAlt="Lead conversion tracking for clinics"
      consultationText="Want better visibility into how your leads become patients?"
      buildTitle="What We Help Build"
      buildItems={[
        "Lead tracking systems",
        "Conversion journey mapping",
        "Patient enquiry stage visibility",
        "Lead source monitoring",
        "Drop-off point identification",
        "Conversion reporting improvements",
        "Pipeline insight dashboards",
        "Optimisation-focused lead analytics",
      ]}
      buildImage="/assets/img/services/lead-tracking-conversion-insights/build.webp"
      buildImageAlt="Lead tracking system build"
      quoteText="When you can see how leads move, it becomes much easier to improve how they convert."
      relatedServices={[
        {
          icon: <ChartColumnIncreasing size={26} />,
          title: "Conversion Tracking & Analytics",
          text: "Measure key patient actions and connect them to stronger growth decisions.",
        },
        {
          icon: <Waypoints size={26} />,
          title: "ROI Campaign Attribution",
          text: "Understand which channels are generating leads that actually convert.",
        },
        {
          icon: <Filter size={26} />,
          title: "Realtime Performance Dashboard",
          text: "Bring lead activity and conversion signals into one clear reporting view.",
        },
      ]}
      faqs={[
        {
          q: "What is lead tracking for clinics?",
          a: "It is the process of monitoring how patient enquiries enter your system and move toward booking or conversion.",
        },
        {
          q: "Why are conversion insights important?",
          a: "They help reveal where leads are progressing well and where your clinic may be losing opportunities.",
        },
        {
          q: "Can this improve marketing performance?",
          a: "Yes, better lead tracking helps you see which channels and workflows are driving stronger patient outcomes.",
        },
        {
          q: "Does this only help paid campaigns?",
          a: "No, it can support insights across ads, SEO, referrals, and other enquiry sources.",
        },
      ]}
      finalCtaText="Ready to improve how your clinic tracks and converts leads?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}