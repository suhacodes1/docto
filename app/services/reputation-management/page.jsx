import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  BadgeCheck,
  MessageSquareQuote,
  Shield,
  Star,
  TrendingUp,
  UserRoundSearch,
} from "lucide-react";

export default function ReputationManagementPage() {
  return (
    <ServicePageLayout
      category="Growth Engine"
      titleTop="Reputation"
      titleMain="Management"
      titleBottom="for Clinics"
      intro="Strengthen patient trust with a reputation strategy that supports more positive reviews, stronger credibility, and better first impressions online."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/reputation-management/hero.webp"
      heroImageAlt="Reputation management for clinics"
      sectionTwoTitle="Why Reputation Management Matters"
      sectionTwoTextOne="For many patients, online reviews and first impressions play a major role in whether they choose one clinic over another. A weak reputation can reduce trust even when your services are strong."
      sectionTwoTextTwo="Reputation management helps clinics improve how they appear online, strengthen credibility, and support more confident patient decision-making."
      sectionTwoImage="/assets/img/services/reputation-management/section-two.webp"
      sectionTwoImageAlt="Online reputation strategy for clinics"
      featureCards={[
        {
          icon: <Star size={28} />,
          title: "Stronger Social Proof",
          text: "Build confidence with reviews and trust signals that support patient decision-making.",
        },
        {
          icon: <Shield size={28} />,
          title: "Better Brand Credibility",
          text: "Improve how your clinic is perceived across search, reviews, and online touchpoints.",
        },
        {
          icon: <UserRoundSearch size={28} />,
          title: "Improved First Impressions",
          text: "Help patients feel more confident about choosing your clinic from the start.",
        },
      ]}
      valueTitle="How Reputation Management Supports Growth"
      valueTextOne="A strong online reputation helps clinics convert more interest into action by reducing uncertainty and making trust easier to establish."
      valueTextTwo="It also supports better performance across other growth channels, because ads, SEO, and referrals all work better when your clinic looks credible online."
      valueImage="/assets/img/services/reputation-management/value.webp"
      valueImageAlt="Clinic review and reputation growth"
      consultationText="Want to strengthen how your clinic is perceived online?"
      buildTitle="What We Help Build"
      buildItems={[
        "Reputation improvement strategy",
        "Review growth foundations",
        "Trust signal enhancements",
        "Patient feedback visibility support",
        "Credibility-focused page improvements",
        "Online presence refinement",
        "Brand trust strengthening",
        "Review-driven growth support",
      ]}
      buildImage="/assets/img/services/reputation-management/build.webp"
      buildImageAlt="Clinic reputation improvement system"
      quoteText="When patients trust what they see online, they are far more likely to take the next step with your clinic."
      relatedServices={[
        {
          icon: <BadgeCheck size={26} />,
          title: "SEO Content Growth",
          text: "Support your reputation with useful content that builds authority and patient trust.",
        },
        {
          icon: <TrendingUp size={26} />,
          title: "Patient Acquisition Ads",
          text: "Get better results from paid traffic when your online reputation supports conversion.",
        },
        {
          icon: <MessageSquareQuote size={26} />,
          title: "Landing Page Optimisation",
          text: "Showcase reviews and credibility elements where they can influence patient action most.",
        },
      ]}
      faqs={[
        {
          q: "What is reputation management for clinics?",
          a: "It is the process of improving how your clinic is perceived online through stronger reviews, trust signals, and credibility-focused improvements.",
        },
        {
          q: "Why do reviews matter so much?",
          a: "Reviews often shape first impressions and help patients decide whether they feel confident booking with your clinic.",
        },
        {
          q: "Can reputation affect ad and SEO performance?",
          a: "Yes, strong credibility can improve conversion rates across paid ads, organic search, and referral traffic.",
        },
        {
          q: "Is this only for clinics with bad reviews?",
          a: "No, reputation management also helps good clinics strengthen their visibility, trust, and overall online presence.",
        },
      ]}
      finalCtaText="Ready to build stronger trust and credibility for your clinic?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}