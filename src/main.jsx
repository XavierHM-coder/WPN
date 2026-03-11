import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Products from './Products.jsx'
import './index.css'
import About from "./About"
import Contact from "./Contact"

import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>

      <Route path="/" element={<App />} />

      <Route path="/products" element={<Products />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

    </Routes>

  </BrowserRouter>
)