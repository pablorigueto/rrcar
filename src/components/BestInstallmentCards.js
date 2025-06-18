import React from 'react';

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

const BestInstallmentCards = ({ bestOptions }) => {

  console.log('bestOptions: ', bestOptions);


  if (
    !bestOptions ||
    !bestOptions.installments_details ||
    typeof bestOptions.installments_details !== 'object'
  ) {
    // Pode customizar a mensagem ou só retornar null
    return <div>Não há opções de financiamento disponíveis.</div>;
  }

  const { bank_name, bank_nickname, installments_details } = bestOptions;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
      {installmentList.map((key) => {
        // Checa se existe a opção antes de renderizar
        const option = installments_details[key];
        if (!option || option.first_installment_value == null) return null;

        return (
          <div 
            key={key}
            style={{
              border: '2px solid #10d09f',
              borderRadius: 10,
              width: 200,
              padding: 16,
              margin: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: '#fff'
            }}
          >
            <div style={{
              background: '#10d09f',
              color: '#fff',
              borderRadius: 8,
              padding: '2px 10px',
              fontWeight: 600,
              fontSize: 12,
              marginBottom: 10
            }}>
              PRÉ APROVADO
            </div>
            <div style={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: 6,
              fontSize: 15
            }}>{bank_name}</div>
            <div style={{
              background: '#ececec',
              borderRadius: 7,
              width: '100%',
              margin: '8px 0',
              padding: 5,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: 22, fontWeight: 700 }}>
                {option.installments}x
                <br />
                <span style={{ fontSize: 18, fontWeight: 500 }}>
                  de {maskCurrency(option.first_installment_value)}
                </span>
              </div>
              <div style={{ fontSize: 12, color: '#666', marginTop: 3 }}>
                cet: {option.monthly_rate ? option.monthly_rate.toFixed(2) : '--'}% / mês
              </div>
            </div>
            <button style={{
              marginTop: 8,
              background: '#222',
              color: '#fff',
              border: 'none',
              padding: '8px 0',
              fontWeight: 600,
              borderRadius: 6,
              width: '100%',
              fontSize: 17,
              cursor: 'pointer'
            }}>Quero essa!</button>
          </div>
        );
      })}
    </div>
  )
}

export default BestInstallmentCards;