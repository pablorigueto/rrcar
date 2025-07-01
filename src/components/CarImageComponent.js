// import React from 'react';

const CarImageComponent = ({ 
  title,
  transmission,
  price,
  carImage,
 }) => {

  return (
    <div className="image-relative-div">
      <div className="absolute">
        <div className="flex-div">
          <p>{title}</p>
        </div>
        <div className="flex-div">
          <p className="border-radius-bottom">
            R$ {price}
          </p>
        </div>
      </div>
      <div className='car-image-simulator'>
        <img
          src={carImage}
          alt={title}
        />
      </div>
    </div>
  );
}

export default CarImageComponent;
