import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ShoeList from "./components/ShoeList";
import shoes from "./data/shoesData";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    const exists = cart.find((item) => item.id === shoe.id);
    if (exists) {
      const updated = cart.map((item) =>
        item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (shoe) => {
    const exists = cart.find((item) => item.id === shoe.id);
    if (!exists) return;

    if (exists.quantity === 1) {
      setCart(cart.filter((item) => item.id !== shoe.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="mt-2 mainContainer">
        <div className="row p-3 " style={{ paddingRight: "0px" }}>
          <ShoeList shoes={shoes} addToCart={addToCart} />
          <Cart cart={cart} addToCart={addToCart} decreaseQuantity={decreaseQuantity} />
        </div>
      </div>
    </div>
  );
}

export default App;