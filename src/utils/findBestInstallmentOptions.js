export function findBestInstallmentOptions(data) {
  const installmentsOptions = [12, 24, 36, 48, 60];
  const results = {};

  installmentsOptions.forEach((months) => {
    let lowestValue = null;
    let bestBank = null;
    
    data.forEach((bank) => {
      // Verifica se installments_details existe
      if (!bank.installments_details) return;
      
      const installmentKey = `installments_${months}`;
      const installment = bank.installments_details[installmentKey];
      
      // Verifica se a opção de parcelamento existe e não é nula
      if (installment && installment.first_installment_value !== null) {
        if (lowestValue === null || installment.first_installment_value < lowestValue) {
          lowestValue = installment.first_installment_value;
          bestBank = bank.bank_name;
        }
      }
    });

    // Verifica se encontrou uma opção válida
    results[months] = bestBank ? { bank: bestBank, value: lowestValue } : 'Não há opções disponíveis de financiamento';
  });

  return results;
}