import React, { useRef, useState, useEffect } from 'react';
import data from './data/data.json'; // Adjust the path based on your project structure
import './styles/App.css'; // Import your CSS file for styling
import bannerImage from './assets/banner.jpg';
import logoImage from './assets/logo.png';
import textImage from './assets/rrmultimarcas.png';
import VehicleDetailModal from './components/VehicleDetailModal';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Lottie from "lottie-react";
import animation_ll8vh8ci from "./assets/find/animation_ll8vh8ci.json";

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
          }}>
          <img className="logoImg" src={logoImage} alt="logo"
            style={{ 
              height: '100%',
            }}
          />
          <div className='rrMulti'>
            <img src={textImage} alt="text"
              style={{ 
                height: '100%',
              }}
            />
          </div>
        </div>

        <div className='contactTop'
          style={{
            // position: 'absolute',
            right: 0,
            position: 'fixed',
            zIndex: 5,
          }}
        >
        <ul className='contactTopUl'>
          {/* <li className='liPhone'><span className='icon'><FaPhoneAlt size={20} color='#fff'/></span><span>(19) 97817-5588</span></li> */}
          <li className='liWhatsapp'><a href="https://wa.me/+5519978175588" rel="noreferrer" target="_blank"><span className='icon'><FaWhatsapp size={30} color='#fff'/></span></a></li>
          <li className='liInstagram'><a href="https://www.instagram.com/rrmultimarcasan/" rel="noreferrer" target="_blank"><span className='icon'><FaInstagram size={30} color='#fff'/></span></a></li>
        </ul>
          {/* <div className='rrMulti'>
            <img src={textImage} alt="text"
              style={{ 
                height: '100%',
              }}
            />
          </div> */}
        </div>

        <img src={bannerImage} alt="Banner" 
          style={{ 
            // width: `${window.innerWidth}px`,
            width: '100%',
            overflow: 'hidden',
          }}
        />



      </div>

      <div
        style={{ 
          display: selectedVehicle ? 'none' : 'flex',
          justifyContent: 'center',
          paddingTop: 20,
        }}
        >
        <h2>
            Encontre o carro ideal para você
        </h2>
      </div>

      <div
        style={{ 
          display: selectedVehicle ? 'none' : 'flex',
          justifyContent: 'center',
          paddingLeft: 15,
          paddingTop: 2,
        }}
      >


      <Lottie 
        animationData={animation_ll8vh8ci}
        loop={true}
        style={{
          width: 90,
          paddingBottom: 10,
        }}
        // interactivity={interactivity}
      />
      {/* <Lottie 
        animationData={animation_ll8vuwur}
        loop={true}
        style={{width: 57}}
        //interactivity={interactivity}
      /> */}
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
                {vehicle.price === 0 ? (
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

            <h1>LOCALIZAÇÃO E CONTATO</h1>
              <p>
                <ul className="social-icons"
                  style={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                  }}
                >  
                 <li><FaPhoneAlt size={18} color='#fff'/><span
                  style={{
                    marginLeft: 15,
                    fontWeight: 600,
                    fontSize: 18, 
                  }}
                  >(19) 97817-5588</span></li>
                  <li><a href="https://wa.me/+5519978175588" rel="noreferrer" target="_blank"><FaWhatsapp size={30} color='#fff'/></a></li>
                  <li><a href="https://www.instagram.com/rrmultimarcasan/" rel="noreferrer" target="_blank"><FaInstagram size={30} color='#fff'/></a></li>
                </ul>
           
                <iframe
                  title="RR Multimarcas"
                  frameborder="0"
                  style={{
                    border:0,
                    padding:0,
                    margin:0,
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    height: 250,
                  }}
                  src="https://www.google.com/maps/embed?origin=mfe&amp;pb=!1m4!2m1!1sR.+Rui+Barbosa,+839+-+Santo+Amaro,+Artur+Nogueira+-+SP,+13160-090%2C+BR!5e0!6i14!5m1!1sen"
                  allowfullscreen
                >
                </iframe>
                Endereço:
                Rua Rui Barbosa 839 - Centro, Artur Nogueira - SP, 13160-060<br/>
              </p>
            </div>
            <div className="location"> 
              <h1>QUEM SOMOS</h1>
              <p>
              Com uma tradição familiar enraizada, somos uma empresa respeitável e confiável no ramo de venda de automóveis novos, seminovos e usados. Nosso compromisso de longa data com a qualidade e a satisfação do cliente nos destaca como uma escolha líder no mercado. Há anos, construímos relações duradouras baseadas na confiança mútua, transparência e integridade.
              <br/>
              Nossa equipe dedicada é apaixonada por carros e está empenhada em entender suas necessidades individuais, ajudando-o a encontrar o veículo perfeito para se adequar ao seu estilo de vida e orçamento. Cada carro em nosso inventário passa por rigorosas inspeções para garantir que você esteja recebendo um produto confiável e de qualidade.
              <br/>
              Desde jovens motoristas até famílias em busca de espaço, nossa ampla seleção oferece opções para todos. Guiamos você por todas as etapas do processo de compra, proporcionando uma experiência tranquila e sem complicações. Se você procura não apenas um carro, mas uma parceria duradoura, estamos aqui para tornar sua jornada automotiva memorável e empolgante.
              </p>
            </div>
          </div>

          <div className="copyright">
            © 2023 develop by rgto
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
