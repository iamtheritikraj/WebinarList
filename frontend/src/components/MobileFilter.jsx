import React, { useState } from "react";

const MobileFilter = ({ filters, onFilterChange }) => {
  const [expandedGroup, setExpandedGroup] = useState(null);

  const onToggle = (groupName) => {
    setExpandedGroup((prev) => (prev === groupName ? null : groupName));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    onFilterChange(name, value, checked);
  };

  const clearAll = () => {
    onFilterChange(null, null, false);
  };

  const isChecked = (filterName, value) => {
    return filters[filterName]?.includes(value);
  };

  return (
    <>
      <div className="filter-header">
        <h2>Filters</h2>
        <span className="clear-button" onClick={clearAll}>
          Clear All
        </span>
      </div>
      <div className="filter-group">
        <div className="filter-group-header" onClick={() => onToggle("level")}>
          <h4>Level</h4>
        </div>
        {expandedGroup === "level" && (
          <div className="filter-group-items">
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
        )}
      </div>
      <div className="filter-group">
      <div className="filter-group-header" onClick={() => onToggle("category")}>
          <h4>Category</h4>
        </div>
        {expandedGroup === "category" && (
          <div className="filter-group-items">
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
        )}
      </div>

      <div className="filter-group">
        <div className="filter-group-header" onClick={() => onToggle("language")}>
          <h4>Language</h4>
        </div>
        {expandedGroup === "language" && (
          <div className="filter-group-items">
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
        )}
      </div>
    </>
  );
};

export default MobileFilter;
