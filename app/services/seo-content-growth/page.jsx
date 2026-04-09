import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesThree from "@/app/components/ProcessSectionServicesThree";
import {
  BookOpenText,
  FileText,
  Search,
  TrendingUp,
  Users,
  Waypoints,
  Sprout,
} from "lucide-react";

export default function SeoContentGrowthPage() {
  return (
    <ServicePageLayout
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Build a Consistent Flow of Patients —"
      titleMain="Without Paying"
      titleBottom="Per Click"
      intro="Stop relying only on ads. We build a long-term organic growth system that brings in high-intent patients every month."
      primaryCtaText="Get Your Free SEO Audit"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/seo-content-growth/001.webp"
      heroImageAlt="SEO content growth for clinics"

      sectionTwoTitle="If you're not showing up, you're losing patients daily."
      sectionTwoTextOne={`Patients are actively searching for services you offer — but they choose from the top results, not page two.

If your clinic isn't visible, you don't exist in their decision process.`}
      sectionTwoTextTwo="We build your Organic Patient Acquisition Engine — a long-term system that brings patients to you consistently, without spending on every click."
      sectionTwoImage="/assets/img/inner-pages/seo-content-growth/002.webp"
      sectionTwoImageAlt="SEO content strategy for clinics"

      showGrowthSystem={true}
      growthSystemHighlightIndex={0}

      featureCards={[
        {
          icon: <Search size={28} />,
          title: "High-Intent SEO Strategy",
          text: "Rank for searches that lead to bookings — not just traffic.",
        },
        {
          icon: <BookOpenText size={28} />,
          title: "Patient-Focused Content",
          text: "Content that builds trust and answers real patient questions.",
        },
        {
          icon: <TrendingUp size={28} />,
          title: "Compounding Growth System",
          text: "Results that grow month after month without extra ad spend.",
        },
      ]}

      valueTitle="Turn Google into your most reliable referral source"
      valueTextOne="This isn't about vanity rankings. It's about owning your category in your local market."
      valueResultLabel="The result:"
      valueResultItems={[
        { text: "Consistent inbound traffic", tag: "Steady growth", tagColor: "pink" },
        { text: "Higher quality leads", tag: "Better patients", tagColor: "green" },
        { text: "Reduced ad dependency", tag: "Lower costs", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/seo-content-growth/003.webp"
      valueImageAlt="Clinic SEO and content growth"

      consultationText="Are patients choosing your competitors on Google?"

      buildTitle="Built for clinics focused on long-term growth"
      buildItems={[
        "Clinics not ranking on Google",
        "Clinics relying heavily on paid ads",
        "Clinics in competitive local markets",
        "Clinics wanting consistent monthly traffic",
        "Clinics building authority in their niche",
        "Clinics investing in compounding growth",
      ]}
      buildImage="/assets/img/inner-pages/seo-content-growth/004.webp"
      buildImageAlt="SEO content planning for clinics"

      processComponent={
        <>
          <ProcessSectionServicesThree />

          {/* Mid CTA — consistent card style across all service pages */}
          <div style={{ background: "#fff", padding: "3rem 0" }}>
            <div
              className="container"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                maxWidth: "780px",
                padding: "2rem 2.5rem",
                border: "0.5px solid rgba(229,38,74,0.2)",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #fff9fb 0%, #fff 100%)",
                boxShadow: "0 4px 32px rgba(229,38,74,0.06)",
              }}
              data-aos="fade-up"
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#fbeaf0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#e5264a",
                }}
              >
                <Sprout size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "#e5264a",
                    textTransform: "uppercase",
                    margin: "0 0 6px",
                  }}
                >
                  Keep in mind
                </p>
                <p
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#243847",
                    margin: "0 0 1rem",
                    lineHeight: 1.5,
                  }}
                >
                  The best time to start SEO was 6 months ago. The next best time is now.
                </p>
                <a
                  href="/contact"
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    background: "#e5264a",
                    color: "#fff",
                    borderRadius: "999px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                  }}
                >
                  Get Your Audit
                </a>
              </div>
            </div>
          </div>
        </>
      }

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
          a: "Yes — SEO is a long-term strategy with compounding results over time.",
        },
      ]}

      finalCtaText="Ready to Build Long-Term Patient Growth? Create a system that brings patients in — every single month."
      finalCtaButtonText="Get Free SEO Audit"
      finalCtaButtonLink="/contact"
    />
  );
}