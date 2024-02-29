import React, { useState, useEffect } from 'react';
import productService from '../productService';
import categoryService from '../categoryService';

export default function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const resp = await categoryService.getAllCategories();
        setCategories(resp.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(image)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      formData.append('name', e.target.name.value);
      formData.append('description', e.target.description.value);
      formData.append('image', image);
      formData.append('price', e.target.price.value);
      formData.append('category_id', e.target.category_id.value);
  

      const resp = await productService.addProduct(formData);

      // Frontend validation for image file type
      if (!image) {
        setErrorMessage('Please upload an image file.');
        return;
      }


      
      console.log(resp);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
      <div className="container">
        <div className="card">
          <div className="card-header color text-light">New Product</div>
          <div className="card-body">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" name="name" required />
            </div>

            <div className="form-group">
              <label>Description</label>
              <input type="text" className="form-control" name="description" required />
            </div>

            <div className="form-group">
              <label>Image</label>
              <input type="file" className="form-control" name="image" accept="image/*" onChange={handleImageChange} required />
              {errorMessage && <div className="text-danger">{errorMessage}</div>}
            </div>

            <div className="form-group">
              <label>Price</label>
              <input type="number" className="form-control" name="price" required />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select className="form-select" name="category_id" required>
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-outline-light color pt-2">Add</button>
          </div>
        </div>
      </div>
    </form>
  );
}
