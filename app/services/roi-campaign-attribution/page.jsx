import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesSix from "@/app/components/ProcessSectionServicesSix";
import {
  BadgeDollarSign,
  ChartPie,
  LineChart,
  MousePointerClick,
  ScanLine,
  Target,
} from "lucide-react";

export default function RoiCampaignAttributionPage() {
  return (
    <ServicePageLayout
      category="Intelligence Dashboard"
      titleTop="ROI Campaign"
      titleMain="Attribution"
      titleBottom="for Clinics"
      intro="Understand which campaigns are driving real returns so your clinic can invest more confidently in the channels that produce results."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/roi-campaign-attribution/001.webp"
      heroImageAlt="ROI campaign attribution for clinics"
      sectionTwoTitle="Why ROI Attribution Matters"
      sectionTwoTextOne="Many clinics invest in ads, SEO, and other marketing channels without a clear way to connect spend to enquiries, bookings, or business outcomes."
      sectionTwoTextTwo="ROI campaign attribution helps reveal which channels and campaigns are generating meaningful results so budget decisions can be based on performance instead of assumptions."
      sectionTwoImage="/assets/img/inner-pages/roi-campaign-attribution/002.webp"
      sectionTwoImageAlt="Clinic marketing ROI attribution"
      featureCards={[
        {
          icon: <BadgeDollarSign size={28} />,
          title: "Smarter Budget Allocation",
          text: "See where marketing spend is driving the strongest patient and business outcomes.",
        },
        {
          icon: <ScanLine size={28} />,
          title: "Clearer Channel Attribution",
          text: "Understand which campaigns and touchpoints are contributing to conversions.",
        },
        {
          icon: <Target size={28} />,
          title: "Better Growth Decisions",
          text: "Invest with more confidence in the channels that are creating measurable value.",
        },
      ]}
      valueTitle="How ROI Attribution Supports Growth"
      valueTextOne="ROI attribution helps clinics move beyond vanity metrics by focusing on the channels and campaigns that influence real patient outcomes."
      valueTextTwo="This makes it easier to scale what is working, reduce wasted spend, and create a more accountable growth strategy over time."
      valueImage="/assets/img/inner-pages/roi-campaign-attribution/003.webp"
      valueImageAlt="Clinic campaign ROI tracking"
      consultationText="Want to know which campaigns are truly delivering returns?"
      buildTitle="What We Help Build"
      buildItems={[
        "Campaign attribution systems",
        "ROI visibility frameworks",
        "Lead-to-channel tracking",
        "Marketing outcome reporting",
        "Budget decision support insights",
        "Conversion source analysis",
        "Performance-based campaign measurement",
        "Return-focused reporting foundations",
      ]}
      buildImage="/assets/img/inner-pages/roi-campaign-attribution/004.webp"
      buildImageAlt="ROI attribution system build"
      quoteText="The more clearly you can attribute results, the more confidently you can scale your growth."
      relatedServices={[
        {
          icon: <LineChart size={26} />,
          title: "Lead Tracking & Conversion Insights",
          text: "Understand how lead quality and pipeline movement connect back to campaign sources.",
        },
        {
          icon: <ChartPie size={26} />,
          title: "Conversion Tracking & Analytics",
          text: "Track the actions that help campaign attribution become more accurate and useful.",
        },
        {
          icon: <MousePointerClick size={26} />,
          title: "Realtime Performance Dashboard",
          text: "Monitor attribution and performance signals in one clear reporting environment.",
        },
      ]}
      faqs={[
        {
          q: "What is ROI campaign attribution?",
          a: "It is the process of connecting marketing efforts to the enquiries, bookings, and outcomes they help generate.",
        },
        {
          q: "Why is attribution important for clinics?",
          a: "It helps clinics understand which channels are producing real returns so marketing spend can be used more effectively.",
        },
        {
          q: "Does this only apply to paid ads?",
          a: "No, attribution can help across multiple channels including ads, SEO, referrals, and other lead sources.",
        },
        {
          q: "Can attribution improve marketing decisions?",
          a: "Yes, clearer attribution helps clinics reduce wasted spend and focus on what is actually working.",
        },
      ]}
      finalCtaText="Ready to understand the real return behind your marketing?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
      processComponent={<ProcessSectionServicesSix />}
    />
  );
}