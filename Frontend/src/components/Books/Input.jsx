import React from "react";
import "./Input.css"; // Import the CSS file for styling

const Input = ({ value = "", label, name, handleBooks }) => {
  return (
    <div className="input-container">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={(e) => handleBooks(e)}
        className="input-field"
      />
    </div>
  );
};

export default Input;
