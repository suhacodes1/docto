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
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="SEO"
      titleMain="& Content Growth"
      titleBottom=""
      intro={`Build a steady flow of patients through search and content.

We help your clinic rank higher, attract the right audience, and grow organically over time.`}
      primaryCtaText="GET A FREE SEO AUDIT"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/SEO & Content Growth/001.webp"
      heroImageAlt="SEO content growth for clinics"

      sectionTwoTitle="Patients are searching every day. Are they finding you?"
      sectionTwoTextOne={`Most clinics rely only on ads or referrals.

But when patients search on Google, they choose from the top results — and many clinics don’t show up there.`}
      sectionTwoTextTwo={`No rankings. No visibility. No traffic.

We build your SEO & Content Growth System — helping your clinic rank for high-intent searches and attract patients consistently without ongoing ad spend.`}
      sectionTwoImage="/assets/img/inner-pages/SEO & Content Growth/002.avif"
      sectionTwoImageAlt="SEO content strategy for clinics"

      featureCards={[
        {
          icon: <Search size={28} />,
          title: "Local & Organic SEO",
          text: "Rank higher for “near me” and service-based searches in your area.",
        },
        {
          icon: <BookOpenText size={28} />,
          title: "Content That Attracts Patients",
          text: "Blogs, pages, and resources designed to answer patient questions and build trust.",
        },
        {
          icon: <TrendingUp size={28} />,
          title: "Long-Term Growth Strategy",
          text: "Build a sustainable system that keeps bringing in traffic over time.",
        },
      ]}

      valueTitle="Turn searches into patient bookings"
      valueTextOne={`SEO isn’t just about traffic — it’s about the right traffic.

We focus on high-intent keywords and patient-focused content that not only brings visitors… but converts them into bookings.`}
      valueResultItems={[
        { text: "Consistent organic traffic", tag: "Steady growth", tagColor: "pink" },
        { text: "Lower reliance on ads", tag: "Better ROI", tagColor: "green" },
        { text: "High-quality patient inquiries", tag: "Better leads", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/SEO & Content Growth/003.png"
      valueImageAlt="Clinic SEO and content growth"

      consultationText="Are patients finding your clinic on Google?"

      buildTitle="Built for clinics focused on long-term growth"
      buildItems={[
        "Clinics not ranking on Google",
        "Clinics relying heavily on ads",
        "Clinics in competitive local markets",
        "Clinics wanting consistent traffic",
        "Clinics building authority in their niche",
        "Clinics investing in long-term growth",
      ]}
      buildImage="/assets/img/inner-pages/SEO & Content Growth/004.jpg"
      buildImageAlt="SEO content planning for clinics"

      quoteText="Build a growth system that works — even when ads are off."

      relatedServices={[
        {
          icon: <Waypoints size={26} />,
          title: "Local Visibility Setup",
          text: "Improve your presence in local search results.",
        },
        {
          icon: <FileText size={26} />,
          title: "Conversion-Focused Website",
          text: "Turn organic traffic into booked patients.",
        },
        {
          icon: <Users size={26} />,
          title: "Authority Builder",
          text: "Strengthen trust through content and branding.",
        },
      ]}

      faqs={[
        {
          q: "How long does SEO take to work?",
          a: "Typically 3–6 months for noticeable results, with continuous growth over time.",
        },
        {
          q: "Is SEO better than ads?",
          a: "Both work together — SEO provides long-term growth, while ads provide immediate results.",
        },
        {
          q: "What type of content do you create?",
          a: "Patient-focused, educational content based on search intent.",
        },
        {
          q: "Can you improve my existing website SEO?",
          a: "Yes — we optimize current pages and structure.",
        },
        {
          q: "Will this help me get more patients?",
          a: "Yes — by attracting high-intent traffic actively searching for your services.",
        },
        {
          q: "Do I need to keep investing long-term?",
          a: "Yes — SEO is a long-term strategy with compounding results.",
        },
      ]}

      finalCtaText={`Ready to Grow Your Clinic Organically?

Attract patients consistently through search and content — without relying only on ads.`}
      finalCtaButtonText="Get Free SEO Audit"
      finalCtaButtonLink="/contact"
    />
  );
}