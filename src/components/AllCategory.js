import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import categoryService from '../categoryService'; 

export default function AllCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories")
      .then(response => {
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      });
    }, []); 
    
    console.log("Categories:", categories);
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await categoryService.getAllCategories();
          setCategories(response.data.categories);
          console.log("data:", response);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        alert('Failed to fetch products.');
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="App p-5 ">
<div className=" d-md-inline-flex ">
<p>All categories</p>
<a href="/categories/new/store" className="btn btn-outline-light color"><span className="material-symbols-outlined">
add
</span> </a>
</div>

<div className="borderg App p-5 " >    
      <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { categories && categories.length > 0 ? (
              categories.map(category => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>
                   <Link to={`/categories/${category.id}/edit/update`} className="btn btn-outline-light color">
                      <span className="material-symbols-outlined">edit</span>
                   </Link>
                  </td>
                  <td>
                    <button type="submit" className="btn btn-outline-light color">
                      <a href="*">
                        <span className="material-symbols-outlined">delete</span>
                      </a>
                    </button>
                  </td>
                  <td>
                  <Link to={`/categories/${category.id}/show`} className="btn btn-outline-light color">
                  <span className="material-symbols-outlined">info</span>
                   </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No categories available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
