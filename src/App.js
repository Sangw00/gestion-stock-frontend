import React from 'react';
import './App.css';
import AllProducts from "./components/AllProducts";
import AllCategory from "./components/AllCategory";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import AddCategory from './components/AddCategory';
import DetailProduct from './components/DetailProduct';
import DetailCategory from './components/DetailCategory';
import EditCategory from './components/EditCategory';
import EditProduct from './components/EditProduct';
import Register from './components/Register';
import Login from './components/Login';
import {Container,Row,Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
function App() {
  return (
    <div className="App p-5">
      
      <Router>
      <Container>
       <aside className='color'>
          <Col >
        <Nav sticky="top" >
            <li  >
              <Link className="nav-link text-white" to="/"><span className="material-symbols-outlined">home</span></Link>
            </li>
            <li  >
              <Link className="nav-link text-white" to="/products">Products</Link>
            </li>
            <li  >
              <Link className="nav-link text-white" to="/categories">Categories</Link>
            </li>
          </Nav>
            </Col>
        </aside>
        </Container>

        <Routes>
          <Route path="/products" element={<AllProducts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/new/store" element={<AddProduct />} />
          <Route path="/products/:id/show" element={<DetailProduct/>} />
          <Route path="/products/:id/edit/update" element={<EditProduct/>} />
          <Route path="/categories" element={<AllCategory/>} />
          <Route path="/categories/new/store" element={<AddCategory/>} />
          <Route path="/categories/:id/show" element={<DetailCategory/>} />
          <Route path="/categories/:id/edit/update" element={<EditCategory/>} />
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
