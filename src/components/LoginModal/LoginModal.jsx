import { useState } from "react";
import { login } from "../../utils/authApi";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onSignupClick, onLoginSuccess }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(formData);

      onLoginSuccess(data);
      onClose();

      onClose();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="login-modal">
      <div className="login-modal__container">
        <button
          className="login-modal__close-button"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="login-modal__brand">
          <h2 className="login-modal__logo">
            Morelly<span>Welding</span>
          </h2>
        </div>

        <h2 className="login-modal__title">Welcome Back</h2>

        <p className="login-modal__description">
          Log in to access your account, saved projects, and request your next
          custom build.
        </p>

        <form className="login-modal__form" onSubmit={handleSubmit}>
          <label className="login-modal__label">
            Email
            <input
              className="login-modal__input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="login-modal__label">
            Password
            <input
              className="login-modal__input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <div className="login-modal__options">
            <label className="login-modal__remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a className="login-modal__forgot-password" href="/">
              Forgot password?
            </a>
          </div>

          <button className="login-modal__submit-button" type="submit">
            Log In →
          </button>
        </form>

        <div className="login-modal__divider">
          <span>or continue with</span>
        </div>

        <div className="login-modal__socials">
          <button
            className="login-modal__social-button"
            type="button"
            aria-label="Log in with Google"
          >
            G
          </button>

          <button
            className="login-modal__social-button"
            type="button"
            aria-label="Log in with GitHub"
          >
            GH
          </button>

          <button
            className="login-modal__social-button"
            type="button"
            aria-label="Log in with LinkedIn"
          >
            in
          </button>
        </div>

        <p className="login-modal__bottom-text">
          Don’t have an account?{" "}
          <button
            className="login-modal__switch-button"
            type="button"
            onClick={onSignupClick}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
