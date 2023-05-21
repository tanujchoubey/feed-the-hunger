import React from "react";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="navigation">
          <div className="left">
            <Link to="/home">Home</Link>
          </div>
          <div className="left">
            <Link to="/services">Services</Link>
            <Link to="/story">Story</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
