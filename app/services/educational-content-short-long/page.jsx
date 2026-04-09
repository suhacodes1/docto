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
      category="AUTHORITY BUILDER SYSTEM"
      titleTop="Become the Clinic Patients Trust"
      titleMain="Before They Even Contact You"
      titleBottom=""
      intro={`Patients don’t book immediately — they research first.

We build a content system that educates, builds trust, and positions your clinic as the obvious choice.`}
      primaryCtaText="BOOK A CONTENT STRATEGY CALL"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/educational-content/001.webp"
      heroImageAlt="Educational content for clinics"
      sectionTwoTitle="The clinic that educates — wins"
      sectionTwoTextOne={`Patients are searching: symptoms, treatments, and options. If you’re not answering those questions, your competitors are building trust before you even enter the conversation.`}
      sectionTwoTextTwo={`We build your Authority Content Engine.`}
      sectionTwoImage="/assets/img/inner-pages/educational-content/002.webp"
      sectionTwoImageAlt="Educational content strategy for clinics"
      featureCards={[
        {
          icon: <PlaySquare size={28} />,
          title: "Short-Form Content Engine",
          text: "Reels, Shorts, TikTok — capture attention at scale.",
        },
        {
          icon: <ScrollText size={28} />,
          title: "SEO Content System",
          text: "Blogs that rank and attract high-intent patients.",
        },
        {
          icon: <Sparkles size={28} />,
          title: "Trust-Building Education",
          text: "Answer questions before patients even ask.",
        },
      ]}
      valueTitle="Turn attention into trust — and trust into bookings"
      valueTextOne={`Content is not just marketing — it’s pre-selling your expertise.`}
      valueResultItems={[
        { text: "More inbound inquiries", tagColor: "pink" },
        { text: "Higher trust before first contact", tagColor: "green" },
        { text: "Better conversion rates", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/educational-content/003.webp"
      valueImageAlt="Clinic educational content growth"
      consultationText="Are you the clinic educating your market — or watching others do it?"
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
      buildImage="/assets/img/inner-pages/educational-content/004.webp"
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
          a: "It includes content that helps patients understand symptoms, treatments, options, processes, outcomes, and common questions before booking.",
        },
        {
          q: "Why use both short and long content?",
          a: "Short content helps capture attention quickly, while long content builds deeper trust and supports search visibility.",
        },
        {
          q: "Can educational content help conversion?",
          a: "Yes — informed patients often feel more confident and prepared to take the next step.",
        },
        {
          q: "Does this also support SEO and social media?",
          a: "Yes — educational content can strengthen both search visibility and ongoing social engagement.",
        },
      ]}
      finalCtaText={`Ready to Attract Patients Without Chasing Them?`}
      finalCtaButtonText="Book a Content Strategy Call"
      finalCtaButtonLink="/contact"
    />
  );
}