import "./CarsPage.css";
import { Link } from "react-router-dom";
import cars from "../data/carsData";

export default function CarsPage() {
  return (
    <div className="cars-page">
      <section className="cars-hero">
        <div className="cars-overlay"></div>

        <div className="cars-hero-content">
          <h1>Our Premium Fleet</h1>

          <p>
            Explore luxury American muscle cars and SUVs available
            for rent across Georgia.
          </p>
        </div>
      </section>

      <section className="cars-section">
        <div className="cars-title">
          <h2>Available Cars</h2>
        </div>

        <div className="cars-grid">
          {cars.map((car) => (
            <div className="car-card" key={car.id}>
              <img src={car.image} alt={car.name} />

              <div className="car-content">
                <h3>{car.name}</h3>

                <div className="car-price">{car.price}</div>

                <div className="car-details">
                  <span>{car.type}</span>
                  <span>{car.transmission}</span>
                  <span>{car.seats} Seats</span>
                </div>

                <Link to={`/cars/${car.id}`}>
                  <button className="rent-btn">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}