import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesFour from "@/app/components/ProcessSectionServicesFour";
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
      category="PATIENTFLOW AI SYSTEM"
      titleTop="Fill Your Calendar —"
      titleMain="And Keep It Full"
      titleBottom=""
      intro={`A booking means nothing if the patient doesn’t show up.

We install automated workflows that ensure patients confirm, remember, and attend their appointments.`}
      primaryCtaText="BOOK A DEMO"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/no-show-reduction-workflows/2.webp"
      heroImageAlt="No-show reduction workflows for clinics"
      sectionTwoTitle="No-shows are predictable — and preventable"
      sectionTwoTextOne={`Patients forget. Plans change. Reminders don’t happen. And your schedule suffers.`}
      sectionTwoTextTwo={`This isn’t unavoidable — it’s a system gap. We install an Attendance Optimisation System.`}
      sectionTwoImage="/assets/img/inner-pages/no-show-reduction-workflows/3.webp"
      sectionTwoImageAlt="Clinic no-show reduction workflow"
      featureCards={[
        {
          icon: <BellRing size={28} />,
          title: "Smart Reminder Sequences",
          text: "Timed reminders across channels.",
        },
        {
          icon: <MessageSquareMore size={28} />,
          title: "Confirmation Workflows",
          text: "Lock in commitment before appointments.",
        },
        {
          icon: <CalendarCheck2 size={28} />,
          title: "Reschedule & Gap Filling",
          text: "Replace cancellations quickly.",
        },
      ]}
      valueTitle="Turn bookings into actual revenue"
      valueTextOne={`Your growth depends on completed appointments — not just bookings.`}
      valueResultItems={[
        { text: "Fewer no-shows", tagColor: "pink" },
        { text: "Higher utilisation", tagColor: "green" },
        { text: "More revenue per lead", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/no-show-reduction-workflows/4.webp"
      valueImageAlt="Appointment attendance workflow for clinics"
      consultationText="How many appointments didn’t show up this week?"
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
          a: "They are automated reminder and confirmation systems designed to help more patients attend their booked appointments.",
        },
        {
          q: "Why do patients miss appointments?",
          a: "Common reasons include forgetting, schedule changes, lack of reminders, or low commitment after booking.",
        },
        {
          q: "Can this really reduce no-shows?",
          a: "Yes — better reminders, confirmations, and rescheduling workflows can significantly reduce avoidable missed appointments.",
        },
        {
          q: "Does this help with cancellations too?",
          a: "Yes — reschedule and gap-filling workflows can help replace cancellations faster and protect your calendar.",
        },
      ]}
      finalCtaText={`Ready to Eliminate No-Shows as a Growth Problem?`}
      finalCtaButtonText="BOOK A DEMO"
      finalCtaButtonLink="/contact"
      processComponent={<ProcessSectionServicesFour />}
    />
  );
}