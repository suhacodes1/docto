"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/assets/img/Logos/LogoDark.webp";
import Image from "next/image";
import ServicesDropdown from "./ServicesDropdown";
import { serviceGroups } from "../data/services";
import { ChevronUp } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [whoWeWorkWithOpen, setWhoWeWorkWithOpen] = useState(false);
  const [mobileWhoWeWorkWithOpen, setMobileWhoWeWorkWithOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const whoWeWorkWithRef = useRef<NodeJS.Timeout | null>(null);
  const portfolioRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const clinicTypes = [
    { name: "Dental Clinics", slug: "dental-clinics" },
    { name: "Orthodontists", slug: "orthodontists" },
    { name: "Cosmetic clinics", slug: "cosmetic-clinics" },
    { name: "Skin clinics", slug: "skin-clinics" },
    { name: "Physiotherapy clinics", slug: "physiotherapy-clinics" },
  ];

  const portfolioItems = [
    { name: "Case Studies", slug: "case-studies" },
    // { name: "Testimonials", slug: "testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const closeServicesDropdown = () => setServicesDropdownOpen(false);

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleWhoWeWorkWithMouseLeave = () => {
    whoWeWorkWithRef.current = setTimeout(() => {
      setWhoWeWorkWithOpen(false);
    }, 150);
  };

  const handleWhoWeWorkWithMouseEnter = () => {
    if (whoWeWorkWithRef.current) {
      clearTimeout(whoWeWorkWithRef.current);
    }
    setWhoWeWorkWithOpen(true);
  };

  const handlePortfolioMouseLeave = () => {
    portfolioRef.current = setTimeout(() => {
      setPortfolioOpen(false);
    }, 150);
  };

  const handlePortfolioMouseEnter = () => {
    if (portfolioRef.current) {
      clearTimeout(portfolioRef.current);
    }
    setPortfolioOpen(true);
  };

  const isActive = (path: string) => {
    const normalizedPathname = pathname.replace(/\/$/, "");
    const normalizedPath = path.replace(/\/$/, "");
    return normalizedPathname === normalizedPath;
  };

  const isServicesActive = () => pathname.startsWith("/services");

  const isClinicTypeActive = () => {
    return clinicTypes.some(clinic => isActive(`/services/${clinic.slug}`));
  };

  return (
    <header
      className={`w-full fixed top-0 ${
        !isScrolled ? "lg:top-12" : ""
      } left-0 right-0 z-40 bg-white shadow-md transition-all duration-300`}
    >
      <div className="flex items-center justify-between gap-6 container mx-auto md:min-h-[88px] min-h-[70px]">
        <Link href="/" className="flex items-center gap-3 min-w-[220px]">
          <Image
            src={Logo}
            alt="Healthcare Logo"
            className="md:h-10 h-8 w-auto"
          />
        </Link>

        {/* Right side - Desktop Navigation + CTA */}
        <div className="flex items-center gap-6 justify-end flex-1">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`xl:text-sm text-[11px] font-bold transition-colors ${
                isActive("/")
                  ? "text-[#ef2f6b] border-b-2 border-[#ef2f6b]"
                  : "text-slate-900 hover:text-[#ef2f6b]"
              }`}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                className={`xl:text-sm text-[11px] font-bold transition-colors ${
                  (isServicesActive() && !isClinicTypeActive()) || servicesDropdownOpen
                    ? "text-[#ef2f6b] border-b-2 border-[#ef2f6b]"
                    : "text-slate-900 hover:text-[#ef2f6b]"
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Growth Solutions
              </Link>
              {servicesDropdownOpen && (
                <ChevronUp
                  size={28}
                  className="absolute top-full left-1/2 z-[60] -translate-x-1/2 mt-1 text-[#ef2f6b]"
                />
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={handleWhoWeWorkWithMouseEnter}
              onMouseLeave={handleWhoWeWorkWithMouseLeave}
            >
              <button
                className={`xl:text-sm text-[11px] font-bold transition-colors ${
                  isClinicTypeActive() || whoWeWorkWithOpen
                    ? "text-[#ef2f6b] border-b-2 border-[#ef2f6b]"
                    : "text-slate-900 hover:text-[#ef2f6b]"
                }`}
                onClick={() => setWhoWeWorkWithOpen(!whoWeWorkWithOpen)}
              >
                Who We Work With
              </button>
              {whoWeWorkWithOpen && (
                <ChevronUp
                  size={28}
                  className="absolute top-full left-1/2 z-[60] -translate-x-1/2 mt-1 text-[#ef2f6b]"
                />
              )}
              {whoWeWorkWithOpen && (
                <div className="absolute top-12 left-0 bg-white rounded-lg shadow-lg p-4 min-w-[200px] z-[55]">
                  <ul className="flex flex-col gap-2">
                    {clinicTypes.map((clinic) => {
                      const path = `/services/${clinic.slug}`;
                      return (
                        <li key={clinic.slug}>
                          <Link
                            href={path}
                            className={`xl:text-sm text-[11px] font-semibold transition-colors ${
                              isActive(path)
                                ? "text-[#ef2f6b]"
                                : "text-slate-900 hover:text-[#ef2f6b]"
                            }`}
                          >
                            {clinic.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={handlePortfolioMouseEnter}
              onMouseLeave={handlePortfolioMouseLeave}
            >
              <button
                className={`xl:text-sm text-[11px] font-bold transition-colors ${
                  portfolioOpen
                    ? "text-[#ef2f6b] border-b-2 border-[#ef2f6b]"
                    : "text-slate-900 hover:text-[#ef2f6b]"
                }`}
                onClick={() => setPortfolioOpen(!portfolioOpen)}
              >
                Portfolio
              </button>
              {portfolioOpen && (
                <ChevronUp
                  size={28}
                  className="absolute top-full left-1/2 z-[60] -translate-x-1/2 mt-1 text-[#ef2f6b]"
                />
              )}
              {portfolioOpen && (
                <div className="absolute top-12 left-0 bg-white rounded-lg shadow-lg p-4 min-w-[200px] z-[55]">
                  <ul className="flex flex-col gap-2">
                    {portfolioItems.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/${item.slug}`}
                          className="xl:text-sm text-[11px] text-slate-900 hover:text-[#ef2f6b] transition-colors font-semibold"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`xl:text-sm text-[11px] font-bold transition-colors ${
                isActive("/about")
                  ? "text-[#ef2f6b] border-b-2 border-[#ef2f6b]"
                  : "text-slate-900 hover:text-[#ef2f6b]"
              }`}
            >
              About Us
            </Link>

            {/* <Link
              href=""
              className="text-slate-900 hover:text-[#ef2f6b] xl:text-sm text-[11px] font-bold transition-colors"
            >
              Blogs
            </Link> */}
          </nav>

          <Link
            href="https://calendly.com/digitalparadigm/product-strategy-call"
            target="_blank"
            className="hidden lg:inline-flex items-center justify-center bg-[#ef2f6b] text-white rounded-full px-6 py-2.5 font-bold hover:bg-pink-600 transition-colors xl:text-sm text-[11px]"
          >
            Get Free Growth Audit
          </Link>

          <button
            className="lg:hidden text-2xl text-slate-900 cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Dropdown - positioned outside navbar */}
      <ServicesDropdown
        isOpen={servicesDropdownOpen}
        onClose={closeServicesDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Mobile Sidebar */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          />

          <aside className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-slate-900 z-50 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <span className="text-xl font-bold text-white">Menu</span>

              <button
                className="text-white text-2xl cursor-pointer"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-6 overflow-y-auto flex-1">
              <Link
                href="/"
                onClick={closeMenu}
                className="px-4 py-3 text-white hover:bg-slate-800 rounded transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="px-4 py-3 text-white hover:bg-slate-800 rounded transition-colors"
              >
                About Us
              </Link>

              <div className="my-2">
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded transition-colors font-semibold ${
                    (isServicesActive() && !isClinicTypeActive())
                      ? "text-[#ef2f6b] bg-slate-800 border-b-2 border-[#ef2f6b]"
                      : "text-white hover:bg-slate-800"
                  }`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <Link href="/services" className="text-white">
                    Growth Solutions
                  </Link>
                  <span
                    className={`text-xs transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {mobileServicesOpen && (
                  <div className="flex flex-col gap-4 mt-4 pl-4 border-l-2 border-#ef2f6b">
                    {serviceGroups.map((group) => (
                      <div key={group.category} className="flex flex-col gap-2">
                        <h4 className="text-xs font-bold text-pink-400 uppercase tracking-wide">
                          {group.category}
                        </h4>
                        {group.services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="xl:text-sm text-[11px] text-slate-300 hover:text-pink-400 transition-colors font-semibold"
                            onClick={closeMenu}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="my-2">
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded transition-colors font-semibold ${
                    isClinicTypeActive()
                      ? "text-[#ef2f6b] bg-slate-800 border-b-2 border-[#ef2f6b]"
                      : "text-white hover:bg-slate-800"
                  }`}
                  onClick={() =>
                    setMobileWhoWeWorkWithOpen(!mobileWhoWeWorkWithOpen)
                  }
                >
                  <span>Who We Work With</span>
                  <span
                    className={`text-xs transition-transform ${
                      mobileWhoWeWorkWithOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {mobileWhoWeWorkWithOpen && (
                  <div className="flex flex-col gap-2 mt-4 pl-4 border-l-2 border-[#ef2f6b]">
                    {clinicTypes.map((clinic) => {
                      const path = `/services/${clinic.slug}`;
                      return (
                        <Link
                          key={clinic.slug}
                          href={path}
                          className={`xl:text-sm text-[11px] transition-colors font-semibold ${
                            isActive(path)
                              ? "text-[#ef2f6b]"
                              : "text-slate-300 hover:text-pink-400"
                          }`}
                          onClick={closeMenu}
                        >
                          {clinic.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="my-2">
                <button
                  className={`w-full flex items-center justify-between px-4 py-3 rounded transition-colors font-semibold text-white hover:bg-slate-800`}
                  onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                >
                  <span>Portfolio</span>
                  <span
                    className={`text-xs transition-transform ${
                      mobilePortfolioOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {mobilePortfolioOpen && (
                  <div className="flex flex-col gap-2 mt-4 pl-4 border-l-2 border-[#ef2f6b]">
                    {portfolioItems.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/${item.slug}`}
                        className="md:text-sm xl text-[11px] text-slate-300 hover:text-pink-400 transition-colors"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="px-4 py-3 text-white hover:bg-slate-800 rounded transition-colors"
              >
                Contact
              </Link>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
