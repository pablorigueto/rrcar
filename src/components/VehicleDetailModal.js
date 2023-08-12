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
              <div key={index}>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </Carousel>

        </div>
        <div className={`vehicle-details ${animateDetails ? 'animate' : ''}`}>
            <h2 className={`title ${animateDetails ? 'animate' : ''}`}>{vehicle.title}</h2>
            <p>Make: {vehicle.make}</p>
            <p>Model: {vehicle.model}</p>
            <p>Year: {vehicle.year}</p>
            <p>Price: {formatPrice(vehicle.price)}</p>
        </div>
 
      </div>
    </div>
  );
}

export default VehicleDetailModal;
