import "./About.css"
import "./App.css"
import logo from "./assets/logo.png"

function About() {

  return (
      

    <div className="about">

      {/* HERO */}

      <section className="about-hero">

        <div className="about-hero-content">

          <h1>About Us</h1>

          <p>
            Helping people transform their health through
            personalized nutrition and sustainable habits.
          </p>

        </div>

      </section>


      {/* STORY */}

      <section className="about-story">

        <div className="about-container">

          <div className="about-text">

            <h2>Our Approach to Health</h2>

            <p>
              At Weightloss Professional Nutrition, we help
              people improve their health through personalized
              guidance and proven systems.
            </p>

            <p>
              For over nine years, we’ve supported individuals
              in reducing inflammation, regaining energy,
              and building sustainable habits that last.
            </p>

            <p>
              Our approach focuses on steady progress,
              strong support, and long-term health —
              helping every client create a healthier future.
            </p>

          </div>

          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1666886573212-2de95596d509?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>

        </div>

      </section>


      {/* VALUES */}

      <section className="about-values">

        <h2>Why Choose Us</h2>

        <div className="values-grid">

          <div className="value-card">
            <h3>Personalized Plans</h3>
            <p>
              Every nutrition plan is customized
              to your metabolism and lifestyle.
            </p>
          </div>

          <div className="value-card">
            <h3>Proven Systems</h3>
            <p>
              Our methods are designed to help
              reduce inflammation and improve energy.
            </p>
          </div>

          <div className="value-card">
            <h3>Long-Term Results</h3>
            <p>
              We focus on building sustainable
              habits that last for life.
            </p>
          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="about-stats">

        <div className="stats-container">

          <div className="stat">
            <h3>9+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat">
            <h3>100+</h3>
            <p>Clients Supported</p>
          </div>

          <div className="stat">
            <h3>100%</h3>
            <p>Personalized Plans</p>
          </div>

        </div>

      </section>

    </div>

  )
}

export default About