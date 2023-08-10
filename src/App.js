import React, { useRef, useState, useEffect } from 'react';
import data from './data/data.json'; // Adjust the path based on your project structure
import './styles/App.css'; // Import your CSS file for styling

function App() {
  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    setVehiclesData(data.vehicles);
  }, []);

  function formatPrice(price) {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
      return 'Invalid Price';
    }
    return `R$ ${numericPrice.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  }



  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const calculateWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1440) {
      return screenWidth / 5 -10;
    } else if (screenWidth >= 1024 && screenWidth < 1440) {
      return screenWidth / 4 -10;
    } else if (screenWidth >= 767 && screenWidth < 1024) {
      return screenWidth / 2 - 5;
    } else {
      return 0;
    }
  };

  const handleResize = () => {
    setWindowWidth(calculateWidth());
  };

  useEffect(() => {
    setWindowWidth(calculateWidth());
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="cards-vehicle-list">
      {vehiclesData.map(vehicle => (
        <div key={vehicle.vehicle_id} className="vehicle-card"
          style={{ width: `${windowWidth}px` }}
        >
          <div className="vehicle-image">
            <img
              src={vehicle.images[0]} alt={vehicle.title}
            />
          </div>
          <div className="vehicle-details">
            <h2 className="title">{vehicle.title}</h2>
            {/* <p className="description">{vehicle.description}</p> */}
            <p>Make: {vehicle.make}</p>
            <p>Model: {vehicle.model}</p>
            <p>Year: {vehicle.year}</p>
            <p>Price: {formatPrice(vehicle.price)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
