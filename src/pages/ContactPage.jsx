import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">

      <section className="contact-hero">
        <div className="contact-overlay"></div>

        <div className="contact-hero-content">
          <h1>Contact Us</h1>

          <p>
            Get in touch for reservations, questions,
            or luxury car rental assistance.
          </p>
        </div>
      </section>

      <section className="contact-section">

        <div className="contact-container">

          <div className="contact-info">

            <h2>Get In Touch</h2>

            <p>
              We are available 24/7 to help you rent
              the perfect American luxury vehicle in Georgia.
            </p>

            <div className="info-box">
              <h3>Email</h3>
              <p>info@americanrentals.ge</p>
            </div>

            <div className="info-box">
              <h3>Phone</h3>
              <p>+995 555 123 456</p>
            </div>

            <div className="info-box">
              <h3>Location</h3>
              <p>Tbilisi, Georgia</p>
            </div>

          </div>

          <div className="contact-card">

                <h2>Reserve Your Dream Car</h2>

                <p>
                    Contact us directly for bookings, availability,
                    pricing, and luxury rental assistance.
                </p>

                <a
                    href="mailto:info@americanrentals.ge"
                    className="contact-btn"
                >
                    Email Us
                </a>

                <a
                    href="tel:+995555123456"
                    className="contact-btn secondary-btn"
                >
                    Call Now
                </a>

                </div>

        </div>

      </section>

    </div>
  );
}