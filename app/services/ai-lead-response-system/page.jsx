import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesFour from "@/app/components/ProcessSectionServicesFour";
import {
  Bot,
  Clock3,
  MessageCircleMore,
  PhoneCall,
  Sparkles,
  UserRoundCheck,
  Zap,
} from "lucide-react";

export default function AiLeadResponseSystemPage() {
  return (
    <ServicePageLayout
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Convert More Leads —"
      titleMain="Before Your Competitors"
      titleBottom="Even Reply"
      intro="Speed is no longer optional. We install an AI-powered response system that engages every lead instantly, qualifies them, and moves them toward booking — automatically."
      primaryCtaText="Book Your AI Demo"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/ai-lead-response-system/001.webp"
      heroImageAlt="AI lead response system for clinics"

      sectionTwoTitle="Leads don't wait — and neither should you."
      sectionTwoTextOne={`The reality is simple: the first clinic to respond usually wins.

But most clinics miss calls, reply late, and forget follow-ups.`}
      sectionTwoTextTwo="This isn't a marketing problem — it's a response system problem. We fix it with a 24/7 AI Response Engine."
      sectionTwoImage="/assets/img/inner-pages/ai-lead-response-system/002.webp"
      sectionTwoImageAlt="Automated lead response for clinics"

      showGrowthSystem={true}
      growthSystemHighlightIndex={3}

      featureCards={[
        {
          icon: <Clock3 size={28} />,
          title: "Instant Engagement (0–10 seconds)",
          text: "Every lead gets a response immediately — across all channels.",
        },
        {
          icon: <MessageCircleMore size={28} />,
          title: "Intelligent Qualification",
          text: "Filter serious patients and guide them to the right service.",
        },
        {
          icon: <UserRoundCheck size={28} />,
          title: "Automated Follow-Up Sequences",
          text: "Consistent reminders that increase show-up rates.",
        },
      ]}

      valueTitle="More leads → more bookings (without more staff)"
      valueTextOne="You don't need more leads. You need to convert the ones you already have. Our system ensures no opportunity is lost — even after hours."
      valueResultLabel="The result:"
      valueResultItems={[
        { text: "Higher conversion rates", tag: "More bookings", tagColor: "pink" },
        { text: "More booked appointments", tag: "Better outcomes", tagColor: "green" },
        { text: "Less pressure on your team", tag: "Less effort", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/ai-lead-response-system/003.webp"
      valueImageAlt="AI-assisted clinic lead follow-up"

      consultationText="How many leads did you lose this week due to slow response?"

      buildTitle="Built for clinics that need faster conversions"
      buildItems={[
        "Clinics missing inbound inquiries",
        "High lead volume, low conversion",
        "Busy reception teams",
        "Clinics running paid ads",
        "WhatsApp / DM heavy clinics",
        "Scaling clinics needing automation",
      ]}
      buildImage="/assets/img/inner-pages/ai-lead-response-system/004.webp"
      buildImageAlt="Clinic lead automation system"

      processComponent={
        <>
          <ProcessSectionServicesFour />

          {/* Mid CTA — consistent with other service pages */}
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
                <Zap size={22} />
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
                  Speed doesn't just improve experience — it increases revenue.
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
                  Book Your Demo
                </a>
              </div>
            </div>
          </div>
        </>
      }

      quoteText="Speed is the difference between losing and winning patients."

      relatedServices={[
        {
          icon: <Bot size={26} />,
          title: "PatientFlow AI",
          text: "Full lead management and conversion system.",
        },
        {
          icon: <Sparkles size={26} />,
          title: "Online Booking Integration",
          text: "Turn conversations into instant appointments.",
        },
        {
          icon: <PhoneCall size={26} />,
          title: "CRM & Automation Setup",
          text: "Organize and manage all lead interactions efficiently.",
        },
      ]}

      faqs={[
        {
          q: "Is this different from a chatbot?",
          a: "Yes — it's designed specifically for clinic lead conversion, not generic responses.",
        },
        {
          q: "Can it respond on WhatsApp?",
          a: "Yes — along with website, forms, and other channels.",
        },
        {
          q: "Will patients feel like they're talking to AI?",
          a: "No — responses are designed to feel natural and professional.",
        },
        {
          q: "Can it book appointments directly?",
          a: "Yes — it can guide patients to booking or integrate with your system.",
        },
        {
          q: "What if I already have staff responding?",
          a: "The AI supports your team and ensures no lead is ever missed.",
        },
        {
          q: "How quickly can this be set up?",
          a: "Typically within 1–2 weeks.",
        },
      ]}

      finalCtaText="Ready to Capture Every Lead — Instantly? Turn response time into your competitive advantage."
      finalCtaButtonText="Get Free AI Audit"
      finalCtaButtonLink="/contact"
    />
  );
}