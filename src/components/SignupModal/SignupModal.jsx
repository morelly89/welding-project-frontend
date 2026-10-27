import { useState } from "react";
import { signup } from "../../utils/authApi.js";
import "./SignupModal.css";

function SignupModal({ isOpen, onClose, onLoginClick }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    const signupData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    signup(signupData);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="signup-modal">
      <div className="signup-modal__container">
        <button
          className="signup-modal__close-button"
          type="button"
          onClick={onClose}
          aria-label="Close signup modal"
        >
          ×
        </button>

        <div className="signup-modal__brand">
          <h2 className="signup-modal__logo">
            Morelly<span>Welding</span>
          </h2>
        </div>

        <h2 className="signup-modal__title">Create Account</h2>

        <p className="signup-modal__description">
          Sign up to save welding projects and submit custom fabrication
          requests.
        </p>

        <form className="signup-modal__form" onSubmit={handleSubmit}>
          <label className="signup-modal__label">
            Full Name
            <input
              className="signup-modal__input"
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              onChange={handleChange}
            />
          </label>

          <label className="signup-modal__label">
            Email
            <input
              className="signup-modal__input"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </label>

          <label className="signup-modal__label">
            Password
            <input
              className="signup-modal__input"
              type="password"
              name="password"
              placeholder="Create a password"
              minLength="8"
              required
              onChange={handleChange}
            />
          </label>

          <label className="signup-modal__label">
            Confirm Password
            <input
              className="signup-modal__input"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              minLength="8"
              required
              onChange={handleChange}
            />
          </label>

          <p className="signup-modal__password-note">
            Password must be at least 8 characters.
          </p>

          <label className="signup-modal__terms">
            <input type="checkbox" required />
            <span>
              I agree to the{" "}
              <button className="signup-modal__terms-link" type="button">
                terms and conditions
              </button>
              .
            </span>
          </label>

          <button className="signup-modal__submit-button" type="submit">
            Sign Up →
          </button>
        </form>

        <div className="signup-modal__divider">
          <span>or continue with</span>
        </div>

        <div className="signup-modal__socials">
          <button
            className="signup-modal__social-button"
            type="button"
            aria-label="Sign up with Google"
          >
            G
          </button>

          <button
            className="signup-modal__social-button"
            type="button"
            aria-label="Sign up with GitHub"
          >
            GH
          </button>

          <button
            className="signup-modal__social-button"
            type="button"
            aria-label="Sign up with LinkedIn"
          >
            in
          </button>
        </div>

        <p className="signup-modal__bottom-text">
          Already have an account?{" "}
          <button
            className="signup-modal__switch-button"
            type="button"
            onClick={onLoginClick}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignupModal;
