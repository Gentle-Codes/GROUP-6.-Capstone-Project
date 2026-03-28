import "./VideoSection.css";

export default function VideoSection() {
  return (
    <section className="video-section" id="about">
      <div className="video-container">

        <div className="video-wrapper">
          <video
            controls
            className="video-player"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://www.pexels.com/download/video/1851190/" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="play-icon">
            <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="video-content">
          <h2 className="video-title">
            How Planetary Data Helps Us <br/> Understand Space
          </h2>
          <p className="video-description">
            Planetary science goes beyond images. Comparing{" "}
            <strong>mass</strong>, <strong>diameter</strong>,{" "}
            <strong>gravity</strong>, and <strong>density</strong>, we gain
            insight into how planets form, behave, and interact within the
            solar system.
          </p>
        </div>

      </div>
    </section>
  );
}
