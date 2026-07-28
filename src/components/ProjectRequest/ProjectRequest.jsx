import "./ProjectRequest.css";
function ProjectRequest() {
  return (
    <div className="project-request">
      <div className="project-request__container">
        <div className="project-request__text-container">
          <h2 className="project-request__title">PROJECT REQUEST</h2>
          <h1 className="project-request__text">
            Let's Build Something Strong
          </h1>
          <p className="project-request__paragraph">
            Have a welding or fabrication idea? Submit a project request and
            share the details.
          </p>
        </div>

        <div className="project-request__flex-container">
          <div className="project-request__content">
            <h2 className="project-request__content-title">
              Your Project, My Commitment.
            </h2>
            <p className="project-request__content-paragraph">
              I take pride in in delivering high-quality fabrication and welding
              work. Tell me about your project and lets make it happen.
            </p>
            <p className="project-request__content-email">
              ✉ morellywelding@gmail.com
            </p>
            <p className="project-request__content-phone">☎ 508-406-8760</p>
            <p className="project-request__content-location">
              📍Brockton, Massachusetts
            </p>
          </div>
          <div className="project-request__form-container">
            <form className="project-request__form">
              <div className="project-request__form-field">
                <label className="project-request__form-label">Name</label>
                <input
                  className="project-request__form-input"
                  placeholder=" Enter your name"
                ></input>
              </div>
              <div className="project-request__form-field">
                <label className="project-request__form-label">Email</label>
                <input
                  className="project-request__form-input"
                  placeholder=" Enter your email"
                ></input>
              </div>
              <div className="project-request__form-field">
                <label
                  className="project-request__form-label"
                  htmlFor="project-type"
                >
                  Project Type
                </label>

                <select
                  className="project-request__form-input"
                  id="project-type"
                  name="projectType"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Project Type
                  </option>
                  <option value="railing">Railing</option>
                  <option value="repair">Repair</option>
                  <option value="custom-fabrication">Custom Fabrication</option>
                  <option value="structural">Structural Work</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="project-request__form-field">
                <label
                  className="project-request__form-label"
                  htmlFor="material"
                >
                  Material
                </label>

                <select
                  className="project-request__form-input"
                  id="material"
                  name="material"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Material
                  </option>
                  <option value="steel">Steel</option>
                  <option value="stainless-steel">Stainless Steel</option>
                  <option value="aluminum">Aluminum</option>
                  <option value="unsure">Not Sure</option>
                </select>
              </div>
              <div className="project-request__textarea__form-field">
                <label className="project-request__form-label">
                  Description
                </label>
                <textarea
                  className="project-request__textarea"
                  name="description"
                ></textarea>
              </div>
              <button className="project-request__form-button">
                Submit Request →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectRequest;
