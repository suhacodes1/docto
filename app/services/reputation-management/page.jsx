import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesFive from "@/app/components/ProcessSectionServicesFive";
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
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Turn Your Online Reputation"
      titleMain="Into a Patient Magnet"
      titleBottom=""
      intro={`Patients trust what others say about you more than what you say about yourself.

We help you control, improve, and leverage your reputation to drive more bookings.`}
      primaryCtaText="GET YOUR FREE REPUTATION AUDIT"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/reputation-management/001.webp"
      heroImageAlt="Reputation management for clinics"
      sectionTwoTitle="Your reputation is influencing decisions — whether you manage it or not."
      sectionTwoTextOne={`Before booking, patients check Google reviews, ratings, and responses.

If they see inconsistency, negativity, or silence — they choose someone else.`}
      sectionTwoTextTwo={`We build your Reputation Control System.`}
      sectionTwoImage="/assets/img/inner-pages/reputation-management/002.webp"
      sectionTwoImageAlt="Online reputation strategy for clinics"
      featureCards={[
        {
          icon: <Star size={28} />,
          title: "Centralised Review Monitoring",
          text: "Track everything in one place.",
        },
        {
          icon: <Shield size={28} />,
          title: "Strategic Response Framework",
          text: "Turn every review into a trust signal.",
        },
        {
          icon: <UserRoundSearch size={28} />,
          title: "Reputation Growth Strategy",
          text: "Increase positive sentiment over time.",
        },
      ]}
      valueTitle="Trust drives bookings"
      valueTextOne={`A strong reputation doesn’t just protect your brand — it multiplies conversions.`}
      valueResultItems={[
        { text: "Higher patient trust", tagColor: "pink" },
        { text: "Better first impressions", tagColor: "green" },
        { text: "Increased booking rates", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/reputation-management/003.webp"
      valueImageAlt="Clinic review and reputation growth"
      consultationText="If a new patient Googled you today — would they feel confident booking?"
      buildTitle="Built for clinics serious about reputation"
      buildItems={[
        "Clinics with inconsistent reviews",
        "Clinics with low online ratings",
        "Clinics not responding to patient feedback",
        "Clinics wanting stronger credibility",
        "Clinics focused on brand trust",
        "Clinics wanting long-term patient confidence",
      ]}
      buildImage="/assets/img/inner-pages/reputation-management/004.webp"
      buildImageAlt="Clinic reputation improvement system"
      quoteText="Your reputation is either growing your clinic — or limiting it."
      relatedServices={[
        {
          icon: <BadgeCheck size={26} />,
          title: "Reputation Builder System",
          text: "Generate more positive reviews consistently.",
        },
        {
          icon: <TrendingUp size={26} />,
          title: "Authority Builder",
          text: "Strengthen your brand and credibility.",
        },
        {
          icon: <MessageSquareQuote size={26} />,
          title: "Local Visibility Setup",
          text: "Improve how your clinic appears in search results.",
        },
      ]}
      faqs={[
        {
          q: "Can you remove negative reviews?",
          a: "Not always — but we can manage and reduce their impact effectively.",
        },
        {
          q: "How important is responding to reviews?",
          a: "Very — it shows professionalism and builds trust with potential patients.",
        },
        {
          q: "Do you monitor all platforms?",
          a: "Yes — including Google and other relevant review platforms.",
        },
        {
          q: "How quickly should reviews be responded to?",
          a: "Ideally within 24–48 hours for best impact.",
        },
        {
          q: "Can this improve my ratings over time?",
          a: "Yes — with proper strategy and consistent management.",
        },
        {
          q: "Is this a one-time service?",
          a: "It can be ongoing to maintain and improve your reputation.",
        },
      ]}
      finalCtaText={`Ready to Build a Reputation Patients Trust Instantly?

Take control of your online presence and turn it into a growth asset.`}
      finalCtaButtonText="Get Free Reputation Audit"
      finalCtaButtonLink="/contact"
      processComponent={<ProcessSectionServicesFive />}
    />
  );
}