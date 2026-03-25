"use client";

import RevealServiceCard from "./RevealServiceCard";
import { serviceGroups } from "../data/services";
import {
  Code,
  Rocket,
  Cloud,
  Building2,
  Monitor,
  Palette,
  Smartphone,
  Image,
  Search,
  Users,
  UserCheck,
  Target,
} from "lucide-react";

const iconMap = {
  "custom-web-development": Code,
  "mvp-development": Rocket,
  "saas-development": Cloud,
  "enterprise-software-development": Building2,
  "web-portal-development": Monitor,
  "ui-ux-design": Palette,
  "responsive-web-design": Smartphone,
  "graphic-design": Image,
  "seo": Search,
  "social-media-marketing": Users,
  "influencer-marketing": UserCheck,
  "ppc": Target,
};

const ServicesListSection = () => {
  return (
    <section className="services-list-section">
      <div className="container">
        {serviceGroups.map((group) => (
          <div className="services-group" key={group.category}>
            <h2 className="services-group-title">{group.category}</h2>

            <div className="services-grid">
              {group.services.map((service, index) => (
                <RevealServiceCard
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.08}
                  icon={iconMap[service.slug]}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesListSection;

