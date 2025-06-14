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
    gender: '',
    fullName: '',
    phone: '',
    email: '',
    birthDate: '',
    state: '',
    city: '',
    hasCNH: ''
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
      setEditableData({ 
        ...vehicleData,
        siteName: currentSiteName 
      });
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
