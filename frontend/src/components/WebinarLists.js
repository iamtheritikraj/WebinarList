import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import WebinarFilter from './WebinarFilter'; 

const WebinarList = () => {
  const [webinars, setWebinars] = useState([]);
  const [filters, setFilters] = useState({
    level: '',
    category: '',
    language: '',
  });

  const fetchWebinars = async () => {
    try {
      const response = await axios.get('/webinars', { params: filters });
      setWebinars(response.data);
    } catch (error) {
      console.error('Error fetching webinars:', error);
    }
  };

  
  useEffect(() => {
    fetchWebinars();
  }, [filters]);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="webinar-container">
      <h1>Webinars</h1>

      <div className="webinar-layout">
  
        <div className="webinar-filter">
          <WebinarFilter filters={filters} onFilterChange={handleFilterChange} />
        </div>

      
        <div className="webinar-list">
          {webinars.map((webinar) => (
            <div key={webinar._id} className="webinar-card">
              <img src={webinar.thumbnailUrl} alt={webinar.title} />
              <h3>{webinar.title}</h3>
              <p>Date: {new Date(webinar.date).toLocaleDateString()}</p>
              <p>Time: {webinar.startTime} - {webinar.endTime}</p>
              <p>Level: {webinar.level}</p>
              <p>Category: {webinar.category}</p>
              <p>Language: {webinar.language}</p>
              <p>Price: {webinar.price ? `$${webinar.price}` : 'Free'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebinarList;
