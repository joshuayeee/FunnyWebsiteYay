import React, { useState } from "react";
import CreateAccount from "/project/workspace/src/components/CreateAccount.tsx";
import Login from "/project/workspace/src/components/Login.tsx";
import TreeList from "/project/workspace/src/components/TreeList.tsx";
import Cart from "/project/workspace/src/components/Cart.tsx";
import Checkout from "/project/workspace/src/components/Checkout.tsx";
import Search from "/project/workspace/src/components/Search.tsx";

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
