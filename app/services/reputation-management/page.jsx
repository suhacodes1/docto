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
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Reputation"
      titleMain="Management"
      titleBottom=""
      intro={`Your reputation is your strongest asset.

We help you monitor, manage, and improve your online presence so patients always see your clinic in the best light.`}
      primaryCtaText="GET A FREE REPUTATION AUDIT"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/reputation-management/001.webp"
      heroImageAlt="Reputation management for clinics"

      sectionTwoTitle="One bad review can cost you multiple patients."
      sectionTwoTextOne={`Patients read reviews before they book.

A few negative experiences — or no response — can damage trust and push patients toward competitors.`}
      sectionTwoTextTwo={`Most clinics don’t actively manage their reputation, leaving their image to chance.

We build your Reputation Management System — helping you monitor feedback, respond professionally, and maintain a strong, trustworthy presence.`}
      sectionTwoImage="/assets/img/inner-pages/reputation-management/002.webp"
      sectionTwoImageAlt="Online reputation strategy for clinics"

      featureCards={[
        {
          icon: <Star size={28} />,
          title: "Review Monitoring System",
          text: "Track and manage reviews across platforms in one place.",
        },
        {
          icon: <Shield size={28} />,
          title: "Professional Response Strategy",
          text: "Respond to both positive and negative feedback effectively.",
        },
        {
          icon: <UserRoundSearch size={28} />,
          title: "Reputation Improvement Plan",
          text: "Turn feedback into opportunities to strengthen trust.",
        },
      ]}

      valueTitle="Reputation Management"
      valueTextOne={`A strong reputation doesn’t just protect your clinic — it drives growth.

Patients trust clinics that actively engage, respond, and show care.

We help you create a consistent, positive presence that influences patient decisions.`}
      valueResultItems={[
        { text: "Higher trust and credibility", tag: "Stronger perception", tagColor: "pink" },
        { text: "Better conversion rates", tag: "More bookings", tagColor: "green" },
        { text: "Stronger patient loyalty", tag: "Long-term growth", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/reputation-management/003.webp"
      valueImageAlt="Clinic review and reputation growth"

      consultationText="What do patients see when they search your clinic?"

      buildTitle="Built for clinics that care about their image"
      buildItems={[
        "Clinics with negative or mixed reviews",
        "Clinics not responding to feedback",
        "Clinics in competitive markets",
        "Premium clinics protecting brand image",
        "Clinics scaling and increasing visibility",
        "Clinics wanting long-term trust",
      ]}
      buildImage="/assets/img/inner-pages/reputation-management/004.webp"
      buildImageAlt="Clinic reputation improvement system"

      quoteText="Your reputation is always working — make sure it’s working for you."

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

      finalCtaText={`Ready to Take Control of Your Clinic’s Reputation?

Build trust, handle feedback professionally, and create a reputation that attracts more patients.`}
      finalCtaButtonText="Get Free Reputation Audit"
      finalCtaButtonLink="/contact"
    />
  );
}