import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const cars = [
    {
      id: "mustang-gt",
      name: "Ford Mustang GT",
      price: "$120/day",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop",
      features: ["V8", "Auto", "4 Seats"],
    },

    {
      id: "camaro",
      name: "Chevrolet Camaro",
      price: "$110/day",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
      features: ["Sport", "Auto", "4 Seats"],
    },

    {
      id: "escalade",
      name: "Cadillac Escalade",
      price: "$180/day",
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop",
      features: ["Luxury", "SUV", "7 Seats"],
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>
            American Car Rentals <span>in Georgia</span>
          </h1>

          <p>
            Rent luxury American muscle cars and SUVs across Georgia.
            Stylish rides, affordable prices, and premium service.
          </p>

          <Link to="/cars" className="btn">
            Explore Cars
          </Link>
        </div>
      </section>

      <section id="cars" className="section">
        <div className="title">
          <h2>Featured Cars</h2>
        </div>

        <div className="cars-grid">
          {cars.map((car) => (
            <div className="card" key={car.id}>
              <img src={car.image} alt={car.name} />

              <div className="card-content">
                <h3>{car.name}</h3>

                <div className="price">{car.price}</div>

                <div className="features">
                  {car.features.map((feature, i) => (
                    <span key={i}>{feature}</span>
                  ))}
                </div>

                <Link to={`/cars/${car.id}`} className="btn">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="about">
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop"
            alt="Luxury Car"
          />

          <div className="about-text">
            <h2>Why Choose Us?</h2>

            <p>
              We provide premium American car rentals across Georgia
              with modern vehicles, luxury interiors, and
              professional customer support.
            </p>

            <p>
              Whether you want a muscle car for Tbilisi nightlife
              or a luxury SUV for mountain trips — we have the
              perfect ride.
            </p>

            <Link to="/cars" className="btn">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="contact">
          <h2>Book Your Dream Car</h2>

          <p>Email us anytime for reservations.</p>

          <a
            href="mailto:info@americanrentals.ge"
            className="btn"
          >
            info@americanrentals.ge
          </a>
        </div>
      </section>
    </>
  );
}