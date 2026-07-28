import logo from "../../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img className="footer__logo" src={logo} alt="Morelly Welding logo" />

          <p className="footer__description">
            Professional welding
            <br />
            and fabrication
          </p>
          <p className="footer__copyright">
            © 2026 Morelly Welding. All rights reserved.
          </p>
        </div>
        <div className="footer__links-contacts-container">
          <div className="footer__links">
            <h3 className="footer__heading">QUICK LINKS</h3>

            <a className="footer__link" href="#">
              Home
            </a>
            <a className="footer__link" href="#projects">
              Projects
            </a>
            <a className="footer__link" href="#topics">
              Topics
            </a>
            <a className="footer__link" href="#about">
              About
            </a>
            <a className="footer__link" href="#contact">
              Contact
            </a>
          </div>

          <div className="footer__contact">
            <h3 className="footer__heading">CONTACT</h3>

            <p className="footer__contact-item">Email</p>
            <p className="footer__contact-item">Phone</p>
            <p className="footer__contact-item">Brockton MA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
