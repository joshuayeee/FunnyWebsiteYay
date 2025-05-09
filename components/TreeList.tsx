import React, { useState } from "react";

const trees = [
  {
    name: "Oak Tree",
    image: "https://www.aacounty.org/sites/default/files/styles/large/public/2023-05/oak-decline.jpg?itok=ZiCgnvrk",
    description: "A strong and sturdy tree, perfect for shade.",
    price: 120,
  },
  {
    name: "Pine Tree",
    image: "https://cdn.shopify.com/s/files/1/0059/8835/2052/files/Norfolk_Island_Pine_1.jpg?v=1744831806",
    description: "An evergreen tree that stays green year-round.",
    price: 90,
  },
  {
    name: "Maple Tree",
    image: "https://floridafarmfamily.com/wp-content/uploads/2023/08/iStock-180454493.jpg",
    description: "Known for its beautiful autumn leaves.",
    price: 110,
  },
  {
    name: "Cherry Blossom",
    image: "https://www.thetreecenter.com/c/uploads/2014/07/pink-weeping-cherry-1-340x453.webp",
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
  const filteredTrees = trees.filter((tree) =>
    tree.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (treeName: string, e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Only set the fallback image if it hasn't been set already
    if (!imageError[treeName]) {
      console.error(`Error loading image: ${trees.find(t => t.name === treeName)?.image}`);
      setImageError((prevState) => ({
        ...prevState,
        [treeName]: true,
      }));
      // Set fallback image
      (e.target as HTMLImageElement).src = "/images/default-image.jpg";
    }
  };

  return (
    <div>
      <h2>Available Trees</h2>
      {filteredTrees.map((tree, index) => (
        <div className="tree-card" key={index}>
          <h3>{tree.name}</h3>
          <img
            src={imageError[tree.name] ? "/images/default-image.jpg" : tree.image}
            alt={tree.name}
            className="tree-image"
            onError={(e) => handleImageError(tree.name, e)}
          />
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
