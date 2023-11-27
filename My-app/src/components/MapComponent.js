import React, { useEffect, useState } from 'react.js';

const MapComponent = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/map/properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    // Code to initialize and display properties on the map
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12,
    });

    properties.forEach((property) => {
      new google.maps.Marker({
        position: { lat: property.lat, lng: property.lon },
        map,
        title: property.address,
      });
    });
  }, [properties]);

  return (
    <div id="map" style={{ height: '400px' }}></div>
  );
};

export default MapComponent;