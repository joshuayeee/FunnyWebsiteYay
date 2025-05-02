import React, { useState } from "react";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import TreeList from "./components/TreeList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Search from "./components/Search";

export default function App() {
  const [cart, setCart] = useState<string[]>([]);
  const [checkoutMode, setCheckoutMode] = useState(false);

  const addToCart = (tree: string, directPurchase = false) => {
    setCart((prev) => [...prev, tree]);
    if (directPurchase) {
      setCheckoutMode(true);
    }
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
    setCheckoutMode(false);
  };

  return (
    <div className="App">
      <h1>Tree Cheers 🌳</h1>
      <CreateAccount />
      <Login />
      <Search />
      <TreeList addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
      {checkoutMode && <Checkout cartItems={cart} clearCart={clearCart} />}
    </div>
  );
}
