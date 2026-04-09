import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesFour from "@/app/components/ProcessSectionServicesFour";
import {
  RefreshCw,
  UsersRound,
  Repeat,
  MessageSquareDashed,
  UserRoundSearch,
  HeartPulse,
} from "lucide-react";

export default function PatientReactivationCampaignsPage() {
  return (
    <ServicePageLayout
      category="PatientFlow AI"
      titleTop="Turn Past Patients"
      titleMain="Into Your Most Reliable"
      titleBottom="Revenue Source"
      intro="Your next bookings aren’t always new patients — they’re the ones who already trust you. We build automated reactivation campaigns that bring inactive patients back — consistently."
      primaryCtaText="GET A CAMPAIGN AUDIT"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/patient-reactivation-campaigns/hero.webp"
      heroImageAlt="Patient reactivation campaigns for clinics"
      sectionTwoTitle="You’re sitting on untapped revenue"
      sectionTwoTextOne="Most clinics chase new patients while ignoring the easiest ones to convert. Your database is full of patients who didn’t return, forgot, or never followed up."
      sectionTwoTextTwo="We turn that into a Repeat Revenue System."
      sectionTwoImage="/assets/img/services/patient-reactivation-campaigns/section-two.webp"
      sectionTwoImageAlt="Patient reactivation system for clinics"
      featureCards={[
        {
          icon: <RefreshCw size={28} />,
          title: "Smart Segmentation",
          text: "Target patients based on behaviour, treatment history, and engagement patterns.",
        },
        {
          icon: <UsersRound size={28} />,
          title: "Personalised Campaigns",
          text: "Send relevant, timely messaging that gives patients a reason to come back.",
        },
        {
          icon: <Repeat size={28} />,
          title: "Repeat Booking Engine",
          text: "Drive consistent return visits through automated reactivation flows.",
        },
      ]}
      valueTitle="Increase revenue without increasing ad spend"
      valueTextOne="Reactivating patients is faster, cheaper, and more predictable than constantly chasing new leads."
      valueTextTwo="Bring back more repeat visits, increase lifetime value, and build stronger patient relationships — all from the database you already have."
      valueImage="/assets/img/services/patient-reactivation-campaigns/value.webp"
      valueImageAlt="Repeat patient revenue growth through reactivation campaigns"
      consultationText="How many past patients haven’t come back?"
      buildTitle="What We Help Build"
      buildItems={[
        "Inactive patient reactivation campaigns",
        "Smart patient segmentation systems",
        "Personalised SMS and email workflows",
        "Repeat booking reminder campaigns",
        "Past patient win-back sequences",
        "Database re-engagement systems",
        "Return-visit automation flows",
        "Repeat revenue growth campaigns",
      ]}
      buildImage="/assets/img/services/patient-reactivation-campaigns/build.webp"
      buildImageAlt="Patient reactivation workflow setup for clinics"
      quoteText="Your next best booking is often a patient who already knows and trusts your clinic."
      relatedServices={[
        {
          icon: <MessageSquareDashed size={26} />,
          title: "Lead Nurturing Follow-Ups",
          text: "Keep conversations moving with patients and leads who didn’t book the first time.",
        },
        {
          icon: <UserRoundSearch size={26} />,
          title: "Missed Call Text-Back System",
          text: "Recover missed opportunities by instantly responding when your clinic misses a call.",
        },
        {
          icon: <HeartPulse size={26} />,
          title: "No-Show Reduction Workflows",
          text: "Improve attendance and retention with timely reminders and follow-up systems.",
        },
      ]}
      faqs={[
        {
          q: "What are patient reactivation campaigns?",
          a: "They are automated campaigns designed to bring inactive patients or past leads back into contact with your clinic.",
        },
        {
          q: "Why should clinics focus on reactivation?",
          a: "Because reactivating existing patients is often faster, cheaper, and more predictable than acquiring brand-new ones.",
        },
        {
          q: "Can these campaigns increase repeat bookings?",
          a: "Yes. They help drive return visits by sending relevant reminders and timely follow-up messages.",
        },
        {
          q: "Does this only work for past patients?",
          a: "No. It can also be used to re-engage older leads who enquired but never booked.",
        },
      ]}
      finalCtaText="Ready to Unlock Revenue From Your Existing Patients?"
      finalCtaButtonText="GET A CAMPAIGN AUDIT"
      finalCtaButtonLink="/contact"
      processComponent={<ProcessSectionServicesFour />}
    />
  );
}