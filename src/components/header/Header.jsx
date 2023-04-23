import React from "react";
//import blob from "../images/blob.svg";
import "./Header.css";
import { Navigate } from "react-router-dom";
import { Link, useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()

  const handleLogout=()=>{
    localStorage.removeItem("user")
    navigate("/login2");
  }

  return (
  <>
  <div className="redbox">
  Connect Jamia
  <button className="logout" onClick={handleLogout}>Logout</button>
  </div>;
  </>
  )
};

export default Header;
