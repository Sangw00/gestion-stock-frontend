
import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import authService from '../authService';


function Auth(){
   
    const isAuthenticated = authService.isAuthenticated();
    const userName = authService.getUserName();
  
    if (isAuthenticated) {
      return <p>Hello {userName}</p>;
    } else {
      return (
        <div>
          <Link className="nav-link text-secondary" to="/register">Register</Link>
          <Link className="nav-link text-secondary" to="/login">Login</Link>
        </div>
      );
    }
  
   
    
}

export default Auth;