function findBestInstallmentOptions(data) {

  let proposals = [];

  // Se vier string, parse normal
  if (Array.isArray(data) && typeof data[0] === "string") {
    try {
      proposals = JSON.parse(data[0]);
      // TRATA CASO proposals seja (1) [Array(6)]
      if (Array.isArray(proposals) && proposals.length === 1 && Array.isArray(proposals[0])) {
        proposals = proposals[0];
      }
      // Também trata se tiver string dentro do array
      if (Array.isArray(proposals) && proposals.length && typeof proposals[0] === "string") {
        proposals = proposals.map(str => JSON.parse(str));
      }
    } catch (err) {
      return "Erro ao processar dados do financiamento.";
    }
  } else if (Array.isArray(data) && Array.isArray(data[0])) {
    // Também pode ser o caso
    proposals = data[0];
  } else if (Array.isArray(data)) {
    proposals = data;
  }

  // LOG DE DEPURAÇÃO
  // console.log('proposals', proposals);
  // console.log('typeof proposals', typeof proposals);
  // console.log('isArray proposals', Array.isArray(proposals));
  // console.log('proposals[0]', proposals[0]);
  // console.log('typeof proposals[0]', typeof proposals[0]);

  let bestBank = null;
  let lowestInstallmentValue = null;

  proposals = removeCentsFromProposals(proposals);

  // console.log('removeCentsFromProposals proposals', proposals);
  // console.log('removeCentsFromProposals typeof proposals', typeof proposals);
  // console.log('removeCentsFromProposals isArray proposals', Array.isArray(proposals));
  // console.log('removeCentsFromProposals proposals[0]', proposals[0]);
  // console.log('removeCentsFromProposals typeof proposals[0]', typeof proposals[0]);

  proposals.forEach((bank) => {
    if (bank.pre_approval_status >= 2 && bank.installments_details) {
      const options = Object.values(bank.installments_details);
      const validInstallmentValues = options
        .filter(opt => opt && opt.first_installment_value != null)
        .map(opt => opt.first_installment_value);

      if (validInstallmentValues.length > 0) {
        const minValue = Math.min(...validInstallmentValues);

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

  return {
    bank_name: bestBank.bank_name,
    bank_nickname: bestBank.bank_nickname,
    bank_id: bestBank.bank_id,
    lowestInstallmentValue,
    installments_details: bestBank.installments_details
  };
}

export default findBestInstallmentOptions;


function removeCentsFromProposals(proposals) {
  // Itera por cada banco/proposta
  proposals.forEach(bank => {
    if (bank.installments_details) {
      // Itera por cada opção de parcelamento
      Object.values(bank.installments_details).forEach(installment => {
        if (installment && typeof installment === "object") {
          // Divide os campos por 100, só se forem número
          if (typeof installment.down_payment === "number") {
            installment.down_payment = installment.down_payment / 100;
          }
          if (typeof installment.financed_amount === "number") {
            installment.financed_amount = installment.financed_amount / 100;
          }
          if (typeof installment.first_installment_value === "number") {
            installment.first_installment_value = installment.first_installment_value / 100;
          }
        }
      });
    }
  });
  return proposals; // retorna modificado
}