import React, { useState, useEffect } from "react";

interface LoginProps {
  onLogin: (username: string) => void;
  onSwitchToCreate: () => void;
}

export default function Login({ onLogin, onSwitchToCreate }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedAccounts = localStorage.getItem("accounts");
    if (!storedAccounts) {
      const fakeAccounts = [
        { username: "alice", password: "alice123" },
        { username: "bob", password: "bob123" },
        { username: "charlie", password: "charlie123" },
        { username: "david", password: "david123" },
      ];
      localStorage.setItem("accounts", JSON.stringify(fakeAccounts));
    }
  }, []);

  const handleSubmit = () => {
    if (username.trim()) {
      onLogin(username);
    } else {
      alert("Please enter a username.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
      <button onClick={onSwitchToCreate}>Create Account</button>
    </div>
  );
}
