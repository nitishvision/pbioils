import axios from 'axios';

const BASE_URL = 'https://server.visionvivante.com/don-mobile/wp-json/v1';

export const getSocialData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/social`);
    return response.data;
  } catch (error) {
    console.error('Error fetching social data:', error);
    throw error;
  }
};
