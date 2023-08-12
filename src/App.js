import React, { useRef, useState, useEffect } from 'react';
import data from './data/data.json'; // Adjust the path based on your project structure
import './styles/App.css'; // Import your CSS file for styling
import bannerImage from './assets/banner.jpg';
import logoImage from './assets/logo.png';
import textImage from './assets/rrmultimarcas.png';
import VehicleDetailModal from './components/VehicleDetailModal'; // Import your modal component
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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

    if (screenWidth >= 2001) {
      return screenWidth / 6 - 10;
    } else if (screenWidth >= 1440 && screenWidth < 2001) {
      return screenWidth / 5 - 10;
    } else if (screenWidth >= 1024 && screenWidth < 1440) {
      return screenWidth / 4 - 10;
    } else if (screenWidth >= 767 && screenWidth < 1024) {
      return screenWidth / 3 - 10;
    } else if (screenWidth >= 450 && screenWidth < 767) {
      return screenWidth / 2 - 10;
    } else {
      return screenWidth / 1 - 10;
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
        <div className='logo'
          style={{
            position: 'absolute',
            zIndex: 15,
          }}
        >
          <img className="logoImg" src={logoImage} alt="logo"
            style={{ 
              height: '100%',
            }}
          />
          <div className='rrMulti'
            style={{
              position: 'absolute',
              zIndex: 15,
            }}
          >
            <img src={textImage} alt="text"
              style={{ 
                height: '100%',
              }}
            />
          </div>
        </div>
        <img src={bannerImage} alt="Banner" 
          style={{ 
            width: `${window.innerWidth}px`,
            overflow: 'hidden',
        }}
        />
      </div>

      <div className="cards-vehicle-list" style={{ display: selectedVehicle ? 'none' : 'flex' }}>
        {vehiclesData.map(vehicle => (
          <div key={vehicle.vehicle_id}
            className="vehicle-card"
            style={{ width: `${windowWidth}px` }}
            
            onClick={() => handleVehicleClick(vehicle)}
          >

            <div className="vehicle-logo">
              <img
                src={logoImage} alt="Logo"
                style={{
                  height: 35, // Adjust the height as needed
                  paddingLeft: 0, // Add some spacing
                  paddingTop: 5,
                  position: 'absolute',
                }}
              />
            </div>

            <div className="vehicle-image">
              <img
                src={vehicle.images[0]} alt={vehicle.title}
              />
            </div>
            <div >
              <div className={`vehicle-details ${animateDetails ? 'animate' : ''}`}>
                <h2 className={`titleHome ${animateDetails ? 'animate' : ''}`}>{vehicle.title}</h2>
                <p className={`montadora ${animateDetails ? 'animate' : ''}`}>Montadora: {vehicle.make}</p>
                <p className={`modelo ${animateDetails ? 'animate' : ''}`}>Modelo: {vehicle.model}</p>
                <p className={`ano ${animateDetails ? 'animate' : ''}`}>Ano: {vehicle.year}</p>
              </div>
              <span
                className={`color-transition-button price ${animateDetails ? 'animate' : ''}`}
                >
                {vehicle.price == 0 ? (
                  "Consulte-nos"
                ) : (
                  formatPrice(vehicle.price)
                )}
              </span>
              </div>
          </div>
        ))}
      </div>
      {/* {selectedVehicle && (
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )} */}

      <TransitionGroup>
        {selectedVehicle && (
          <CSSTransition
            key={selectedVehicle.vehicle_id}
            timeout={300}
            classNames="vehicle-details"
          >
            <VehicleDetailModal
              vehicle={selectedVehicle}
              onClose={() => setSelectedVehicle(null)}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default App;
