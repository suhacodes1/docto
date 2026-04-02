import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  BadgePlus,
  BriefcaseMedical,
  Mic,
  Star,
  Stethoscope,
  UserCircle2,
} from "lucide-react";

export default function PersonalBrandBuildingDoctorsPage() {
  return (
    <ServicePageLayout
      category="Authority Builder"
      titleTop="Personal Brand Building"
      titleMain="for Doctors"
      titleBottom="and Practitioners"
      intro="Build trust, visibility, and authority around your doctors with a stronger personal brand that helps patients feel more confident choosing your clinic."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/personal-brand-building/1.webp"
      heroImageAlt="Personal brand building for doctors"
      sectionTwoTitle="Why Personal Branding for Doctors Matters"
      sectionTwoTextOne="Patients do not just choose clinics, they often choose the people behind them. A strong doctor brand can make your practice feel more credible, familiar, and trustworthy."
      sectionTwoTextTwo="Personal brand building helps practitioners become more visible through educational content, thought leadership, and a stronger online presence that supports patient decision-making."
      sectionTwoImage="/assets/img/inner-pages/personal-brand-building/2.webp"
      sectionTwoImageAlt="Doctor personal brand strategy"
      featureCards={[
        {
          icon: <UserCircle2 size={28} />,
          title: "More Familiarity",
          text: "Help patients feel like they know and trust the practitioner before the first visit.",
        },
        {
          icon: <Stethoscope size={28} />,
          title: "Stronger Authority",
          text: "Showcase expertise in a way that supports credibility and confidence.",
        },
        {
          icon: <Star size={28} />,
          title: "Better Differentiation",
          text: "Stand out in competitive markets with a clearer and more memorable practitioner presence.",
        },
      ]}
      valueTitle="How Personal Branding Supports Clinic Growth"
      valueTextOne="A strong doctor brand helps clinics attract patients who are looking not only for treatment, but for a practitioner they feel confident in."
      valueTextTwo="It also strengthens content performance, referral confidence, social proof, and overall clinic perception by making expertise more visible and human."
      valueImage="/assets/img/inner-pages/personal-brand-building/3.webp"
      valueImageAlt="Doctor authority and visibility growth"
      consultationText="Want to build stronger visibility and trust around your practitioners?"
      buildTitle="What We Help Build"
      buildItems={[
        "Doctor visibility strategy",
        "Practitioner authority positioning",
        "Educational content frameworks",
        "Thought leadership content support",
        "Trust-building personal brand systems",
        "Profile and credibility enhancements",
        "Human-centred brand storytelling",
        "Practitioner-led content pathways",
      ]}
      buildImage="/assets/img/inner-pages/personal-brand-building/4.webp"
      buildImageAlt="Doctor brand system build"
      quoteText="Patients are more likely to choose a clinic when they trust the people behind it."
      relatedServices={[
        {
          icon: <Mic size={26} />,
          title: "Educational Content Short & Long",
          text: "Build authority through useful content that showcases practitioner expertise.",
        },
        {
          icon: <BriefcaseMedical size={26} />,
          title: "Video Testimonials",
          text: "Support doctor credibility with real patient stories and trust signals.",
        },
        {
          icon: <BadgePlus size={26} />,
          title: "Review Generation Campaigns",
          text: "Strengthen practitioner reputation with more visible patient feedback.",
        },
      ]}
      faqs={[
        {
          q: "Why does personal branding matter for doctors?",
          a: "Patients often choose practitioners they feel familiar with and confident in, not just the clinic itself.",
        },
        {
          q: "Does this only help specialists?",
          a: "No, personal branding can help any practitioner build trust, authority, and visibility.",
        },
        {
          q: "What kind of content supports a doctor’s brand?",
          a: "Educational content, videos, testimonials, and profile-based credibility content all help.",
        },
        {
          q: "Can personal branding help clinic growth overall?",
          a: "Yes, stronger practitioner visibility can improve trust, conversion, and long-term brand differentiation.",
        },
      ]}
      finalCtaText="Ready to build a stronger personal brand for your doctors?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}