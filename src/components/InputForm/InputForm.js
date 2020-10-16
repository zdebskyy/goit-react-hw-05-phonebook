import React from "react";
const InputForm = ({ label, placeholder, type, value, onInput }) => {
  return (
    <label>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onInput(e.target.value)}
      ></input>
    </label>
  );
};

export default InputForm;
