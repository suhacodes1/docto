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
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const linkClass = (href: string) =>
    href === pathname
      ? "font-semibold"
      : "text-white hover:text-pink-500 font-thin";

  const linkStyle = (href: string) =>
    href === pathname ? { color: "#ec4899" } : undefined;

  return (
    <footer className="site-footer">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image src={Logo} alt="Healthcare Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* <div className="footer-subscribe">
          <p>Subscribe:</p>
        </div> */}

        <div className="footer-stats">
          <span className="footer-stats-number">5M+</span>
          <span className="footer-stats-text">Satisfied Clients</span>
        </div>
      </div>

      <div className="container footer-divider" />

      <div className="container footer-main justify-between">
        <div className="footer-column">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-about-text">
            It is a long established fact that the read will been distracted by
            there readable an important content.
          </p>

          {/* <h4 className="footer-subheading">Find Us On:</h4>

          <div className="footer-socials">
            <a href="#" className="footer-social">
              f
            </a>
            <a href="#" className="footer-social">
              X
            </a>
            <a href="#" className="footer-social">
              in
            </a>
          </div> */}
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="space-y-4 mt-4 md:mt-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClass(link.href)}
                  style={linkStyle(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="footer-column">
          <h3 className="footer-heading">Recent Posts</h3>

          <div className="footer-posts">
            <article className="footer-post">
              <img
                src="https://via.placeholder.com/92x92.png?text=Post+1"
                alt="Recent post 1"
                className="footer-post-image"
              />
              <div className="footer-post-content">
                <p className="footer-post-title">
                  Study finds link between early stages ...
                </p>
                <p className="footer-post-date">June 10, 2022</p>
              </div>
            </article>

            <article className="footer-post">
              <img
                src="https://via.placeholder.com/92x92.png?text=Post+2"
                alt="Recent post 2"
                className="footer-post-image"
              />
              <div className="footer-post-content">
                <p className="footer-post-title">
                  Every seconds someone develops the rare ...
                </p>
                <p className="footer-post-date">June 10, 2022</p>
              </div>
            </article>
          </div>
        </div> */}

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

      <div className="container footer-bottom">
        <p className="footer-bottom-left">
          Health | Powered by: <strong>Digital Paradigm</strong>
        </p>

        <p className="footer-bottom-right">
          © Health {currentYear} | All Right Reserved
        </p>
      </div>
    </footer>
  );
}
