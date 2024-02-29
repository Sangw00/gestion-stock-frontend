import React, { useState } from 'react';
import categoryService from '../categoryService';

export default function AddCategory() {
    const [category, setCategory] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update the category state directly with form values
            setCategory({
                name: e.target.name.value,
                description: e.target.description.value
            });

            // Pass category state directly to addCategory
            const resp = await categoryService.addCategory(category);
            console.log(resp);

            // Reset form after successful submission
            e.target.reset();
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    return (
        <div>
            <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="card">
                        <div className="card-header color text-light">New Category</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name="name" required/>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" name="description" required/>
                            </div>
                            <button type="submit" className="btn btn-outline-light color pt-2">Add</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
