import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
      <nav className="navbar">
        <div className="logo">American Rentals</div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/cars" onClick={toggleMenu}>
              Cars
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>

        <button className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>
    </header>
  );
}