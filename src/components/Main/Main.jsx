import About from "../About/About";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import ProjectRequest from "../ProjectRequest/ProjectRequest";
import WeldingTopicList from "../WeldingTopicList/WeldingTopicList";

function Main() {
  return (
    <main className="main">
      <WeldingTopicList />
      <FeaturedProjects />
      <About />
      <ProjectRequest />
    </main>
  );
}

export default Main;
