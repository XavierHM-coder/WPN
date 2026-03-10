import { Link } from "react-router-dom"
import "./App.css"

function Contact() {

  return (

    <div className="contact-page">

      <div className="contact-container">

        <h1>Contact Us</h1>

        <p className="contact-subtitle">
          If you are interested in our nutrition programs
          or supplements, contact us and we will guide you.
        </p>

        <div className="contact-grid">


          {/* EMAIL */}

          <div className="contact-card">

            <h3>Email</h3>

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

            <a 
              href="https://wa.me/19039190203"
              target="_blank"
              className="contact-link"
            >
              Chat with us on WhatsApp
              or call us at (903) 919-0203
            </a>

          </div>


          {/* HORARIO */}

          <div className="contact-card">

            <h3>Business Hours</h3>

            <p>
              Monday – Friday <br/>
              9:00 AM – 6:00 PM
            </p>

          </div>

        </div>


        <Link to="/">
          <button className="btn-secondary back-btn">
            ← Back to Home
          </button>
        </Link>

      </div>

    </div>

  )
}

export default Contact