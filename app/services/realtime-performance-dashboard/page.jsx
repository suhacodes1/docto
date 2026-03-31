import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  Activity,
  Gauge,
  LayoutDashboard,
  MonitorSmartphone,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function RealtimePerformanceDashboardPage() {
  return (
    <ServicePageLayout
      category="Intelligence Dashboard"
      titleTop="Realtime Performance"
      titleMain="Dashboard"
      titleBottom="for Clinics"
      intro="Monitor the metrics that matter most with a real-time dashboard that gives your clinic faster visibility into performance, enquiries, and growth trends."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/services/realtime-performance-dashboard/hero.webp"
      heroImageAlt="Realtime performance dashboard for clinics"
      sectionTwoTitle="Why a Realtime Dashboard Matters"
      sectionTwoTextOne="When clinic data is delayed, scattered, or difficult to access, decision-making becomes slower and less effective. Teams can miss important changes in enquiries, campaign performance, or operational trends."
      sectionTwoTextTwo="A realtime performance dashboard helps bring key insights into one place so your clinic can monitor activity, respond faster, and make more informed growth decisions."
      sectionTwoImage="/assets/img/services/realtime-performance-dashboard/section-two.webp"
      sectionTwoImageAlt="Clinic realtime dashboard and metrics"
      featureCards={[
        {
          icon: <LayoutDashboard size={28} />,
          title: "Centralised Visibility",
          text: "See important clinic performance data in one clear and accessible dashboard.",
        },
        {
          icon: <Zap size={28} />,
          title: "Faster Decision-Making",
          text: "Respond more quickly to changes in enquiries, traffic, and campaign activity.",
        },
        {
          icon: <Gauge size={28} />,
          title: "Clearer Performance Monitoring",
          text: "Track the signals that help your clinic understand what is working in real time.",
        },
      ]}
      valueTitle="How Realtime Dashboards Support Growth"
      valueTextOne="Realtime dashboards help clinics reduce guesswork by making performance trends easier to monitor as they happen."
      valueTextTwo="They are especially valuable for teams that want quicker reporting, better visibility into growth channels, and a more proactive way to manage performance."
      valueImage="/assets/img/services/realtime-performance-dashboard/value.webp"
      valueImageAlt="Realtime clinic growth dashboard"
      consultationText="Want clearer visibility into how your clinic is performing right now?"
      buildTitle="What We Help Build"
      buildItems={[
        "Realtime performance dashboards",
        "Centralised reporting views",
        "Live enquiry monitoring",
        "Campaign performance visibility",
        "Patient growth tracking views",
        "Operational metric dashboards",
        "Decision-support reporting systems",
        "Performance monitoring foundations",
      ]}
      buildImage="/assets/img/services/realtime-performance-dashboard/build.webp"
      buildImageAlt="Clinic dashboard system build"
      quoteText="The faster you can see what is happening, the faster your clinic can respond and improve."
      relatedServices={[
        {
          icon: <TrendingUp size={26} />,
          title: "Lead Tracking & Conversion Insights",
          text: "Understand how leads are moving through your clinic pipeline over time.",
        },
        {
          icon: <Activity size={26} />,
          title: "ROI Campaign Attribution",
          text: "Connect live campaign activity with real business outcomes more clearly.",
        },
        {
          icon: <MonitorSmartphone size={26} />,
          title: "Patient Flow & Staff Insights",
          text: "Track operational patterns alongside growth and enquiry performance.",
        },
      ]}
      faqs={[
        {
          q: "What is a realtime performance dashboard?",
          a: "It is a dashboard that helps clinics monitor key metrics and performance activity as data updates over time.",
        },
        {
          q: "Why is real-time visibility useful?",
          a: "It helps clinics react faster, identify trends earlier, and make more informed decisions without waiting for delayed reports.",
        },
        {
          q: "Can this help both marketing and operations?",
          a: "Yes, realtime dashboards can support visibility across enquiries, campaigns, and operational performance.",
        },
        {
          q: "Is this only useful for larger clinics?",
          a: "No, clinics of all sizes can benefit from having clearer and faster access to important performance data.",
        },
      ]}
      finalCtaText="Ready to monitor clinic performance with more clarity and speed?"
      finalCtaButtonText="Book Your Free Consultation"
      finalCtaButtonLink="/contact"
    />
  );
}