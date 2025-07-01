// Modal.js
import React, { useState, useEffect } from 'react';
import '../styles/modal.css';
import VehicleFormStep from './VehicleFormStep';
import CustomerFormStep from './CustomerFormStep';
// import ReviewStep from './ReviewStep';
import ProgressIndicator from './ProgressIndicator';
import zinixdarklogo from '../assets/zinix-logo-dark.png';

import { sanitizeLeadData } from '../utils/sanitizeLeadData';
import { sendLead } from '../api/sendLead';
import InstallmentOptionsStep from './InstallmentOptionsStep';


function Modal({ isOpen, onClose, vehicleData }) {

  // State to store editable vehicle data
  const [editableData, setEditableData] = useState({});
  // State to track which step of the wizard we're on
  const [wizardStep, setWizardStep] = useState(1);

  // Adicione um state para guardar o sanitizedData final
  const [finalSanitized, setFinalSanitized] = useState(null);

  // State for customer information
  const [customerInfo, setCustomerInfo] = useState({
    cpfCnpj: '',
    gender: 'M',
    fullName: '',
    phone: '',
    email: '',
    birthDate: '',
    state: '',
    city: '',
    hasCNH: 'Sim'
  });
  // State for form validation errors
  const [errors, setErrors] = useState({});
  // Full data for submission and review
  const [fullData, setFullData] = useState(null);
  
  const [submitResponse, setSubmitResponse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Update editable data when vehicleData changes
  useEffect(() => {
    if (vehicleData) {
      // Add the current site name to the data when initializing
      const currentSiteName = window.location.origin;
      
      // Create a copy of vehicleData to avoid modifying the original
      const formattedData = { ...vehicleData, siteName: currentSiteName };
      
      // Format the price field if it exists
      if (formattedData.price) {
        // Remove 'R$' prefix and format
        let priceValue = formattedData.price.toString().replace(/^R\$\s*/i, '');
        priceValue = priceValue.trim();
        formattedData.price = priceValue;
      }
      
      // Format the down_payment field if it exists
      if (formattedData.down_payment) {
        // Remove 'R$' prefix and format
        let downPaymentValue = formattedData.down_payment.toString().replace(/^R\$\s*/i, '');
        downPaymentValue = downPaymentValue.trim();
        formattedData.down_payment = downPaymentValue;
      }
      
      setEditableData(formattedData);
    }
  }, [vehicleData]);
  
  if (!isOpen) return null;
  
  // Handle input changes for vehicle data
  const handleInputChange = (field, value) => {
    setEditableData({
      ...editableData,
      [field]: value
    });
    
    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: null
      });
    }

    // If storing raw values is needed for submission
    if (field === 'phone') {
      // Store the formatted value for display
      setCustomerInfo({
        ...customerInfo,
        [field]: value,
        // Optionally store the raw phone number (just digits) in a separate field
        phoneRaw: value.replace(/\D/g, '')
      });
    } else {
      setCustomerInfo({
        ...customerInfo,
        [field]: value
      });
    }
    
    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: null
      });
    }
    
  };
  
  // Handle input changes for customer info
  const handleCustomerInfoChange = (field, value) => {
    setCustomerInfo({
      ...customerInfo,
      [field]: value
    });
    
    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: null
      });
    }
  };
  
  // Validate vehicle data
  const validateVehicleData = () => {
    const newErrors = {};
    const requiredFields = ['title', 'price', 'down_payment', 'make', 'model', 'year', 'condition'];
    
    requiredFields.forEach(field => {
      if (!editableData[field]) {
        newErrors[field] = 'Este campo é obrigatório';
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Validate customer info
  const validateCustomerInfo = () => {
    const newErrors = {};
    const requiredFields = ['cpfCnpj', 'fullName', 'phone', 'email'];
    
    requiredFields.forEach(field => {
      if (!customerInfo[field]) {
        newErrors[field] = 'Este campo é obrigatório';
      }
    });
    
    // Basic email validation
    if (customerInfo.email && !/\S+@\S+\.\S+/.test(customerInfo.email)) {
      newErrors.email = 'Email inválido';
    }
    
    // Phone validation - check if we have enough digits
    if (customerInfo.phone) {
      const phoneDigits = customerInfo.phone.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        newErrors.phone = 'Telefone inválido';
      }
    }
    
    // Date validation (optional)
    if (customerInfo.birthDate) {
      // Check if the date format is DD/MM/YYYY
      const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
      if (!dateRegex.test(customerInfo.birthDate)) {
        newErrors.birthDate = 'Data inválida. Use o formato DD/MM/AAAA';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Move to next step in wizard
  const goToNextStep = () => {
    if (wizardStep === 1) {
      if (validateVehicleData()) {
        setWizardStep(2);
      }
    } else if (wizardStep === 2) {
      if (validateCustomerInfo()) {
        const combinedData = {
          vehicle: editableData,
          customer: customerInfo,
          siteName: editableData.siteName || window.location.origin,
          submittedAt: new Date().toISOString()
        };

        setFullData(combinedData);

        const sanitizedData = sanitizeLeadData(combinedData); // <<< USE O COMBINEDDATA

        setFinalSanitized(sanitizedData);

        // handleSubmit espera o dado atualizado:
        handleSubmit(sanitizedData);

        setWizardStep(3);
      }

    // } else if (wizardStep === 4) {
    //   const sanitizedData = sanitizeLeadData(fullData);
    //   // submitAndProceed();

    //   handleSubmit();
      
    //   // OPÇÕES DE PARCELA: 
    //   // Se quiser, pode rodar o findBestInstallmentOptions(sanitizedData.aqui)!
    //   setFinalSanitized(sanitizedData);
    //   setWizardStep(4);
    }
  };
  
  // Go back to previous step
  const goToPreviousStep = () => {
    if (wizardStep > 1) {
      setWizardStep(wizardStep - 1);
    }
  };
  
  // Handle final submission
  const handleSubmit = async (sanitizedData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const apiResponse = await sendLead(sanitizedData);
      setSubmitResponse(apiResponse);
    } catch (error) {
      setSubmitError(error.message || 'Falha no envio do lead');
    } finally {
      setIsSubmitting(false);
    }
  };


  // Render the appropriate step based on wizardStep
  const renderStep = () => {
    if (wizardStep === 1 && vehicleData) {
      return (
        <VehicleFormStep 
          editableData={editableData}
          handleInputChange={handleInputChange}
          errors={errors}
          goToNextStep={goToNextStep}
          onClose={onClose}
        />
      );
    } else if (wizardStep === 2) {
      return (
        <CustomerFormStep 
          customerInfo={customerInfo}
          handleCustomerInfoChange={handleCustomerInfoChange}
          errors={errors}
          goToNextStep={goToNextStep}
          goToPreviousStep={goToPreviousStep}
          editableData={editableData}
        />
      );
    // } else if (wizardStep === 3 && fullData) {
    //   return (
    //     <ReviewStep 
    //       fullData={fullData}
    //       goToPreviousStep={goToPreviousStep}
    //       goToNextStep={goToNextStep}
    //     />
    //   );

    } else if (wizardStep === 3 && fullData && finalSanitized) {

      return (
        <InstallmentOptionsStep
          sanitizedData={finalSanitized}
          goToPreviousStep={goToPreviousStep}
          submitResponse={submitResponse}
          isSubmitting={isSubmitting}
          submitError={submitError}
        />
      );
    } else {
      return <p>Carregando informações...</p>;
    }
  };

  return (
    <div className="modal-overlay-zinix" onClick={onClose}>
      <div className="modal-content-zinix wizard-modal" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close-zinix" onClick={onClose}>×</button>
        
        {/* Progress indicator */}
        <ProgressIndicator wizardStep={wizardStep} />

        <div className="site-branding__inner">
          <a href="https://zinix.com.br" rel="home" target="_blank" className="site-branding__logo">
            <img 
              src={zinixdarklogo} 
              alt="Inicio" 
              fetchpriority="high"
            />
            <span>A melhor condição para você!</span>
          </a>
        </div>
        
        {/* Render the current step */}
        {renderStep()}
      </div>
    </div>
  );
}

export default Modal;
