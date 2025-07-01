import React, { useState } from 'react';
import { formatPhone } from '../utils/formatters';
import CarImageComponent  from './CarImageComponent';

import Estados from '../estado/estados';
import { getCidadesPorEstado } from '../estado/estadosSwitch';

import Select from 'react-select';

function CustomerFormStep({ 
  customerInfo, 
  handleCustomerInfoChange, 
  errors, 
  goToNextStep, 
  goToPreviousStep,
  editableData
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

  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [cidadeSelecionado, setCidadeSelecionado] = useState('');
  const [cidades, setCidades] = useState([]);

  const estadoOptions = Object.entries(Estados).map(([sigla, nome]) => ({
    value: sigla,
    label: nome,
  }));

  const cidadeOptions = Object.entries(cidades).map(([key, nome]) => ({
    value: key,
    label: nome,
  }));

  // Função para pegar o objeto option do estado baseado no valor armazenado no customerInfo.state (que é string)
  const selectedEstadoOption = estadoOptions.find(option => option.value === customerInfo.state) || null;

  // Para cidades também, mesmo método (mas só se cidades estiver carregado)
  const selectedCidadeOption = cidadeOptions.find(option => option.value === customerInfo.city) || null;

  // Atualize handleEstadoChange para chamar handleCustomerInfoChange também
  const handleEstadoChange = (selectedOption) => {
    const estadoSelecionado = selectedOption ? selectedOption.value : '';
    setEstadoSelecionado(selectedOption || null);  // Guarde o objeto para o Select

    handleCustomerInfoChange('state', estadoSelecionado);

    if (estadoSelecionado) {
      const cidadesDoEstado = getCidadesPorEstado(estadoSelecionado);
      setCidades(cidadesDoEstado);
      setCidadeSelecionado(null); // reseta cidade selecionada pois o estado mudou
      handleCustomerInfoChange('city', ''); // limpa cidade no customerInfo
    } else {
      setCidades([]);
      setCidadeSelecionado(null);
      handleCustomerInfoChange('city', '');
    }
  }

  const handleCidadeChange = (selectedOption) => {
    const cidadeSelecionada = selectedOption ? selectedOption.value : '';
    setCidadeSelecionado(selectedOption || null);
    handleCustomerInfoChange('city', cidadeSelecionada);
  }


  return (
    <div className="wizard-step-content">
      
      <div className='best-installment-main-card'>

        <CarImageComponent
          title={editableData.title}
          transmission={editableData.transmission}
          price={editableData.price}
          carImage={editableData.carImage}
        />

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
                <option value="M" default>Masculino</option>
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
                onChange={(e) => {
                  const formattedValue = formatPhone(e.target.value);
                  handleCustomerInfoChange('phone', formattedValue);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && customerInfo.phone.endsWith('-')) {
                    e.preventDefault();
                    const newValue = customerInfo.phone.slice(0, -1);
                    handleCustomerInfoChange('phone', newValue);
                  }
                }}
                className={`form-control ${errors.phone ? 'input-error' : ''}`}
                placeholder="(00) 00000-0000"
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
              <Select
                id="state" 
                options={estadoOptions}
                value={selectedEstadoOption}
                onChange={handleEstadoChange}
                className="form-control"
                placeholder="Estado"
              />
              <label>Estado</label>
              {errors.estado && <p>{errors.estado.message}</p>}
            </div>
            
            <div className="form-group">
              <Select
                id="city" 
                options={cidadeOptions}
                value={selectedCidadeOption}
                onChange={handleCidadeChange}
                placeholder="Cidade"
                className="form-control"
              />
              <label>Cidade</label>
              {errors.cidade && <p>{errors.cidade.message}</p>}
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
          
        </form>

      </div>

      <div className="modal-actions">
        <button type="button" className="btn-back" onClick={goToPreviousStep}>Voltar</button>
        <button type="button" className="btn-next" onClick={goToNextStep}>Simular</button>
      </div>

    </div>
  );
}

export default CustomerFormStep;