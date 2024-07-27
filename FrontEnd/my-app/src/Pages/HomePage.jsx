import React, { useState, useEffect } from 'react';
import PrimarySearchAppBar from '../Components/Navbar';
import Card from '../Components/Card';
import { handleGetPropertiesApi } from '../utilities/globalApi';

function HomePage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('x-auth-token');
      const response = await handleGetPropertiesApi(token);
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query) => {
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const filtered = data.filter(item =>
        item.propertyType.toLowerCase().includes(lowercasedQuery) ||
        item.description.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  const handleUpdate = async () => {
    await fetchData(); // Fetch updated data
  };

  return (
    <div>
      <PrimarySearchAppBar onSearch={handleSearch}>
        <div className='home_page_container'>
          {filteredData.map(item => (
            <Card key={item._id} details={item} onUpdate={handleUpdate} />
          ))}
        </div>
      </PrimarySearchAppBar>
    </div>
  );
}

export default HomePage;
