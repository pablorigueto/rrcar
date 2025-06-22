import React from 'react';
import '../styles/modal.css';

const installmentList = [
  'installments_12', 
  'installments_24', 
  'installments_36', 
  'installments_48', 
  'installments_60'
];

function maskCurrency(num) {
  return num.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
}

const BestInstallmentCards = ({
    bestOptions,
    isSubmitting 
  }) => {

  if (isSubmitting) {
    return <div className='pulsante textcentered'>Realizando Simulação...</div>;
  }

  if (
    !bestOptions ||
    !bestOptions.installments_details ||
    typeof bestOptions.installments_details !== 'object'
  ) {
    // Pode customizar a mensagem ou só retornar null
    return <div className='textcentered'>Não há opções de financiamento disponíveis.</div>;
  }

  const { bank_name, bank_nickname, installments_details } = bestOptions;

  return (
    <div className='best-installment-cards'>
      {installmentList.map((key) => {
        // Checa se existe a opção antes de renderizar
        const option = installments_details[key];
        if (!option || option.first_installment_value == null) return null;

        return (
          <div className='card-individual'>
            <div className='card-individual-border' 
              key={key}
            >
              <div className='card-individual-status'>
                PRÉ APROVADO
              </div>
              <div className='card-individual-bank'>Banco ******</div>
              <div className='background-installment'>
                <div className='installment-time'>
                  {option.installments}x
                  <br />
                  <span className='installment-value'>
                    {maskCurrency(option.first_installment_value)}
                  </span>
                </div>
                <div className='installment-fees'>
                  cet: {option.monthly_rate ? option.monthly_rate.toFixed(2) : '--'}% / mês
                </div>
              </div>
              <button className='card-individual-action-button'>Quero essa!</button>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default BestInstallmentCards;