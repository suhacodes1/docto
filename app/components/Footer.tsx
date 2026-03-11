export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-text">Doctio</span>
          </div>
        </div>

        <div className="footer-subscribe">
          <p>Subscribe:</p>
        </div>

        <div className="footer-stats">
          <span className="footer-stats-number">5M+</span>
          <span className="footer-stats-text">Satisfied Clients</span>
        </div>
      </div>

      <div className="container footer-divider" />

      <div className="container footer-main">
        <div className="footer-column">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-about-text">
            It is a long established fact that the read will been distracted by
            there readable an important content.
          </p>

          <h4 className="footer-subheading">Find Us On:</h4>

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
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Department</a>
            </li>
            <li>
              <a href="#">Doctors</a>
            </li>
            <li>
              <a href="#">Faq’s</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
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
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>

          <ul className="footer-contact-list">
            <li>
              <span>Obere Haltenstrasse, Lugaggia. Switzerland - 6953</span>
            </li>
            <li>
              <span className="footer-contact-icon">✉</span>
              <span>no@themedraft.net</span>
            </li>
            <li>
              <span className="footer-contact-icon">✉</span>
              <span>replay@themedraft.net</span>
            </li>
            <li>
              <span>+410 123 456 789</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom-divider" />

      <div className="container footer-bottom">
        <p className="footer-bottom-left">
          Doctio | Developed by: <strong>ThemeDraft</strong>
        </p>

        <p className="footer-bottom-right">
          © Doctio 2022 | All Right Reserved
        </p>
      </div>
    </footer>
  );
}
