import axios from 'axios';

axios.defaults.baseURL = 'https://backendapi.rewardcon.com/';
if (process.env.NODE_DEV === 'production') {
  axios.defaults.baseURL = 'https://backendapi.rewardcon.com/';
}

const api = axios.create({
  baseURL: axios.defaults.baseURL,
  withCredentials: true,
});

export default api;
