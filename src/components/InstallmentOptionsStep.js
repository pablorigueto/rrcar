// components/InstallmentOptionsStep.jsx
import React from 'react';
import BestInstallmentCards from './BestInstallmentCards';

const InstallmentOptionsStep = ({ 
  sanitizedData,
  goToPreviousStep,
  handleSubmit,
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

      <button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>

      {submitError && <p style={{color: 'red'}}>{submitError}</p>}

      {submitResponse && (
        <div>
          <h4>Resposta da API:</h4>
          <pre>{JSON.stringify(submitResponse, null, 2)}</pre>
        </div>
      )}

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
