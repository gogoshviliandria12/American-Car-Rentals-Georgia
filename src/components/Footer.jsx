import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>American Rentals</h2>

          <p>
            Premium American car rentals across Georgia.
            Luxury muscle cars and SUVs for every journey.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          
          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Email: info@americanrentals.ge</p>
          <p>Phone: +995 555 123 456</p>
          <p>Tbilisi, Georgia</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 American Car Rentals Georgia. All rights reserved.
      </div>
    </footer>
  );
}