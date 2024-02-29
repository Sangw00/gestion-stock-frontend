
import React, { useState,useEffect} from 'react';
import productService from '../productService'; 
import { Link } from 'react-router-dom';

function AllProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resp = await productService.getAllProducts();
        setProducts(resp.data.products);
        console.log("Products:", resp.data.products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        alert('Failed to fetch products.');
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="App  p-5">
<div className=" d-md-inline-flex ">
    <p>All products</p>
<a href="/products/new/store" className="btn btn-outline-light color"><span class="material-symbols-outlined">
add
</span> </a>
</div>
   
<div className="borderg  p-5 " >    
      <table className="table table-hover">
        <thead>
          <tr>
          
            <th>name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { products.length >0 ? (
            products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>
                  <Link to={`/products/${product.id}/edit/update`} className="btn btn-outline-light color">

                    <span className="material-symbols-outlined">edit</span>
                  </Link>
                </td>
                <td>
                  <button  className="btn btn-outline-light color">
                      <span className="material-symbols-outlined">delete</span>
                          </button>
                </td>
                <td>
                <Link to={`/products/${product.id}/show`} className="btn btn-outline-light color">
                  <span className="material-symbols-outlined">info</span>
                   </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
    </div>
   
 
  );

}

export default AllProducts;


