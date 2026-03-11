export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-wrap">
        <div className="topbar-left">
          <span className="topbar-item">
            <strong>Working Hour:</strong> 08.00am - 09.00pm
          </span>
          <span className="topbar-divider">|</span>
          <span className="topbar-item">
            <strong>Email:</strong> info@themedraft.net
          </span>
        </div>

        <div className="topbar-right">
          <span className="topbar-social">f</span>
          <span className="topbar-social">X</span>
          <span className="topbar-social">in</span>
          <span className="topbar-social">insta</span>
          <span className="topbar-divider">|</span>
          <span className="topbar-item">
            <strong>Hotline:</strong> +0123 (456) 789
          </span>
        </div>
      </div>
    </div>
  );
}
