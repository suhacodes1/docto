import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesFour from "@/app/components/ProcessSectionServicesFour";
import {
  MessageSquareReply,
  PhoneMissed,
  PhoneOutgoing,
  RefreshCw,
  Smartphone,
  Timer,
} from "lucide-react";

export default function MissedCallTextbackSystemPage() {
  return (
    <ServicePageLayout
      category="PatientFlow AI"
      titleTop="Missed Call"
      titleMain="Textback System"
      titleBottom="for Clinics"
      intro="Turn missed calls into patient conversations with automated textback systems that improve follow-up and reduce lost opportunities."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/missed-call-text-back-system/001.webp"
      heroImageAlt="Missed call textback system for clinics"
      sectionTwoTitle="Why Missed Call Textback Matters"
      sectionTwoTextOne="When a clinic misses a patient call, there is a strong chance that person may contact a competitor instead of waiting for a callback."
      sectionTwoTextTwo="A missed call textback system helps your clinic respond immediately with a message that reassures the patient and guides them toward the next step."
      sectionTwoImage="/assets/img/inner-pages/missed-call-text-back-system/002.webp"
      sectionTwoImageAlt="Automated missed call textback for clinics"
      featureCards={[
        {
          icon: <PhoneMissed size={28} />,
          title: "Recover Lost Opportunities",
          text: "Respond automatically when calls are missed so patients are less likely to drop off.",
        },
        {
          icon: <Smartphone size={28} />,
          title: "Instant Follow-Up",
          text: "Send quick text replies that acknowledge the missed call and keep the conversation open.",
        },
        {
          icon: <PhoneOutgoing size={28} />,
          title: "Stronger Patient Experience",
          text: "Show patients that your clinic is responsive even when calls cannot be answered immediately.",
        },
      ]}
      valueTitle="How Missed Call Textback Supports Growth"
      valueTextOne="A missed call textback system helps clinics capture more value from inbound call traffic by reducing the number of potential patients lost through silence."
      valueTextTwo="It also improves communication consistency and gives patients an easier way to reconnect without needing to call again."
      valueImage="/assets/img/inner-pages/missed-call-text-back-system/004.webp"
      valueImageAlt="Clinic missed call response workflow"
      consultationText="Want to stop losing patients after missed calls?"
      buildTitle="What We Help Build"
      buildItems={[
        "Automated missed call textback flows",
        "Instant call acknowledgment messages",
        "Patient callback pathways",
        "SMS-based re-engagement prompts",
        "Lead recovery communication",
        "Contact option guidance",
        "Follow-up process automation",
        "Missed-opportunity reduction systems",
      ]}
      buildImage="/assets/img/inner-pages/landing-page-optimisation/005.webp"
      buildImageAlt="Missed call automation system build"
      quoteText="A missed call should not mean a missed patient opportunity."
      relatedServices={[
        {
          icon: <RefreshCw size={26} />,
          title: "Lead Nurturing Follow-Ups",
          text: "Keep patient conversations moving after the first missed interaction.",
        },
        {
          icon: <Timer size={26} />,
          title: "AI Chatbot Website & SMS",
          text: "Support real-time enquiry handling across more patient touchpoints.",
        },
        {
          icon: <MessageSquareReply size={26} />,
          title: "Patient Reactivation Campaigns",
          text: "Reconnect with older leads and past patients through timely messaging.",
        },
      ]}
      faqs={[
        {
          q: "What is a missed call textback system?",
          a: "It is an automated system that sends a text message to patients when your clinic misses their call.",
        },
        {
          q: "Why is this important for clinics?",
          a: "It helps reduce lost opportunities by replying quickly instead of leaving callers with no response.",
        },
        {
          q: "Can it improve patient experience?",
          a: "Yes, patients often appreciate quick acknowledgment and clear next-step guidance after a missed call.",
        },
        {
          q: "Does it replace callbacks?",
          a: "No, it supports your process by bridging the gap until your team can respond properly.",
        },
      ]}
      finalCtaText="Ready to recover more missed call opportunities?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
      processComponent={<ProcessSectionServicesFour />}
    />
  );
}