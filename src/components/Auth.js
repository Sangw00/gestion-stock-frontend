
import React from 'react';
import {Link} from 'react-router-dom';
import authService from '../authService';
import Button from "./Button";

function Auth(){
   
    const isAuthenticated = authService.isAuthenticated();
    const userName = authService.getUserName();
  
    if (isAuthenticated) {
      return <p>Hello {userName}</p>;
    } else {
      return (
        <div>
         <Button name= {<Link  to="/register">Register</Link>}/> 
         <Button name= {<Link  to="/login">Login</Link>}/> 
 </div>
      );
    }
  
   
    
}

export default Auth;