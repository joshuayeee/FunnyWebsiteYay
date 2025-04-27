import React from "react";
import { useState } from "react";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateAccount = () => {
    const accountData = { username, password, email };
    localStorage.setItem('account', JSON.stringify(accountData));
    alert("Account created successfully (saved locally)!");
  };


  return (
    <div>
      <h2>Create Account</h2>
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
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
}
