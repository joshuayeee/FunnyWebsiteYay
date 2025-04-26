import React, { useEffect, useState } from "react";
import { getTrees, addToCart } from "../api/api";

interface Tree {
  id: string;
  name: string;
  price: number;
}

interface TreeListProps {
  user: any;
}

const TreeList: React.FC<TreeListProps> = ({ user }) => {
  const [trees, setTrees] = useState<Tree[]>([]);

  useEffect(() => {
    const fetchTrees = async () => {
      const res = await getTrees();
      setTrees(res.data);
    };
    fetchTrees();
  }, []);

  const handleAddToCart = async (tree: Tree) => {
    try {
      await addToCart({
        userId: user.id,
        treeId: tree.id,
        treeName: tree.name,
        price: tree.price,
      });
      alert("Added to cart");
    } catch (err) {
      console.error("Add failed", err);
    }
  };

  return (
    <div>
      <h2>tree list</h2>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>
            {tree.name} - ${tree.price}
            <button onClick={() => handleAddToCart(tree)}>添加到购物车</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TreeList;
