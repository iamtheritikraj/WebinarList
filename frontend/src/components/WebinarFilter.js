import React from 'react';

const WebinarFilter = ({ filters, onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value); 
  };

  return (
    <div className="filter-container">
      <h2>Filters</h2>
      
      <select name="level" value={filters.level} onChange={handleFilterChange}>
        <option value="">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <select name="category" value={filters.category} onChange={handleFilterChange}>
        <option value="">All Categories</option>
        
      </select>

      <select name="language" value={filters.language} onChange={handleFilterChange}>
        <option value="">All Languages</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
    </div>
  );
};

export default WebinarFilter;
