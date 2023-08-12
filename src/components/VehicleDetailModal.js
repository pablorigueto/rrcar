import React, {  useState, useEffect } from 'react';
import '../styles/App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import backIcon from '../assets/back.png';

function VehicleDetailModal({ vehicle, onClose }) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  function formatPrice(price) {
      const numericPrice = parseFloat(price);
      if (isNaN(numericPrice)) {
        return 'Invalid Price';
      }
      return `R$ ${numericPrice.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  }
  
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
        {/* <button className="close-button" onClick={onClose}>
          Close
        </button> */}
 
        <div className="close-button" onClick={onClose}>
          <img className="close-icon" src={backIcon} alt="backIcon"/>
        </div>

        <div className="vehicle-image-datailed ">
            {/* <img
            src={vehicle.images[0]} alt={vehicle.title}
            /> */}
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
            {vehicle.images.map((image, index) => (
              <div key={index} className='detailed-frame'>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </Carousel>

        </div>

        <div >
          <div className={`vehicle-screen-detailed ${animateDetails ? 'animate' : ''}`}>
            <h2>{vehicle.title}</h2>
            <span >Descrição: {vehicle.description}</span>
            <span >Acessórios: {vehicle.accessories}</span>
            <span >Montadora: {vehicle.make}</span>
            <span >Modelo: {vehicle.model}</span>
            <span >Cor: {vehicle.color}</span>
            <span >Portas: {vehicle.doors}</span>
            <span >Combustível: {vehicle.fuel}</span>

            <div
              className={`color-transition-button priceDetailed ${animateDetails ? 'animate' : ''}`}
              // style={{
              //   color: "#000"
              // }}
              >
              {vehicle.price == 0 ? (
                "Consulte-nos"
              ) : (
                formatPrice(vehicle.price)
              )}
            </div>

            <span className='gear'>Câmbio: {vehicle.gear}</span>
            <span >Condição: {vehicle.condition}</span>
            <span >Ano: {vehicle.fabric_year}/{vehicle.year}</span>
            <span className='plate'>Placa: {hideMiddleChars(vehicle.plate)}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VehicleDetailModal;
