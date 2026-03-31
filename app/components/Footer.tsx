"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/assets/img/Logos/LogoLight.webp";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Growth Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const normalizePath = (path: string) => path.replace(/\/$/, "");

  const isActiveFooterLink = (href: string) => {
    const normalizedPathname = normalizePath(pathname || "");
    const normalizedHref = normalizePath(href);

    if (normalizedHref === "/services") {
      return (
        normalizedPathname === "/services" ||
        normalizedPathname.startsWith("/services/")
      );
    }

    return normalizedPathname === normalizedHref;
  };

  const linkClass = (href: string) =>
    isActiveFooterLink(href)
      ? "font-semibold text-[#ef2f6b]"
      : "text-white hover:text-pink-500 font-thin";

  const linkStyle = (href: string) =>
    isActiveFooterLink(href) ? { color: "#ef2f6b" } : undefined;

  return (
    <footer className="bg-[#08233a] text-white pb-4 pt-5">
      <div className="container footer-main justify-between">
        <div className="footer-column">
          <div className="footer-brand mb-6">
            <Link href="/" className="footer-logo">
              <Image
                src={Logo}
                alt="Healthcare Logo"
                className="h-8 w-auto"
                // style={{ filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
              />
            </Link>
          </div>

          <p className="footer-about-text">
            Helping healthcare providers grow with compliant, patient-focused systems.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="space-y-2 mt-4 md:mt-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={linkClass(link.href)}
                  style={linkStyle(link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>

          <ul className="footer-contact-list">
            <li>
              <span>
                <strong>Address:</strong> Level 1 530 Lt Collins Street
                Melbourne VIC
              </span>
            </li>
            <li>
              <a href="mailto:info@digitalparadigm.com.au" className="group">
                <span className="group-hover:text-[#ef2f6b] transition-colors">
                  <strong>Email:</strong> info@digitalparadigm.com.au
                </span>
              </a>
            </li>
            <li>
              <a href="tel:61251194369" className="group">
                <span className="group-hover:text-[#ef2f6b] transition-colors">
                  <strong>Hotline:</strong> +612-5119-4369
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom-divider" />

      <div className="container flex md:flex-row flex-col gap-3 items-center justify-between pt-4">
        <p className="text-sm">
          Health | Powered by: <strong>Digital Paradigm</strong>
        </p>
        <p className="text-sm">© Health {currentYear} | All Right Reserved</p>
      </div>
    </footer>
  );
}
