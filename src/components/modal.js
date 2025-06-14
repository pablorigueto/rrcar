// Modal.js
import React, { useState, useEffect } from 'react';
import '../styles/modal.css';

function Modal({ isOpen, onClose, vehicleData }) {
  // State to store editable vehicle data
  const [editableData, setEditableData] = useState({});
  
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
  
  // Handle input changes
  const handleInputChange = (field, value) => {
    setEditableData({
      ...editableData,
      [field]: value
    });
  };
  
  // Handle save/submit
  const handleSave = () => {
    // Here you can add logic to save the updated data
    console.log('Saving updated vehicle data:', editableData);
    // You could call an API here or pass the data back to the parent component
    
    // Close the modal
    onClose();
  };

  return (
    <div className="modal-overlay-zinix" onClick={onClose}>
      <div className="modal-content-zinix" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-zinix" onClick={onClose}>×</button>
        <h2>Detalhes do Veículo</h2>
        
        {vehicleData ? (
          <form className="vehicle-info-form" onSubmit={(e) => e.preventDefault()}>
            {/* Hidden field for site name */}
            <input 
              type="hidden" 
              id="siteName" 
              name="siteName" 
              value={editableData.siteName || window.location.hostname} 
            />
            
            <div className="form-group">
              <label htmlFor="title">Título:</label>
              <input 
                type="text" 
                id="title" 
                value={editableData.title || ''} 
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="form-control"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="price">Preço:</label>
              <input 
                type="text" 
                id="price" 
                value={editableData.price || ''} 
                onChange={(e) => handleInputChange('price', e.target.value)}
                className="form-control"
              />
            </div>
            
            <div className="details-grid-editable">
              <div className="form-group">
                <label htmlFor="make">Montadora:</label>
                <input 
                  type="text" 
                  id="make" 
                  value={editableData.make || ''} 
                  onChange={(e) => handleInputChange('make', e.target.value)}
                  className="form-control"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="model">Modelo:</label>
                <input 
                  type="text" 
                  id="model" 
                  value={editableData.model || ''} 
                  onChange={(e) => handleInputChange('model', e.target.value)}
                  className="form-control"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="color">Cor:</label>
                <input 
                  type="text" 
                  id="color" 
                  value={editableData.color || ''} 
                  onChange={(e) => handleInputChange('color', e.target.value)}
                  className="form-control"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="fuel">Combustível:</label>
                <select 
                  id="fuel" 
                  value={editableData.fuel || ''} 
                  onChange={(e) => handleInputChange('fuel', e.target.value)}
                  className="form-control"
                >
                  <option value="">Selecione</option>
                  <option value="FLEX">FLEX</option>
                  <option value="GASOLINA">GASOLINA</option>
                  <option value="DIESEL">DIESEL</option>
                  <option value="ÁLCOOL">ÁLCOOL</option>
                  <option value="ELÉTRICO">ELÉTRICO</option>
                  <option value="HÍBRIDO">HÍBRIDO</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="transmission">Câmbio:</label>
                <select 
                  id="transmission" 
                  value={editableData.transmission || ''} 
                  onChange={(e) => handleInputChange('transmission', e.target.value)}
                  className="form-control"
                >
                  <option value="">Selecione</option>
                  <option value="Manual">Manual</option>
                  <option value="Automático">Automático</option>
                  <option value="CVT">CVT</option>
                  <option value="Semi-automático">Semi-automático</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="year">Ano:</label>
                <input 
                  type="text" 
                  id="year" 
                  value={editableData.year || ''} 
                  onChange={(e) => handleInputChange('year', e.target.value)}
                  className="form-control"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="plate">Placa:</label>
                <input 
                  type="text" 
                  id="plate" 
                  value={editableData.plate || ''} 
                  onChange={(e) => handleInputChange('plate', e.target.value)}
                  className="form-control"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="condition">Condição:</label>
                <select 
                  id="condition" 
                  value={editableData.condition || ''} 
                  onChange={(e) => handleInputChange('condition', e.target.value)}
                  className="form-control"
                >
                  <option value="">Selecione</option>
                  <option value="NOVO">NOVO</option>
                  <option value="USADO">USADO</option>
                  <option value="SEMINOVO">SEMINOVO</option>
                </select>
              </div>

            </div>
            
            {/* Optional: Display the site name (for debugging) */}
            <div className="form-group site-info">
              <small>Site: {editableData.siteName || window.location.hostname}</small>
            </div>
            
            <div className="modal-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>Cancelar</button>
              <button type="button" className="btn-save" onClick={handleSave}>Salvar</button>
            </div>
          </form>
        ) : (
          <p>Carregando informações do veículo...</p>
        )}
      </div>
    </div>
  );
}

export default Modal;