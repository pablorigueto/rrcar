import React from 'react';
import { formatCurrency, vehiclePrice } from '../utils/formatters';

function VehicleFormStep({ 
  editableData, 
  handleInputChange, 
  errors, 
  goToNextStep, 
  onClose 
}) {
  return (
    <div className="wizard-step-content">
      {/* <h2>Detalhes do Veículo</h2> */}
      
      <form className="vehicle-info-form" onSubmit={(e) => e.preventDefault()}>
        {/* Hidden field for site name */}
        <input 
          type="hidden" 
          id="siteName" 
          name="siteName" 
          value={editableData.siteName || window.location.origin} 
        />
        
        <div className="form-group">
          <label htmlFor="title">Título:<span className="required">*</span></label>
          <input 
            type="text" 
            id="title" 
            value={editableData.title || ''} 
            onChange={(e) => handleInputChange('title', e.target.value)}
            className={`car-name-field form-control ${errors.title ? 'input-error' : ''}`}
          />
          {errors.title && <div className="error-message">{errors.title}</div>}
        </div>
        
        <div className='space-between'>
          <div className="form-group">
            <label htmlFor="price">Preço:<span className="required">*</span></label>
            <input 
              type="text" 
              id="price" 
              value={editableData.price || ''} 
              onChange={(e) => {
                handleInputChange('price', formatCurrency(e.target.value));
              }}
              className={`form-control ${errors.price ? 'input-error' : ''}`}
              placeholder="0,00"
            />
            {errors.price && <div className="error-message">{errors.price}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="down_payment">Entrada:<span className="required">*</span></label>
            <input 
              type="text" 
              id="down_payment" 
              value={editableData.down_payment || ''} 
              onChange={(e) => {
                handleInputChange('down_payment', formatCurrency(e.target.value));
              }}
              className={`form-control ${errors.down_payment ? 'input-error' : ''}`}
              placeholder="0,00"
            />
            {errors.down_payment && <div className="error-message">{errors.down_payment}</div>}
          </div>
        </div>

        <div className="details-grid-editable">
          <div className="form-group">
            <label htmlFor="make">Montadora:<span className="required">*</span></label>
            <input 
              type="text" 
              id="make" 
              value={editableData.make || ''} 
              onChange={(e) => handleInputChange('make', e.target.value)}
              className={`form-control ${errors.make ? 'input-error' : ''}`}
            />
            {errors.make && <div className="error-message">{errors.make}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="model">Modelo:<span className="required">*</span></label>
            <input 
              type="text" 
              id="model" 
              value={editableData.model || ''} 
              onChange={(e) => handleInputChange('model', e.target.value)}
              className={`form-control ${errors.model ? 'input-error' : ''}`}
            />
            {errors.model && <div className="error-message">{errors.model}</div>}
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
            <label htmlFor="year">Ano:<span className="required">*</span></label>
            <input 
              type="text" 
              id="year" 
              value={editableData.year || ''} 
              onChange={(e) => handleInputChange('year', e.target.value)}
              className={`form-control ${errors.year ? 'input-error' : ''}`}
            />
            {errors.year && <div className="error-message">{errors.year}</div>}
          </div>
          
          {/* <div className="form-group">
            <label htmlFor="plate">Placa:</label>
            <input 
              type="text" 
              id="plate" 
              value={editableData.plate || ''} 
              onChange={(e) => handleInputChange('plate', e.target.value)}
              className="form-control"
            />
          </div> */}
          
          <div className="form-group">
            <label htmlFor="condition">Condição:<span className="required">*</span></label>
            <select 
              id="condition" 
              value={editableData.condition || ''} 
              onChange={(e) => handleInputChange('condition', e.target.value)}
              className={`form-control ${errors.condition ? 'input-error' : ''}`}
            >
              <option value="">Selecione</option>
              <option value="NOVO">NOVO</option>
              <option value="USADO">USADO</option>
              <option value="SEMINOVO">SEMINOVO</option>
            </select>
            {errors.condition && <div className="error-message">{errors.condition}</div>}
          </div>

          <div className="form-group site-info">
            <small>Site: {editableData.siteName || window.location.origin }</small>
          </div>

        

          <div className="image-relative-div">
            <div className="absolute">
              <div className="flex-div">
                <p>{editableData.title}</p>
              </div>
              <div className="flex-div">
              <p>
                {editableData.transmission}
              </p>
              </div>
              <div className="flex-div">
                <p>
                  {vehiclePrice(editableData.price)}
                </p>
              </div>
            </div>
            <div className='car-image-simulator'>
              <img
                src={editableData.carImage}
                alt={editableData.title}
              />
            </div>
          </div>

        </div>

        
        <div className="modal-actions">
          <button type="button" className="btn-cancel" onClick={onClose}>Cancelar</button>
          <button type="button" className="btn-next" onClick={goToNextStep}>Continuar</button>
        </div>
      </form>
    </div>
  );
}

export default VehicleFormStep;
