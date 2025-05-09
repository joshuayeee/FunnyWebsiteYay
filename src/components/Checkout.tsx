import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CheckoutProps {
  cartItems: string[];
  clearCart: () => void;
}

export default function Checkout({ cartItems, clearCart }: CheckoutProps) {
  const [address, setAddress] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!address.trim() || !creditCard.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    alert("Checkout completed!\n\nShipping To: " + address);
    clearCart();
    navigate("/"); // Go back to homepage
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

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

          <button onClick={handleSubmit}>Complete Purchase</button>
        </>
      )}
    </div>
  );
}
