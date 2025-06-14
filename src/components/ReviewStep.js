import React from 'react';

function ReviewStep({ fullData, goToPreviousStep, handleSubmit }) {
  return (
    <div className="wizard-step-content review-screen">
      <h2>Confirme suas Informações</h2>
      
      <div className="review-section">
        <h3>Dados do Veículo</h3>
        <div className="review-grid">
          <div className="review-item">
            <span className="review-label">Título:</span>
            <span className="review-value">{fullData.vehicle.title}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Preço:</span>
            <span className="review-value">{fullData.vehicle.price}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Montadora:</span>
            <span className="review-value">{fullData.vehicle.make}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Modelo:</span>
            <span className="review-value">{fullData.vehicle.model}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Ano:</span>
            <span className="review-value">{fullData.vehicle.year}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Cor:</span>
            <span className="review-value">{fullData.vehicle.color || "-"}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Combustível:</span>
            <span className="review-value">{fullData.vehicle.fuel || "-"}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Transmissão:</span>
            <span className="review-value">{fullData.vehicle.transmission || "-"}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Condição:</span>
            <span className="review-value">{fullData.vehicle.condition}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Placa:</span>
            <span className="review-value">{fullData.vehicle.plate || "-"}</span>
          </div>
        </div>
      </div>
      
      <div className="review-section">
        <h3>Seus Dados</h3>
        <div className="review-grid">
          <div className="review-item">
            <span className="review-label">CPF/CNPJ:</span>
            <span className="review-value">{fullData.customer.cpfCnpj}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Nome:</span>
            <span className="review-value">{fullData.customer.fullName}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Gênero:</span>
            <span className="review-value">
              {fullData.customer.gender === 'M' ? 'Masculino' : 
               fullData.customer.gender === 'F' ? 'Feminino' : 
               fullData.customer.gender === 'O' ? 'Outro' : '-'}
            </span>
          </div>
          <div className="review-item">
            <span className="review-label">Telefone:</span>
            <span className="review-value">{fullData.customer.phone}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Email:</span>
            <span className="review-value">{fullData.customer.email}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Data de Nascimento:</span>
            <span className="review-value">{fullData.customer.birthDate || "-"}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Estado:</span>
            <span className="review-value">{fullData.customer.state || "-"}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Cidade:</span>
            <span className="review-value">{fullData.customer.city || "-"}</span>
          </div>
          <div className="review-item">
            <span className="review-label">Possui CNH:</span>
            <span className="review-value">{fullData.customer.hasCNH || "-"}</span>
          </div>
        </div>
      </div>
      
      <div className="form-group site-info">
        <small>Site: {fullData.siteName}</small>
      </div>
      
      <div className="modal-actions">
        <button type="button" className="btn-back" onClick={goToPreviousStep}>Voltar</button>
        <button type="button" className="btn-submit" onClick={handleSubmit}>Confirmar</button>
      </div>
    </div>
  );
}

export default ReviewStep;
