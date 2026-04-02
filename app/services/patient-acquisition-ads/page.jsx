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
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Patient Acquisition"
      titleMain="Ads"
      titleBottom=""
      intro={`Stop waiting for patients to find you.

We run targeted ad campaigns that bring in people actively looking for your services — ready to book.`}
      primaryCtaText="BOOK A STRATEGY CALL"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/patient-acquisition-ads/001.webp"
      heroImageAlt="Patient acquisition ads for clinics"

      sectionTwoTitle="Most clinics run ads. Few get real patients."
      sectionTwoTextOne={`Wasted budget. Low-quality leads. No clear strategy.

Running ads without the right system leads to poor results and frustration.`}
      sectionTwoTextTwo={`The problem isn’t ads — it’s how they’re structured.

We build Patient Acquisition Ads designed specifically for clinics — targeting high-intent patients and guiding them toward booking.`}
      sectionTwoImage="/assets/img/inner-pages/patient-acquisition-ads/002.webp"
      sectionTwoImageAlt="Clinic advertising strategy"

      featureCards={[
        {
          icon: <BadgeDollarSign size={28} />,
          title: "High-Intent Targeting",
          text: "Reach people actively searching for your services — not random audiences.",
        },
        {
          icon: <SearchCheck size={28} />,
          title: "Conversion-Driven Ads",
          text: "Campaigns designed to bring in bookings, not just clicks.",
        },
        {
          icon: <MousePointerClick size={28} />,
          title: "Optimized Lead Flow",
          text: "Connect ads directly to funnels that convert.",
        },
      ]}

      valueTitle="Turn ad spend into real patient bookings"
      valueTextOne={`Clicks don’t grow clinics — patients do.

We design campaigns that attract the right audience and guide them into your system — where they convert into actual appointments.`}
      valueResultItems={[
        { text: "Better lead quality", tag: "Less waste", tagColor: "pink" },
        { text: "Higher conversion rates", tag: "More bookings", tagColor: "green" },
        { text: "Predictable patient flow", tag: "Consistent growth", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/patient-acquisition-ads/003.webp"
      valueImageAlt="Paid ads for clinic growth"

      consultationText="Are your ads bringing patients — or just clicks?"

      buildTitle="Built for clinics that want consistent patient flow"
      buildItems={[
        "New clinics needing immediate traction",
        "Clinics struggling with inconsistent leads",
        "Clinics running ads with poor ROI",
        "Clinics launching new services",
        "Clinics entering competitive markets",
        "Clinics ready to scale patient acquisition",
      ]}
      buildImage="/assets/img/inner-pages/patient-acquisition-ads/004.webp"
      buildImageAlt="Clinic ad campaign setup"

      quoteText="Get patients, not just traffic."

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

      finalCtaText={`Ready to Bring in More Patients with Targeted Ads?

Launch campaigns that attract high-intent patients and turn your clinic into a predictable growth system.`}
      finalCtaButtonText="Get Free Campaign Audit"
      finalCtaButtonLink="/contact"
    />
  );
}