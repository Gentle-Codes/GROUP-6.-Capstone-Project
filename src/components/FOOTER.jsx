import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* About section */}
        <div className="footer__about">
          <h3 className="footer__about-title">About</h3>
          <p className="footer__members">
            Emeka, Amaka, Ifeoma, George, Benluis, Dimmsy, Chidi, Tunde
          </p>
        </div>

        {/* Divider line */}
        <hr className="footer__divider" />

        {/* Bottom bar */}
        <div className="footer__bottom">
          <div className="footer__copy">
            <p>&copy;2026 Designed by Amaka &amp; Ifeoma A.</p>
            <p>Built by Gentle-Codes. All rights reserved</p>
          </div>
          <a
            href="https://tsacademyonline.com/"
            target="_blank"
            rel="noreferrer"
            className="footer__tsacademy"
          >
            TSAcademy
          </a>
        </div>

      </div>
    </footer>
  );
}