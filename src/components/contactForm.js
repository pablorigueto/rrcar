import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = (car) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cellphone: '',
    description: '',
    wantsToFinance: false,
    wantsToTradeVehicle: false,
    wantsToReceivePromotions: false,
    agreesToPrivacyPolicy: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the submission logic
    console.log(formData); // For demonstration, log the form data
  };

  return (
    <div className='formContact'>
      <div className='contactParent'>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome Completo"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
 
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
 
          <input
            type="tel"
            id="cellphone"
            name="cellphone"
            placeholder="Telefone"
            value={formData.cellphone}
            onChange={handleInputChange}
            required
          />
 
          <textarea
            id="description"
            name="description"
            placeholder={`Olá, gostaria de saber mais sobre esse carro ou fazer uma proposta para ${car.car}`}
            value={formData.description}
            onChange={handleInputChange}
            required
          />
 
        <div className='checkboxGroup'>
          <label>
            <input
              type="checkbox"
              name="wantsToFinance"
              checked={formData.wantsToFinance}
              onChange={handleInputChange}
            />
            Quero Financiar
          </label>
          <label>
            <input
              type="checkbox"
              name="wantsToTradeVehicle"
              checked={formData.wantsToTradeVehicle}
              onChange={handleInputChange}
            />
            Quero dar veículo na troca
          </label>
          <label>
            <input
              type="checkbox"
              name="wantsToReceivePromotions"
              checked={formData.wantsToReceivePromotions}
              onChange={handleInputChange}
            />
            Quero receber aviso e promoções
          </label>
          <label>
            <input
              type="checkbox"
              name="agreesToPrivacyPolicy"
              checked={formData.agreesToPrivacyPolicy}
              onChange={handleInputChange}
              required
            />
            Lí e concordo com a política de privacidade
          </label>
        </div>

        <button type="submit" id="submit" onClick={handleSubmit}>Submit</button>
      </div>

      
      {/* <div className='submitBtn'>
       
      </div> */}
    </div>
  );
};

export default ContactForm;
