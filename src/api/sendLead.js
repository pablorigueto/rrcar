import axios from 'axios';
// Import the function from the utils directory
// import findBestInstallmentOptions from '../utils/findBestInstallmentOptions';
import findBestInstallmentOptions from '../utils/findBestInstallmentOptions';
import BestInstallmentCards from '../components/BestInstallmentCards';

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
      const { data } = await axios.get(
        'https://zinix.lndo.site/pt-br/simulator',
        { params: { data: queryString } }
      )

      // 2) data === [ [ banco1, banco2, …, banco6 ] ]
      //    quero só a array interna de 6 items:
      // const proposals = data

      // 3) agora eu só loggo esse array de 6 objetos
      // console.log('proposals:', proposals)

      // return proposals;

      // const bestOptions = findBestInstallmentOptions(proposals);

      return findBestInstallmentOptions(data);


    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }

  } catch (error) {
    console.error('Erro ao enviar lead:', error);
    throw error;
  }
};
