
import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  Star,
  ShieldCheck,
  MessageSquareQuote,
  BadgeCheck,
  Globe,
  Users,
} from "lucide-react";

export default function ReputationBuilderSystemPage() {
  return (
    <ServicePageLayout
      category="Launch System"
      titleTop="Reputation Builder"
      titleMain="System"
      titleBottom="for Clinics"
      intro="Generate your first reviews quickly and build the trust and credibility patients look for before choosing a clinic."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/reputation-builder-system/hero.webp"
      heroImageAlt="Reputation builder system for clinics"
      sectionTwoTitle="Why Reputation Matters for Clinics"
      sectionTwoTextOne="Patients often decide whether to contact a clinic based on trust signals such as reviews, credibility, and social proof. A strong reputation helps reduce hesitation and makes your clinic feel more reliable."
      sectionTwoTextTwo="A reputation builder system helps your clinic consistently strengthen trust, improve first impressions, and support better patient acquisition outcomes over time."
      sectionTwoImage="/assets/img/services/reputation-builder-system/section-two.webp"
      sectionTwoImageAlt="Clinic reputation and trust building"
      featureCards={[
        {
          icon: <Star size={28} />,
          title: "Stronger Review Presence",
          text: "Help your clinic build a stronger review profile that increases trust with potential patients.",
        },
        {
          icon: <ShieldCheck size={28} />,
          title: "More Patient Confidence",
          text: "Show patients your clinic is credible, reliable, and trusted by others in your community.",
        },
        {
          icon: <MessageSquareQuote size={28} />,
          title: "Better Social Proof",
          text: "Use positive patient feedback to strengthen your clinic’s reputation and visibility.",
        },
      ]}
      valueTitle="How a Reputation Builder System Helps"
      valueTextOne="A strong reputation helps convert more interest into real enquiries by making patients feel more confident in your clinic before they even make contact."
      valueTextTwo="It also supports local visibility, improves brand perception, and creates a more trustworthy online presence that can influence long-term growth."
      valueImage="/assets/img/services/reputation-builder-system/value.webp"
      valueImageAlt="Reputation growth for clinics"
      consultationText="Want to build stronger trust and credibility for your clinic?"
      buildTitle="What We Help Build"
      buildItems={[
        "Review generation foundations",
        "Trust-building patient touchpoints",
        "Stronger online credibility signals",
        "Positive reputation visibility",
        "Patient feedback support systems",
        "Review collection strategy support",
        "Better first impression assets",
        "Long-term reputation growth foundations",
      ]}
      buildImage="/assets/img/services/reputation-builder-system/build.webp"
      buildImageAlt="Clinic reputation building strategy"
      quoteText="A trusted clinic earns more attention, more confidence, and more patient enquiries from the very beginning."
      relatedServices={[
        {
          icon: <Globe size={26} />,
          title: "Local Visibility Setup",
          text: "Support your reputation with stronger visibility in local search and map results.",
        },
        {
          icon: <BadgeCheck size={26} />,
          title: "Conversion-Focused Website",
          text: "Reinforce credibility with a website designed to build trust and drive action.",
        },
        {
          icon: <Users size={26} />,
          title: "Patient Acquisition Campaigns",
          text: "Pair trust-building with campaigns that bring more high-intent patients to your clinic.",
        },
      ]}
      faqs={[
        {
          q: "Why are reviews important for clinics?",
          a: "Reviews help patients feel more confident in your clinic and often influence whether they choose to enquire or book.",
        },
        {
          q: "Does reputation affect patient acquisition?",
          a: "Yes, a stronger reputation can improve trust, visibility, and conversion rates across your digital presence.",
        },
        {
          q: "Is this useful for a new clinic?",
          a: "Yes, new clinics especially benefit from building trust signals early to reduce hesitation from potential patients.",
        },
        {
          q: "Can reputation building support long-term growth?",
          a: "Yes, a strong reputation can improve credibility over time and support more consistent patient interest.",
        },
      ]}
      finalCtaText="Ready to build a stronger reputation patients can trust?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}