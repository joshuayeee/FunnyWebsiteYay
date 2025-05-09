import React, { useState } from "react";

interface CreateAccountProps {
  onCreate: (username: string, password: string, email: string) => void;
  onCancel: () => void;
}

export default function CreateAccount({ onCreate }: CreateAccountProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    onCreate(username, password, email);
  };

  return (
    <div className="create-account">
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
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}
