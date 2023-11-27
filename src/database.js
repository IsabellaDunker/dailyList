import axios from 'axios';

const baseUrl = "https://s92jwwbki8.execute-api.us-east-2.amazonaws.com/task"
export const index = async(endpoint) => {
    try {
          const response = await axios.get(`${baseUrl}/${endpoint}`);
          return response.data;
      } catch (error) {
          console.error('Erro ao buscar dados do servidor:', error);
          throw error;
      }
}

export const getEvent = async (endpoint, id) => {
    try {
        const response = await axios.get(`${baseUrl}/${endpoint}/${id}`);
        return response;
    } catch (error) {
        console.error('Erro ao buscar dados do servidor por ID:', error);
        throw error;
    }
};

export const postEvent = async(endpoint, data) => {
    try {
        const response = await axios.post(`${baseUrl}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error('Erro ao enviar dados para o servidor:', data);
        throw error;
    }
}

export const putEvent = async (endpoint, data) => {
    try {
      const response = await axios.put(`${baseUrl}/${endpoint}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar dados para o servidor:', data);
      throw error;
    }
  };