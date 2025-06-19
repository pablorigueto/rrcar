// components/InstallmentOptionsStep.jsx
import React, { img } from 'react';
import BestInstallmentCards from './BestInstallmentCards';
import { vehiclePrice } from '../utils/formatters';

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
      {console.log('sanitizedData: ', sanitizedData)}
      {isSubmitting ? "Realizando Simulação..." : ""}
      {submitError && <p style={{color: 'red'}}>{submitError}</p>}

      {/* {submitResponse && (
        <div>
          <h4>Resposta da API:</h4>
          <pre>{JSON.stringify(submitResponse, null, 2)}</pre>
        </div>
      )} */}

      <h2>Melhor opção de financiamento encontrada</h2>
      <div className='best-installment-main-card'>
        <BestInstallmentCards bestOptions={submitResponse}/>

        <div className="image-relative-div">
          <div className="absolute">
            <div className="flex-div">
              <p>{sanitizedData.vehicle.title}</p>
            </div>
            <div className="flex-div">
            <p>
              {sanitizedData.vehicle.transmission}
            </p>
            </div>
            <div className="flex-div">
              <p>
                {vehiclePrice(sanitizedData.vehicle.price)}
              </p>
            </div>
          </div>
          <div className='car-image-simulator'>
            <img
              src="https://s3.carro57.com.br/FC/8116/6899216_0_G_ca86b825c4.jpeg"
              alt="FIAT PALIO WK ADVEN DUAL 2011"
            />
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
        <button type="button" className="btn-back" onClick={goToPreviousStep}>Voltar</button>
      </div>

    </div>
  );
};

export default InstallmentOptionsStep;
