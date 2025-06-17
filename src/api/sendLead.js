import axios from 'axios';
// Import the function from the utils directory
import { findBestInstallmentOptions } from '../utils/findBestInstallmentOptions';

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

    // console.log(encodeURIComponent(queryString));

    try {
      // Supondo que queryString esteja corretamente inicializado
      const response = await axios.get(`https://zinix.lndo.site/pt-br/simulator?data=${encodeURIComponent(queryString)}`);

      const data = JSON.parse(response.data[0]);
      console.log( 'data: ', data);

      const bestOptions = findBestInstallmentOptions(data);

      console.log(bestOptions);

      // Certifique-se de checar se jsonString é uma string válida
      if (response) {
        console.log(data);
      } else {
        console.error("Dados inválidos na resposta.");
      }
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }

  } catch (error) {
    console.error('Erro ao enviar lead:', error);
    throw error;
  }
};
// // src/api/sendLead.js

// import axios from 'axios';

// export const sendLead = async (data) => {
//   try {

//     const response = await axios.post('https://zinix.lndo.site/pt-br/simulator', data);
    
//     console.log(response);

//     return response.data;
//   } catch (error) {
//     console.error('Erro ao enviar lead:', error);
//     throw error;
//   }
// };

