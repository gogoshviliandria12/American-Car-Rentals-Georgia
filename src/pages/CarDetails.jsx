import { useParams } from "react-router-dom";
import cars from "../data/carsData";
import "./CarDetails.css";

export default function CarDetails() {
  const { id } = useParams();

  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="details-page">
        <h1>Car Not Found</h1>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-container">

        <div className="images-column">

          <img
            src={car.image}
            alt={car.name}
            className="details-image"
          />

          <img
            src={car.image2}
            alt={car.name}
            className="details-image second-image"
          />

        </div>

        <div className="details-content">

          <h1>{car.name}</h1>

          <h2>{car.price}</h2>

          <p className="description">
            {car.description}
          </p>

          <div className="details-grid">

            <div className="detail-box">
              <h3>Type</h3>
              <p>{car.type}</p>
            </div>

            <div className="detail-box">
              <h3>Transmission</h3>
              <p>{car.transmission}</p>
            </div>

            <div className="detail-box">
              <h3>Seats</h3>
              <p>{car.seats} Seats</p>
            </div>

            <div className="detail-box">
              <h3>Engine</h3>
              <p>{car.engine}</p>
            </div>

            <div className="detail-box">
              <h3>Horsepower</h3>
              <p>{car.horsepower}</p>
            </div>

            <div className="detail-box">
              <h3>Top Speed</h3>
              <p>{car.topSpeed}</p>
            </div>

            <div className="detail-box">
              <h3>Fuel</h3>
              <p>{car.fuel}</p>
            </div>

            <div className="detail-box">
              <h3>Color</h3>
              <p>{car.color}</p>
            </div>

          </div>

          <a
            href="mailto:info@americanrentals.ge"
            className="book-btn"
          >
            To Book This Car Call +995 555 123 456
          </a>

        </div>
      </div>
    </div>
  );
}