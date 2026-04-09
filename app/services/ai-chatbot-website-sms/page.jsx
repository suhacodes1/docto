import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesFour from "@/app/components/ProcessSectionServicesFour";
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
      category="PATIENTFLOW AI SYSTEM"
      titleTop="Never Miss a Patient"
      titleMain="Conversation — 24/7"
      titleBottom=""
      intro={`Every visitor has questions — and every delay costs you a patient.

We install an AI-powered conversation system that responds instantly on your website and SMS — guiding patients from inquiry to booking automatically.`}
      primaryCtaText="BOOK YOUR AI DEMO"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/ai-chatbot/001.webp"
      heroImageAlt="AI chatbot for clinic website and SMS"
      sectionTwoTitle="Patients don’t wait for replies"
      sectionTwoTextOne={`A potential patient lands on your website. They have a question. They’re ready to book. But no one responds. So they leave — and choose another clinic.`}
      sectionTwoTextTwo={`This isn’t a traffic problem. It’s a response gap. We install a Real-Time Patient Conversation System that engages every visitor instantly — without relying on staff availability.`}
      sectionTwoImage="/assets/img/inner-pages/ai-chatbot/002.webp"
      sectionTwoImageAlt="Clinic chatbot and SMS automation"
      featureCards={[
        {
          icon: <Bot size={28} />,
          title: "Instant 24/7 Conversations",
          text: "Every website and SMS inquiry gets an immediate response.",
        },
        {
          icon: <Smartphone size={28} />,
          title: "Guided Patient Journeys",
          text: "Answer questions, recommend services, and move patients toward booking.",
        },
        {
          icon: <UserCheck size={28} />,
          title: "Conversation → Booking Conversion",
          text: "Capture leads and drive real appointment actions.",
        },
      ]}
      valueTitle="Turn conversations into predictable bookings"
      valueTextOne={`Every unanswered question is a lost opportunity. Our system ensures no visitor leaves without engagement, every inquiry moves toward action, and your clinic is always “open”.`}
      valueResultItems={[
        { text: "Higher engagement", tagColor: "pink" },
        { text: "More qualified leads", tagColor: "green" },
        { text: "Increased bookings without more staff", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/ai-chatbot/003.webp"
      valueImageAlt="AI chatbot system for clinic growth"
      consultationText="Who is responding to your patients right now?"
      buildTitle="Built for clinics that want constant engagement"
      buildItems={[
        "Clinics missing website inquiries",
        "Clinics losing after-hours leads",
        "Clinics with delayed response times",
        "Busy clinics needing automated support",
        "Clinics using SMS for patient communication",
        "Clinics focused on converting more inquiries into bookings",
      ]}
      buildImage="/assets/img/inner-pages/ai-chatbot/004.webp"
      buildImageAlt="Clinic chatbot and SMS system build"
      quoteText="Your clinic should never miss a patient conversation."
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
          a: "Yes — it’s tailored specifically for clinics and designed to convert patient inquiries into real booking actions.",
        },
        {
          q: "Can it reply outside business hours?",
          a: "Yes — it responds instantly 24/7 on your website and SMS.",
        },
        {
          q: "Can it answer patient questions?",
          a: "Yes — it can handle common questions, guide users to the right service, and move them toward booking.",
        },
        {
          q: "Does it work with SMS as well as website chat?",
          a: "Yes — the system can engage patients across both website and SMS channels.",
        },
        {
          q: "Will it reduce pressure on staff?",
          a: "Yes — it handles initial conversations automatically so your team can focus on higher-value patient interactions.",
        },
        {
          q: "Can it help increase bookings?",
          a: "Yes — by responding instantly and guiding each inquiry toward action, it helps convert more conversations into appointments.",
        },
      ]}
      finalCtaText={`Ready to Capture Every Patient Conversation?

Turn every inquiry into an opportunity — automatically.`}
      finalCtaButtonText="Book Your AI Demo"
      finalCtaButtonLink="/contact"
      processComponent={<ProcessSectionServicesFour />}
    />
  );
}