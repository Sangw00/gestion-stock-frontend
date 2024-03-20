import axios from 'axios';
import authService from './authService';
const BASE_BACKEND_URL = 'http://127.0.0.1:8000/api';

export default {
  getAllCategories: () => 
    axios.get(`${BASE_BACKEND_URL}/categories`, { 
      headers: {
        'Authorization': 'Bearer ' + authService.getToken()
      } 
    }), 
  addCategory: (category) => 
    axios.post(`${BASE_BACKEND_URL}/categories/new/store`, { 
      headers: {
        'Authorization': 'Bearer ' + authService.getToken()
      } 
    }),
  showCategory: (categoryId) =>
    axios.get(`${BASE_BACKEND_URL}/categories/${categoryId}/show`, { 
      headers: {
        'Authorization': 'Bearer ' + authService.getToken()
      } 
    }),
  updateCategory: (categoryId, category) => 
    axios.put(`${BASE_BACKEND_URL}/categories/${categoryId}/edit/update`, { 
      headers: {
        'Authorization': 'Bearer ' + authService.getToken()
      } 
    }), 
  deleteCategory: (categoryId) =>
    axios.delete(`${BASE_BACKEND_URL}/categories/${categoryId}/delete`, { 
      headers: {
        'Authorization': 'Bearer ' + authService.getToken()
      } 
    }),
};
