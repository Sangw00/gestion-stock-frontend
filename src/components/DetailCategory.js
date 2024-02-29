import React, { useEffect, useState } from 'react';
import categoryService from '../categoryService';
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function DetailCategory() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const resp = await categoryService.showCategory(id);
        setData(resp.data);
      } catch (error) {
        console.error('Failed to fetch category:', error);
      }
    };

    fetchCategory();
  }, [id]);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.category}</h1>
          <Button className="color borderg">
      products <Badge text="light">{data.number}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
          {data.products && data.products.length > 0 ? (
            data.products.map(product => (
              <div key={product.id}>
                <h1>product{product.name}</h1>
                <p>{product.description}</p>
              </div>
            ))
          ) : (
            <p>No products available for this category</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailCategory;
