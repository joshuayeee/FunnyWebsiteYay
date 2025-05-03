import React from "react";

const trees = [
  {
    name: "Oak Tree",
    image: "https://example.com/oak.jpg",
    description: "A strong and sturdy tree, perfect for shade.",
    price: 120,
  },
  {
    name: "Pine Tree",
    image: "https://example.com/pine.jpg",
    description: "An evergreen tree that stays green year-round.",
    price: 90,
  },
  {
    name: "Maple Tree",
    image: "https://example.com/maple.jpg",
    description: "Known for its beautiful autumn leaves.",
    price: 110,
  },
  {
    name: "Cherry Blossom",
    image: "https://example.com/cherry.jpg",
    description: "Beautiful pink flowers in springtime.",
    price: 150,
  },
];

export default function TreeList({
  addToCart,
  searchTerm,
}: {
  addToCart: (tree: string, directPurchase?: boolean) => void;
  searchTerm: string;
}) {
  const filteredTrees = trees.filter(tree =>
    tree.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h2>Available Trees</h2>
      {filteredTrees.map((tree, index) => (
        <div className="tree-card" key={index}>
          <h3>{tree.name}</h3>
          <p>{tree.description}</p>
          <p><strong>Price:</strong> ${tree.price}</p>
          <div className="tree-buttons">
            <button onClick={() => addToCart(tree.name)}>Add to Cart</button>
            <button onClick={() => addToCart(tree.name, true)}>Direct Purchase</button>
          </div>
        </div>
      ))}
    </div>
  );
}