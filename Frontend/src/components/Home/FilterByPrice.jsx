import React from "react";

function FilterByPrice({ priceRange, handleChange, handlePriceRange }) {
  return (
    <>
      <div className="filter-section">
        <label>Min Price:</label>
        <input
          type="number"
          className="filter-input"
          name="min"
          value={priceRange.min}
          onChange={handleChange}
        />
        <label>Max Price:</label>
        <input
          type="number"
          className="filter-input"
          name="max"
          value={priceRange.max}
          onChange={handleChange}
        />
        <button className="filter-button" onClick={handlePriceRange}>
          Filter by Price Range
        </button>
      </div>
      <br />
    </>
  );
}

export default FilterByPrice;
