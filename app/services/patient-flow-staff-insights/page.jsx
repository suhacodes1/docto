import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesSix from "@/app/components/ProcessSectionServicesSix";
import {
  BriefcaseBusiness,
  ClipboardList,
  Hospital,
  LayoutList,
  Users,
  Workflow,
} from "lucide-react";

export default function PatientFlowStaffInsightsPage() {
  return (
    <ServicePageLayout
      category="Intelligence Dashboard"
      titleTop="Patient Flow"
      titleMain="& Staff Insights"
      titleBottom="for Clinics"
      intro="Improve clinic efficiency with clearer visibility into patient flow, team activity, and operational patterns that affect service delivery."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/patient-flow-staff-insights/001.webp"
      heroImageAlt="Patient flow and staff insights for clinics"
      sectionTwoTitle="Why Patient Flow & Staff Insights Matter"
      sectionTwoTextOne="Operational bottlenecks, inconsistent patient movement, and limited visibility into staff workload can make it harder for clinics to deliver smooth experiences and maintain efficiency."
      sectionTwoTextTwo="Patient flow and staff insights help clinics understand how people, processes, and workloads interact so improvements can be made with more confidence."
      sectionTwoImage="/assets/img/inner-pages/patient-flow-staff-insights/002.webp"
      sectionTwoImageAlt="Clinic patient flow and staff reporting"
      featureCards={[
        {
          icon: <Workflow size={28} />,
          title: "Clearer Operational Flow",
          text: "See how patients move through the clinic journey and where bottlenecks may occur.",
        },
        {
          icon: <Users size={28} />,
          title: "Better Team Visibility",
          text: "Understand staff patterns, workload pressures, and areas that may need support.",
        },
        {
          icon: <Hospital size={28} />,
          title: "Improved Clinic Efficiency",
          text: "Use operational insights to support smoother service delivery and better patient experiences.",
        },
      ]}
      valueTitle="How Flow & Staff Insights Support Growth"
      valueTextOne="Stronger operational visibility helps clinics improve service quality by making patient movement and team coordination easier to monitor."
      valueTextTwo="These insights can also support staffing decisions, workflow changes, and process improvements that reduce friction across the clinic."
      valueImage="/assets/img/inner-pages/patient-flow-staff-insights/003.webp"
      valueImageAlt="Clinic operations and staff insights"
      consultationText="Want better visibility into how your clinic is operating day to day?"
      buildTitle="What We Help Build"
      buildItems={[
        "Patient flow reporting systems",
        "Operational visibility dashboards",
        "Staff workload insight views",
        "Clinic bottleneck identification",
        "Service delivery reporting",
        "Workflow improvement insights",
        "Efficiency monitoring frameworks",
        "Team and process visibility tools",
      ]}
      buildImage="/assets/img/inner-pages/patient-flow-staff-insights/004.webp"
      buildImageAlt="Patient flow and staff insights system build"
      quoteText="When you understand how your clinic actually flows, it becomes easier to improve both efficiency and patient experience."
      relatedServices={[
        {
          icon: <LayoutList size={26} />,
          title: "Realtime Performance Dashboard",
          text: "Combine operational visibility with live performance monitoring in one place.",
        },
        {
          icon: <ClipboardList size={26} />,
          title: "Lead Tracking & Conversion Insights",
          text: "Connect patient acquisition insights with what happens operationally inside the clinic.",
        },
        {
          icon: <BriefcaseBusiness size={26} />,
          title: "No-Show Reduction Workflows",
          text: "Reduce scheduling friction and improve attendance with stronger patient communication systems.",
        },
      ]}
      faqs={[
        {
          q: "What are patient flow insights?",
          a: "They are insights that help clinics understand how patients move through appointments, processes, and service stages.",
        },
        {
          q: "Why do staff insights matter?",
          a: "They help reveal workload patterns, operational pressure points, and opportunities to improve team efficiency.",
        },
        {
          q: "Can this improve patient experience?",
          a: "Yes, smoother operations and better visibility often lead to a more consistent and less frustrating patient journey.",
        },
        {
          q: "Is this useful even for smaller clinics?",
          a: "Yes, even small clinics can benefit from clearer visibility into flow, workload, and operational bottlenecks.",
        },
      ]}
      finalCtaText="Ready to improve clinic efficiency with better operational insight?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
      processComponent={<ProcessSectionServicesSix />}
    />
  );
}