// components/InstallmentOptionsStep.jsx
import React from 'react';
import BestInstallmentCards from './BestInstallmentCards';

const InstallmentOptionsStep = ({ sanitizedData, goToPreviousStep, handleSubmit }) => {
  // Você já sanitizou, então só rodar o findBestInstallmentOptions:
  // (Você pode importar direto caso já tenha rodado antes)
  // import findBestInstallmentOptions from '../utils/findBestInstallmentOptions';
  // const bestOptions = findBestInstallmentOptions(sanitizedData);

  // Supondo que o sanitizedData JÁ é o retorno da função findBestInstallmentOptions!

  return (
    <div>
      <h2>Melhor opção de financiamento encontrada</h2>
      <BestInstallmentCards bestOptions={sanitizedData} />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
        <button onClick={goToPreviousStep}>Voltar</button>
        <button onClick={handleSubmit}>Finalizar</button>
      </div>
    </div>
  );
};

export default InstallmentOptionsStep;
