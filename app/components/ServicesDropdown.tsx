"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceGroups } from "../data/services";

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ServicesDropdown({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: ServicesDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Find the active category based on current pathname
  const getActiveCategory = () => {
    const normalizedPathname = pathname.replace(/\/$/, '');
    for (const group of serviceGroups) {
      for (const service of group.services) {
        if (normalizedPathname === `/services/${service.slug}`) {
          return group.category;
        }
      }
    }
    return null;
  };

  const activeCategory = getActiveCategory();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose]);

  return (
    <div
      ref={dropdownRef}
      className={`fixed top-[110px] left-1/2 -translate-x-1/2 z-50 bg-white rounded-lg shadow-lg ${
        isOpen
          ? "opacity-100 visible transition-all duration-300"
          : "opacity-0 invisible transition-all duration-300 pointer-events-none"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Desktop Dropdown */}
      <div className="hidden lg:grid grid-cols-5 gap-10 p-10 w-[98vw]">
        {serviceGroups.map((group) => (
          <div key={group.category} className="flex flex-col gap-5">
            <div className=" pb-2 border-b-2 border-[#ef2f6b]">
              <h3 className={`text-sm font-bold ${
                activeCategory === group.category
                  ? "text-[#ef2f6b]"
                  : "text-slate-900 border-red-500"
              }`}>
                {group.category}
              </h3>
              {group.positioning && (
                <p className="text-xs text-slate-600 mt-2">
                  {group.positioning}
                </p>
              )}
            </div>
            <ul className="flex flex-col gap-4">
              {group.services.map((service) => {
                const normalizedPathname = pathname.replace(/\/$/, '');
                const isActive = normalizedPathname === `/services/${service.slug}`;
                return (
                  <li key={service.slug}>
                    <Link
                      // href={`/services/${service.slug}`}
                      href=""
                      className={`flex flex-col gap-1 transition-all group ${
                        isActive ? "opacity-100" : ""
                      }`}
                      onClick={onClose}
                    >
                      <span
                        className={`text-sm font-semibold transition-all ${
                          isActive
                            ? "text-[#ef2f6b]"
                            : "text-slate-900 group-hover:text-[#ef2f6b]"
                        }`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`text-xs transition-all ${
                          isActive
                            ? "text-[#ef2f6b]"
                            : "text-slate-500 group-hover:text-slate-700"
                        }`}
                      >
                        {service.description}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="lg:hidden flex flex-col gap-6 p-6 min-w-[280px]">
        {serviceGroups.map((group) => (
          <div key={group.category} className="flex flex-col gap-3">
            <div className=" pb-2 border-b-2 border-[#ef2f6b]">
              <h3 className={`text-sm font-bold uppercase tracking-wide ${
                activeCategory === group.category
                  ? "text-[#ef2f6b]"
                  : "text-red-500"
              }`}>
                {group.category}
              </h3>
              {group.positioning && (
                <p className="text-xs text-slate-600 mt-1">
                  {group.positioning}
                </p>
              )}
            </div>
            <ul className="flex flex-col gap-2">
              {group.services.map((service) => {
                const normalizedPathname = pathname.replace(/\/$/, '');
                const isActive = normalizedPathname === `/services/${service.slug}`;
                return (
                  <li key={service.slug}>
                    <Link
                      href=""
                      className={`flex flex-col gap-1 transition-all group ${
                        isActive ? "opacity-100" : ""
                      }`}
                      onClick={onClose}
                    >
                      <span
                        className={`text-sm font-semibold transition-all ${
                          isActive
                            ? "text-[#ef2f6b]"
                            : "text-slate-900 group-hover:text-[#ef2f6b]"
                        }`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`text-xs transition-all ${
                          isActive
                            ? "text-[#ef2f6b]"
                            : "text-slate-500 group-hover:text-slate-700"
                        }`}
                      >
                        {service.description}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
