import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  Activity,
  BadgeDollarSign,
  MousePointerClick,
  SearchCheck,
  LineChart,
  MonitorSmartphone,
} from "lucide-react";

export default function PatientAcquisitionAdsPage() {
  return (
    <ServicePageLayout
      category="Growth Engine"
      titleTop="Patient Acquisition"
      titleMain="Ads"
      titleBottom="for Clinics"
      intro="Targeted ad campaigns designed to attract high-intent patients, increase enquiries, and support predictable clinic growth."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/patient-acquisition-ads/hero.webp"
      heroImageAlt="Patient acquisition ads for clinics"
      sectionTwoTitle="Why Patient Acquisition Ads Matter"
      sectionTwoTextOne="Running ads without the right strategy can waste budget and bring in low-quality traffic. Patient acquisition ads help clinics reach the right people at the right time with messaging that matches patient intent."
      sectionTwoTextTwo="When ad campaigns are built around local demand, trust-building creative, and clear next steps, they can turn attention into booked appointments and qualified enquiries."
      sectionTwoImage="/assets/img/services/patient-acquisition-ads/section-two.webp"
      sectionTwoImageAlt="Clinic advertising strategy"
      featureCards={[
        {
          icon: <BadgeDollarSign size={28} />,
          title: "Smarter Ad Spend",
          text: "Focus your budget on campaigns that are designed to attract real patient enquiries.",
        },
        {
          icon: <SearchCheck size={28} />,
          title: "Higher-Intent Traffic",
          text: "Reach patients actively searching for services your clinic wants to grow.",
        },
        {
          icon: <MousePointerClick size={28} />,
          title: "More Enquiries",
          text: "Drive more calls, form submissions, and booking actions from your ad traffic.",
        },
      ]}
      valueTitle="How Ads Support Clinic Growth"
      valueTextOne="Patient acquisition ads help clinics create faster visibility in competitive markets by putting the right offer in front of the right audience."
      valueTextTwo="They work best when combined with strong landing pages, clear calls to action, and conversion tracking so you can measure what is driving real patient demand."
      valueImage="/assets/img/services/patient-acquisition-ads/value.webp"
      valueImageAlt="Paid ads for clinic growth"
      consultationText="Want to generate more high-intent patient enquiries with paid ads?"
      buildTitle="What We Help Build"
      buildItems={[
        "Clinic-focused ad campaign strategy",
        "Local targeting setup",
        "Service-based ad messaging",
        "Lead generation ad campaigns",
        "Conversion-focused creative direction",
        "Campaign optimisation foundations",
        "Patient enquiry pathways",
        "Performance-driven ad structure",
      ]}
      buildImage="/assets/img/services/patient-acquisition-ads/build.webp"
      buildImageAlt="Clinic ad campaign setup"
      quoteText="The right ad strategy helps your clinic appear in front of patients when they are ready to take action."
      relatedServices={[
        {
          icon: <MonitorSmartphone size={26} />,
          title: "Landing Page Optimisation",
          text: "Turn ad clicks into more enquiries with pages built for conversion.",
        },
        {
          icon: <LineChart size={26} />,
          title: "Conversion Tracking & Analytics",
          text: "Measure what is working and improve campaign performance over time.",
        },
        {
          icon: <Activity size={26} />,
          title: "AI Lead Response System",
          text: "Follow up with leads faster and reduce missed patient opportunities.",
        },
      ]}
      faqs={[
        {
          q: "What are patient acquisition ads?",
          a: "They are paid campaigns designed to help clinics attract relevant local patients who are more likely to enquire or book.",
        },
        {
          q: "Can ads work for a new clinic?",
          a: "Yes, ads can help new clinics generate visibility and early demand faster than relying on organic traffic alone.",
        },
        {
          q: "Do I need a landing page as well?",
          a: "Yes, ads usually perform better when traffic is sent to a focused page built to convert visitors into enquiries.",
        },
        {
          q: "Can campaigns focus on specific treatments?",
          a: "Yes, ads can be tailored around the key services or treatment areas your clinic wants to grow.",
        },
      ]}
      finalCtaText="Ready to attract more patients with targeted ad campaigns?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}