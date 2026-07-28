import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <h2 className="about__title">ABOUT MORELLY WELDING</h2>
        <h1 className="about__description">
          Built With Precision, Strength, and Pride.
        </h1>

        <div className="about__text-container">
          <p className="about__text">
            Morelly Welding is built around real fabrication experience,
            practical welding knowledge, and clean workmanship. This site helps
            customers learn about welding services, materials, and project
            options.
          </p>
          <p className="about__text2">
            My goal is to share my welding/fabrication journey with you and
            share my knowledge and experience
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
