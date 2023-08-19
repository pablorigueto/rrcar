import React, { useState, useEffect } from 'react';
import '../styles/ContactForm.css';
import LgpdPage from './policy';
import Lottie from "lottie-react";
import animation_lliert45 from "../assets/send/animation_lliert45.json";

const ContactForm = (car) => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [unfillFields, setUnfillFields] = useState(false);
  const carIDOrigin = car.car.vehicle_id;
  const saveForm = window.location.href + 'post/saveForm.php';
  const [openLgdp, setOpenLgdp] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrivacyPolicyClick = () => {
    setOpenLgdp(true);
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === 'Escape') {
        handleCloseSuccessMessage();
        setUnfillFields(false);
        setOpenLgdp(false);
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains('modalOverlay')) {
        handleCloseSuccessMessage();
        setUnfillFields(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKeyPress);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      //console.log('Preencha os campos obrigatórios.');
      setUnfillFields(true);
      return;
    }

    setUnfillFields(false);
    // Start loading.
    setLoading(true);

    try {
      //const response = await fetch('http://127.0.0.1/post/saveForm.php', {
      const response = await fetch(saveForm, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      //console.log('formData: ' + response)
      if (response.ok) {
        const responseData = await response.json();
        //console.log(responseData.message);

        // Show a success message using window.alert()
        setShowSuccessMessage(true);

        // Reset the form.
        setFormData({
          carID: carIDOrigin,
          name: '',
          email: '',
          cellphone: '',
          description: '',
          wantsToFinance: false,
          wantsToTradeVehicle: false,
          wantsToReceivePromotions: false,
          agreesToPrivacyPolicy: false,
        });
      } else {
        console.error('Error saving form data:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    } finally {
       // Stop loading.
       console.log('fechando');
      setLoading(false);
    }
  };

  const [formData, setFormData] = useState({
    carID: carIDOrigin,
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

  const isFormValid = () => {
    // Perform validation on all fields
    // formData.agreesToPrivacyPolicy
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.cellphone.trim() !== ''
      && formData.agreesToPrivacyPolicy
    );
  };

  return (
    <div className='formContact'>
      <div className='contactParent'>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome Completo *"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
 
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
 
          <input
            type="tel"
            id="cellphone"
            name="cellphone"
            placeholder="Telefone *"
            value={formData.cellphone}
            onChange={handleInputChange}
            required
          />
 
          <textarea
            id="description"
            name="description"
            placeholder={`Olá, gostaria de saber mais sobre esse carro ou fazer uma proposta para ${car.car.title}`}
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
              Lí e concordo com a{' '}
                <span className='policy' onClick={handlePrivacyPolicyClick}>política de privacidade *</span>
          </label>
        </div>

        {loading && (
          <div className='modalOverlay'>
            <Lottie
            className='sendLottie'
            animationData={animation_lliert45}
            loop={true}
            />
          </div>
        )}

        {showSuccessMessage && (
          <div className='modalOverlay'>
            <div className='successMessage'>
              <p>Muito obrigado pela sua proposta! <br/> Iremos avaliar e entrar em contato o mais breve possível!</p>
            </div>
          </div>
        )}

        {unfillFields && (
          <div className='modalOverlay'>
            <div className='successMessage' style={{background: '#930808'}}>
              <p>Preencha os campos obrigatórios.</p>
            </div>
          </div>
        )}

        {unfillFields && (
          <div className='modalOverlay'>
            <div className='successMessage' style={{background: '#930808'}}>
              <p>Preencha os campos obrigatórios.</p>
            </div>
          </div>
        )}

        {openLgdp && (
          <LgpdPage onClose={() => setOpenLgdp(false)} />
        )}

        <button type="submit" id="submit" onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
};

export default ContactForm;
