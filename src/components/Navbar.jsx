import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img
            src="https://i.postimg.cc/pVnLZQ7S/graphicspng.png"
            alt="Planet Logo"
            className="logo-img"
          />
        </a>
      </div>
    </nav>
  );
}