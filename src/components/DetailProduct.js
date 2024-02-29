import React, { useEffect, useState } from 'react';
import productService from '../productService';
import { useParams } from 'react-router-dom'; // Import useParams

function DetailProduct() {
  const { id } = useParams(); // Use useParams to get the id parameter
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const resp = await productService.showProduct(id);
        setProduct(resp.data.product);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.id}</h1>
          <p>{product.name}</p>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailProduct;
