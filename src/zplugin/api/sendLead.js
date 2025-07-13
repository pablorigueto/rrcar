import axios from 'axios';
// Import the function from the utils directory
import findBestInstallmentOptions from '../utils/findBestInstallmentOptions';

export const sendLead = async (data) => {

  try {
    // Cria uma lista para armazenar os valores
    const values = [];

    // Adiciona os valores, incluindo os dos objetos aninhados
    for (const key in data) {
      if (typeof data[key] === 'object') {
        for (const subKey in data[key]) {
          values.push(data[key][subKey]);
        }
      } else {
        values.push(data[key]);
      }
    }

    // Cria a string de consulta com os valores separados por vírgula
    const queryString = values.join(',');

    try {
      // Supondo que queryString esteja corretamente inicializado
      //https://saas.zinix.com.br/pt-br/simulator
      //https://zinix.lndo.site/pt-br/simulator',
      const { data } = await axios.get(
        'https://zinix.lndo.site/pt-br/simulator',
        { params: { data: queryString } }
      )

      // console.log(data);
      return findBestInstallmentOptions(data);


    } catch (error) {
      console.log(data);
      console.error("SendLEAD - Erro ao buscar os dados:", error);
    }

  } catch (error) {
    console.error('Erro ao enviar lead:', error);
    throw error;
  }
};
