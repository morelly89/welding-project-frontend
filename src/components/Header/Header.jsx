import "./Header.css";
import Hero from "./Hero/Hero";
import Navigation from "./Navigation/Navigation";

function Header({
  onLoginClick,
  currentUser,
  isLoggedIn,
  onLogout,
  onUserUpdate,
}) {
  return (
    <header className="header" id="home">
      <Navigation
        onLoginClick={onLoginClick}
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
        onLogout={onLogout}
        onUserUpdate={onUserUpdate}
      />
      <Hero />
    </header>
  );
}

export default Header;
