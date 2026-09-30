import "./WeldingProjectCard.css";

function WeldingProjectCard({ title, description, image }) {
  return (
    <li className="welding-project-card">
      <img
        className="welding-project-card__image"
        src={image}
        alt={title}
      ></img>
      <div className="welding-project-card__content">
        <h3 className="welding-project__title">{title}</h3>
        <p className="welding-project__description">{description}</p>
      </div>
    </li>
  );
}

export default WeldingProjectCard;
