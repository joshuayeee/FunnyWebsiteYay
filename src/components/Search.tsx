import React, { useState } from "react";

interface Props {
  onSearch: (term: string) => void;
}

export default function Search({ onSearch }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for Trees"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}
