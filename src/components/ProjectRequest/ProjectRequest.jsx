import { useState } from "react";
import "./ProjectRequest.css";
import UnitConverter from "./UnitConverter/UnitConverter";

function ProjectRequest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    material: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("jwt");

    try {
      const response = await fetch(
        "http://localhost:3001/api/project-requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit request");
      }

      setMessage("Project request sent successfully!");

      setFormData({
        name: "",
        email: "",
        projectType: "",
        material: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="project-request" id="project-request">
      <div className="project-request__container">
        <div className="project-request__text-container">
          <h2 className="project-request__title">PROJECT REQUEST</h2>

          <h3 className="project-request__text">
            Let's Build Something Strong
          </h3>

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
              I take pride in delivering high-quality fabrication and welding
              work. Tell me about your project and let's make it happen.
            </p>

            <p className="project-request__content-email">
              ✉ morellywelding@gmail.com
            </p>

            <p className="project-request__content-phone">☎ 508-406-8760</p>

            <p className="project-request__content-location">
              📍 Brockton, Massachusetts
            </p>
          </div>

          <div className="project-request__form-container">
            <form className="project-request__form" onSubmit={handleSubmit}>
              <div className="project-request__form-field">
                <label className="project-request__form-label" htmlFor="name">
                  Name
                </label>

                <input
                  className="project-request__form-input"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="project-request__form-field">
                <label className="project-request__form-label" htmlFor="email">
                  Email
                </label>

                <input
                  className="project-request__form-input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
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
                  value={formData.projectType}
                  onChange={handleChange}
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
                  value={formData.material}
                  onChange={handleChange}
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
                <label
                  className="project-request__form-label"
                  htmlFor="description"
                >
                  Description
                </label>

                <textarea
                  className="project-request__textarea"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="project-request__form-button" type="submit">
                Submit Request →
              </button>

              {message && <p className="project-request__status">{message}</p>}
            </form>
          </div>
          <UnitConverter />
        </div>
      </div>
    </div>
  );
}

export default ProjectRequest;
