import React, { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../api/api";

interface CartItem {
  id: string;
  treeName: string;
  price: number;
}

interface CartProps {
  user: any;
}

const Cart: React.FC<CartProps> = ({ user }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const fetchCart = async () => {
    const res = await getCart(user.id);
    setCartItems(res.data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = async (id: string) => {
    try {
      await removeFromCart(id);
      fetchCart();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.treeName} - ${item.price}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
