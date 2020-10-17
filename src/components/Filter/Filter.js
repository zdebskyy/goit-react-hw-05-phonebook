import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Filter.css";
const Filter = ({ value, onFilter }) => {
  return (
    <CSSTransition timeout={250} classNames="filterIn">
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
    </CSSTransition>
  );
};

export default Filter;
