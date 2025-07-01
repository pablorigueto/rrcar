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
              {/* <div className='card-individual-bank'>Banco ******</div> */}
              <div className='background-installment'>
                <div className='installment-time'>
                  <span className='installment-quantity'>
                    {option.installments}x
                  </span>
                  <span className='installment-value font-600'>
                    {maskCurrency(option.first_installment_value)}
                  </span>
                  <span className='down-payment'>
                    <span className='font-600'>Entrada</span> <span className='green-color font-600'>{maskCurrency(option.down_payment)}</span>
                  </span>
                </div>
                <div className='installment-fees'>
                  <span>{option.interest_monthly ? option.interest_monthly.toFixed(2) : '--'}% a.m.</span>
                  
                  <span>{option.interest_annually ? option.interest_annually.toFixed(2) : '--'}% a.a.</span>
                </div>
              </div>
              {/* <button className='card-individual-action-button'>Quero essa!</button> */}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default BestInstallmentCards;