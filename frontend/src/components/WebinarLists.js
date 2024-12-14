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

  const handleFilterChange = (filterName, value, checked) => {
    setFilters((prevFilters) => {
      const updatedValues = checked
        ? [...prevFilters[filterName], value]
        : prevFilters[filterName].filter((v) => v !== value);

      return { ...prevFilters, [filterName]: updatedValues };
    });
  };

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
      <div className="banner">
        <h1 className="container-label">All Webinars</h1>
        <p>Learn directly from Experts • Real-time Doubt Solving • Practical Applications</p>
      </div>
      <div className="webinar-layout">
        <div className="webinar-filter">
          <WebinarFilter
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
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
