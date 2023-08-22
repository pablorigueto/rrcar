import React, { useState, useEffect } from 'react';
import './styles/App.css';
import logoImage from './assets/logo.png';
import VehicleDetailModal from './components/VehicleDetailModal';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Lottie from "lottie-react";
import animation_ll8vh8ci from "./assets/find/animation_ll8vh8ci.json";
import animation_llieshlr from "./assets/fetch/animation_llieshlr.json";
import { fetchData } from './api/config';
import { formatPrice } from './utils/helper';
import Footer from './components/footer';
import Banner from './components/banner';

function App() {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [animateDetails, setAnimateDetails] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [loadingFetch, setLoadingFetch] = useState(true);

  useEffect(() => {
    if (selectedVehicle) {
      window.scrollTo(0, 0);
    }
  }, [selectedVehicle]);

  useEffect(() => {
    fetchData()
      .then((vehiclesArray) => {
        setVehiclesData(vehiclesArray);
  
          // Read query parameter from the URL.
        const urlParams = new URLSearchParams(window.location.search);
        const initialSelectedItemId = urlParams.get('c');

        // Check on fetch if has the id of car to set.
        const initialSelectedVehicle = vehiclesArray.find(vehicle => vehicle.vehicle_id == initialSelectedItemId);
  
        if (initialSelectedVehicle) {
          setSelectedVehicle(initialSelectedVehicle);
        }

      })
      .catch((error) => {
        console.error('Data fetching error:', error);
      })
      .finally(() => {
        setLoadingFetch(false);
      });
  }, []);

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(calculateWidth());
    };
  
    setWindowWidth(calculateWidth());
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimateDetails(true);
    }, 200);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  const handleVehicleClick = (vehicle) => {

    setSelectedVehicle(vehicle);

    // Update the URL with the selected vehicle's ID.
    const newUrl = `${window.location.pathname}?c=${vehicle.vehicle_id}`;
    window.history.pushState(null, '', newUrl);

  };

  return (
    <div>
      <Banner vehicle={selectedVehicle}/>

      <div
        className='divLottie'
        style={{ 
          display: selectedVehicle ? 'none' : 'flex',
        }}
      >
        <div className='titleandLottie'>
          <h2>
              Encontre o carro ideal para você
          </h2>
          <Lottie
            className='lottiefile'
            animationData={animation_ll8vh8ci}
            loop={true}
          />
        </div>
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
                className='imageLogo'
                src={logoImage} alt="Logo"
              />
            </div>

            <div className="vehicle-image">
              <img
                src={vehicle.images[0]} alt={vehicle.title}
              />
            </div>
            <div>
              <div className={`vehicle-details ${animateDetails ? 'animate' : ''}`}>
                <h2 className={`titleHome ${animateDetails ? 'animate' : ''}`}>{vehicle.title}</h2>
                <p className={`montadora ${animateDetails ? 'animate' : ''}`}>Montadora: {vehicle.make}</p>
                <p className={`modelo ${animateDetails ? 'animate' : ''}`}>Modelo: {vehicle.model}</p>
                <p className={`fuel ${animateDetails ? 'animate' : ''}`}>Combustível: {vehicle.fuel}</p>
                <p className={`ano ${animateDetails ? 'animate' : ''}`}>Ano: {vehicle.fabric_year}/{vehicle.year}</p>
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

      {loadingFetch && (
        <div className='fetchOverlay'>
          <Lottie
          className='fetchLottie'
          animationData={animation_llieshlr}
          loop={true}
          />
        </div>
      )}

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

      <Footer />

    </div>
  );
}

export default App;
