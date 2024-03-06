import React, { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import authService from '../authService';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(formData);
      const token = response.data.token;
      const name = response.data.name;
      authService.storeToken(token); 
      authService.storeUserName(name); 
      navigate('/');
      window.location.reload(); 
      console.log("token",token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form method='POST' encType="multipart/form-data" onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingEmail" label="Email address" className="m-5">
          <Form.Control type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} />
        </FloatingLabel>
        <FloatingLabel className="m-5" controlId="floatingPassword" label="Password">
          <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        </FloatingLabel>
        <button className="btn btn-outline-light color" type='submit'>Login</button>
      </form>
    </div>
  );
}
