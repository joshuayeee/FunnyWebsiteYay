import React from "react";

interface CartProps {
  cartItems: string[];
  removeFromCart: (index: number) => void;
  onCheckout: (address: string, creditCard: string) => void;
}

export default function Cart({
  cartItems,
  removeFromCart,
  onCheckout,
}: CartProps) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
      <button onClick={() => onCheckout("Some address", "4111-1111-1111-1111")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
