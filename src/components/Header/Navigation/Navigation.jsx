import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <h1 className="navigation__title">
        Morelly<span>Welding</span>
      </h1>

      <div className="navigation__link-container">
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
      </div>
      <button className="navigation__login-button">Login</button>
    </nav>
  );
}

export default Navigation;
