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
      category="Launch System"
      titleTop="Local Visibility"
      titleMain="Setup"
      titleBottom="for Clinics"
      intro="Optimise your Google presence so patients can easily find and trust your clinic when searching for healthcare services in your local area."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/local-visibility-setup/hero.webp"
      heroImageAlt="Local visibility setup for clinics"
      sectionTwoTitle="Why Local Visibility Matters for Clinics"
      sectionTwoTextOne="When patients search for a clinic, they usually choose from the first few results they see on Google. If your clinic is not visible in local search, you miss valuable opportunities to attract new patients who are already looking for your services."
      sectionTwoTextTwo="Local visibility helps your clinic appear in the right places, build trust faster, and make it easier for patients to contact or visit you."
      sectionTwoImage="/assets/img/services/local-visibility-setup/section-two.webp"
      sectionTwoImageAlt="Clinic local search visibility"
      featureCards={[
        {
          icon: <MapPin size={28} />,
          title: "Stronger Local Presence",
          text: "Help your clinic appear when nearby patients search for relevant treatments and services.",
        },
        {
          icon: <Search size={28} />,
          title: "Better Google Discoverability",
          text: "Improve how easily patients can find your clinic through local search results and map listings.",
        },
        {
          icon: <BadgeCheck size={28} />,
          title: "More Trust and Credibility",
          text: "Build confidence with an optimised presence that looks active, accurate, and professional.",
        },
      ]}
      valueTitle="What a Local Visibility Setup Includes"
      valueTextOne="A strong local setup ensures your clinic’s key details are accurate, consistent, and easy for patients to find across search platforms."
      valueTextTwo="This includes optimising your Google Business Profile, improving local relevance, strengthening trust signals, and helping your clinic show up more often in the moments that matter."
      valueImage="/assets/img/services/local-visibility-setup/value.webp"
      valueImageAlt="Google business profile and local visibility"
      consultationText="Want your clinic to be easier to find in local search results?"
      buildTitle="What We Help Set Up"
      buildItems={[
        "Google Business Profile optimisation",
        "Accurate clinic details and business information",
        "Local keyword targeting",
        "Location relevance improvements",
        "Trust-building profile updates",
        "Directory and citation consistency",
        "Improved map visibility foundations",
        "Stronger local search presence",
      ]}
      buildImage="/assets/img/services/local-visibility-setup/build.webp"
      buildImageAlt="Local visibility strategy for clinics"
      quoteText="If patients cannot find your clinic locally, they are far more likely to choose a competitor they can see and trust first."
      relatedServices={[
        {
          icon: <PhoneCall size={26} />,
          title: "Online Booking Integration",
          text: "Turn local search interest into real appointments with a smoother booking journey.",
        },
        {
          icon: <Globe size={26} />,
          title: "Conversion-Focused Website",
          text: "Support your visibility with a website built to turn visitors into enquiries and bookings.",
        },
        {
          icon: <BarChart3 size={26} />,
          title: "Patient Acquisition Campaigns",
          text: "Pair strong organic visibility with targeted campaigns to accelerate clinic growth.",
        },
      ]}
      faqs={[
        {
          q: "What is local visibility for a clinic?",
          a: "Local visibility means how easily your clinic can be found by nearby patients through Google search results, maps, and other local listings.",
        },
        {
          q: "Why is Google Business Profile important?",
          a: "It is often one of the first things patients see when searching for a clinic, so an optimised profile can improve trust, clicks, calls, and directions.",
        },
        {
          q: "Will this help my clinic get more patients?",
          a: "It helps more relevant local patients discover your clinic, which can increase enquiries and bookings when paired with a strong website and booking process.",
        },
        {
          q: "Is this only for new clinics?",
          a: "No, both new and established clinics can benefit from improving their local search presence and visibility.",
        },
      ]}
      finalCtaText="Ready to make your clinic easier to find and trust locally?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}