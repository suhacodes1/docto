"use client";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="cta-scroll-top"
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}


