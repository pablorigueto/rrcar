import React from 'react';

function CustomerFormStep({ 
  customerInfo, 
  handleCustomerInfoChange, 
  errors, 
  goToNextStep, 
  goToPreviousStep 
}) {
  // Handle date formatting for birthDate field
  const handleDataNascimentoChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) value = value.replace(/^(\d{2})(\d)/, '$1/$2');
    if (value.length > 5) value = value.replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
    
    // Maximum length for DD/MM/YYYY is 10 characters
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    
    handleCustomerInfoChange('birthDate', value);
  };

  return (
    <div className="wizard-step-content">
      <h2>Seus Dados</h2>
      
      <form className="customer-info-form" onSubmit={(e) => e.preventDefault()}>
        <div className="details-grid-editable">
          <div className="form-group">
            <label htmlFor="cpfCnpj">CPF ou CNPJ:<span className="required">*</span></label>
            <input 
              type="text" 
              id="cpfCnpj" 
              value={customerInfo.cpfCnpj} 
              onChange={(e) => handleCustomerInfoChange('cpfCnpj', e.target.value)}
              className={`form-control ${errors.cpfCnpj ? 'input-error' : ''}`}
              placeholder="CPF ou CNPJ"
            />
            {errors.cpfCnpj && <div className="error-message">{errors.cpfCnpj}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="gender">Gênero:</label>
            <select 
              id="gender" 
              value={customerInfo.gender} 
              onChange={(e) => handleCustomerInfoChange('gender', e.target.value)}
              className="form-control"
            >
              <option value="">Gênero</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="O">Outro</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="fullName">Nome Completo:<span className="required">*</span></label>
            <input 
              type="text" 
              id="fullName" 
              value={customerInfo.fullName} 
              onChange={(e) => handleCustomerInfoChange('fullName', e.target.value)}
              className={`form-control ${errors.fullName ? 'input-error' : ''}`}
              placeholder="Nome Completo"
            />
            {errors.fullName && <div className="error-message">{errors.fullName}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Telefone:<span className="required">*</span></label>
            <input 
              type="tel" 
              id="phone" 
              value={customerInfo.phone} 
              onChange={(e) => handleCustomerInfoChange('phone', e.target.value)}
              className={`form-control ${errors.phone ? 'input-error' : ''}`}
              placeholder="Telefone"
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">E-mail:<span className="required">*</span></label>
            <input 
              type="email" 
              id="email" 
              value={customerInfo.email} 
              onChange={(e) => handleCustomerInfoChange('email', e.target.value)}
              className={`form-control ${errors.email ? 'input-error' : ''}`}
              placeholder="E-mail"
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="birthDate">Data de Nascimento:</label>
            <input 
              type="text" 
              id="birthDate" 
              value={customerInfo.birthDate} 
              onChange={handleDataNascimentoChange}
              className="form-control"
              placeholder="DD/MM/AAAA"
              maxLength="10"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="state">Estado:</label>
            <select 
              id="state" 
              value={customerInfo.state} 
              onChange={(e) => handleCustomerInfoChange('state', e.target.value)}
              className="form-control"
            >
              <option value="">Estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="city">Cidade:</label>
            <input 
              type="text" 
              id="city" 
              value={customerInfo.city} 
              onChange={(e) => handleCustomerInfoChange('city', e.target.value)}
              className="form-control"
              placeholder="Cidade"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="hasCNH">Possui CNH?</label>
            <select 
              id="hasCNH" 
              value={customerInfo.hasCNH} 
              onChange={(e) => handleCustomerInfoChange('hasCNH', e.target.value)}
              className="form-control"
            >
              <option value="">Possui CNH?</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
        </div>
        
        <div className="modal-actions">
          <button type="button" className="btn-back" onClick={goToPreviousStep}>Voltar</button>
          <button type="button" className="btn-next" onClick={goToNextStep}>Revisar</button>
        </div>
      </form>
    </div>
  );
}

export default CustomerFormStep;