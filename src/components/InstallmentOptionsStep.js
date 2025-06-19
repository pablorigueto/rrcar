// components/InstallmentOptionsStep.jsx
import React, { img } from 'react';
import BestInstallmentCards from './BestInstallmentCards';

const InstallmentOptionsStep = ({ 
  sanitizedData,
  goToPreviousStep,
  submitResponse,
  isSubmitting,
  submitError,
 }) => {
  // Você já sanitizou, então só rodar o findBestInstallmentOptions:
  // (Você pode importar direto caso já tenha rodado antes)
  // import findBestInstallmentOptions from '../utils/findBestInstallmentOptions';
  // const bestOptions = findBestInstallmentOptions(sanitizedData);

  // Supondo que o sanitizedData JÁ é o retorno da função findBestInstallmentOptions!

  return (
    <div>

      {isSubmitting ? "Realizando Simulação..." : ""}
      {submitError && <p style={{color: 'red'}}>{submitError}</p>}

      {/* {submitResponse && (
        <div>
          <h4>Resposta da API:</h4>
          <pre>{JSON.stringify(submitResponse, null, 2)}</pre>
        </div>
      )} */}

      <h2>Melhor opção de financiamento encontrada</h2>
      <BestInstallmentCards bestOptions={submitResponse}/>

      <div
        className="teste"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <div
          className="absolute"
          style={{
            position: 'absolute',
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
            color: '#fff'
          }}
        >
          <p>FIAT PALIO WK ADVEN DUAL 2011</p>
          <p
            style={{
              margin: '5px 329px 5px 8px'
            }}
          >
            Semi-automático
          </p>
          <p
            style={{
              margin: '5px 370px 5px 8px'
            }}
          >
            R$ 34.900,00
          </p>
        </div>
        <img
          src="https://s3.carro57.com.br/FC/8116/6899216_0_G_ca86b825c4.jpeg"
          alt="FIAT PALIO WK ADVEN DUAL 2011"
          style={{
            width: '97%',
            borderRadius: 5,
            margin: '0 auto'
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
        <button type="button" className="btn-back" onClick={goToPreviousStep}>Voltar</button>
      </div>

    </div>
  );
};

export default InstallmentOptionsStep;
