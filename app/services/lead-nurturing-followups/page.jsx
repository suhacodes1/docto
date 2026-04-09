import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesFour from "@/app/components/ProcessSectionServicesFour";
import {
  CalendarClock,
  HeartHandshake,
  MessageCircleHeart,
  RefreshCcw,
  Send,
  UserRoundPlus,
} from "lucide-react";

export default function LeadNurturingFollowupsPage() {
  return (
    <ServicePageLayout
      category="HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Turn More Inquiries Into"
      titleMain="Booked Patients — Automatically"
      titleBottom=""
      intro={`Most patients don’t book immediately.

We build automated follow-up systems that nurture, remind, and convert leads into appointments — without manual effort.`}
      primaryCtaText="BOOK A DEMO"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/lead-nurturing-follow-ups/001.webp"
      heroImageAlt="Lead nurturing follow-ups for clinics"
      sectionTwoTitle="Most clinics lose leads after first contact"
      sectionTwoTextOne={`A patient shows interest… Then disappears. No follow-up. No reminder. No system.`}
      sectionTwoTextTwo={`This is where the majority of revenue is lost. We install a Lead Conversion System that continues the conversation until the patient books.`}
      sectionTwoImage="/assets/img/inner-pages/lead-nurturing-follow-ups/002.webp"
      sectionTwoImageAlt="Clinic lead nurturing system"
      featureCards={[
        {
          icon: <Send size={28} />,
          title: "Automated Follow-Up Sequences",
          text: "Consistent, structured patient communication.",
        },
        {
          icon: <MessageCircleHeart size={28} />,
          title: "Multi-Channel Engagement",
          text: "SMS, WhatsApp, email — all connected.",
        },
        {
          icon: <UserRoundPlus size={28} />,
          title: "Smart Timing & Personalisation",
          text: "Right message, right time, higher conversion.",
        },
      ]}
      valueTitle="Convert interest into action"
      valueTextOne={`Follow-up isn’t optional — it’s where most conversions happen.`}
      valueResultItems={[
        { text: "More bookings from existing leads", tagColor: "pink" },
        { text: "Higher conversion rates", tagColor: "green" },
        { text: "Better ROI from marketing", tagColor: "blue" },
      ]}
      valueImage="/assets/img/inner-pages/lead-nurturing-follow-ups/003.webp"
      valueImageAlt="Lead nurturing for clinic growth"
      consultationText="What happens after a patient shows interest?"
      buildTitle="Built for clinics that want to maximise every lead"
      buildItems={[
        "Clinics getting inquiries but low bookings",
        "Clinics with no follow-up system",
        "Clinics running ads with unconverted leads",
        "Clinics with long decision cycles",
        "Clinics wanting better patient engagement",
        "Clinics aiming to increase conversion rates",
      ]}
      buildImage="/assets/img/inner-pages/lead-nurturing-follow-ups/004.webp"
      buildImageAlt="Lead follow-up workflow build"
      quoteText="Most conversions happen in the follow-up — don’t miss them."
      relatedServices={[
        {
          icon: <RefreshCcw size={26} />,
          title: "AI Lead Response System",
          text: "Capture and respond to leads instantly.",
        },
        {
          icon: <CalendarClock size={26} />,
          title: "PatientFlow AI",
          text: "Automate the entire lead-to-booking journey.",
        },
        {
          icon: <HeartHandshake size={26} />,
          title: "Missed Call Text-Back System",
          text: "Recover lost leads and start conversations.",
        },
      ]}
      faqs={[
        {
          q: "How many follow-ups are included?",
          a: "It depends on your strategy — typically multiple touchpoints over days or weeks.",
        },
        {
          q: "Will patients find this annoying?",
          a: "No — messages are designed to be helpful, relevant, and well-timed.",
        },
        {
          q: "Which channels are used?",
          a: "SMS, WhatsApp, email, or a combination based on your clinic.",
        },
        {
          q: "Can this increase my booking rate?",
          a: "Yes — follow-ups significantly improve conversions.",
        },
        {
          q: "Is this automated?",
          a: "Yes — once set up, it runs automatically.",
        },
        {
          q: "How long does setup take?",
          a: "Usually 1–2 weeks.",
        },
      ]}
      finalCtaText={`Ready to Convert More Leads Without More Traffic?`}
      finalCtaButtonText="Book a Demo"
      finalCtaButtonLink="/contact"
      processComponent={<ProcessSectionServicesFour />}
    />
  );
}