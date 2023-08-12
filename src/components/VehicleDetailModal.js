import React, {  useState, useEffect } from 'react';
import '../styles/App.css';

function VehicleDetailModal({ vehicle, onClose }) {

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
        <button className="close-button" onClick={onClose}>
          Close
        </button>

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
    </div>
  );
}

export default VehicleDetailModal;
