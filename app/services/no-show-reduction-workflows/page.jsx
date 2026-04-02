import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  BellRing,
  CalendarCheck2,
  CalendarX2,
  ClockAlert,
  MessageSquareMore,
  ShieldCheck,
} from "lucide-react";

export default function NoShowReductionWorkflowsPage() {
  return (
    <ServicePageLayout
      category="PatientFlow AI"
      titleTop="No-Show Reduction"
      titleMain="Workflows"
      titleBottom="for Clinics"
      intro="Reduce missed appointments with better reminder workflows, clearer communication, and patient follow-up systems that improve attendance."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/no-show-reduction-workflows/2.webp"
      heroImageAlt="No-show reduction workflows for clinics"
      sectionTwoTitle="Why No-Show Reduction Matters"
      sectionTwoTextOne="Missed appointments can disrupt clinic operations, reduce revenue opportunities, and create inefficiencies in your schedule."
      sectionTwoTextTwo="No-show reduction workflows help patients stay informed, reminded, and prepared so attendance becomes more reliable and easier to manage."
      sectionTwoImage="/assets/img/inner-pages/no-show-reduction-workflows/3.webp"
      sectionTwoImageAlt="Clinic no-show reduction workflow"
      featureCards={[
        {
          icon: <BellRing size={28} />,
          title: "Better Appointment Reminders",
          text: "Keep patients informed with timely reminders before their scheduled visit.",
        },
        {
          icon: <MessageSquareMore size={28} />,
          title: "Clearer Communication",
          text: "Reduce confusion around appointment details, timing, and preparation steps.",
        },
        {
          icon: <CalendarCheck2 size={28} />,
          title: "Higher Attendance Rates",
          text: "Support stronger patient follow-through with structured reminder systems.",
        },
      ]}
      valueTitle="How No-Show Workflows Support Growth"
      valueTextOne="Reducing no-shows helps clinics protect revenue, improve scheduling efficiency, and create a more dependable patient experience."
      valueTextTwo="It also frees up staff from manual reminder tasks and makes attendance improvement more consistent over time."
      valueImage="/assets/img/inner-pages/no-show-reduction-workflows/4.webp"
      valueImageAlt="Appointment attendance workflow for clinics"
      consultationText="Want to reduce missed appointments and improve clinic efficiency?"
      buildTitle="What We Help Build"
      buildItems={[
        "Appointment reminder workflows",
        "Pre-visit communication systems",
        "Confirmation message sequences",
        "Attendance improvement pathways",
        "Patient preparation reminders",
        "Follow-up workflows for unconfirmed bookings",
        "Schedule protection systems",
        "No-show risk reduction communication",
      ]}
      buildImage="/assets/img/inner-pages/no-show-reduction-workflows/5.webp"
      buildImageAlt="No-show reduction system build"
      quoteText="Better attendance often starts with better communication before the appointment ever begins."
      relatedServices={[
        {
          icon: <ClockAlert size={26} />,
          title: "Lead Nurturing Follow-Ups",
          text: "Support patients with stronger communication before they book and before they attend.",
        },
        {
          icon: <CalendarX2 size={26} />,
          title: "Patient Reactivation Campaigns",
          text: "Reconnect with patients who dropped off after missed or delayed appointments.",
        },
        {
          icon: <ShieldCheck size={26} />,
          title: "Missed Call Textback System",
          text: "Reduce patient loss earlier in the journey by improving communication response times.",
        },
      ]}
      faqs={[
        {
          q: "What are no-show reduction workflows?",
          a: "They are communication and reminder systems designed to help patients attend their scheduled appointments more consistently.",
        },
        {
          q: "Why do patients miss appointments?",
          a: "Common reasons include forgetting, confusion about timing, poor communication, or low commitment after booking.",
        },
        {
          q: "Can reminders really reduce no-shows?",
          a: "Yes, clear and timely reminders often help improve attendance and reduce avoidable missed appointments.",
        },
        {
          q: "Is this useful for busy clinics?",
          a: "Yes, it can be especially valuable for busy clinics that want better schedule reliability and less manual follow-up work.",
        },
      ]}
      finalCtaText="Ready to reduce no-shows and improve patient attendance?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}