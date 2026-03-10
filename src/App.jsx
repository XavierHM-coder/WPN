import "./App.css"
import { Link } from "react-router-dom"

function App() {

  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="nav">

        <div className="nav-logo">
          Weightloss<span>Nutrition</span>
        </div>

        <div className="nav-links">

          <a href="#">Home</a>

          <a href="#features">
            Benefits
          </a>

          <Link to="/products">
            Products
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

      </nav>


      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Precision Nutrition
            <br />
            For Your Body
          </h1>

          <p>
            Transform your body with personalized nutrition
            coaching designed for your metabolism,
            lifestyle and goals.
          </p>

          <div className="hero-buttons">

            <Link to="/contact">
              <button className="btn-primary">
                Start Your Plan
              </button>
            </Link>

            <Link to="/products">
              <button className="btn-secondary">
                View Products
              </button>
            </Link>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="features" id="features">

        <div className="feature-card">
          <h3>Personalized Plans</h3>
          <p>
            Nutrition programs tailored specifically
            to your metabolism and lifestyle.
          </p>
        </div>

        <div className="feature-card">
          <h3>Expert Coaching</h3>
          <p>
            Work directly with certified nutrition
            professionals guiding your progress.
          </p>
        </div>

        <div className="feature-card">
          <h3>Sustainable Results</h3>
          <p>
            Build healthy habits designed for
            long-term transformation.
          </p>
        </div>

      </section>


      {/* CTA */}

      <section className="cta">

        <h2>Start Your Transformation</h2>

        <p>
          Join hundreds of people improving their health
          with personalized nutrition programs.
        </p>

        <Link to="/contact">
          <button className="btn-primary">
            Get Started
          </button>
        </Link>

      </section>


      {/* PRODUCTS PREVIEW */}

      <section className="products-preview">

        <h2>Our Products</h2>

        <p>
          Discover our premium supplements designed to support
          your health and fitness journey.
        </p>

        <Link to="/products">
          <button className="btn-primary products-btn">
            View Products
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
              Professional nutrition programs and premium
              supplements designed to help you achieve
              long-term wellness and sustainable results.
            </p>
          </div>


          <div className="footer-links">

            <h4>Company</h4>

            <a href="#">Home</a>

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

export default App