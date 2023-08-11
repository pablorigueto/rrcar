import React from 'react';
import '../styles/App.css';

function VehicleDetailPage({ vehicle }) {

    console.log(vehicle);
    
function formatPrice(price) {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) {
        return 'Invalid Price';
    }
    return `R$ ${numericPrice.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
    }

  return (
    <div className="vehicle-detail">
      <h2>{vehicle.title}</h2>
      <p>Make: {vehicle.make}</p>
      <p>Model: {vehicle.model}</p>
      <p>Year: {vehicle.year}</p>
      <p>Price: {formatPrice(vehicle.price)}</p>
      {/* Add additional details as needed */}
    </div>
  );
}

export default VehicleDetailPage;
