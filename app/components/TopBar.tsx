export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-wrap">
        <div className="topbar-left">
          <span className="topbar-item">
            <strong>Working Hour:</strong> 08.00am - 09.00pm
          </span>
          <span className="topbar-divider">|</span>
          <a href="mailto:info@digitalparadigm.com.au" className="group">
            <span className="group-hover:text-[#ef2f6b] transition-colors">
              <strong>Email:</strong> info@digitalparadigm.com.au
            </span>
          </a>
        </div>

        <div className="topbar-right">
          {/* <span className="topbar-social">f</span>
          <span className="topbar-social">X</span>
          <span className="topbar-social">in</span>
          <span className="topbar-social">insta</span>
          <span className="topbar-divider">|</span> */}
          <a href="tel:61251194369" className="group">
            <span className="group-hover:text-[#ef2f6b] transition-colors">
              <strong>Hotline:</strong> +612-5119-4369
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
