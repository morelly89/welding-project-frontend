import aluminumTigComponent1 from "../../assets/aluminum-component1.jpg";
import drillTwister1 from "../../assets/drill-twister-roundplate.jpg";
import sheetMetalProject from "../../assets/sheet-metal-project.jpg";
import WeldingProjectCard from "../WeldingProjectCard/WeldingProjectCard";
import "./FeaturedProjects.css";

const weldingProjects = [
  {
    id: 1,
    title: "Aluminum Components",
    description:
      "TIG-welded aluminum components fabricated from square tubing, plate, and formed material.",
    image: aluminumTigComponent1,
  },
  {
    id: 2,
    title: "Drill Twisters",
    description:
      "Heavy steel drilling components fitted and welded with multiple passes for strength and durability.",
    image: drillTwister1,
  },
  {
    id: 3,
    title: "Sheet Metal Project",
    description:
      "A custom sheet-metal assembly built through layout, forming, fitting, and welding.",
    image: sheetMetalProject,
  },
];

function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <div className="featured-projects__text">
        <h2 className="featured-projects__title">Featured Projects</h2>
        <h3 className="featured-projects__description">
          {" "}
          Recent Welding Projects
        </h3>
        <p className="featured-projects___paragraph">
          Check out some of the custom fabrication and welding projects I’ve
          worked on.
        </p>
      </div>

      <ul className="welding-projects__list">
        {weldingProjects.map((project) => (
          <WeldingProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </ul>
    </section>
  );
}

export default FeaturedProjects;
