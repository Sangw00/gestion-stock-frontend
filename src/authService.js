import axios from 'axios';

const BASE_BACKEND_URL = 'http://127.0.0.1:8000/api';

export default {
 register: (user) => 
    axios.post(`${BASE_BACKEND_URL}/register`, user),
    login: (user) => 
    axios.post(`${BASE_BACKEND_URL}/login`, user),
};