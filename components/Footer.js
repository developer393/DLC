export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand" id="about">
          <p className="logo footer-logo">
            <span className="logo-mark" aria-hidden="true">
              क
            </span>
            <span className="logo-text">KaamWala</span>
          </p>
          <p className="footer-copy">
            © {new Date().getFullYear()} KaamWala. Hyperlocal hire of daily
            Workers in Noida.
          </p>
        </div>

        <nav id="contact" aria-label="Footer">
          <ul className="footer-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">Privacy</a>
            </li>
          </ul>
        </nav>

        <ul className="social" aria-label="Social media">
          <li>
            <a href="#social-whatsapp" aria-label="WhatsApp (placeholder)">
              <span className="social-icon" aria-hidden="true">
                Wa
              </span>
            </a>
          </li>
          <li>
            <a href="#social-twitter" aria-label="X (placeholder)">
              <span className="social-icon" aria-hidden="true">
                X
              </span>
            </a>
          </li>
          <li>
            <a href="#social-instagram" aria-label="Instagram (placeholder)">
              <span className="social-icon" aria-hidden="true">
                Ig
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
