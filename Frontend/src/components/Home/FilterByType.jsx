import React from "react";

function FilterByType({
  filterType,
  handleFilterByType,
  handleFilterTypeChange,
}) {
  return (
    <div className="filter-section">
      <label>Filter by Type: </label>
      <select
        className="filter-select"
        value={filterType}
        onChange={handleFilterTypeChange}
      >
        <option value="title">Title</option>
        <option value="genre">Genre</option>
        <option value="price">Price</option>
      </select>
      <button className="filter-button" onClick={handleFilterByType}>
        Filter By Type
      </button>
    </div>
  );
}

export default FilterByType;
