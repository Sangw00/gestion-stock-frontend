import React, {useEffect,useState} from 'react';
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
import DeleteProduct from './components/DeleteProduct';
import Register from './components/Register';
import Login from './components/Login';
import Auth from './components/Auth';
import Logout from './components/Logout';
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
 
  return (
    <div className="App p-5 borderg">
      
      <Router>
    
<Navbar className="color text-secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand  className="text-secondary">
          <Auth/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-secondary-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown>
              <NavDropdown.Item >     
                <Link className="nav-link text-secondary" to="/"><span className="material-symbols-outlined">home</span></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link text-secondary" to="/products">Products</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
               <Link className="nav-link text-secondary" to="/categories">Categories</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">
                <Link className="nav-link text-secondary" to="/logout"><span className="material-symbols-outlined">logout</span></Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 

        <Routes>
          <Route path="/products" element={<AllProducts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/products/new/store" element={<AddProduct />} />
          <Route path="/products/:id/show" element={<DetailProduct/>} />
          <Route path="/products/:id/delete" element={<DeleteProduct/>} />
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
