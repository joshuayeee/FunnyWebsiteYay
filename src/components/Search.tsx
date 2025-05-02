import React from "react";
import { useState } from "react";

const trees = ["Oak Tree", "Pine Tree", "Maple Tree", "Cherry Blossom"];

export default function Search() {
  const [query, setQuery] = useState("");

  const filteredTrees = trees.filter((tree) =>
    tree.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search for Trees</h2>
      <input
        type="text"
        placeholder="Enter tree name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredTrees.map((tree, index) => (
        <p key={index}>{tree}</p>
      ))}
    </div>
  );
}
