import React, { useState, useEffect } from "react";

export default function Login() {
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

  const handleLogin = () => {
    const storedAccounts = localStorage.getItem("accounts");
    if (storedAccounts) {
      const accounts = JSON.parse(storedAccounts) as { username: string; password: string }[];
      const matchedAccount = accounts.find(
        (account) => account.username === username && account.password === password
      );
      if (matchedAccount) {
        alert(`Welcome, ${matchedAccount.username}! Login successful.`);
      } else {
        alert("Invalid username or password!");
      }
    } else {
      alert("No accounts found. Please refresh the page.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
