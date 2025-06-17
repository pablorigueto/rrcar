export function findBestInstallmentOptions(data) {
  const installmentsOptions = [12, 24, 36, 48, 60];
  const results = {};

  // Primeiro encontra um banco com valores válidos de parcelas
  const bankWithValidInstallments = data.find(bank => {
    if (!bank.installments_details) return false;
    
    // Verifica se tem pelo menos uma parcela com valor válido
    return Object.values(bank.installments_details).some(installment => 
      installment && installment.first_installment_value
    );
  });

  // Se não encontrou nenhum banco com parcelas válidas
  if (!bankWithValidInstallments) {
    installmentsOptions.forEach(months => {
      results[months] = 'Não há opções disponíveis de financiamento';
    });
    return results;
  }

  // Se encontrou um banco válido, usa ele para todas as opções
  installmentsOptions.forEach(months => {
    const installmentOption = bankWithValidInstallments.installments_details[`installments_${months}`];
    
    results[months] = {
      bank: bankWithValidInstallments.bank_name,
      value: installmentOption?.first_installment_value || null
    };
  });

  return results;
}