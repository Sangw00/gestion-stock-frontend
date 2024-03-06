import axios from 'axios';
import authService from './authService';

const BASE_BACKEND_URL = 'http://127.0.0.1:8000/api';

const productService = {
  getAllProducts: () =>
    axios.get(`${BASE_BACKEND_URL}/products`, {
      headers: {
        Authorization: 'Bearer ' + authService.getToken(),
      },
    }),

  addProduct: (product) =>
    axios.post(`${BASE_BACKEND_URL}/products/new/store`, product, {
      headers: {
        Authorization: 'Bearer ' + authService.getToken(),
      },
    }),

  showProduct: (productId) =>
    axios.get(`${BASE_BACKEND_URL}/products/${productId}/show`, {
      headers: {
        Authorization: 'Bearer ' + authService.getToken(),
      },
    }),

  editProduct: (productId) =>
    axios.get(`${BASE_BACKEND_URL}/products/${productId}`, {
      headers: {
        Authorization: 'Bearer ' + authService.getToken(),
      },
    }),

  updateProduct: (productId, product) =>
    axios.put(`${BASE_BACKEND_URL}/products/${productId}/edit/update`, product, {
      headers: {
        Authorization: 'Bearer ' + authService.getToken(),
      },
    }),

  deleteProduct: (productId) =>
    axios.delete(`${BASE_BACKEND_URL}/products/${productId}`, {
      headers: {
        Authorization: 'Bearer ' + authService.getToken(),
      },
    }),
};

export default productService;

