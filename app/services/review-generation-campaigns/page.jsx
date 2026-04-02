import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  BadgeCheck,
  MessageCircle,
  SmilePlus,
  Star,
  ThumbsUp,
  UserRoundPen,
} from "lucide-react";

export default function ReviewGenerationCampaignsPage() {
  return (
    <ServicePageLayout
      category="Authority Builder"
      titleTop="Review Generation"
      titleMain="Campaigns"
      titleBottom="for Clinics"
      intro="Generate more positive patient reviews with structured campaigns that strengthen trust, credibility, and online visibility."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/review-generation-campaigns/001.webp"
      heroImageAlt="Review generation campaigns for clinics"
      sectionTwoTitle="Why Review Generation Matters"
      sectionTwoTextOne="Online reviews often shape whether a potential patient trusts your clinic enough to enquire or book. Even great clinics can miss opportunities if they are not consistently collecting feedback."
      sectionTwoTextTwo="Review generation campaigns help clinics create a repeatable process for encouraging more satisfied patients to leave positive reviews."
      sectionTwoImage="/assets/img/inner-pages/review-generation-campaigns/002.webp"
      sectionTwoImageAlt="Clinic review generation strategy"
      featureCards={[
        {
          icon: <Star size={28} />,
          title: "More Positive Reviews",
          text: "Increase the number of patient reviews that support trust and credibility.",
        },
        {
          icon: <BadgeCheck size={28} />,
          title: "Stronger Online Trust",
          text: "Improve first impressions for potential patients researching your clinic.",
        },
        {
          icon: <SmilePlus size={28} />,
          title: "Better Social Proof",
          text: "Make it easier for patients to feel confident choosing your clinic.",
        },
      ]}
      valueTitle="How Review Campaigns Support Growth"
      valueTextOne="Review generation campaigns help clinics improve how they appear across search, local listings, and other online touchpoints where patients form early opinions."
      valueTextTwo="They also support better performance across ads, SEO, and referrals by strengthening the trust signals that influence conversion."
      valueImage="/assets/img/inner-pages/review-generation-campaigns/003.webp"
      valueImageAlt="Clinic reviews and trust growth"
      consultationText="Want to generate more reviews from happy patients?"
      buildTitle="What We Help Build"
      buildItems={[
        "Review request workflows",
        "Post-appointment review campaigns",
        "Patient feedback collection systems",
        "Trust-building review pathways",
        "Reputation support messaging",
        "Consistent review generation processes",
        "Social proof growth systems",
        "Clinic credibility enhancement workflows",
      ]}
      buildImage="/assets/img/inner-pages/review-generation-campaigns/004.webp"
      buildImageAlt="Review generation system build"
      quoteText="A steady flow of genuine reviews can become one of your clinic’s most valuable trust assets."
      relatedServices={[
        {
          icon: <ThumbsUp size={26} />,
          title: "Reputation Management",
          text: "Strengthen the way your clinic is perceived with stronger review and trust systems.",
        },
        {
          icon: <MessageCircle size={26} />,
          title: "Video Testimonials",
          text: "Complement written reviews with more personal and persuasive patient stories.",
        },
        {
          icon: <UserRoundPen size={26} />,
          title: "Personal Brand Building Doctors",
          text: "Support practitioner credibility with stronger public trust signals.",
        },
      ]}
      faqs={[
        {
          q: "What are review generation campaigns?",
          a: "They are systems that help clinics consistently ask satisfied patients to leave positive reviews after a good experience.",
        },
        {
          q: "Why do reviews matter for clinics?",
          a: "Reviews influence trust, credibility, and whether potential patients feel confident reaching out.",
        },
        {
          q: "Can more reviews help with local visibility?",
          a: "Yes, a stronger review profile can support how your clinic appears and performs online.",
        },
        {
          q: "Is this only for clinics with no reviews?",
          a: "No, even clinics with existing reviews benefit from a consistent review generation process.",
        },
      ]}
      finalCtaText="Ready to build stronger trust with more patient reviews?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}