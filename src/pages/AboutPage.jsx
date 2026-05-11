import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="about-overlay"></div>

        <div className="about-hero-content">
          <h1>About American Rentals</h1>

          <p>
            Premium American car rentals across Georgia.
            Luxury muscle cars, SUVs, and unforgettable driving experiences.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury Car"
            />
          </div>

          <div className="about-content">
            <h2>Who We Are</h2>

            <p>
              American Rentals is a premium car rental company based in Georgia,
              specializing in luxury American muscle cars and SUVs.
            </p>

            <p>
              Whether you're exploring Tbilisi nightlife, traveling through
              mountain roads, or arriving in style — we provide the perfect ride
              for every journey.
            </p>

            <p>
              Our fleet is carefully selected to deliver performance, comfort,
              luxury, and unforgettable driving experiences.
            </p>
          </div>

        </div>
      </section>

      <section className="stats-section">

        <div className="stat-box">
          <h2>500+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>20+</h2>
          <p>Luxury Vehicles</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>

      </section>

      <section className="mission-section">

        <h2>Our Mission</h2>

        <p>
          To provide luxury American car experiences with exceptional service,
          premium vehicles, and unforgettable memories across Georgia.
        </p>

      </section>

    </div>
  );
}