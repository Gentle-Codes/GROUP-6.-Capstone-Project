import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const teamMembers = [
    "Person 1", "Person 2", "Person 3", "Person 4",
    "Person 5", "Person 6", "Person 7", "Person 8",
  ];

  const requiredLinks = [
    { label: "Amaka", href: "https://github.com/Anurella" },
    { label: "Ifeoma", href: "https://www.linkedin.com/in/ifeomaokocha" },
    { label: "TSAcademy", href: "https://tsacademyonline.com/" },
    { label: "GROUP-6.-Capstone-Project", href: "https://github.com/Gentle-Codes/GROUP-6.-Capstone-Project" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__glow-line" />
      <div className="footer__inner">

        <div className="footer__col footer__col--brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">✦</span>
            <span className="footer__logo-text">SOLARIS</span>
          </div>
          <p className="footer__tagline">
            Exploring the cosmos, one planet at a time.
          </p>
          <p className="footer__about">
            We are a group of developers who built this Solar System
            Explorer as our capstone project for TSAcademy.
          </p>
          <div className="footer__team">
            <h4 className="footer__team-title">The Team</h4>
            <div className="footer__team-names">
              {teamMembers.map((name) => (
                <span key={name} className="footer__team-member">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Quick Links</h3>
          <ul className="footer__links">
            <li>
              <button className="footer__scroll-link" onClick={() => scrollTo("planets")}>
                <span className="footer__link-arrow">→</span>
                Explore Planets
              </button>
            </li>
            <li>
              <button className="footer__scroll-link" onClick={() => scrollTo("contact")}>
                <span className="footer__link-arrow">→</span>
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Connect</h3>
          <ul className="footer__links">
            {requiredLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className="footer__link">
                  <span className="footer__link-arrow">→</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {currentYear} Gentle-Codes. All rights reserved.
        </p>
        <p className="footer__built-with">
          Built with React &amp; ♥ at TSAcademy
        </p>
      </div>
    </footer>
  );
}