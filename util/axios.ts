import axios from 'axios';

axios.defaults.baseURL = 'http://20.38.46.151:8080';
axios.defaults.withCredentials = true;

export default axios;
