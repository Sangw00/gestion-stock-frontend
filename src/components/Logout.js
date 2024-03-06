import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../authService";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await authService.logout();
        authService.removeName();
        authService.removeToken();
        navigate("/");
        window.location.reload(); 
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    // Call the handleLogout function when the component mounts
    handleLogout();
  }, [navigate]);

  return <div></div>;
}

export default Logout;
