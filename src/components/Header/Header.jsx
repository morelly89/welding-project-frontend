import Navigation from "./Navigation/Navigation";
import "./Header.css";
import Hero from "./Hero/Hero";

function Header() {
  return (
    <header className="header">
      <Navigation />
      <Hero />
    </header>
  );
}

export default Header;
