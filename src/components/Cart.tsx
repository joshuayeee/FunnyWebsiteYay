import React from "react";
export default function Cart({
  cartItems,
  removeFromCart,
}: {
  cartItems: string[];
  removeFromCart: (index: number) => void;
}) {
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
    </div>
  );
}
