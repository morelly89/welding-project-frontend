import "./WeldingTopicCard.css";
import { useNavigate } from "react-router-dom";

function WeldingTopicCard({ title, description, image, path }) {
  const navigate = useNavigate();
  const cardPageNavigator = () => {
    navigate(path);
  };
  return (
    <article className="welding-topic-card">
      <img
        className="welding-topic-card__image"
        src={image}
        alt={`${title} process`}
      />

      <div className="welding-topic-card__content">
        <h3 className="welding-topic-card__title">{title}</h3>
        <p className="welding-topic-card__description">{description}</p>

        <a className="welding-topic-card__link" onClick={cardPageNavigator}>
          Read More →
        </a>
      </div>
    </article>
  );
}

export default WeldingTopicCard;
