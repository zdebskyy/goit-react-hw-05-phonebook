import React from "react";

import "./Filter.css";
const Filter = ({ value, onFilter }) => {
  return (
    <div className="filterContainer">
      <p className="filterTitle">Find contact by name</p>
      <label>
        <input
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
          className="filterInput"
        />
      </label>
    </div>
  );
};

export default Filter;
