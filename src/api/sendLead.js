// src/api/sendLead.js

// import axios from 'axios';

// export const sendLead = async (data) => {
//   try {

//     const protocol = window.location.protocol;
//     const host = window.location.host;
//     const pathname = '/data/api.php'; // New pathname to merge.
//     // Create the new URL without query parameters
//     const newURL = `${protocol}//${host}${pathname}`;

//     //const response = await axios.post(newURL, data);
//     // const response = await axios.post('http://127.0.0.1/rrcar/api.php', data);
//     // const response = await axios.post('https://saas.zinix.com.br/pt-br/simulacoes/0/0', data);

//     const response = await axios.post('https://zinix.lndo.site/pt-br/simulator/0/0', data);

//     console.log(response);

//     return response.data;
//   } catch (error) {
//     console.error('Erro ao enviar lead:', error);
//     throw error;
//   }
// };


import axios from 'axios';

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

    console.log(encodeURIComponent(queryString));

    // Executa a solicitação GET com a query string
    const response = await axios.get(`https://zinix.lndo.site/pt-br/simulator?data=${encodeURIComponent(queryString)}`);
    
    console.log(response);

    return response.data;
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

