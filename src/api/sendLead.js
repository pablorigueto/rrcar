// src/api/sendLead.js

import axios from 'axios';

export const sendLead = async (data) => {
  try {
    const response = await axios.post('https://seu-endpoint-aqui/api/lead', data);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar lead:', error);
    throw error;
  }
};

