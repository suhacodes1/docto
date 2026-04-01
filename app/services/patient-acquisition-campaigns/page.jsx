import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  Megaphone,
  Target,
  MousePointerClick,
  TrendingUp,
  Globe,
  CalendarDays,
} from "lucide-react";

export default function PatientAcquisitionCampaignsPage() {
  return (
    <ServicePageLayout
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Patient Acquisition"
      titleMain="Campaigns"
      titleBottom=""
      intro={`Stop waiting for patients to find you.

We run targeted campaigns that bring in people actively looking for your services — ready to book.`}
      primaryCtaText="BOOK A STRATEGY CALL"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/Patient Acquisition Campaigns/002.jpg"
      heroImageAlt="Patient acquisition campaigns for clinics"

      sectionTwoTitle="Most clinics run ads. Few get real patients."
      sectionTwoTextOne={`Wasted budget. Low-quality leads. No clear strategy.

Running ads without the right system leads to poor results and frustration.`}
      sectionTwoTextTwo={`The problem isn’t ads — it’s how they’re structured.

We build Patient Acquisition Campaigns designed specifically for clinics — targeting high-intent patients and guiding them toward booking.`}
      sectionTwoImage="/assets/img/inner-pages/Patient Acquisition Campaigns/002.png"
      sectionTwoImageAlt="Clinic patient acquisition strategy"

      featureCards={[
        {
          icon: <Megaphone size={28} />,
          title: "High-Intent Targeting",
          text: "Reach people actively searching for your services — not random audiences.",
        },
        {
          icon: <Target size={28} />,
          title: "Conversion-Driven Campaigns",
          text: "Ads designed to bring in bookings, not just clicks.",
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
  { text: "Better lead quality",      tag: "Less noise",        tagColor: "pink"  },
  { text: "Higher conversion rates",  tag: "More bookings",     tagColor: "green" },
  { text: "Predictable patient flow", tag: "Consistent growth", tagColor: "blue"  },
]}
      valueImage="/assets/img/inner-pages/Patient Acquisition Campaigns/003.jpg"
      valueImageAlt="Patient acquisition and growth campaigns"

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
      buildImage="/assets/img/inner-pages/Patient Acquisition Campaigns/004.avif"
      buildImageAlt="Clinic growth campaign setup"

      quoteText="Get patients, not just traffic."

      relatedServices={[
        {
          icon: <Globe size={26} />,
          title: "Conversion-Focused Website",
          text: "Turn ad traffic into booked patients.",
        },
        {
          icon: <CalendarDays size={26} />,
          title: "Online Booking Integration",
          text: "Make it easy for patients to schedule instantly.",
        },
        {
          icon: <TrendingUp size={26} />,
          title: "PatientFlow AI",
          text: "Capture and convert every lead automatically.",
        },
      ]}

      faqs={[
        {
          q: "How quickly can I get patients from ads?",
          a: "Many clinics start seeing inquiries within days of launching.",
        },
        {
          q: "Which platforms do you use?",
          a: "Google, Facebook, Instagram, and other relevant channels.",
        },
        {
          q: "Will this work for my type of clinic?",
          a: "Yes — campaigns are tailored to your specific services and audience.",
        },
        {
          q: "How much budget do I need?",
          a: "It depends on your goals and market — we guide you on optimal spend.",
        },
        {
          q: "Do you handle everything?",
          a: "Yes — strategy, setup, creatives, and optimization.",
        },
        {
          q: "Can this scale over time?",
          a: "Absolutely — we build campaigns designed for long-term growth.",
        },
      ]}

      finalCtaText={`Ready to Bring in a Consistent Flow of Patients?

Launch campaigns that attract high-intent patients and turn your clinic into a predictable growth system.`}
      finalCtaButtonText="Get Free Campaign Audit"
      finalCtaButtonLink="/contact"
    />
  );
}