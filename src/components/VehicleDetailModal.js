import React, {  useState, useEffect } from 'react';
import '../styles/App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import backIcon from '../assets/back.png';
import { formatPrice } from '../utils/helper'; // Import the formatPrice function
import ContactForm from './contactForm';
import logoImage from '../assets/logo.png';

function VehicleDetailModal({ vehicle, onClose }) {
  console.log(logoImage);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const [animateDetails, setAnimateDetails] = useState(false); // State to trigger animation

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimateDetails(true);
    }, 200);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  const hideMiddleChars = (str) => {
    if (str.length <= 2) {
      return str; // No need to hide characters for short strings
    }

    const firstChar = str[0].toUpperCase();
    const lastChar = str[str.length - 1];
    const middleChars = '*'.repeat(str.length - 2); // Replace middle characters with asterisks

    return `${firstChar}${middleChars}${lastChar}`;
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="close-button" onClick={onClose}>
          <img className="close-icon" src={backIcon} alt="backIcon"/>
        </div>

        <div className="vehicle-image-datailed ">
          <Carousel
            selectedItem={currentImageIndex}
            showStatus={false}
            showThumbs={true}
            infiniteLoop={true}
            autoPlay={false}
            interval={5000}
            showIndicators={false}
            onChange={(index) => setCurrentImageIndex(index)}
            dynamicHeight
          >
            {/* {vehicle.images.map((image, index) => (
              <div key={index} className='detailed-frame'>
                <img src={image} alt={`srcImage ${index}`} />
              </div>
            ))} */}
            {vehicle.images && vehicle.images.length > 0 ? (
              vehicle.images.map((image, index) => (
                <div key={index} className='detailed-frame'>
                  <img src={image} alt={`srcImage ${index}`} />
                </div>
              ))
            ) : (
              <div key='logo' className='detailed-frame'>
                <img src={logoImage} alt='srcImage logo' />
              </div>
            )}
          </Carousel>
        </div>




        <div className={`vehicle-screen-detailed ${animateDetails ? 'animate' : ''}`}>  
          <h2 className='titleDetailed'>{vehicle.title}</h2>
             <div
              className={`color-transition-button priceDetailed ${animateDetails ? 'animate' : ''}`}
              >
              {vehicle.price == 0 ? (
                "Consulte-nos"
              ) : (
                formatPrice(vehicle.price)
              )}
            </div>

            <div className='fabandmodel'>
              <div className='summaryDetailedModel'>
                <span className='titleDetailedTable'>Montadora</span>
                <span>{vehicle.make}</span>
              </div>
              <div className='summaryDetailedModel'>
                <span className='titleDetailedTable'>Modelo</span>
                <span>{vehicle.model}</span>
              </div>
            </div>

            <div className='summaryDetailedParent'>
              <div className='summaryDetailed'>
                <span className='titleDetailedTable'>Cor</span>
                <span>{vehicle.color}</span>
              </div>
              <div className='summaryDetailed'>
                <span className='titleDetailedTable'>Combustível</span>
                <span>{vehicle.fuel}</span>
              </div>
              <div className='summaryDetailed'>
                <span className='titleDetailedTable'>Câmbio</span>
                <span>{vehicle.gear}</span>
              </div>
              <div className='summaryDetailed'>
                <span className='titleDetailedTable'>Ano</span>
                <span>{vehicle.fabric_year}/{vehicle.year}</span>
              </div>
              {/* <div className='summaryDetailed'>
                <span className='titleDetailedTable'>Placa</span>
                <span>{hideMiddleChars(vehicle.plate)}</span>
              </div> */}
              <div className='summaryDetailed'>
                <span className='titleDetailedTable'>Condição</span>
                <span>{vehicle.condition}</span>
              </div>
              {/* <div className='summaryDetailed'>
                <span className='titleDetailedTable'>Portas</span>
                <span>{vehicle.doors}</span>
              </div> */}
            </div>

            {/* <div className='descriptionParent'>
              <div className='descriptionsummaryDetailed'>
                <span className='titleDetailedTable'>Descrição</span>
                <span>{vehicle.description}</span>
              </div>
            </div> */}

          </div>

          <ContactForm car={vehicle} />

      </div>
    </div>
  );
}

export default VehicleDetailModal;
