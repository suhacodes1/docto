import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesFive from "@/app/components/ProcessSectionServicesFive";
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
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Reputation Builder"
      titleMain="System"
      titleBottom=""
      intro={`Patients trust reviews before they trust clinics.

We help you generate high-quality reviews quickly — so your clinic looks credible, trustworthy, and ready to choose.`}
      primaryCtaText="GET A FREE REPUTATION AUDIT"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/reputation-builder-systems/001.webp"
      heroImageAlt="Reputation builder system for clinics"

      sectionTwoTitle="No reviews = no trust = lost patients"
      sectionTwoTextOne={`Patients compare before they book.

If your clinic has few or no reviews, it creates doubt — even if your service is excellent.`}
      sectionTwoTextTwo={`Meanwhile, competitors with strong ratings win the patient’s trust instantly.

We build your Reputation System — helping you consistently generate authentic reviews and position your clinic as a trusted choice.`}
      sectionTwoImage="/assets/img/inner-pages/reputation-builder-systems/002.webp"
      sectionTwoImageAlt="Clinic reputation and trust building"

      featureCards={[
        {
          icon: <Star size={28} />,
          title: "Review Generation System",
          text: "Get more patient reviews consistently without manual effort.",
        },
        {
          icon: <ShieldCheck size={28} />,
          title: "Trust-Building Strategy",
          text: "Highlight positive experiences that influence patient decisions.",
        },
        {
          icon: <MessageSquareQuote size={28} />,
          title: "Reputation Management",
          text: "Monitor, manage, and respond to reviews effectively.",
        },
      ]}

      valueTitle="Turn patient experiences into powerful trust signals"
      valueTextOne={`Reviews are one of the biggest decision factors.

A strong reputation doesn’t just build trust — it increases conversions across everything:`}
      valueResultItems={[
        { text: "More clicks from search", tag: "Higher visibility", tagColor: "pink" },
        { text: "Higher website conversions", tag: "More bookings", tagColor: "green" },
        { text: "More booked appointments", tag: "Real growth", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/reputation-builder-systems/003.webp"
      valueImageAlt="Reputation growth for clinics"

      consultationText="How many reviews does your clinic have right now?"

      buildTitle="Perfect for clinics building trust quickly"
      buildItems={[
        "New clinics with no reviews",
        "Clinics with low ratings or inconsistent feedback",
        "Clinics competing in high-trust markets",
        "Clinics wanting to improve Google presence",
        "Premium clinics needing strong credibility",
        "Clinics relying too much on word-of-mouth",
      ]}
      buildImage="/assets/img/inner-pages/reputation-builder-systems/004.webp"
      buildImageAlt="Clinic reputation building strategy"

      quoteText="Trust isn’t claimed — it’s proven through reviews."

      relatedServices={[
        {
          icon: <Globe size={26} />,
          title: "Local Visibility Setup",
          text: "Improve your ranking and presence in local search.",
        },
        {
          icon: <BadgeCheck size={26} />,
          title: "Authority Builder",
          text: "Strengthen your brand and credibility online.",
        },
        {
          icon: <Users size={26} />,
          title: "Conversion-Focused Website",
          text: "Showcase reviews to increase booking rates.",
        },
      ]}

      faqs={[
        {
          q: "How quickly can I get reviews?",
          a: "Many clinics start getting reviews within the first few weeks.",
        },
        {
          q: "Are the reviews real?",
          a: "Yes — we only implement systems for authentic patient feedback.",
        },
        {
          q: "Can you help improve low ratings?",
          a: "Yes — we help manage and improve your overall reputation.",
        },
        {
          q: "Where are the reviews collected?",
          a: "Primarily on Google and other relevant platforms.",
        },
        {
          q: "Do I need to ask patients manually?",
          a: "No — we automate the process as much as possible.",
        },
        {
          q: "Will this help increase bookings?",
          a: "Yes — strong reviews significantly improve patient trust and conversions.",
        },
      ]}

      finalCtaText={`Ready to Build Trust That Brings More Patients?

Start generating reviews that make your clinic stand out and get chosen — every time.`}
      finalCtaButtonText="Get Free Reputation Audit"
      finalCtaButtonLink="/contact"
      processComponent={<ProcessSectionServicesFive />}
    />
  );
}