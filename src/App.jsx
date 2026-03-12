import "./App.css"
import logo from "./assets/logo.png"
import { Link } from "react-router-dom"

function App() {

  return (
    <div className="home-page">

      {/* NAVBAR */}

      <nav className="products-nav">

        <div className="nav-logo">
          <img src={logo} alt="logo"/>
          <span className="brand-name">
            Weightloss<span>Nutrition</span>
          </span>
        </div>

        <div className="nav-links">

          <a href="#">Home</a>

          <a href="#features">
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

      <section className="hero">

        <div className="hero-content">

          <h1>
            Personalized Nutrition
            <br />
            For a Healthier Life
          </h1>

          <p>
            Professional nutrition programs designed to help you
            reduce inflammation, increase energy and build
            sustainable healthy habits.
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


      {/* STATS */}

      <section className="stats">

        <div className="stat-card">
          <h2>9+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Clients Helped</p>
        </div>

        <div className="stat-card">
          <h2>1000+</h2>
          <p>Nutrition Plans</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>

      </section>


      {/* BENEFITS */}

      <section className="features" id="features">

        <h2>Why Choose Our Program</h2>

        <div className="features-grid">

          <div className="feature-card">

            <h3>Personalized Plans</h3>

            <p>
              Every client receives a nutrition plan designed
              specifically for their metabolism and lifestyle.
            </p>

          </div>


          <div className="feature-card">

            <h3>Expert Guidance</h3>

            <p>
              Work with experienced nutrition professionals
              supporting your progress every step of the way.
            </p>

          </div>


          <div className="feature-card">

            <h3>Sustainable Habits</h3>

            <p>
              Our focus is creating long-term habits that help
              maintain your results for life.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta">

        <h2>Start Your Health Transformation</h2>

        <p>
          Join hundreds of clients improving their health,
          energy and confidence through personalized nutrition.
        </p>

        <Link to="/contact">
          <button className="btn-primary">
            Get Started
          </button>
        </Link>

      </section>


      {/* PRODUCTS PREVIEW */}

      <section className="products-preview">

        <h2>Nutrition Products</h2>

        <p>
          Complement your nutrition program with products
          designed to support metabolism, recovery and energy.
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
              Professional nutrition programs designed to
              help people achieve sustainable health and
              long-term wellness.
            </p>

          </div>


          <div className="footer-links">

            <h4>Company</h4>

            <a href="#">Home</a>

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

export default App