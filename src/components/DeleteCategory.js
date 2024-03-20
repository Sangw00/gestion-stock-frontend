import React from 'react';
import categoryService from '../categoryService';
import { useNavigate, useParams } from 'react-router-dom';


function DeleteCategory(){
const { id } = useParams(); 
const navigate = useNavigate();

  const handleDelete = async () => {
    try {
        const response = await categoryService.deleteCategory(id);
        console.log(response.data);
        navigate('/products');
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    React.useEffect(() => {
        handleDelete();
      }, []);
      return null;
}

export default DeleteCategory;