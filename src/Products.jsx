import { Link } from "react-router-dom"
import alfredo_chicken_pasta from "./assets/alfredo_chicken_pasta.png"

function Products() {

  return (

    <div className="products-page">

      <nav className="nav">

        <div className="nav-logo">
          Nutri<span>Form</span>
        </div>

        <Link to="/" className="back-btn">
  ← Back
</Link>

      </nav>


      <section className="products">

        <h1>Our Products</h1>

        <div className="product-grid">

          <div className="product-card">

           <img src={alfredo_chicken_pasta} className="product-img"/>

            <h3>Whey Protein</h3>

            <p>
              High quality protein for muscle recovery
              and lean growth.
            </p>

          </div>


          <div className="product-card">

            <div className="product-img"></div>

            <h3>Fat Burner</h3>

            <p>
              Advanced formula designed to support
              fat metabolism.
            </p>

          </div>


          <div className="product-card">

            <div className="product-img"></div>

            <h3>Vitamin Complex</h3>

            <p>
              Essential vitamins for daily wellness
              and energy.
            </p>

          </div>


          <div className="product-card">

            <div className="product-img"></div>

            <h3>Collagen</h3>

            <p>
              Supports skin health and joint recovery.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Products