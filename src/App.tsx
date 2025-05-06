import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import HomePage from "./components/HomePage";
import Checkout from "./components/Checkout";
import "./style.css";

interface Account {
  username: string;
  password: string;
  email: string;
}

export default function App() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleCreateAccount = (
    username: string,
    password: string,
    email: string
  ) => {
    if (accounts.find((acc) => acc.username === username)) {
      alert("Username already exists.");
      return;
    }
    setAccounts([...accounts, { username, password, email }]);
    alert("Account created!");
    setShowCreateAccount(false);
  };

  const handleLogin = (username: string) => setLoggedInUser(username);

  const addToCart = (item: string, directPurchase = false, navigate?: any) => {
    if (directPurchase && navigate) {
      setCartItems([item]);
      navigate("/checkout");
    } else {
      setCartItems((prev) => [...prev, item]);
    }
  };

  const removeFromCart = (index: number) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Tree Cheers 🌳</h1>
        </header>
        <Routes>
          {!loggedInUser ? (
            <>
              <Route
                path="*"
                element={
                  !showCreateAccount ? (
                    <Login
                      onLogin={handleLogin}
                      onSwitchToCreate={() => setShowCreateAccount(true)}
                    />
                  ) : (
                    <CreateAccount
                      onCreate={handleCreateAccount}
                      onCancel={() => setShowCreateAccount(false)}
                    />
                  )
                }
              />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route
                path="/home"
                element={
                  <HomePage
                    user={loggedInUser}
                    cartItems={cartItems}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    searchTerm={searchTerm}
                    onSearch={setSearchTerm}
                  />
                }
              />
              <Route
                path="/checkout"
                element={
                  <Checkout cartItems={cartItems} clearCart={clearCart} />
                }
              />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}
