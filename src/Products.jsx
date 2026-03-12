import { useState, useCallback } from "react"
import { Link } from "react-router-dom"
import "./products.css"

import golden_pan       from "./assets/golden_pan.jpeg"
import chocolate_chip   from "./assets/chocolate_chip.jpeg"
import oatmeal_mapple   from "./assets/oatmeal_mapple.jpeg"
import hot_chocolate    from "./assets/hot_chocolate.jpeg"
import chocolate_peanut from "./assets/chocolate_peanut.jpeg"
import vanilla_drink    from "./assets/vanilla_drink.jpeg"
import cream_chicken    from "./assets/cream_chicken.jpeg"

/* ── Catalog data ── */
const PRODUCTS = [
  {
    id: 1,
    img: golden_pan,
    name: "Golden Pancake",
    category: "Breakfast",
    badge: "Best Seller",
    tag: "🌾 High Fiber",
    description:
      "Our Golden Pancakes offer a delicious and healthy way to start your day. Perfect for maintaining your energy and supporting your wellness goals.",
  },
  {
    id: 2,
    img: chocolate_chip,
    name: "Chocolate Chip Pancake",
    category: "Breakfast",
    tag: "🍫 Antioxidants",
    description:
      "Our Golden Pancakes offer a delicious and healthy way to start your day. Perfect for maintaining your energy and supporting your wellness goals.",
  },
  {
    id: 3,
    img: oatmeal_mapple,
    name: "Maple Brown Sugar Oatmeal",
    category: "Breakfast",
    badge: "Nuevo",
    tag: "🌿 Whole grain",
    description:
      "Enjoy the comfort of a breakfast classic with the warm flavor of maple and brown sugar. Sustained energy all morning long.",
  },
  {
    id: 4,
    img: hot_chocolate,
    name: "Hot Chocolate",
    category: "Drinks",
    tag: "☕ Revitalizing",
    description:
      "A healthy and delicious hot beverage that satisfies your sweet cravings while supporting your nutritional needs. Perfect for any time of day.",
  },
  {
    id: 5,
    img: chocolate_peanut,
    name: "Choco Peanut Butter Shake",
    category: "Shakes",
    badge: "Favorito",
    tag: "💪 High protein",
    description:
      "Enjoy the rich flavor of Chocolate with Peanut Butter as a shake or pudding—a powerful protein boost in every serving.",
  },
  {
    id: 6,
    img: vanilla_drink,
    name: "Vanilla Drink Mix",
    category: "Drinks",
    tag: "🍦 Smooth and creamy",
    description:
      "A smooth and creamy vanilla blend that gives you a delicious nutritional boost. Light on calories, big on flavor.",
  },
  {
    id: 7,
    img: cream_chicken,
    name: "Cream of Chicken Soup",
    category: "Meals",
    tag: "🥣 Tasty",
    description:
      "A comforting creamy chicken soup that supports your wellness goals with high-quality protein and satisfying flavor.",
  },
   {
    id: 8,
    img: cream_chicken,
    name: "Cream of Chicken Soup",
    category: "Meals",
    tag: "🥣 Tasty",
    description:
      "A comforting creamy chicken soup that supports your wellness goals with high-quality protein and satisfying flavor.",
  },
  {
    id: 9,
    img: cream_chicken,
    name: "Cream of Chicken Soup",
    category: "Meals",
    tag: "🥣 Tasty",
    description:
      "A comforting creamy chicken soup that supports your wellness goals with high-quality protein and satisfying flavor.",
  },
]

const ORDER_EMAIL = "alisoncedillo7615@gmail.com"

/* ── Cart item row ── */
function CartItem({ item, onQty, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.name} className="ci-img" />
      <div className="ci-info">
        <h4>{item.name}</h4>
        <span className="ci-cat">{item.category}</span>
        <div className="ci-qty">
          <button className="qty-btn" onClick={() => onQty(item.id, -1)}>−</button>
          <span className="qty-num">{item.qty}</span>
          <button className="qty-btn" onClick={() => onQty(item.id, +1)}>+</button>
        </div>
      </div>
      <button className="ci-remove" title="Eliminar" onClick={() => onRemove(item.id)}>✕</button>
    </div>
  )
}

/* ── Main component ── */
export default function Products() {
  const [cart, setCart]         = useState([])   // { id, name, category, img, qty }
  const [drawerOpen, setDrawer] = useState(false)
  const [added, setAdded]       = useState({})   // { [id]: true } for button flash

  const totalItems = cart.reduce((s, i) => s + i.qty, 0)

  /* Add to cart */
  const addToCart = useCallback((product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id)
      return exists
        ? prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { id: product.id, name: product.name, category: product.category, img: product.img, qty: 1 }]
    })
    setAdded(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1000)
  }, [])

  /* Change quantity */
  const changeQty = useCallback((id, delta) => {
    setCart(prev =>
      prev
        .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter(i => i.qty > 0)
    )
  }, [])

  /* Remove item */
  const removeItem = useCallback((id) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }, [])

  /* Send order via mailto */
  const sendOrder = () => {
    if (cart.length === 0) return

    const productLines = cart
      .map(i => `  • ${i.name} (${i.category}) — Cantidad: ${i.qty}`)
      .join("\n")

    const body = encodeURIComponent(
      `Hola, estoy interesado/a en los siguientes productos para mayor información:\n\n${productLines}\n\nQuedo en espera de su respuesta.\n\nGracias.`
    )
    const subject = encodeURIComponent("Consulta de productos — WeightlossNutrition")

    window.location.href = `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg, #f3fbf7)", fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── NAV ── */}
      <nav className="products-nav">
        <div className="nav-logo">Weightloss<span>Nutrition</span></div>
        <div className="nav-right">
          <Link to="/" className="back-btn">← Regresar</Link>

          <button className="cart-toggle-btn" onClick={() => setDrawer(true)}>
            🛒 Carrito
            {totalItems > 0 && (
              <span className="cart-badge pop" key={totalItems}>{totalItems}</span>
            )}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="products-hero">
        <h1>Our <em>Helty</em> Products</h1>
        <p>Nutritious meals and shakes designed to support your journey to wellness—without sacrificing taste.</p>
        <div className="hero-divider">
          <div className="hero-divider-line" />
          <span>🌿</span>
          <div className="hero-divider-line r" />
        </div>
      </div>

      {/* ── CATALOG ── */}
      <section className="products-section">
        <div className="product-grid">
          {PRODUCTS.map(p => (
            <div className="product-card" key={p.id}>

              {/* Image */}
              <div className="product-img-wrap">
                {p.badge && <span className="product-badge">{p.badge}</span>}
                <img src={p.img} alt={p.name} className="product-img" />
              </div>

              {/* Body */}
              <div className="product-body">
                <span className="product-cat">{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>

                <div className="product-footer">
                  <span className="product-tag">{p.tag}</span>
                  <button
                    className={`add-cart-btn${added[p.id] ? " added" : ""}`}
                    onClick={() => addToCart(p)}
                  >
                    {added[p.id] ? "✓ Agregado" : "+ Agregar"}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── OVERLAY ── */}
      <div
        className={`cart-overlay${drawerOpen ? " open" : ""}`}
        onClick={() => setDrawer(false)}
      />

      {/* ── CART DRAWER ── */}
      <aside className={`cart-drawer${drawerOpen ? " open" : ""}`}>

        <div className="cart-head">
          <h2>🛒 Tu Carrito</h2>
          <button className="cart-close-btn" onClick={() => setDrawer(false)}>✕</button>
        </div>

        <div className="cart-items-list">
          {cart.length === 0 ? (
            <div className="cart-empty-msg">
              <span>🌿</span>
              Tu carrito está vacío.<br />
              Agrega productos del catálogo.
            </div>
          ) : (
            cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onQty={changeQty}
                onRemove={removeItem}
              />
            ))
          )}
        </div>

        <div className="cart-foot">
          {cart.length > 0 && (
            <div className="cart-summary-text">
              <strong>Resumen del pedido:</strong>
              {cart.map(i => (
                <span key={i.id} style={{ display: "block" }}>
                  • {i.name} × {i.qty}
                </span>
              ))}
            </div>
          )}

          <button
            className="send-order-btn"
            onClick={sendOrder}
            disabled={cart.length === 0}
          >
            ✉️ Solicitar información por correo
          </button>
        </div>

      </aside>

    </div>
  )
}