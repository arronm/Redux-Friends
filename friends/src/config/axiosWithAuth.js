import axios from 'axios';

export const axiosWithAuth = () => {
  const authToken = localStorage.getItem('authToken');
  return axios.create({
    headers: {
      Authorization: authToken,
    }
  });
};
