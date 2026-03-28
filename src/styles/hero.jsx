import React from 'react';
import '../styles/hero.css';
import heroVideo from '../assets/videos/hero.mp4';

const Hero = () => {
  return (
    <section className="hero">
      
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>Explore Our Solar System Through Data</h1>
        <p>
          Understand the planets not just by name, but by measurable facts. 
          From size and mass to gravity and density, this page breaks down 
          the solar system in a clear, data-driven way.
        </p>

        <button
          className="cta-btn"
          onClick={() =>
            document.getElementById('planets')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Explore the Data
        </button>
      </div>

    </section>
  );
};

export default Hero;