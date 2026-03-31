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
      category="Growth Engine"
      titleTop="AI Lead"
      titleMain="Response System"
      titleBottom="for Clinics"
      intro="Respond to new patient leads faster with automated follow-up systems that reduce missed opportunities and improve the enquiry experience."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/ai-lead-response-system/hero.webp"
      heroImageAlt="AI lead response system for clinics"
      sectionTwoTitle="Why AI Lead Response Matters"
      sectionTwoTextOne="When new leads wait too long for a reply, the chance of conversion often drops. Clinics can miss valuable opportunities simply because follow-up is delayed or inconsistent."
      sectionTwoTextTwo="An AI lead response system helps improve speed, consistency, and responsiveness so interested patients get acknowledged quickly and are guided toward the next step."
      sectionTwoImage="/assets/img/services/ai-lead-response-system/section-two.webp"
      sectionTwoImageAlt="Automated lead response for clinics"
      featureCards={[
        {
          icon: <Clock3 size={28} />,
          title: "Faster First Response",
          text: "Acknowledge and engage new leads quickly before they lose interest or choose another clinic.",
        },
        {
          icon: <MessageCircleMore size={28} />,
          title: "Consistent Follow-Up",
          text: "Create a smoother enquiry experience with structured and timely communication.",
        },
        {
          icon: <UserRoundCheck size={28} />,
          title: "Fewer Missed Opportunities",
          text: "Reduce lead drop-off caused by delayed replies or inconsistent follow-up workflows.",
        },
      ]}
      valueTitle="How AI Response Systems Support Growth"
      valueTextOne="AI-powered response systems help clinics stay responsive even when internal teams are busy, improving the chances that enquiries turn into booked appointments."
      valueTextTwo="They also help create a more reliable patient journey by making sure new leads receive helpful next-step communication without unnecessary delay."
      valueImage="/assets/img/services/ai-lead-response-system/value.webp"
      valueImageAlt="AI-assisted clinic lead follow-up"
      consultationText="Want to improve how quickly your clinic follows up with new leads?"
      buildTitle="What We Help Build"
      buildItems={[
        "Automated first-response flows",
        "Lead acknowledgement systems",
        "Faster enquiry handling pathways",
        "AI-supported follow-up journeys",
        "Structured patient communication flows",
        "Response consistency improvements",
        "Lead capture to booking support",
        "Missed-opportunity reduction systems",
      ]}
      buildImage="/assets/img/services/ai-lead-response-system/build.webp"
      buildImageAlt="Clinic lead automation system"
      quoteText="Speed matters, and the clinic that responds first often wins the patient enquiry."
      relatedServices={[
        {
          icon: <PhoneCall size={26} />,
          title: "Patient Acquisition Ads",
          text: "Support your lead generation with faster, more consistent lead response workflows.",
        },
        {
          icon: <Sparkles size={26} />,
          title: "Landing Page Optimisation",
          text: "Improve the handoff from page conversion to patient follow-up.",
        },
        {
          icon: <Bot size={26} />,
          title: "Conversion Tracking & Analytics",
          text: "Measure how leads move from enquiry to response and identify gaps in follow-up.",
        },
      ]}
      faqs={[
        {
          q: "What is an AI lead response system?",
          a: "It is a system that helps clinics respond to new patient enquiries faster through automated or AI-assisted communication workflows.",
        },
        {
          q: "Will this replace my team?",
          a: "No, it is designed to support your team by improving response speed and consistency, not replace human care.",
        },
        {
          q: "Why does fast response matter?",
          a: "Quick follow-up helps keep patient interest high and reduces the chance of losing leads to competing clinics.",
        },
        {
          q: "Can this help outside business hours?",
          a: "Yes, automated systems can help acknowledge and guide leads even when your team is unavailable.",
        },
      ]}
      finalCtaText="Ready to respond to leads faster and reduce missed patient opportunities?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}