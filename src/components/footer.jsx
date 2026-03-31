import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3 className="footer-heading">About</h3>
          <p className="footer-description">
            A data-driven solar system project built by a passionate team of developers.<br/>
            Meet the team: Adeyemi, Philomena, Emeka, David, Chidubem, George & Precious.
          </p>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy;2026 Design by{" "}
            <a href="https://github.com/Anurella" target="_blank" rel="noreferrer">
              Amaka
            </a>{" "}
            &amp;{" "}
            <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noreferrer">
              Ifeoma A.
            </a>
            <br />
            Built by{" "}
            <a href="https://github.com/Gentle-Codes/GROUP-6.-Capstone-Project" target="_blank" rel="noreferrer">
              Group-6 Novara-cohort
            </a>
            . All rights reserved
          </p>
          <a
            href="https://tsacademyonline.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-brand"
          >
            TSAcademy
          </a>
        </div>

      </div>
    </footer>
  );
}