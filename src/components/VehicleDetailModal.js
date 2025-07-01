import React, {  useState, useEffect } from 'react';
import '../styles/App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import backIcon from '../assets/back.png';
import { formatPrice } from '../utils/helper'; // Import the formatPrice function
import ContactForm from './contactForm';
import logoImage from '../assets/logo.png';
import Modal from '../zplugin/components/modal';

function VehicleDetailModal({ vehicle, onClose }) {


  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to store the crawled vehicle data
  const [vehicleData, setVehicleData] = useState(null);

  // Function to crawl vehicle information from the page
  const crawlVehicleInfo = () => {
    try {

      const carouselSlider = document.querySelector('.carousel-slider');

      // Get the vehicle detail container
      const vehicleContainer = document.querySelector('.vehicle-screen-detailed');

      if (!vehicleContainer) {
        console.error('Vehicle information container not found');
        return null;
      }
      
      // Extract information
      const title = vehicleContainer.querySelector('.titleDetailed')?.textContent || '';
      const price = vehicleContainer.querySelector('.priceDetailed')?.textContent || '';

      const carImage = carouselSlider.querySelectorAll('.detailed-frame img')[1]?.src || '';

      // Extract vehicle details using the structure from your HTML
      const details = {};
      
      // Get make and model
      const makeElement = vehicleContainer.querySelectorAll('.summaryDetailedModel')[0];
      const modelElement = vehicleContainer.querySelectorAll('.summaryDetailedModel')[1];
      
      details.make = makeElement?.querySelector('span:last-child')?.textContent || '';
      details.model = modelElement?.querySelector('span:last-child')?.textContent || '';
      
      details.carImage = carImage;

      // Get other vehicle details
      const summaryElements = vehicleContainer.querySelectorAll('.summaryDetailed');
      summaryElements.forEach(element => {
        const label = element.querySelector('.titleDetailedTable')?.textContent?.trim().toLowerCase() || '';
        const value = element.querySelector('span:last-child')?.textContent || '';
        
        switch(label) {
          case 'cor':
            details.color = value;
            break;
          case 'combustível':
            details.fuel = value;
            break;
          case 'câmbio':
            details.transmission = value;
            break;
          case 'ano':
            details.year = value;
            break;
          case 'placa':
            details.plate = value;
            break;
          case 'condição':
            details.condition = value;
            break;
          case 'portas':
            details.doors = value;
            break;
          default:
            break;
        }
      });
      
      // Get description
      const description = vehicleContainer.querySelector('.descriptionsummaryDetailed span:last-child')?.textContent || '';
      
      // Return the collected data
      return {
        title,
        price,
        ...details,
        description,
      };
    } catch (error) {
      console.error('Error crawling vehicle information:', error);
      return null;
    }
  };

  // Function to open modal and crawl data
  const openModal = () => {
    const data = crawlVehicleInfo();
    setVehicleData(data);
    setIsModalOpen(true);
  };
  
  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

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

            <div className='zinixplugin'>
              <div
                className={`color-transition-button priceDetailed ${animateDetails ? 'animate' : ''}`}
                >
                {vehicle.price == 0 ? (
                  "Consulte-nos"
                ) : (
                  formatPrice(vehicle.price)
                )}
              </div>
            
              <div 
                className='zinixbutton animate' 
                onClick={openModal}
                style={{ cursor: 'pointer' }} 
              >
                <span className='simule'>Simule sem compromisso</span>
                {/* <img src={ZIcon}/> */}
              </div>

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

      {/* Modal with vehicle data */}
      <Modal
        isOpen={isModalOpen} 
        onClose={closeModal} 
        vehicleData={vehicleData}
      />

    </div>
  );
}

export default VehicleDetailModal;
