import React, { useState, useEffect } from "react";
import axios from "../axiosConfig";
import WebinarFilter from "./WebinarFilter";

const WebinarList = () => {
  const [allWebinars, setAllWebinars] = useState([]);
  const [filteredWebinars, setFilteredWebinars] = useState([]);
  const [filters, setFilters] = useState({
    level: [],
    category: [],
    language: [],
  });

  // Fetch all webinars initially
  const fetchWebinars = async () => {
    try {
      const response = await axios.get("/webinars");
      setAllWebinars(response.data);
      setFilteredWebinars(response.data);
    } catch (error) {
      console.error("Error fetching webinars:", error);
    }
  };

  useEffect(() => {
    fetchWebinars();
  }, []);

  // Update filters based on checkbox input
  const handleFilterChange = (filterName, value, checked) => {
    setFilters((prevFilters) => {
      const updatedValues = checked
        ? [...prevFilters[filterName], value] // Add value
        : prevFilters[filterName].filter((v) => v !== value); // Remove value

      return { ...prevFilters, [filterName]: updatedValues };
    });
  };

  // Filter webinars locally based on selected filters
  useEffect(() => {
    const filtered = allWebinars.filter((webinar) => {
      const matchesLevel =
        filters.level.length > 0 ? filters.level.includes(webinar.level) : true;
      const matchesCategory =
        filters.category.length > 0
          ? filters.category.includes(webinar.category)
          : true;
      const matchesLanguage =
        filters.language.length > 0
          ? filters.language.includes(webinar.language)
          : true;

      return matchesLevel && matchesCategory && matchesLanguage;
    });

    setFilteredWebinars(filtered);
  }, [filters, allWebinars]);

  return (
    <div className="webinar-container">
      <h1>Webinars</h1>

      <div className="webinar-layout">
        {/* Filters */}
        <div className="webinar-filter">
          <WebinarFilter filters={filters} onFilterChange={handleFilterChange} />
        </div>

        {/* Webinar List */}
        <div className="webinar-list">
          {filteredWebinars.map((webinar) => (
            <div key={webinar._id} className="webinar-card">
              <div className="webinar-img">
                <img src={webinar.thumbnailUrl} alt={webinar.title} />
              </div>
              <div className="webinar-info">
                <h3>{webinar.title}</h3>
                <p>
                  🗓️ {new Date(webinar.date).toLocaleDateString()} |{" "}
                  {webinar.startTime} - {webinar.endTime}
                </p>
                <p>📍 {webinar.location}</p>
                <p>Price: {webinar.price ? `$${webinar.price}` : "Free"}</p>
              </div>
            </div>
          ))}
          {filteredWebinars.length === 0 && <p>No webinars found.</p>}
        </div>
      </div>
    </div>
  );
};

export default WebinarList;
