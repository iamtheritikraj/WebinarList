import React from "react";

const WebinarFilter = ({ filters, onFilterChange }) => {
  // Handler to update the filter state on checkbox change
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;

    onFilterChange(name, value, checked);
  };

  // Helper function to check if a value is selected
  const isChecked = (filterName, value) => {
    return filters[filterName]?.includes(value);
  };

  return (
    <div className="filter-container">
      <h2>Filters</h2>

      {/* Level Filters */}
      <div className="filter-group">
        <h4>Level</h4>
        <label>
          <input
            type="checkbox"
            name="level"
            value="Beginner"
            checked={isChecked("level", "Beginner")}
            onChange={handleCheckboxChange}
          />
          Beginner
        </label>
        <label>
          <input
            type="checkbox"
            name="level"
            value="Intermediate"
            checked={isChecked("level", "Intermediate")}
            onChange={handleCheckboxChange}
          />
          Intermediate
        </label>
        <label>
          <input
            type="checkbox"
            name="level"
            value="Advanced"
            checked={isChecked("level", "Advanced")}
            onChange={handleCheckboxChange}
          />
          Advanced
        </label>
      </div>

      {/* Category Filters */}
      <div className="filter-group">
        <h4>Category</h4>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Investing Strategies"
            checked={isChecked("category", "Investing Strategies")}
            onChange={handleCheckboxChange}
          />
          Investing Strategies
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Algo Trading"
            checked={isChecked("category", "Algo Trading")}
            onChange={handleCheckboxChange}
          />
          Algo Trading
        </label>
        <label>
          <input
            type="checkbox"
            name="category"
            value="Options Trading"
            checked={isChecked("category", "Options Trading")}
            onChange={handleCheckboxChange}
          />
          Options Trading
        </label>
      </div>

      {/* Language Filters */}
      <div className="filter-group">
        <h4>Language</h4>
        <label>
          <input
            type="checkbox"
            name="language"
            value="English"
            checked={isChecked("language", "English")}
            onChange={handleCheckboxChange}
          />
          English
        </label>
        <label>
          <input
            type="checkbox"
            name="language"
            value="Hindi"
            checked={isChecked("language", "Hindi")}
            onChange={handleCheckboxChange}
          />
          Hindi
        </label>
      </div>
    </div>
  );
};

export default WebinarFilter;
