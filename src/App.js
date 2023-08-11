import React, { useRef, useState, useEffect } from 'react';
import data from './data/data.json'; // Adjust the path based on your project structure
import './styles/App.css'; // Import your CSS file for styling
import bannerImage from './assets/banner.jpg';
import VehicleDetailPage from './components/VehicleDetailPage';
import VehicleDetailModal from './components/VehicleDetailModal'; // Import your modal component

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




  const [animateDetails, setAnimateDetails] = useState(false); // State to trigger animation

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimateDetails(true);
    }, 200);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);



 
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  return (
    <div>
      <div className="banner">
        <img src={bannerImage} alt="Banner" 
          style={{ 
            width: `${window.innerWidth}px`,
            overflow: 'hidden',
        }}
        />
      </div>
      <div className="cards-vehicle-list" style={{ display: selectedVehicle ? 'none' : 'grid' }}>
        {vehiclesData.map(vehicle => (
          <div key={vehicle.vehicle_id}
            className={`vehicle-card ${animateDetails ? 'animate' : ''}`}
            style={{ width: `${windowWidth}px` }}
            onClick={() => handleVehicleClick(vehicle)}
          >
            <div className="vehicle-image">
              <img
                src={vehicle.images[0]} alt={vehicle.title}
              />
            </div>
            <div className={`vehicle-details ${animateDetails ? 'animate' : ''}`}>
              <h2 className={`title ${animateDetails ? 'animate' : ''}`}>{vehicle.title}</h2>
              <p>Make: {vehicle.make}</p>
              <p>Model: {vehicle.model}</p>
              <p>Year: {vehicle.year}</p>
              <p>Price: {formatPrice(vehicle.price)}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedVehicle && (
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>
  );
}

export default App;
