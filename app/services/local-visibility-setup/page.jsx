import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  MapPin,
  Search,
  BadgeCheck,
  PhoneCall,
  Globe,
  BarChart3,
} from "lucide-react";

export default function LocalVisibilitySetupPage() {
  return (
    <ServicePageLayout
      category="HEALTH CLINIC GROWTH SYSTEM"
    titleTop="Local Visibility"
      titleMain="Setup"
      intro={`When patients search for a clinic, will they find you — or your competitors?

We optimize your local presence so your clinic shows up, stands out, and gets chosen.`}
      primaryCtaText="GET A FREE VISIBILITY AUDIT"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/Local Visibility Setup/001.jpg"
      heroImageAlt="Local visibility setup for clinics"

      sectionTwoTitle="If you’re not visible locally, you’re invisible."
      sectionTwoTextOne={`Patients are searching for clinics every day — but many clinics don’t appear where it matters most.

Incomplete profiles. Poor rankings. Weak reviews.`}
      sectionTwoTextTwo={`This means lost patients to competitors who are simply more visible.

We build your Local Visibility System — ensuring your clinic appears in local searches, builds trust instantly, and attracts high-intent patients.`}
      sectionTwoImage="/assets/img/inner-pages/Local Visibility Setup/002.jpg"
      sectionTwoImageAlt="Clinic local search visibility"

      featureCards={[
        {
          icon: <MapPin size={28} />,
          title: "Google Presence Optimization",
          text: "Fully optimize your profile to rank higher and attract more clicks.",
        },
        {
          icon: <Search size={28} />,
          title: "Local SEO Setup",
          text: "Improve your visibility for high-intent “near me” searches.",
        },
        {
          icon: <BadgeCheck size={28} />,
          title: "Review & Trust System",
          text: "Build and manage reviews that increase credibility and conversions.",
        },
      ]}

      valueTitle="Turn local searches into patient bookings"
valueTextOne={`When your clinic appears at the top — with strong reviews and clear information — patients are far more likely to choose you.`}

valueResultItems={[
  { text: "Stands out", tag: "More attention", tagColor: "pink" },
  { text: "Builds trust instantly", tag: "Higher credibility", tagColor: "green" },
  { text: "Drives real bookings", tag: "More patients", tagColor: "blue" },
]}
      valueImage="/assets/img/inner-pages/Local Visibility Setup/002.webp"
      valueImageAlt="Google business profile and local visibility"

      consultationText="Are patients finding your clinic — or your competitors?"

      buildTitle="Built for clinics that want to dominate locally"
      buildItems={[
        "New clinics needing local visibility",
        "Clinics not appearing in Google searches",
        "Clinics with low or inconsistent reviews",
        "Clinics competing in crowded areas",
        "Clinics relying only on referrals",
        "Clinics expanding to new locations",
      ]}
      buildImage="/assets/img/inner-pages/Local Visibility Setup/003.jpeg"
      buildImageAlt="Local visibility strategy for clinics"

      quoteText="Be the clinic patients find first — and trust instantly."

      relatedServices={[
        {
          icon: <PhoneCall size={26} />,
          title: "Reputation Management",
          text: "Improve and manage your online reviews and ratings.",
        },
        {
          icon: <Globe size={26} />,
          title: "Conversion-Focused Website",
          text: "Turn local visitors into booked patients.",
        },
        {
          icon: <BarChart3 size={26} />,
          title: "Paid Ads for Clinics",
          text: "Boost visibility further with targeted campaigns.",
        },
      ]}

      faqs={[
        {
          q: "How long does it take to see results?",
          a: "Improvements can be seen within weeks, with stronger results building over time.",
        },
        {
          q: "Do reviews really matter?",
          a: "Yes — they are one of the biggest factors in patient decisions.",
        },
        {
          q: "Can you help get more reviews?",
          a: "Yes — we implement systems to consistently generate reviews.",
        },
        {
          q: "Will this help me rank higher on Google?",
          a: "Yes — we optimize for better local search visibility.",
        },
        {
          q: "Do I need a website for this?",
          a: "It helps, but we can optimize your presence even without one.",
        },
        {
          q: "Is this a one-time setup or ongoing?",
          a: "Both — we set it up and can also support ongoing optimization.",
        },
      ]}

      finalCtaText={`Ready to Become the Top Clinic in Your Area?

Make it easy for patients to find you, trust you, and choose you — every time they search.`}
      finalCtaButtonText="Get Free Visibility Audit"
      finalCtaButtonLink="/contact"
    />
  );
}