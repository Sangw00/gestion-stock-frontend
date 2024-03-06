import axios from 'axios';

const BASE_BACKEND_URL = 'http://127.0.0.1:8000/api';

const authService = {
  storeToken(token) {
    localStorage.setItem('accessToken', token);
  },

  getToken() {
    return localStorage.getItem('accessToken');
  },
  removeToken(){
    return localStorage.removeItem("accessToken");
  },
  storeUserName(name) {
    localStorage.setItem('name', name);
  },

  getUserName() {
    return localStorage.getItem('name');
  },
  removeName(){
    return localStorage.removeItem("name");
  },
  register: function (user) {
    return axios.post(`${BASE_BACKEND_URL}/register`, user);
  },

  login: function (user) {
    return axios.post(`${BASE_BACKEND_URL}/login`, user);
  },

  logout: function () {
    return axios.post(
      `${BASE_BACKEND_URL}/logout`,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + this.getToken(),
        },
      }
    );
  },

  isAuthenticated: function () {
    return !!this.getToken(); // Convert token to boolean
  },
};

export default authService;
