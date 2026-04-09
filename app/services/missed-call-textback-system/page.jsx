import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesFour from "@/app/components/ProcessSectionServicesFour";
import {
  PhoneMissed,
  MessageCircleMore,
  MessageSquareReply,
  Bot,
  CalendarCheck,
  RefreshCw,
} from "lucide-react";

export default function MissedCallTextbackSystemPage() {
  return (
    <ServicePageLayout
      category="PatientFlow AI"
      titleTop="Turn Missed Calls"
      titleMain="Into Booked Patients"
      titleBottom="— Automatically"
      intro="If you miss the call, you lose the patient. We install an instant response system that texts back every missed call — keeping the conversation alive and converting it into bookings."
      primaryCtaText="BOOK A DEMO"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/missed-call-text-back-system/001.webp"
      heroImageAlt="Missed call text-back system for clinics"
      sectionTwoTitle="Missed calls are silent revenue leaks"
      sectionTwoTextOne="Patients don’t call twice. If you don’t answer — they move on. Most clinics lose dozens of ready-to-book patients every month because of this one gap."
      sectionTwoTextTwo="We fix it with an Instant Call Recovery System."
      sectionTwoImage="/assets/img/inner-pages/missed-call-text-back-system/002.webp"
      sectionTwoImageAlt="Instant missed call recovery system for clinics"
      featureCards={[
        {
          icon: <PhoneMissed size={28} />,
          title: "Instant SMS Response",
          text: "Reply within seconds of a missed call so every enquiry gets an immediate follow-up.",
        },
        {
          icon: <MessageCircleMore size={28} />,
          title: "Guided Booking Flow",
          text: "Turn missed calls into active conversations that guide patients toward booking.",
        },
        {
          icon: <MessageSquareReply size={28} />,
          title: "Lead Recovery Engine",
          text: "Recover patients you already paid to acquire instead of losing them after one missed call.",
        },
      ]}
      valueTitle="Recover revenue you’re already generating"
      valueTextOne="You don’t need more leads. You need to stop losing the ones you already have."
      valueTextTwo="Recover more patients, increase booking rates, and reduce acquisition waste by fixing the missed-call gap."
      valueImage="/assets/img/inner-pages/missed-call-text-back-system/004.webp"
      valueImageAlt="Recovered patient bookings through missed call text-back automation"
      consultationText="How many calls did you miss this week?"
      buildTitle="What We Help Build"
      buildItems={[
        "Instant missed call SMS response systems",
        "Automated call recovery workflows",
        "Guided text-based booking journeys",
        "Lead recovery follow-up sequences",
        "After-hours patient response systems",
        "Missed call conversion messaging flows",
        "SMS re-engagement pathways",
        "Patient booking recovery automation",
      ]}
      buildImage="/assets/img/inner-pages/landing-page-optimisation/005.webp"
      buildImageAlt="Missed call text-back workflow setup for clinics"
      quoteText="Every missed call is a patient you may never hear from again — unless you respond instantly."
      relatedServices={[
        {
          icon: <Bot size={26} />,
          title: "AI Chatbot Website & SMS",
          text: "Handle patient enquiries instantly across your website and messaging channels.",
        },
        {
          icon: <CalendarCheck size={26} />,
          title: "Online Booking Integration",
          text: "Connect conversations directly to appointment actions and reduce drop-off.",
        },
        {
          icon: <RefreshCw size={26} />,
          title: "Patient Reactivation Campaigns",
          text: "Reconnect with patients and older leads through timely automated follow-ups.",
        },
      ]}
      faqs={[
        {
          q: "What is a missed call text-back system?",
          a: "It’s an automated system that sends a text message to patients immediately after your clinic misses their call.",
        },
        {
          q: "Why is this important for clinics?",
          a: "Because patients often move on quickly. A fast response helps keep the conversation alive instead of losing the enquiry.",
        },
        {
          q: "Can this improve bookings?",
          a: "Yes. It helps convert missed calls into active conversations that can lead to appointments.",
        },
        {
          q: "Does it replace my front desk team?",
          a: "No. It supports your team by bridging the gap instantly until staff can continue the conversation properly.",
        },
      ]}
      finalCtaText="Ready to Stop Losing Patients on Missed Calls?"
      finalCtaButtonText="BOOK A DEMO"
      finalCtaButtonLink="/contact"
      processComponent={<ProcessSectionServicesFour />}
    />
  );
}