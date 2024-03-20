import React, { useState, useEffect } from 'react';
import categoryService from '../categoryService';
import { useParams,Link } from 'react-router-dom';

export default function EditCategory() {
    const { id } = useParams();
    const [category, setCategory] = useState({ name: '', description: '' });

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const fetchedCategory = await categoryService.getCategory(id);
                setCategory(fetchedCategory);
            } catch (error) {
                console.error('Error fetching category:', error);
            }
        };

        fetchCategory();
    }, [id]);

    const handleChange = (e) => {
        // Update the specific field of the category state
        setCategory({
            ...category,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(category);
            // Update category data with the new values
            await categoryService.updateCategory(id, category); // Pass category object to updateCategory function
            console.log('Category updated successfully');
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    return (
        <div>
            <form encType="multipart/x-www-form-urlencoded" onSubmit={handleSubmit}>
            <div className="container p-5">
                    <div className="card">
                        <div className="card-header color text-light">Edit Category</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name="name" value={category.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group ">
                                <label>Description</label>
                                <input type="text" className="form-control" name="description" value={category.description} onChange={handleChange} required />
                            </div>
                            <button className="btn btn-outline-light color  " ><Link to={`/categories`} ><span className="material-symbols-outlined link-light ">cancel</span>
                  </Link></button>
                        <button type="submit" className="btn btn-outline-light color p-2">Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
