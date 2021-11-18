import axios from 'axios';

axios.defaults.baseURL = 'http://3.35.210.171:5055/';
if (process.env.NODE_DEV === 'production') {
  axios.defaults.baseURL = 'http://3.35.210.171:5055/';
}

const api = axios.create({
  baseURL: axios.defaults.baseURL,
  withCredentials: true,
});

export default api;
