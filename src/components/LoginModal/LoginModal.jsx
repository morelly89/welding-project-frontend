import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { login } from "../../utils/authApi";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onSignupClick, onLoginSuccess }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(values);

      onLoginSuccess(data);
      onClose();
    } catch (error) {
      console.error("Login failed:", error);
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
      title="Welcome Back"
    >
      <div className="login-modal__brand">
        <h2 className="login-modal__logo">
          Morelly<span>Welding</span>
        </h2>
      </div>

      <p className="login-modal__description">
        Log in to access your account, saved projects, and request your next
        custom build.
      </p>

      <label className="login-modal__label">
        Email
        <input
          className="login-modal__input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        {errors.email && (
          <span className="login-modal__error">{errors.email}</span>
        )}
      </label>

      <label className="login-modal__label">
        Password
        <input
          className="login-modal__input"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        {errors.password && (
          <span className="login-modal__error">{errors.password}</span>
        )}
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

      <button
        className="login-modal__submit-button"
        type="submit"
        disabled={!isValid}
      >
        Log In →
      </button>

      <div className="login-modal__divider">
        <span>or continue with</span>
      </div>

      <div className="login-modal__socials">
        <button type="button" className="login-modal__social-button">
          G
        </button>
        <button type="button" className="login-modal__social-button">
          GH
        </button>
        <button type="button" className="login-modal__social-button">
          in
        </button>
      </div>

      <p className="login-modal__bottom-text">
        Don’t have an account?{" "}
        <button
          type="button"
          className="login-modal__switch-button"
          onClick={onSignupClick}
        >
          Sign up
        </button>
      </p>
    </ModalWithForm>
  );
}

export default LoginModal;
