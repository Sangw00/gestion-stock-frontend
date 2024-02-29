import axios from 'axios';
const BASE_BACKEND_URL = 'http://127.0.0.1:8000/api'

export default {
  getAllProducts: () => 
    axios.get(`${BASE_BACKEND_URL}/products`),
  addProduct: (product) => 
    axios.post(`${BASE_BACKEND_URL}/products/new/store`, product),
  showProduct: (productId) =>
    axios.get(`${BASE_BACKEND_URL}/products/${productId}/show`),
  editProduct: (productId) =>
    axios.get(`${BASE_BACKEND_URL}/products/${productId}`),
  updateProduct: (productId,product) =>
    axios.put(`${BASE_BACKEND_URL}/products/${productId}/edit/update`, product),
  deleteProduct: (productId) =>
    axios.delete(`${BASE_BACKEND_URL}/products/${productId}`),
}