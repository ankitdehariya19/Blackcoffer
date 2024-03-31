import { DASHBOARD_URL } from "../constants/routes";

const apiService = {
  fetchData: async () => {
    try {
      const response = await fetch(DASHBOARD_URL);
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
