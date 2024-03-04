import React, { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import authService from '../authService';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [token, setToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await authService.login(formData);
      console.log(resp);
      setToken(resp.token); // Assuming the response contains a token
      // Optionally, you can redirect the user to another page upon successful login
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingEmail" label="Email address" className="m-5">
        <Form.Control type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} />
      </FloatingLabel>
      <FloatingLabel className="m-5" controlId="floatingPassword" label="Password">
        <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      </FloatingLabel>
      <button className="btn btn-outline-light color" type='submit'>Login</button>
    </form>
  );
}

// export default Login;