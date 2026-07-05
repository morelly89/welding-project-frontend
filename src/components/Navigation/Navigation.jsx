import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="#services">
        Services
      </a>
      <a className="navigation__link" href="#methods">
        Welding Methods
      </a>
      <a className="navigation__link" href="#projects">
        Projects
      </a>
      <a className="navigation__link" href="#contact">
        Contact
      </a>
    </nav>
  );
}

export default Navigation;
