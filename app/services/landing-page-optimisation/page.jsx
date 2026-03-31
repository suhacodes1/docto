import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  ArrowRightLeft,
  LayoutPanelTop,
  MousePointerClick,
  ShieldCheck,
  TrendingUp,
  Waypoints,
} from "lucide-react";

export default function LandingPageOptimisationPage() {
  return (
    <ServicePageLayout
      category="Growth Engine"
      titleTop="Landing Page"
      titleMain="Optimisation"
      titleBottom="for Clinics"
      intro="Improve page performance with clearer messaging, stronger trust signals, and conversion-focused design that turns more visitors into enquiries."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/landing-page-optimisation/hero.webp"
      heroImageAlt="Landing page optimisation for clinics"
      sectionTwoTitle="Why Landing Page Optimisation Matters"
      sectionTwoTextOne="A clinic can attract traffic from ads, search, or social media, but growth slows down when visitors land on a page that feels unclear, overwhelming, or difficult to act on."
      sectionTwoTextTwo="Landing page optimisation improves the structure, messaging, and flow of each page so more visitors trust your clinic and take the next step."
      sectionTwoImage="/assets/img/services/landing-page-optimisation/section-two.webp"
      sectionTwoImageAlt="Optimised landing page design for clinics"
      featureCards={[
        {
          icon: <LayoutPanelTop size={28} />,
          title: "Clearer Messaging",
          text: "Help patients quickly understand your services, value, and next step.",
        },
        {
          icon: <ShieldCheck size={28} />,
          title: "More Trust Signals",
          text: "Use reviews, credibility elements, and content structure to build patient confidence.",
        },
        {
          icon: <MousePointerClick size={28} />,
          title: "Higher Conversion Rates",
          text: "Reduce friction and guide more visitors toward booking, calling, or enquiring.",
        },
      ]}
      valueTitle="How Optimised Pages Support Growth"
      valueTextOne="Landing page optimisation helps clinics get more value from their traffic by making pages easier to understand, more persuasive, and more action-focused."
      valueTextTwo="It becomes especially valuable when your clinic is investing in paid ads or local SEO, because stronger page performance means more enquiries without needing more traffic."
      valueImage="/assets/img/services/landing-page-optimisation/value.webp"
      valueImageAlt="Clinic landing page improvements"
      consultationText="Want your landing pages to convert more visitors into patients?"
      buildTitle="What We Help Build"
      buildItems={[
        "Conversion-focused page structure",
        "Improved service messaging",
        "Stronger call-to-action placement",
        "Trust-building page sections",
        "Clearer enquiry pathways",
        "User journey improvements",
        "Mobile-friendly landing experiences",
        "Performance-focused page refinements",
      ]}
      buildImage="/assets/img/services/landing-page-optimisation/build.webp"
      buildImageAlt="Optimised clinic landing page build"
      quoteText="Small changes in page messaging and structure can lead to a major lift in enquiries and bookings."
      relatedServices={[
        {
          icon: <TrendingUp size={26} />,
          title: "Patient Acquisition Ads",
          text: "Make ad traffic work harder by sending it to pages built for conversion.",
        },
        {
          icon: <Waypoints size={26} />,
          title: "Conversion Tracking & Analytics",
          text: "Track what patients do on each page and identify where they drop off.",
        },
        {
          icon: <ArrowRightLeft size={26} />,
          title: "AI Lead Response System",
          text: "Follow up faster once landing page visitors turn into new leads.",
        },
      ]}
      faqs={[
        {
          q: "What is landing page optimisation?",
          a: "It is the process of improving page design, messaging, and structure to increase enquiries, bookings, and patient actions.",
        },
        {
          q: "Does this only help paid traffic?",
          a: "No, landing page optimisation helps any traffic source, including ads, SEO, and referral traffic.",
        },
        {
          q: "What usually makes a landing page underperform?",
          a: "Common issues include unclear messaging, weak calls to action, poor mobile layout, and a lack of trust signals.",
        },
        {
          q: "Can optimisation improve results without increasing traffic?",
          a: "Yes, improving your conversion rate often helps you generate more enquiries from the traffic you already have.",
        },
      ]}
      finalCtaText="Ready to improve how your landing pages convert?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}