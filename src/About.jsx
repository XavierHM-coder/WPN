import "./About.css"
import { Link } from "react-router-dom"

function About() {

  return (

    <div className="about-page">

      {/* ── NAV ── */}

      <nav className="products-nav">

        <div className="nav-logo">
          Weightloss<span>Nutrition</span>
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


      {/* ── HERO ── */}

      <div className="about-hero">

        <h1>About <em>Our</em> Program</h1>

  <p>
For over nine years, we’ve helped individuals reduce inflammation, regain energy, 
and build sustainable habits through personalized nutrition guidance.
</p>

<p>
Our approach focuses on steady progress, strong support, and long-term health—helping 
every client create a healthier future.
</p>

        <div className="hero-divider">

          <div className="hero-divider-line"></div>

          <span>🌿</span>

          <div className="hero-divider-line r"></div>

        </div>

      </div>


      {/* ── STATS ── */}

      <section className="about-stats">

        <div className="stat-card">
          <h2>9+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Satisfied Customers</p>
        </div>

        <div className="stat-card">
          <h2>1000+</h2>
          <p>Nutrition Plans</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Client Satisfaction</p>
        </div>

      </section>


      {/* ── CONTENT ── */}

      <section className="about-section">

        <div className="about-grid">

          <div className="about-card">

            <h3>Personalized Nutrition</h3>

            <p>
              Every metabolism is unique. Our nutrition
              programs are customized to fit your body,
              lifestyle and personal goals.
            </p>

          </div>


          <div className="about-card">

            <h3>Expert Guidance</h3>

            <p>
              Our system combines professional nutrition
              strategies with practical habits to help
              you transform your health.
            </p>

          </div>


          <div className="about-card">

            <h3>Sustainable Results</h3>

            <p>
              We focus on long-term results by building
              healthy habits instead of temporary diets.
            </p>

          </div>

        </div>

      </section>


      {/* ── MISSION ── */}

      <section className="about-mission">

        <h2>Our Mission</h2>

        <p>
          To empower people with the knowledge and tools
          they need to achieve sustainable wellness and
          long-term health transformation.
        </p>

      </section>

    </div>

  )

}

export default About