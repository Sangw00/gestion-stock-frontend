import axios from 'axios';

const BASE_BACKEND_URL = 'http://127.0.0.1:8000/api';

export default {
  getAllCategories: () => 
    axios.get(`${BASE_BACKEND_URL}/categories`),
  addCategory: (category) => 
    axios.post(`${BASE_BACKEND_URL}/categories/new/store`, category),
  showCategory: (categoryId) =>
    axios.get(`${BASE_BACKEND_URL}/categories/${categoryId}/show`),
  updateCategory: (categoryId, category) => 
    axios.put(`${BASE_BACKEND_URL}/categories/${categoryId}/edit/update`, category), 
  deleteCategory: (categoryId) =>
    axios.delete(`${BASE_BACKEND_URL}/categories/${categoryId}`),
};
