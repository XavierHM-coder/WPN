import { Link } from "react-router-dom"
import alfredo_chicken_pasta from "./assets/alfredo_chicken_pasta.png"
import golden_pan from "./assets/golden_pan.jpeg"
import chocolate_chip from "./assets/chocolate_chip.jpeg"
import oatmeal_mapple from "./assets/oatmeal_mapple.jpeg"
import hot_chocolate from "./assets/hot_chocolate.jpeg"
import chocolate_peanut from "./assets/chocolate_peanut.jpeg"
import vanilla_drink from "./assets/vanilla_drink.jpeg"
import cream_chicken from "./assets/cream_chicken.jpeg"

function Products() {

  return (

    <div className="products-page">

      <nav className="nav">

        <div className="nav-logo">
          Weightloss<span>Nutrition</span>
        </div>

        <Link to="/" className="back-btn">
  ← Back
</Link>

      </nav>


      <section className="products">

        <h1>Our Products</h1>

        <div className="product-grid">

          <div className="product-card">

           <img src={golden_pan} className="product-img"/>

            <h3>Golden Pancake</h3>

            <p>
              Our Golden Pancakes offer a delicious, guilt-free way to start your day. 
            </p>

          </div>


          <div className="product-card">

            

            <img src={chocolate_chip} className="product-img"/>

            <h3>Chocolate Chip Pancake</h3>

            <p>
              Whether you’re managing your weight or simply looking for a healthier
              breakfast option
            </p>

          </div>


          <div className="product-card">

            <img src={oatmeal_mapple} className="product-img"/>

            <h3>Maple Brown Sugar Oatmeal</h3>

            <p>
              Enjoy the comfort of a breakfast classic with the sweet
              flavor of Maple and Brown Sugar.
            </p>

          </div>


          <div className="product-card">

            <img src={hot_chocolate} className="product-img"/>

            <h3>Hot Chocolate</h3>

            <p>
              Enjoy the comfort of a breakfast classic with the sweet
              flavor of Maple and Brown Sugar.
            </p>

          </div>

          <div className="product-card">

            <img src={chocolate_peanut} className="product-img"/>

            <h3>Chocolate Peanut Butter Shake/ Pudding</h3>

            <p>
              Enjoy the rich flavor of a Chocolate Peanut Butter Shake anytime, anywhere. 
            </p>

          </div>

          <div className="product-card">

            <img src={vanilla_drink} className="product-img"/>

            <h3>Vanilla Drink Mix</h3>

            <p>
Enjoy a delicious, nutritional boost with our smooth Vanilla Drink.            </p>

          </div>

          <div className="product-card">

            <img src={cream_chicken} className="product-img"/>

            <h3>Cream Chicken </h3> 

            <p>
              Enjoy the rich flavor of a Chocolate Peanut Butter Shake anytime, anywhere. 
            </p>

          </div>


        </div>

      </section>

    </div>
  )
}

export default Products