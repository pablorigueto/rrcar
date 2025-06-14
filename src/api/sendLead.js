// src/api/sendLead.js

import axios from 'axios';

export const sendLead = async (data) => {
  try {

    const protocol = window.location.protocol;
    const host = window.location.host;
    const pathname = '/data/api.php'; // New pathname to merge.
    // Create the new URL without query parameters
    const newURL = `${protocol}//${host}${pathname}`;

    //const response = await axios.post(newURL, data);
    const response = await axios.post('http://127.0.0.1/rrcar/api.php', data);

    return response.data;
  } catch (error) {
    console.error('Erro ao enviar lead:', error);
    throw error;
  }
};

