import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  BookMarked,
  FileText,
  Layers3,
  PlaySquare,
  ScrollText,
  Sparkles,
} from "lucide-react";

export default function EducationalContentShortLongPage() {
  return (
    <ServicePageLayout
      category="Authority Builder"
      titleTop="Educational Content"
      titleMain="Short & Long"
      titleBottom="for Clinics"
      intro="Build trust and authority with educational content that helps patients understand your services across both quick-consume and deeper-form formats."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/educational-content-short-long/hero.webp"
      heroImageAlt="Educational content for clinics"
      sectionTwoTitle="Why Educational Content Matters"
      sectionTwoTextOne="Patients often need information before they feel ready to book. Educational content helps clinics answer questions, reduce uncertainty, and build confidence earlier in the decision-making journey."
      sectionTwoTextTwo="By using both short-form and long-form content, clinics can meet patients where they are, whether they want a quick overview or a deeper explanation."
      sectionTwoImage="/assets/img/services/educational-content-short-long/section-two.webp"
      sectionTwoImageAlt="Educational content strategy for clinics"
      featureCards={[
        {
          icon: <PlaySquare size={28} />,
          title: "Short-Form Engagement",
          text: "Capture attention with clear, simple educational content that is easy to consume.",
        },
        {
          icon: <ScrollText size={28} />,
          title: "Long-Form Authority",
          text: "Build deeper trust with more detailed content that answers important patient questions.",
        },
        {
          icon: <Sparkles size={28} />,
          title: "Stronger Patient Confidence",
          text: "Help people feel more informed and comfortable before they enquire or book.",
        },
      ]}
      valueTitle="How Educational Content Supports Growth"
      valueTextOne="Educational content helps clinics build authority by showing expertise in a way that is genuinely useful to potential patients."
      valueTextTwo="It also supports SEO, social content, practitioner branding, and conversion by creating trust long before the first appointment."
      valueImage="/assets/img/services/educational-content-short-long/value.webp"
      valueImageAlt="Clinic educational content growth"
      consultationText="Want to build trust through better educational content?"
      buildTitle="What We Help Build"
      buildItems={[
        "Short-form educational content",
        "Long-form trust-building content",
        "Patient question content strategy",
        "Clinic authority content planning",
        "Multi-format content systems",
        "Service education assets",
        "Content repurposing pathways",
        "Visibility and trust content frameworks",
      ]}
      buildImage="/assets/img/services/educational-content-short-long/build.webp"
      buildImageAlt="Educational content system build"
      quoteText="The more clearly you educate, the more confidently patients can choose your clinic."
      relatedServices={[
        {
          icon: <BookMarked size={26} />,
          title: "SEO Content Growth",
          text: "Turn valuable educational content into long-term search visibility and authority.",
        },
        {
          icon: <Layers3 size={26} />,
          title: "Video Testimonials",
          text: "Balance educational authority with trust-building patient story content.",
        },
        {
          icon: <FileText size={26} />,
          title: "Personal Brand Building Doctors",
          text: "Help doctors become more visible and credible through educational media.",
        },
      ]}
      faqs={[
        {
          q: "What counts as educational content for clinics?",
          a: "It includes content that helps patients understand treatments, processes, outcomes, and common questions before booking.",
        },
        {
          q: "Why use both short and long content?",
          a: "Short content helps grab attention quickly, while long content supports deeper trust and understanding.",
        },
        {
          q: "Can educational content help conversion?",
          a: "Yes, informed patients often feel more confident and prepared to take the next step.",
        },
        {
          q: "Does this also support SEO and social media?",
          a: "Yes, educational content can strengthen both search visibility and ongoing social engagement.",
        },
      ]}
      finalCtaText="Ready to grow your authority with educational content?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}