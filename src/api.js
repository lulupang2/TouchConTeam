import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
if (process.env.NODE_DEV === 'production') {
  axios.defaults.baseURL = '';
}

const api = axios.create({
  baseURL: axios.defaults.baseURL,
  withCredentials: true,
});

export default api;
