import { useEffect, useState } from 'react';
import PlanetCard from './PlanetCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import '../styles/Planets.css';
function Planets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://anurella.github.io/json/planets.json');

        if (!response.ok) {
          throw new Error(`Failed to fetch planets. Server returned: ${response.status}`);
        }

        const data = await response.json();

        const planetImages = {
          Mercury: 'https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png',
          Venus: 'https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png',
          Earth: 'https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png',
          Mars: 'https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png',
          Jupiter: 'https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png',
          Saturn: 'https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png',
          Uranus: 'https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png',
          Neptune: 'https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png',
          Pluto: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg',
        };

        const mappedPlanets = data.map((item, index) => ({
          id: index + 1,
          name: item.planet,
          distance: `${item.distanceFromSun} million km from the Sun`,
          image: planetImages[item.planet] || '',
        }));

        setPlanets(mappedPlanets);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  if (loading) {
    return (
      <section id="planets" className="planets-section">
        <LoadingSpinner message="Fetching planet data..." />
      </section>
    );
  }

  if (error) {
    return (
      <section id="planets" className="planets-section">
        <ErrorMessage message={error} />
      </section>
    );
  }

  return (
    <section id="planets" className="planets-section">
      <div className="visualizing-section">
        <h3 className="visualizing-heading">
          Visualizing the Differences Between Planets
        </h3>
        <p className="visualizing-text">
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how they differ in size, distance
          from the Sun, and overall appearance.
        </p>
      </div>

      <div className="planets-grid">
        {planets.map((planet) => (
          <PlanetCard
            key={planet.id}
            name={planet.name}
            distance={planet.distance}
            image={planet.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Planets;