import "./WeldingTopicCard.css";

function WeldingTopicCard({ title, description, image }) {
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

        <a className="welding-topic-card__link" href="#">
          Read More →
        </a>
      </div>
    </article>
  );
}

export default WeldingTopicCard;
