import React from "react";
import ShoeCard from "./ShoeCard";

function ShoeList({ shoes, addToCart }) {
  return (
    <div className="col-md-8 pt-0">
      <div className="row g-4">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="col-sm-6 col-md-4 col-lg-4">
            <ShoeCard shoe={shoe} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoeList;