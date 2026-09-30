import weldingPic from "../../../assets/welding-pic.jpg";
import "./Hero.css";

function Hero({ onLoginClick, isLoggedIn }) {
  const handleRequestProject = () => {
    if (!isLoggedIn) {
      onLoginClick();
      return;
    }

    const section = document.getElementById("project-request");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero__container">
      <div className="hero__paragraph-container">
        <h3 className="hero__paragraph">MORELLY WELDING PORTFOLIO</h3>
        <h1 className="hero__paragraph-title">
          {" "}
          Custom Welding <span>&</span> Fabrication Work
        </h1>
        <p className="hero__paragraph-text">
          Explore real welding projects, learn fabrication topics, and request
          custom metalwork built with precision, strength, and pride.
        </p>{" "}
        <div className="hero-button__container">
          {/* <button className="hero-button_black">View Projects</button> */}
          <a href="#projects" className="hero-button_black">
            View Projects
          </a>
          <button className="hero-button_orange" onClick={handleRequestProject}>
            Request a Project
          </button>
        </div>
      </div>
      <img className="hero__image" src={weldingPic}></img>
    </div>
  );
}

export default Hero;
