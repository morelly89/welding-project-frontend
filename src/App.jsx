import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { getCurrentUser } from "./utils/authApi";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginModal from "./components/LoginModal/LoginModal";
import Main from "./components/Main/Main";
import MyRequests from "./components/MyRequests/MyRequests";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import SignupModal from "./components/SignupModal/SignupModal";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import MigWeldingPage from "./pages/WeldingTopicPages/MigWeldingPage/MigWeldingPage";
import StickWeldingPage from "./pages/WeldingTopicPages/StickWeldingPage/StickWeldingPage";
import TigWeldingPage from "./pages/WeldingTopicPages/TigWeldingPage/TigWeldingPage";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSignupClick = () => {
    setActiveModal("signup");
  };

  const handleLoginSuccess = (data) => {
    localStorage.setItem("jwt", data.token);
    setCurrentUser(data.user);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const handleUserUpdate = (updatedUser) => {
    setCurrentUser(updatedUser);
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      setIsAuthLoading(false);
      return;
    }

    const restoreUser = async () => {
      try {
        const data = await getCurrentUser(token);

        setCurrentUser(data.user);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Failed to restore user:", error);

        localStorage.removeItem("jwt");
        setCurrentUser(null);
        setIsLoggedIn(false);
      } finally {
        setIsAuthLoading(false);
      }
    };

    restoreUser();
  }, []);
  console.log("currentUser:", currentUser);
  console.log("isLoggedIn:", isLoggedIn);
  console.log("isAuthLoading:", isAuthLoading);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="page">
            <Header
              onLoginClick={handleLoginClick}
              currentUser={currentUser}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              onUserUpdate={handleUserUpdate}
            />

            <Main
              isLoggedIn={isLoggedIn}
              onLoginClick={handleLoginClick}
              onSignupClick={handleSignupClick}
            />

            <LoginModal
              isOpen={activeModal === "login"}
              onClose={closeActiveModal}
              onSignupClick={handleSignupClick}
              onLoginSuccess={handleLoginSuccess}
            />

            <SignupModal
              onClose={closeActiveModal}
              isOpen={activeModal === "signup"}
              onLoginClick={handleLoginClick}
            />

            <Footer />
          </div>
        }
      />

      <Route path="/mig-welding" element={<MigWeldingPage />} />
      <Route path="/tig-welding" element={<TigWeldingPage />} />
      <Route path="/stick-welding" element={<StickWeldingPage />} />
      <Route
        path="/my-requests"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn} isAuthLoading={isAuthLoading}>
            <MyRequests />
          </ProtectedRoute>
        }
      />
      <Route path="/terms" element={<TermsAndConditions />} />
    </Routes>
  );
}

export default App;
