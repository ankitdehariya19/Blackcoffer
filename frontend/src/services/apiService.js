// src/services/apiService.js
const BASE_URL = 'http://localhost:8000/api';

const apiService = {
  fetchData: async () => {
    try {
      const response = await fetch(`${BASE_URL}/dashboard`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export default apiService;
