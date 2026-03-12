import { Link } from "react-router-dom"
import logo from "./assets/logo.png"
import "./Contact.css"

function Contact() {

  return (

    <div className="contact-page">


      {/* NAVBAR */}

      <nav className="products-nav">

        <div className="nav-logo">

          <img src={logo} alt="logo"/>

          <span className="brand-name">
            Weightloss<span>Nutrition</span>
          </span>

        </div>

        <div className="nav-links">

          <Link to="/">Home</Link>

          <a href="/#features">
            Benefits
          </a>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

      </nav>



      {/* HERO */}

      <section className="contact-hero">

        <h1>Contact Our Team</h1>

        <p>
          Have questions about our nutrition programs or
          supplements? Our team is ready to guide you
          on your health journey.
        </p>

      </section>



      {/* CONTACT CARDS */}

      <section className="contact-section">

        <div className="contact-grid">


          {/* EMAIL */}

          <div className="contact-card">

            <h3>Email</h3>

            <p>
              Send us an email and our team will respond
              with information about our programs.
            </p>

            <a
              href="mailto:info@weightlossnutrition.com"
              className="contact-link"
            >
              info@weightlossnutrition.com
            </a>

          </div>



          {/* WHATSAPP */}

          <div className="contact-card">

            <h3>WhatsApp</h3>

            <p>
              Chat directly with us to ask questions
              or request information about our services.
            </p>

            <a
              href="https://wa.me/19039190203"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Chat on WhatsApp
            </a>

            <span className="contact-phone">
              (903) 919-0203
            </span>

          </div>



          {/* HOURS */}

          <div className="contact-card">

            <h3>Business Hours</h3>

            <p>
              Monday – Friday
              <br/>
              9:00 AM – 6:00 PM
            </p>

            <p className="hours-note">
              Our team will respond during
              business hours.
            </p>

          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="contact-cta">

        <h2>Start Your Health Journey</h2>

        <p>
          Take the first step toward better health
          with personalized nutrition guidance.
        </p>

        <Link to="/">
          <button className="btn-primary">
            Back to Home
          </button>
        </Link>

      </section>



      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <h3>
              Weightloss<span>Nutrition</span>
            </h3>

            <p>
              Professional nutrition programs designed
              to help people achieve long-term health
              and sustainable results.
            </p>

          </div>


          <div className="footer-links">

            <h4>Company</h4>

            <Link to="/">Home</Link>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/products">
              Products
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>


          <div className="footer-links">

            <h4>Follow Us</h4>

            <div className="social-icons">

              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-tiktok"></i>
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Weightloss Professional Nutrition
        </div>

      </footer>


    </div>

  )
}

export default Contact