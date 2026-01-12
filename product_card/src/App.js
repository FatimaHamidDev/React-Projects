import React, { useState } from "react";
import "./App.css";

function App() {
  const [qty, setQty] = useState(1);

  function Inc() {
    setQty(qty + 1);
  }

  function Dec() {
    if (qty > 1) setQty(qty - 1);
  }

  return (
    <div className="container">

      <div className="product-card">
        <div className="image-box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClHWvS6VbZko4W34Qh95H8X-5pPQB9dLIKw&s" 
            alt="Product"
          />
        </div>

        <h2 className="product-name">React Product Card</h2>
        <p className="product-price">$59.99</p>

        <div className="quantity-control">
          <button className="btn-round" onClick={Dec}>−</button>
          <span className="quantity">{qty}</span>
          <button className="btn-round" onClick={Inc}>+</button>
        </div>

        <button className="btn add-to-cart">
          Add {qty} to Cart
        </button>
      </div>
    </div>
  );
}

export default App;
