/**
 * Recebe um array de propostas (banks), verifica se pre_approval_status >= 2,
 * e retorna o banco com menor parcela média entre installments_12 e installments_60.
 * Caso todas as opções sejam null, retorna o texto padrão.
 */

function findBestInstallmentOptions(data) {

  console.log('findBestInstallmentOptions(data)', data);

  // As propostas parecem vir em data[0], conforme a imagem
  const proposals = Array.isArray(data) ? data[0] : [];

  let bestBank = null;
  let lowestInstallmentValue = null;

  proposals.forEach((bank) => {
    if (bank.pre_approval_status >= 2 && bank.installments_details) {
      // Procurar em todas as opções (de 12 a 60)
      const options = Object.values(bank.installments_details);

      // Array de first_installment_value válidos (não null)
      const validInstallmentValues = options
        .filter(opt => opt && opt.first_installment_value != null)
        .map(opt => opt.first_installment_value);

      if (validInstallmentValues.length > 0) {
        // Obtém o menor valor de parcela desse banco
        const minValue = Math.min(...validInstallmentValues);

        // Verifica se é a menor até aqui
        if (lowestInstallmentValue === null || minValue < lowestInstallmentValue) {
          lowestInstallmentValue = minValue;
          bestBank = bank;
        }
      }
    }
  });

  if (!bestBank) {
    return "não há opções de financiamento disponiveis";
  }

  // Pode customizar o objeto retornado conforme necessidade
  return {
    bank_name: bestBank.bank_name,
    bank_nickname: bestBank.bank_nickname,
    bank_id: bestBank.bank_id,
    lowestInstallmentValue,
    installments_details: bestBank.installments_details
  };
}

export default findBestInstallmentOptions;