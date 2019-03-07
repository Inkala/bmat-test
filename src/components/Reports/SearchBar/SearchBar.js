import React from "react";

import "./SearchBar.css";

const searchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search Programs"
      />
    </div>
  );
};

export default searchBar;
