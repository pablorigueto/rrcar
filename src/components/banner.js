import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import bannerImage from '../assets/banner.jpg';
import logoImage from '../assets/logo.png';
import zicon from '../assets/zicon.png';
import Modal from './modal';

function Banner() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to store the crawled vehicle data
  const [vehicleData, setVehicleData] = useState(null);

  // Function to crawl vehicle information from the page
  const crawlVehicleInfo = () => {
    try {
      // Get the vehicle detail container
      const vehicleContainer = document.querySelector('.vehicle-screen-detailed');
      
      if (!vehicleContainer) {
        console.error('Vehicle information container not found');
        return null;
      }
      
      // Extract information
      const title = vehicleContainer.querySelector('.titleDetailed')?.textContent || '';
      const price = vehicleContainer.querySelector('.priceDetailed')?.textContent || '';
      
      // Extract vehicle details using the structure from your HTML
      const details = {};
      
      // Get make and model
      const makeElement = vehicleContainer.querySelectorAll('.summaryDetailedModel')[0];
      const modelElement = vehicleContainer.querySelectorAll('.summaryDetailedModel')[1];
      
      details.make = makeElement?.querySelector('span:last-child')?.textContent || '';
      details.model = modelElement?.querySelector('span:last-child')?.textContent || '';
      
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

  return (
    <div className="mainBanner">
      <div className="banner">
        <div className='logo'>
          <img className="logoImg" src={logoImage} alt="logo"/>
        </div>

        <div className='contactTop'>
          <ul className='contactTopUl'>
            <li className='liWhatsapp'>
              <a href="https://wa.me/+5519978175588" rel="noreferrer" target="_blank" aria-label="Whatsapp link">
                <span className='icon'><FaWhatsapp size={30} color='#fff'/></span>
              </a>
            </li>
            <li className='liInstagram'>
              <a href="https://www.instagram.com/rrmultimarcasan/" rel="noreferrer" target="_blank" aria-label="Instagram link">
                <span className='icon'><FaInstagram size={30} color='#fff'/></span>
              </a>
            </li>
            <li className='zinixplugin'>
              <img 
                src={zicon} 
                alt="Zinix Icon" 
                className='zinixicon' 
                onClick={openModal}
                style={{ cursor: 'pointer' }} 
                title="Visualizar detalhes do veículo"
              />
            </li>
          </ul>
        </div>

        <img src={bannerImage} alt="Banner" className='bannerOfPage' />
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

export default Banner;
