import React, { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import authService from '../authService';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await authService.register(formData);
      console.log("token",resp.data.token);
      // Clear form fields
      setFormData({
        name: '',
        email: '',
        password: '',
  
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form method='POST' encType="multipart/form-data" onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingName" label="Name" className="m-5">
        <Form.Control type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingEmail" label="Email address" className="m-5">
        <Form.Control type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} />
      </FloatingLabel>
      <FloatingLabel className="m-5" controlId="floatingPassword" label="Password">
        <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      </FloatingLabel>
      <FloatingLabel className="m-5" controlId="floatingConfirmPassword" label="Password confirmation">
        <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
      </FloatingLabel>
      <button className="btn btn-outline-light color" type='submit'>Register</button>
    </form>
  );
}
