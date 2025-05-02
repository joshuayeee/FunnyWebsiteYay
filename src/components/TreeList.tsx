import React from "react";
import { useState } from "react";

const trees = ["Oak Tree", "Pine Tree", "Maple Tree", "Cherry Blossom"];

export default function TreeList({
  addToCart,
}: {
  addToCart: (tree: string, directPurchase?: boolean) => void;
}) {
  return (
    <div>
      <h2>Available Trees</h2>
      {trees.map((tree, index) => (
        <div key={index}>
          <p>{tree}</p>
          <button onClick={() => addToCart(tree)}>Add to Cart</button>
          <button onClick={() => addToCart(tree, true)}>Direct Purchase</button>
        </div>
      ))}
    </div>
  );
}
