import React, { useEffect, useState } from 'react';
import categoryService from '../categoryService';
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
function DetailCategory() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const resp = await categoryService.showCategory(id);
        setData(resp.data);
        console.log(resp.data.products.image);
      } catch (error) {
        console.error('Failed to fetch category:', error);
      }
    };

    fetchCategory();
  }, [id]);

  return (
    <div className='p-5 '>
      {data ? (
        <div>
         
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className=" borderg btn-outline-light">
              <h1>{data.category}</h1>
                <Button className=" color borderg btn-outline-light">
                  products <Badge bg="light" text="secondary">{data.number}</Badge>
                </Button>
              </Accordion.Header>
              <Accordion.Body>

                
            
      
        
          <Carousel className="color borderg btn-outline-light mr-3">
            {data.products && data.products.length > 0 ? (
              data.products.map(product => (
                <Carousel.Item key={product.id}>
                  <div>
                    <img src={product.image}></img>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                  </div>
                </Carousel.Item>
              ))
            ) : (
              <Carousel.Item>
                <p>No products available for this category</p>
              </Carousel.Item>
            )}
          </Carousel>              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DetailCategory;
