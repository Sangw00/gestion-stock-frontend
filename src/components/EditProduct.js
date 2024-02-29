import React, { useState, useEffect } from 'react';
import productService from '../productService';
import { useParams } from 'react-router-dom';
import categoryService from '../categoryService';

export default function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({ name: '', description: '', price: '', category_id: '' });
    const [image, setImage] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [categories, setCategories] = useState([]);

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

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', product.name);
            formData.append('description', product.description);
            formData.append('price', product.price);
            formData.append('category_id', product.category_id);
            formData.append('image', image);

            await productService.updateProduct(id, formData);
            console.log('Product updated successfully');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="container">
                <div className="card">
                    <div className="card-header color text-light">Edit Product</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" value={product.name} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" className="form-control" name="description" value={product.description} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Image</label>
                            <input type="file" className="form-control" name="image" accept="image/*" onChange={handleImageChange} required />
                            {errorMessage && <div className="text-danger">{errorMessage}</div>}
                        </div>

                        <div className="form-group">
                            <label>Price</label>
                            <input type="number" className="form-control" name="price" value={product.price} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Category</label>
                            <select className="form-select" name="category_id" value={product.category_id} onChange={handleChange} required>
                                <option value="">Select Category</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="btn btn-outline-light color pt-2">Update</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
