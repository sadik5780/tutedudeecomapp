

// components/ShoeCard.js
import React from "react";

function ShoeCard({ shoe, addToCart }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={shoe.image}
        alt={shoe.name}
        className="card-img-top"
        style={{ objectFit: "cover", height: "300px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{shoe.name}</h5>
        <p className="card-text text-muted">₹ {shoe.price}</p>
        <button className="btn btn-primary mt-auto" onClick={() => addToCart(shoe)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ShoeCard;
