import React from "react";
import { useNavigate } from "react-router-dom";
import TreeList from "./TreeList";
import Cart from "./Cart";
import Search from "./Search";

export default function HomePage({
  user,
  cartItems,
  addToCart,
  removeFromCart,
  searchTerm,
  onSearch,
}: {
  user: string;
  cartItems: string[];
  addToCart: (item: string, directPurchase?: boolean, navigate?: any) => void;
  removeFromCart: (index: number) => void;
  searchTerm: string;
  onSearch: (term: string) => void;
}) {
  const navigate = useNavigate();

  return (
    <div className="home-content">
      <div className="top-bar">
        <h2>Welcome, {user}!</h2>
        <button className="cart-button" onClick={() => navigate("/checkout")}>
          🛒
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </button>
      </div>

      <Search onSearch={onSearch} />
      <TreeList addToCart={(item, direct) => addToCart(item, direct, navigate)} searchTerm={searchTerm} />
    </div>
  );
}
