import "../styles/PlanetTable.css";

export default function PlanetTable() {
  return (
    <section className="planet-table-section">
      <div className="table-container">
        <h2 className="planet-table-title">Planetary Facts at a Glance</h2>
        <p className="planet-table-text">
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical properties used by astronomers and researchers
          worldwide.
        </p>

        <p className="table-note">
          Data about the planets of our solar system (Planetary facts taken from NASA)
        </p>

        <div className="table-wrapper">
          <table className="planet-table">
            <thead>
              <tr>
                <th colSpan="2"> </th>
                <th>Name</th>
                <th>Mass (10^24kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m3)</th>
                <th>Gravity (m/s2)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td rowSpan="4" colSpan="2" className="group-cell">
                  Terrestrial Planets
                </td>
                <td className="data-cell">Mercury</td>
                <td className="data-cell">0.330</td>
                <td className="data-cell">4,878</td>
                <td className="data-cell">5427</td>
                <td className="data-cell">3.7</td>
              </tr>
              <tr>
                <td className="data-cell">Venus</td>
                <td className="data-cell">4.87</td>
                <td className="data-cell">12,104</td>
                <td className="data-cell">5243</td>
                <td className="data-cell">8.9</td>
              </tr>
              <tr>
                <td className="data-cell">Earth</td>
                <td className="data-cell">5.97</td>
                <td className="data-cell">12,756</td>
                <td className="data-cell">5514</td>
                <td className="data-cell">9.8</td>
              </tr>
              <tr>
                <td className="data-cell">Mars</td>
                <td className="data-cell">0.642</td>
                <td className="data-cell">6,792</td>
                <td className="data-cell">3933</td>
                <td className="data-cell">3.7</td>
              </tr>

              <tr>
                <td rowSpan="4" className="group-cell">
                  Jovian Planets
                </td>
                <td rowSpan="2" className="group-cell">
                  Gas Giants
                </td>
                <td className="data-cell">Jupiter</td>
                <td className="data-cell">1898</td>
                <td className="data-cell">142,984</td>
                <td className="data-cell">1326</td>
                <td className="data-cell">23.1</td>
              </tr>
              <tr>
                <td className="data-cell">Saturn</td>
                <td className="data-cell">568</td>
                <td className="data-cell">120,536</td>
                <td className="data-cell">687</td>
                <td className="data-cell">9.0</td>
              </tr>
              <tr>
                <td rowSpan="2" className="group-cell">
                  Ice Giants
                </td>
                <td className="data-cell">Uranus</td>
                <td className="data-cell">86.8</td>
                <td className="data-cell">51,118</td>
                <td className="data-cell">1271</td>
                <td className="data-cell">8.7</td>
              </tr>
              <tr>
                <td className="data-cell">Neptune</td>
                <td className="data-cell">102</td>
                <td className="data-cell">49,528</td>
                <td className="data-cell">1638</td>
                <td className="data-cell">11.0</td>
              </tr>

              <tr>
                <td colSpan="2" className="group-cell">
                  Dwarf Planets
                </td>
                <td className="data-cell">Pluto</td>
                <td className="data-cell">0.0146</td>
                <td className="data-cell">2,370</td>
                <td className="data-cell">2095</td>
                <td className="data-cell">0.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}