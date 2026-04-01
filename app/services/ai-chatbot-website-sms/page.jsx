import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  Bot,
  MessageSquareText,
  Phone,
  Smartphone,
  TimerReset,
  UserCheck,
} from "lucide-react";

export default function AiChatbotWebsiteSmsPage() {
  return (
    <ServicePageLayout
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="AI Chatbot for"
      titleMain="Website & SMS"
      titleBottom="Patients"
      intro={`Never miss a conversation again.

Our AI chatbot responds instantly on your website and via SMS — answering questions, guiding patients, and turning inquiries into bookings.`}
      primaryCtaText="BOOK AN AI DEMO"
      primaryCtaLink="/contact"

      heroImage="/assets/img/inner-pages/AI Chatbot (Website + SMS)/001.webp"
      heroImageAlt="AI chatbot for clinic website and SMS"

      sectionTwoTitle="Patients expect instant answers — anytime."
      sectionTwoTextOne={`Visitors come to your website with questions.

If they don’t get answers quickly, they leave.`}
      sectionTwoTextTwo={`Your staff can’t be available 24/7 — but your chatbot can.

Most clinics lose potential patients simply because no one is there to respond instantly.

We implement an AI Chatbot System that engages visitors in real-time, answers their questions, and guides them toward booking.`}
      sectionTwoImage="/assets/img/inner-pages/AI Chatbot (Website + SMS)/002.webp"
      sectionTwoImageAlt="Clinic chatbot and SMS automation"

      featureCards={[
        {
          icon: <Bot size={28} />,
          title: "24/7 Instant Conversations",
          text: "Engage visitors and respond to SMS inquiries anytime, day or night.",
        },
        {
          icon: <Smartphone size={28} />,
          title: "Smart Patient Assistance",
          text: "Answer FAQs, provide service details, and guide next steps.",
        },
        {
          icon: <UserCheck size={28} />,
          title: "Booking & Lead Capture",
          text: "Convert conversations into leads and confirmed appointments.",
        },
      ]}

      valueTitle="Turn conversations into patient bookings"
      valueTextOne={`Every question is an opportunity.

Our chatbot ensures no visitor leaves without getting answers — increasing engagement, trust, and conversions.`}
      valueResultItems={[
        { text: "Higher engagement rates", tag: "More interaction", tagColor: "pink" },
        { text: "More captured leads", tag: "Better pipeline", tagColor: "green" },
        { text: "Increased bookings", tag: "More patients", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/AI Chatbot (Website + SMS)/003.png"
      valueImageAlt="AI chatbot system for clinic growth"

      consultationText="Who is answering your patient questions right now?"

      buildTitle="Built for clinics that want constant engagement"
      buildItems={[
        "Clinics receiving website traffic but low inquiries",
        "Clinics missing after-hours leads",
        "Clinics with repetitive patient questions",
        "Busy clinics needing automated support",
        "Clinics using SMS for communication",
        "Clinics improving patient experience",
      ]}
      buildImage="/assets/img/inner-pages/AI Chatbot (Website + SMS)/004.webp"
      buildImageAlt="Clinic chatbot and SMS system build"

      quoteText="Your clinic should never miss a conversation."

      relatedServices={[
        {
          icon: <Phone size={26} />,
          title: "AI Lead Response System",
          text: "Instant replies to new leads across channels.",
        },
        {
          icon: <TimerReset size={26} />,
          title: "PatientFlow AI",
          text: "Full lead conversion and follow-up system.",
        },
        {
          icon: <MessageSquareText size={26} />,
          title: "Online Booking Integration",
          text: "Turn conversations into instant appointments.",
        },
      ]}

      faqs={[
        {
          q: "Is this different from a normal chatbot?",
          a: "Yes — it’s tailored specifically for clinics and designed to convert, not just answer questions.",
        },
        {
          q: "Can it send and receive SMS?",
          a: "Yes — it works on both website chat and SMS.",
        },
        {
          q: "Will it sound robotic?",
          a: "No — responses are designed to feel natural and professional.",
        },
        {
          q: "Can it book appointments?",
          a: "Yes — it can guide users to booking or integrate directly with your system.",
        },
        {
          q: "What if my staff is already handling messages?",
          a: "The chatbot supports your team and handles volume efficiently.",
        },
        {
          q: "How long does setup take?",
          a: "Typically 1–2 weeks depending on complexity.",
        },
      ]}

      finalCtaText={`Ready to Engage Every Patient — 24/7?

Let AI handle conversations, answer questions, and convert visitors into patients — even when you’re offline.`}
      finalCtaButtonText="Get Free AI Audit"
      finalCtaButtonLink="/contact"
    />
  );
}