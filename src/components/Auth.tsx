import React, { useState } from "react";
import { registerUser, loginUser } from "../api/api";

interface AuthProps {
  onLogin: (user: any) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    try {
      const res = await registerUser({ username, password, email });
      alert("Registration successful");
      onLogin(res.data);
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(username);
      const user = res.data[0];
      if (user && user.password === password) {
        alert("Login successful");
        onLogin(user);
      } else {
        alert("Wrong username or password");
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div>
      <h2>Register / Login</h2>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
