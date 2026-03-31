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
      category="Growth Engine"
      titleTop="Conversion Tracking"
      titleMain="& Analytics"
      titleBottom="for Clinics"
      intro="Track the patient actions that matter most so your clinic can make better decisions and grow with clearer performance insights."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/conversion-tracking-analytics/hero.webp"
      heroImageAlt="Conversion tracking and analytics for clinics"
      sectionTwoTitle="Why Conversion Tracking & Analytics Matter"
      sectionTwoTextOne="Without accurate tracking, it becomes difficult to know where patient enquiries are coming from, which campaigns are working, and where your website is losing people."
      sectionTwoTextTwo="Conversion tracking and analytics give clinics visibility into user behaviour so growth decisions can be based on data instead of guesswork."
      sectionTwoImage="/assets/img/services/conversion-tracking-analytics/section-two.webp"
      sectionTwoImageAlt="Clinic analytics and tracking setup"
      featureCards={[
        {
          icon: <Target size={28} />,
          title: "Clearer Performance Data",
          text: "Understand what channels, pages, and campaigns are driving patient actions.",
        },
        {
          icon: <MousePointerClick size={28} />,
          title: "Track Key Actions",
          text: "Measure form submissions, calls, bookings, and other conversion points that matter.",
        },
        {
          icon: <ScanSearch size={28} />,
          title: "Better Decision-Making",
          text: "Use real data to improve strategy, campaigns, and conversion pathways.",
        },
      ]}
      valueTitle="How Analytics Support Clinic Growth"
      valueTextOne="Good tracking helps clinics connect marketing effort to patient outcomes by showing what is actually generating enquiries and appointments."
      valueTextTwo="It also helps identify friction points on your site so you can improve patient journeys and get better returns from advertising, SEO, and content."
      valueImage="/assets/img/services/conversion-tracking-analytics/value.webp"
      valueImageAlt="Clinic performance analytics dashboard"
      consultationText="Want clearer insights into what is driving your clinic enquiries?"
      buildTitle="What We Help Build"
      buildItems={[
        "Conversion event setup",
        "Patient enquiry tracking",
        "Booking action measurement",
        "Campaign attribution foundations",
        "Behaviour analytics setup",
        "Reporting clarity improvements",
        "Performance insight dashboards",
        "Data-driven optimisation support",
      ]}
      buildImage="/assets/img/services/conversion-tracking-analytics/build.webp"
      buildImageAlt="Analytics implementation for clinics"
      quoteText="You cannot improve what you cannot measure, and strong tracking makes growth easier to scale."
      relatedServices={[
        {
          icon: <TrendingUp size={26} />,
          title: "Patient Acquisition Ads",
          text: "Track how paid campaigns contribute to real patient enquiries and outcomes.",
        },
        {
          icon: <BarChart3 size={26} />,
          title: "Landing Page Optimisation",
          text: "Use analytics insights to improve the pages that convert visitors into leads.",
        },
        {
          icon: <ChartNoAxesCombined size={26} />,
          title: "SEO Content Growth",
          text: "Measure how organic traffic contributes to enquiries and long-term clinic growth.",
        },
      ]}
      faqs={[
        {
          q: "What is conversion tracking?",
          a: "It is the process of measuring important actions on your website, such as bookings, calls, and enquiry form submissions.",
        },
        {
          q: "Why does my clinic need analytics?",
          a: "Analytics helps you understand patient behaviour, campaign performance, and where growth opportunities exist.",
        },
        {
          q: "Can this show which marketing channel is working best?",
          a: "Yes, proper setup can help reveal which campaigns, channels, or pages are leading to enquiries and bookings.",
        },
        {
          q: "Is tracking useful even for smaller clinics?",
          a: "Yes, even a small clinic benefits from understanding what is driving results and where patients are dropping off.",
        },
      ]}
      finalCtaText="Ready to track what is really driving clinic growth?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}