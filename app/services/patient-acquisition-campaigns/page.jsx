
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
      category="Launch System"
      titleTop="Patient Acquisition"
      titleMain="Campaigns"
      titleBottom="for Clinics"
      intro="Targeted campaigns that help bring in high-intent patients from day one and support faster clinic growth."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/patient-acquisition-campaigns/hero.webp"
      heroImageAlt="Patient acquisition campaigns for clinics"
      sectionTwoTitle="Why Patient Acquisition Campaigns Matter"
      sectionTwoTextOne="A clinic can have great services, but growth becomes difficult if the right patients are not discovering your business at the right time. Patient acquisition campaigns help generate awareness and bring qualified traffic to your clinic."
      sectionTwoTextTwo="When campaigns are aligned with strong messaging and clear conversion paths, they can help turn demand into real enquiries and booked appointments."
      sectionTwoImage="/assets/img/services/patient-acquisition-campaigns/section-two.webp"
      sectionTwoImageAlt="Clinic patient acquisition strategy"
      featureCards={[
        {
          icon: <Megaphone size={28} />,
          title: "More Patient Enquiries",
          text: "Bring more high-intent traffic to your clinic through focused acquisition campaigns.",
        },
        {
          icon: <Target size={28} />,
          title: "Better Audience Targeting",
          text: "Reach the right local patients based on the services your clinic wants to grow.",
        },
        {
          icon: <MousePointerClick size={28} />,
          title: "Stronger Conversion Opportunities",
          text: "Guide interested patients toward booking, calling, or enquiring with less friction.",
        },
      ]}
      valueTitle="How Acquisition Campaigns Support Growth"
      valueTextOne="Patient acquisition campaigns help accelerate clinic visibility and demand by putting your services in front of people actively looking for treatment options."
      valueTextTwo="They work best when paired with a conversion-focused website, strong trust signals, and a smooth booking experience so campaign traffic can turn into measurable business outcomes."
      valueImage="/assets/img/services/patient-acquisition-campaigns/value.webp"
      valueImageAlt="Patient acquisition and growth campaigns"
      consultationText="Want to attract more high-intent patients to your clinic?"
      buildTitle="What We Help Build"
      buildItems={[
        "Targeted patient acquisition campaigns",
        "Service-focused traffic generation",
        "Local audience targeting foundations",
        "Lead generation support",
        "Campaign messaging alignment",
        "Landing page conversion support",
        "Stronger enquiry pathways",
        "Growth-focused campaign foundations",
      ]}
      buildImage="/assets/img/services/patient-acquisition-campaigns/build.webp"
      buildImageAlt="Clinic growth campaign setup"
      quoteText="The right campaign strategy helps your clinic get in front of the right patients before they choose a competitor."
      relatedServices={[
        {
          icon: <Globe size={26} />,
          title: "Conversion-Focused Website",
          text: "Turn campaign traffic into more enquiries and bookings with a high-converting website.",
        },
        {
          icon: <CalendarDays size={26} />,
          title: "Online Booking Integration",
          text: "Make it easier for interested patients to book as soon as they are ready.",
        },
        {
          icon: <TrendingUp size={26} />,
          title: "Local Visibility Setup",
          text: "Support paid growth with stronger organic visibility in local search results.",
        },
      ]}
      faqs={[
        {
          q: "What are patient acquisition campaigns?",
          a: "They are targeted marketing campaigns designed to help clinics attract more relevant patient enquiries and appointments.",
        },
        {
          q: "Will this help a new clinic grow faster?",
          a: "Yes, acquisition campaigns can help new clinics build awareness and generate early demand more quickly.",
        },
        {
          q: "Do campaigns work without a good website?",
          a: "Campaigns work better when paired with a strong website, trust signals, and a smooth booking journey.",
        },
        {
          q: "Can campaigns target specific services?",
          a: "Yes, campaigns can be aligned around the treatments or services your clinic wants to promote most.",
        },
      ]}
      finalCtaText="Ready to bring more high-intent patients to your clinic?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}