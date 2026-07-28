import migImage from "../../assets/mig-welding.png";
import stickImage from "../../assets/stick-welding.png";
import tigImage from "../../assets/tig-welding.png";
import WeldingTopicCard from "../WeldingTopicCard/WeldingTopicCard";
import "./WeldingTopicList.css";

const weldingTopics = [
  {
    title: "MIG Welding",
    description: "Fast and reliable welding for steel fabrication.",
    image: migImage,
  },
  {
    title: "TIG Welding",
    description: "Clean precision welding for aluminum and stainless steel.",
    image: tigImage,
  },
  {
    title: "Stick Welding",
    description: "Strong welds for thicker steel and outdoor work.",
    image: stickImage,
  },
];

function WeldingTopicList() {
  return (
    <section className="welding-topics">
      <div className="welding-topics__text-container">
        <h2 className="welding-topics__title">Welding Topics</h2>
        <h1 className="welding-topics__text">Learn. Improve. Build</h1>
        <p className="welding-topics__paragraph">
          This section shares knowledge I have gained through my experience as a
          welder and fabricator, along with helpful articles, books, and other
          resources that I recommend.
        </p>
      </div>
      <div className="welding-topics__list">
        {weldingTopics.map((topic) => (
          <WeldingTopicCard
            key={topic.title}
            title={topic.title}
            description={topic.description}
            image={topic.image}
          />
        ))}
      </div>
    </section>
  );
}

export default WeldingTopicList;
