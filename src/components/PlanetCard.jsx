function PlanetCard({ name, distance, image }) {
  return (
    <figure className="planet-card">
      <img src={image} alt={name} className="planet-image" />
      <figcaption>
        <h4>{name}</h4>
        <p>{distance}</p>
      </figcaption>
    </figure>
  );
}

export default PlanetCard;