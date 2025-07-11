import React from "react";

function Cart({ cart, addToCart, decreaseQuantity }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className="col-md-4 p-3 pt-0 bg-light rounded shadow-sm"
      style={{ position: "sticky", top: "0px", height: "fit-content" }}
    >
      <h4 className="mb-3">🛒 Shopping Cart</h4>
      <ul className="list-group">
        {cart.length === 0 && (
          <li className="list-group-item">Cart is empty</li>
        )}
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center">
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <div>
                <h6 className="mb-0">{item.name}</h6>
                <small>₹ {item.price}</small>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-sm btn-secondary me-2"
                onClick={() => decreaseQuantity(item)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="btn btn-sm btn-secondary ms-2"
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <div className="mt-4 text-end">
          <h5>Total: ₹{total}</h5>
          <button className="btn btn-success mt-2">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;