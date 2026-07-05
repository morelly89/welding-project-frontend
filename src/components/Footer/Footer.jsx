import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2026 Morelly Welding. All rights reserved.
      </p>

      <nav className="footer__nav" aria-label="Footer navigation">
        <a className="footer__link" href="#about">
          About
        </a>
        <a className="footer__link" href="#services">
          Services
        </a>
        <a className="footer__link" href="#contact">
          Contact
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
