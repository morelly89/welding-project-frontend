import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { signup } from "../../utils/authApi.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignupModal.css";

function SignupModal({ isOpen, onClose, onLoginClick }) {
  const { values, handleChange, errors, isValid, resetForm, setIsValid } =
    useFormAndValidation();
  const [signupError, setSignupError] = useState("");
  const passwordsMatch = values.password === values.confirmPassword;
  const [termsAccepted, setTermsAccepted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid || !passwordsMatch || !termsAccepted) {
      return;
    }
    setSignupError("");

    const signupData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      await signup(signupData);

      resetForm();
      setTermsAccepted(false);
      onClose();
    } catch (error) {
      console.error("Signup failed:", error);
      setSignupError("Unable to create your account. Please try again.");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Create Account"
    >
      <div className="signup-modal__brand">
        <h2 className="signup-modal__logo">
          Morelly<span>Welding</span>
        </h2>
      </div>

      <p className="signup-modal__description">
        Sign up to save welding projects and submit custom fabrication requests.
      </p>

      <label className="signup-modal__label">
        Full Name
        <input
          className="signup-modal__input"
          type="text"
          name="name"
          placeholder="Enter your full name"
          required
          onChange={handleChange}
          value={values.name || ""}
        />
        {errors.name && (
          <span className="signup-modal__error">{errors.name}</span>
        )}
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
          value={values.email || ""}
        />
        {errors.email && (
          <span className="signup-modal__error">{errors.email}</span>
        )}
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
          value={values.password || ""}
        />
        {errors.password && (
          <span className="signup-modal__error">{errors.password}</span>
        )}
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
          value={values.confirmPassword || ""}
        />
        {values.confirmPassword && !passwordsMatch && (
          <span className="signup-modal__error">Passwords do not match.</span>
        )}
      </label>

      <p className="signup-modal__password-note">
        Password must be at least 8 characters.
      </p>

      <label className="signup-modal__terms">
        <input
          type="checkbox"
          required
          checked={termsAccepted}
          onChange={(e) => {
            setTermsAccepted(e.target.checked);
            setIsValid(e.target.form.checkValidity());
          }}
        />
        <span>
          I agree to the{" "}
          <Link
            to="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="signup-modal__terms-link"
          >
            terms and conditions
          </Link>
          .
        </span>
      </label>

      {signupError && (
        <span className="signup-modal__error" role="alert">
          {signupError}
        </span>
      )}

      <button
        className="signup-modal__submit-button"
        type="submit"
        disabled={!isValid || !passwordsMatch || !termsAccepted}
      >
        Sign Up →
      </button>

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
    </ModalWithForm>
  );
}

export default SignupModal;
