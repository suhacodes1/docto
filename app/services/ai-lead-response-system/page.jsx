import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  Bot,
  Clock3,
  MessageCircleMore,
  PhoneCall,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

export default function AiLeadResponseSystemPage() {
  return (
    <ServicePageLayout
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="AI Lead Response"
      titleMain="System"
      titleBottom=""
      intro={`Speed wins patients.

Our AI Lead Response System replies to every inquiry within seconds — increasing conversions and ensuring no lead is ever missed.`}
      primaryCtaText="BOOK AN AI DEMO"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/ai-lead-response-system/001.webp"
      heroImageAlt="AI lead response system for clinics"

      sectionTwoTitle="The first clinic to respond usually wins the patient."
      sectionTwoTextOne={`Most clinics take minutes… sometimes hours… to respond.

By then, the patient has already contacted someone else.`}
      sectionTwoTextTwo={`Missed calls. Delayed replies. No follow-ups.

This is where leads are lost — not in marketing, but in response time.

We implement an AI Lead Response System that replies instantly, qualifies the lead, and guides them toward booking — automatically.`}
      sectionTwoImage="/assets/img/inner-pages/ai-lead-response-system/002.webp"
      sectionTwoImageAlt="Automated lead response for clinics"

      featureCards={[
        {
          icon: <Clock3 size={28} />,
          title: "Instant Multi-Channel Replies",
          text: "Respond within seconds across WhatsApp, website, and forms.",
        },
        {
          icon: <MessageCircleMore size={28} />,
          title: "Smart Lead Qualification",
          text: "AI asks the right questions to filter and guide patients.",
        },
        {
          icon: <UserRoundCheck size={28} />,
          title: "Automated Follow-Ups",
          text: "Never lose a lead with timely reminders and nurturing messages.",
        },
      ]}

      valueTitle="Convert more leads — without more effort"
      valueTextOne={`Every delay reduces your chances of booking.

Our system ensures every inquiry is handled immediately — giving patients answers, building trust, and guiding them toward scheduling.`}
      valueResultItems={[
        { text: "Faster response times", tag: "Instant replies", tagColor: "pink" },
        { text: "Higher conversion rates", tag: "More bookings", tagColor: "green" },
        { text: "More booked appointments", tag: "Better outcomes", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/ai-lead-response-system/003.webp"
      valueImageAlt="AI-assisted clinic lead follow-up"

      consultationText="How fast are you responding to new leads right now?"

      buildTitle="Built for clinics that want faster conversions"
      buildItems={[
        "Clinics missing calls or messages",
        "Clinics slow to respond to inquiries",
        "High lead volume with limited staff",
        "Clinics using WhatsApp or DMs",
        "Clinics running ads but losing leads",
        "Busy teams needing automation",
      ]}
      buildImage="/assets/img/inner-pages/ai-lead-response-system/004.webp"
      buildImageAlt="Clinic lead automation system"

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
          a: "Yes — it’s designed specifically for clinic lead conversion, not generic responses.",
        },
        {
          q: "Can it respond on WhatsApp?",
          a: "Yes — along with website and other channels.",
        },
        {
          q: "Will patients feel like they’re talking to AI?",
          a: "No — responses are designed to feel natural and professional.",
        },
        {
          q: "Can it book appointments directly?",
          a: "Yes — it can guide patients to booking or integrate with your system.",
        },
        {
          q: "What if I already have staff responding?",
          a: "The AI supports your team and ensures no lead is missed.",
        },
        {
          q: "How quickly can this be set up?",
          a: "Typically within 1–2 weeks.",
        },
      ]}

      finalCtaText={`Ready to Respond Faster Than Every Competitor?

Capture more patients by replying instantly — every time, without fail.`}
      finalCtaButtonText="Get Free AI Audit"
      finalCtaButtonLink="/contact"
    />
  );
}