import About from "../About/About";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import ProjectRequest from "../ProjectRequest/ProjectRequest";
import WeldingTopicList from "../WeldingTopicList/WeldingTopicList";

function Main({ isLoggedIn, onLoginClick, onSignupClick }) {
  return (
    <main className="main">
      <WeldingTopicList />
      <FeaturedProjects />
      <About />
      <ProjectRequest
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
      />
    </main>
  );
}

export default Main;
