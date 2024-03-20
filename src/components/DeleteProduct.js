import React from 'react';
import productService from '../productService';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
      try {
        const response = await productService.deleteProduct(id);
        console.log(response.data);
        navigate('/products');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Ensure the handleDelete function is called
  React.useEffect(() => {
    handleDelete();
  }, []);

  // You need to return something from the component, even if it's null
  return null;
};

export default DeleteProduct;
