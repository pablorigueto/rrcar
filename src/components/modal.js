// Modal.js
import React, { useState, useEffect } from 'react';
import '../styles/modal.css';
import VehicleFormStep from './VehicleFormStep';
import CustomerFormStep from './CustomerFormStep';
import ReviewStep from './ReviewStep';
import ProgressIndicator from './ProgressIndicator';

function Modal({ isOpen, onClose, vehicleData }) {
  // State to store editable vehicle data
  const [editableData, setEditableData] = useState({});
  // State to track which step of the wizard we're on
  const [wizardStep, setWizardStep] = useState(1);
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
  
  // Update editable data when vehicleData changes
  useEffect(() => {
    if (vehicleData) {
      // Add the current site name to the data when initializing
      const currentSiteName = window.location.hostname;
      
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
        // Prepare full data for review
        const combinedData = {
          vehicle: editableData,
          customer: customerInfo,
          siteName: editableData.siteName || window.location.hostname,
          submittedAt: new Date().toISOString()
        };
        setFullData(combinedData);
        setWizardStep(3);
      }
    }
  };
  
  // Go back to previous step
  const goToPreviousStep = () => {
    if (wizardStep > 1) {
      setWizardStep(wizardStep - 1);
    }
  };
  
  // Handle final submission
  const handleSubmit = () => {
    console.log('Submitting full data:', fullData);
    // Here you would typically send this data to your API
    
    // Close the modal
    onClose();
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
        />
      );
    } else if (wizardStep === 3 && fullData) {
      return (
        <ReviewStep 
          fullData={fullData}
          goToPreviousStep={goToPreviousStep}
          handleSubmit={handleSubmit}
        />
      );
    } else {
      return <p>Carregando informações...</p>;
    }
  };

  return (
    <div className="modal-overlay-zinix" onClick={onClose}>
      <div className="modal-content-zinix wizard-modal" onClick={(e) => e.stopPropagation()}>

        <div class="site-branding__inner">
          <a href="" rel="home" class="site-branding__logo">
          <img src="https://saas.zinix.com.br/sites/default/files/zinix%20logo.png" alt="Início" fetchpriority="high">
        </a>

        <button className="modal-close-zinix" onClick={onClose}>×</button>
        
        {/* Progress indicator */}
        <ProgressIndicator wizardStep={wizardStep} />
        
        {/* Render the current step */}
        {renderStep()}
      </div>
    </div>
  );
}

export default Modal;
