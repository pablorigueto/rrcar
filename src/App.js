import React, { useRef, useState, useEffect } from 'react';
import data from './data/data.json'; // Adjust the path based on your project structure
import './styles/App.css'; // Import your CSS file for styling
import bannerImage from './assets/banner.jpg';
import logoImage from './assets/logo.png';
import textImage from './assets/rrmultimarcas.png';
import VehicleDetailModal from './components/VehicleDetailModal'; // Import your modal component
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Lottie from "lottie-react";
import animation_ll8vh8ci from "./assets/find/animation_ll8vh8ci.json";
import animation_ll8vuwur from "./assets/filter/animation_ll8vuwur.json";

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

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [0, 45],
      },
      {
        visibility: [0.45, 1.0],
        type: "loop",
        frames: [45, 60],
      },
    ],
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
      
      <div
        style={{ 
          display: selectedVehicle ? 'none' : 'flex',
          paddingLeft: 15,
          paddingTop: 2,
        }}
      >
      <Lottie 
        animationData={animation_ll8vh8ci}
        loop={true}
        style={{width: 57}}
        // interactivity={interactivity}
      />
      <Lottie 
        animationData={animation_ll8vuwur}
        loop={true}
        style={{width: 57}}
        //interactivity={interactivity}
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

      <div className="footer">
        <div className="container">
          <div className="footer-parent">
            <div className="whoarewe">
              <h1>QUEM SOMOS</h1>
              <p>
                Somos especializados na venda de veículos novos e usados,
                nacionais e importados. Com certeza você não só apreciará como irá comprar seu veículo conosco.
                Todos nossos veículos são revisados criteriosamente, possibilitando dar aos nossos clientes tranquilidade
                na hora da compra. Não perca tempo! Compre seu veículo com quem mais entende do assunto.
                Nossos vendedores terão o prazer em atendê-lo.
              </p>
            </div>
            <div className="location">
              <h1>LOCALIZAÇÃO E CONTATO</h1>
              <p>
                Endereço:
                Rua 24 de Outubro, 1096 - Centro, Artur Nogueira - SP, 13160-060
                Telefone: (19) 97817-5588
              </p>
              <div className="footer-bottom-middle-right social-icon-footer">
                <ul className="social-icons">
                  <li><a href="https://www.instagram.com/rrmultimarcasan/" target="_blank"><FaInstagram size={30} color='#fff'/></a></li>
                  <li><a href="https://wa.me/+5519978175588" target="_blank"><FaWhatsapp size={30} color='#fff'/></a></li>
                </ul>
              </div>
              <div className="copyright">
                © 2023 develop by rgto
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
