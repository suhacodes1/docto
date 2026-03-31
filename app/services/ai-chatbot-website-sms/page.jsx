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
      category="PatientFlow AI"
      titleTop="AI Chatbot"
      titleMain="Website & SMS"
      titleBottom="for Clinics"
      intro="Respond to enquiries faster across your website and SMS with AI-assisted conversations that improve patient experience and reduce missed opportunities."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/ai-chatbot-website-sms/hero.webp"
      heroImageAlt="AI chatbot for clinic website and SMS"
      sectionTwoTitle="Why AI Chatbot Support Matters"
      sectionTwoTextOne="Patients often enquire outside business hours or expect quick answers before they decide to book. If responses are delayed, clinics can lose valuable opportunities."
      sectionTwoTextTwo="An AI chatbot across website and SMS helps your clinic respond faster, guide patients to the right next step, and create a smoother enquiry experience."
      sectionTwoImage="/assets/img/services/ai-chatbot-website-sms/section-two.webp"
      sectionTwoImageAlt="Clinic chatbot and SMS automation"
      featureCards={[
        {
          icon: <Bot size={28} />,
          title: "Instant Responses",
          text: "Acknowledge and guide patients quickly across your website and SMS channels.",
        },
        {
          icon: <Smartphone size={28} />,
          title: "Better Accessibility",
          text: "Support patient communication through channels they already use and trust.",
        },
        {
          icon: <UserCheck size={28} />,
          title: "Fewer Missed Leads",
          text: "Reduce drop-off caused by slow replies or unanswered questions.",
        },
      ]}
      valueTitle="How AI Chatbot Systems Support Growth"
      valueTextOne="AI chatbot systems help clinics improve speed, consistency, and convenience when handling patient enquiries."
      valueTextTwo="They work especially well for clinics that want to improve first response times, support after-hours engagement, and move more leads toward booking."
      valueImage="/assets/img/services/ai-chatbot-website-sms/value.webp"
      valueImageAlt="AI chatbot system for clinic growth"
      consultationText="Want to improve how your clinic handles website and SMS enquiries?"
      buildTitle="What We Help Build"
      buildItems={[
        "Website chatbot flows",
        "SMS response automation",
        "Lead qualification pathways",
        "After-hours patient support",
        "Frequently asked question handling",
        "Booking guidance flows",
        "Faster enquiry response systems",
        "Multi-channel communication journeys",
      ]}
      buildImage="/assets/img/services/ai-chatbot-website-sms/build.webp"
      buildImageAlt="Clinic chatbot and SMS system build"
      quoteText="Patients are more likely to convert when they get the right answer at the right time."
      relatedServices={[
        {
          icon: <Phone size={26} />,
          title: "Missed Call Textback System",
          text: "Follow up automatically when a patient call is missed by your clinic.",
        },
        {
          icon: <TimerReset size={26} />,
          title: "Lead Nurturing Follow-Ups",
          text: "Keep new enquiries engaged after the first interaction.",
        },
        {
          icon: <MessageSquareText size={26} />,
          title: "No-Show Reduction Workflows",
          text: "Use better communication flows to improve appointment attendance.",
        },
      ]}
      faqs={[
        {
          q: "What does an AI chatbot do for a clinic?",
          a: "It helps respond to patient enquiries faster, answer common questions, and guide people toward booking or contacting your clinic.",
        },
        {
          q: "Can it work after business hours?",
          a: "Yes, chatbot systems can help engage patients and acknowledge enquiries even when your team is unavailable.",
        },
        {
          q: "Does it replace staff?",
          a: "No, it is designed to support your team by improving response speed and handling common interactions more efficiently.",
        },
        {
          q: "Can it work through SMS as well as the website?",
          a: "Yes, the system can support both website and SMS communication workflows.",
        },
      ]}
      finalCtaText="Ready to improve patient response across website and SMS?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}