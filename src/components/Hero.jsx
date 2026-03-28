import "./Hero.css";

export default function Hero() {
  const handleScroll = (target) => {
    const section = document.querySelector(target);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <h1 className="hero-title">
            Explore Our Solar<br />System Through Data
          </h1>
          <p className="hero-description">
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down
            the solar system in a clear, data-driven way.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => handleScroll("#facts")}>
              Explore the Data
            </button>
            <button className="btn btn-outline" onClick={() => handleScroll("#contact")}>
              Contact Us
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1659835547789-cb00dbd213c4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Earth from space"
            className="earth-img"
          />
        </div>

      </div>
    </section>
  );
}