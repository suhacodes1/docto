import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesFour from "@/app/components/ProcessSectionServicesFour";
import {
  HeartPulse,
  MessageSquareDashed,
  RefreshCw,
  Repeat,
  UserRoundSearch,
  UsersRound,
} from "lucide-react";

export default function PatientReactivationCampaignsPage() {
  return (
    <ServicePageLayout
      category="PatientFlow AI"
      titleTop="Patient Reactivation"
      titleMain="Campaigns"
      titleBottom="for Clinics"
      intro="Reconnect with past patients and inactive contacts through strategic campaigns that bring people back into your clinic pipeline."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/patient-reactivation-campaigns/hero.webp"
      heroImageAlt="Patient reactivation campaigns for clinics"
      sectionTwoTitle="Why Patient Reactivation Matters"
      sectionTwoTextOne="Many clinics focus heavily on acquiring new patients while overlooking the value of re-engaging people who already know, trust, or have previously interacted with the clinic."
      sectionTwoTextTwo="Patient reactivation campaigns help bring inactive patients and older leads back into the conversation with timely and relevant messaging."
      sectionTwoImage="/assets/img/services/patient-reactivation-campaigns/section-two.webp"
      sectionTwoImageAlt="Clinic patient reactivation strategy"
      featureCards={[
        {
          icon: <RefreshCw size={28} />,
          title: "Reconnect Past Patients",
          text: "Bring previous patients back into the clinic journey with strategic re-engagement.",
        },
        {
          icon: <UsersRound size={28} />,
          title: "Increase Existing Database Value",
          text: "Get more value from contacts and patients your clinic has already worked to acquire.",
        },
        {
          icon: <Repeat size={28} />,
          title: "Support Repeat Bookings",
          text: "Encourage more return visits with relevant follow-up and timely reminders.",
        },
      ]}
      valueTitle="How Reactivation Campaigns Support Growth"
      valueTextOne="Reactivation campaigns help clinics grow more efficiently by reconnecting with people who are already familiar with your brand or services."
      valueTextTwo="They can be a strong source of revenue and bookings because reactivated patients often require less trust-building than entirely new leads."
      valueImage="/assets/img/services/patient-reactivation-campaigns/value.webp"
      valueImageAlt="Patient reactivation and repeat visits"
      consultationText="Want to bring more past patients back into your clinic?"
      buildTitle="What We Help Build"
      buildItems={[
        "Inactive patient re-engagement campaigns",
        "Past lead reactivation systems",
        "Repeat booking reminder flows",
        "Targeted return-visit messaging",
        "Patient database reactivation strategy",
        "Re-engagement communication sequences",
        "Lost lead recovery campaigns",
        "Retention-focused outreach systems",
      ]}
      buildImage="/assets/img/services/patient-reactivation-campaigns/build.webp"
      buildImageAlt="Clinic patient reactivation system"
      quoteText="Sometimes your next best patient is someone who already knows your clinic."
      relatedServices={[
        {
          icon: <MessageSquareDashed size={26} />,
          title: "Lead Nurturing Follow-Ups",
          text: "Continue building relationships with newer enquiries who have not booked yet.",
        },
        {
          icon: <UserRoundSearch size={26} />,
          title: "Review Generation Campaigns",
          text: "Encourage positive feedback from returning patients after a good experience.",
        },
        {
          icon: <HeartPulse size={26} />,
          title: "No-Show Reduction Workflows",
          text: "Support better patient retention by improving appointment attendance.",
        },
      ]}
      faqs={[
        {
          q: "What are patient reactivation campaigns?",
          a: "They are campaigns designed to reconnect with past patients or inactive leads and encourage them to return to your clinic.",
        },
        {
          q: "Why should clinics focus on reactivation?",
          a: "Reactivating existing contacts can be more efficient than relying only on brand-new patient acquisition.",
        },
        {
          q: "Can this help with repeat treatments or check-ins?",
          a: "Yes, reactivation campaigns are useful for reminding patients about returning when appropriate.",
        },
        {
          q: "Does this only work for past patients?",
          a: "No, it can also be used for older leads who enquired but never booked.",
        },
      ]}
      finalCtaText="Ready to reactivate past patients and recover lost opportunities?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
      processComponent={<ProcessSectionServicesFour />}
    />
  );
}