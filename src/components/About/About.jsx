import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <h2 className="about__title">ABOUT MORELLY WELDING</h2>

        <h3 className="about__description">
          Built With Precision, Strength, and Pride.
        </h3>

        <div className="about__text-container">
          <p className="about__text">
            Morelly Welding is built around real fabrication experience,
            practical welding knowledge, and clean workmanship. This site helps
            customers learn about welding services, materials, and project
            options.
          </p>

          <p className="about__text about__text--right">
            My goal is to share my welding and fabrication journey while passing
            along the knowledge and experience I’ve gained through hands-on
            work.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
