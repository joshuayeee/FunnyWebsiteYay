import React from "react";
import { useState } from "react";

export default function Checkout({ cartItems, clearCart }: { cartItems: string[]; clearCart: () => void }) {
  const [address, setAddress] = useState("");
  const [creditCard, setCreditCard] = useState("");

  const handleCheckout = () => {
    console.log("Order Placed:", { cartItems, address, creditCard });
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <input
        type="text"
        placeholder="Shipping Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Credit Card Info"
        value={creditCard}
        onChange={(e) => setCreditCard(e.target.value)}
      />
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}
