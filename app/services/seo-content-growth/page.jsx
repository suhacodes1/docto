import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  BookOpenText,
  FileText,
  Search,
  TrendingUp,
  Users,
  Waypoints,
} from "lucide-react";

export default function SeoContentGrowthPage() {
  return (
    <ServicePageLayout
      category="Growth Engine"
      titleTop="SEO Content"
      titleMain="Growth"
      titleBottom="for Clinics"
      intro="Build long-term visibility with strategic content that helps patients find your clinic through search and trust your expertise."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/seo-content-growth/hero.webp"
      heroImageAlt="SEO content growth for clinics"
      sectionTwoTitle="Why SEO Content Growth Matters"
      sectionTwoTextOne="Many patients begin their search for treatment options online. If your clinic is not showing up with useful, relevant content, you may be missing long-term opportunities to build awareness and trust."
      sectionTwoTextTwo="SEO content growth helps clinics strengthen their search presence while creating educational content that supports both visibility and patient confidence."
      sectionTwoImage="/assets/img/services/seo-content-growth/section-two.webp"
      sectionTwoImageAlt="SEO content strategy for clinics"
      featureCards={[
        {
          icon: <Search size={28} />,
          title: "Stronger Search Visibility",
          text: "Help your clinic appear for more relevant local and service-based searches.",
        },
        {
          icon: <BookOpenText size={28} />,
          title: "Educational Content",
          text: "Answer patient questions with content that builds trust before they enquire.",
        },
        {
          icon: <TrendingUp size={28} />,
          title: "Long-Term Growth",
          text: "Support sustainable traffic growth beyond short-term paid campaigns.",
        },
      ]}
      valueTitle="How SEO Content Supports Clinic Growth"
      valueTextOne="SEO content helps clinics attract patients earlier in their decision-making process by showing up for relevant searches and providing useful information."
      valueTextTwo="Over time, this builds authority, supports local visibility, and brings in traffic that can continue growing without relying entirely on paid advertising."
      valueImage="/assets/img/services/seo-content-growth/value.webp"
      valueImageAlt="Clinic SEO and content growth"
      consultationText="Want to grow your clinic through long-term search visibility?"
      buildTitle="What We Help Build"
      buildItems={[
        "SEO-focused content strategy",
        "Service page content improvements",
        "Patient education content",
        "Search visibility foundations",
        "Keyword-aligned content planning",
        "Organic growth support",
        "Authority-building clinic content",
        "Long-term search performance improvements",
      ]}
      buildImage="/assets/img/services/seo-content-growth/build.webp"
      buildImageAlt="SEO content planning for clinics"
      quoteText="Useful content does more than rank, it helps patients trust your clinic before they ever get in touch."
      relatedServices={[
        {
          icon: <Waypoints size={26} />,
          title: "Conversion Tracking & Analytics",
          text: "Measure how organic search traffic turns into real patient enquiries.",
        },
        {
          icon: <FileText size={26} />,
          title: "Landing Page Optimisation",
          text: "Support SEO traffic with stronger service pages and clearer conversion pathways.",
        },
        {
          icon: <Users size={26} />,
          title: "Reputation Management",
          text: "Strengthen your online presence with both visibility and credibility working together.",
        },
      ]}
      faqs={[
        {
          q: "What is SEO content growth?",
          a: "It is a strategy focused on improving search visibility through useful, keyword-aligned content that helps patients find and trust your clinic.",
        },
        {
          q: "How is this different from paid ads?",
          a: "SEO content supports longer-term organic growth, while ads generate more immediate visibility through paid traffic.",
        },
        {
          q: "Can content help new clinics too?",
          a: "Yes, useful content can help new clinics start building authority, trust, and search presence over time.",
        },
        {
          q: "Does SEO content only mean blog posts?",
          a: "No, it can also include service pages, FAQs, local content, and other patient-focused website content.",
        },
      ]}
      finalCtaText="Ready to grow your clinic with smarter SEO content?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}