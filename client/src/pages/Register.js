import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestroRegister from "./RestroRegister";

const Register = () => {
  return (
    <>
      <div className="register">
        <div className="ngo-register">
          <img
            src="https://savioursfoundation.org/wp-content/uploads/2021/01/ngo-1024x768.jpg"
            alt=""
            width={800}
          />
          <div className="center-ngo">
            <Link to="ngoRegister">NGO Register</Link>
          </div>
        </div>
        <div className="restro-register">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6053751d2b9e3a557fca0abc/e2907107-0709-4104-b765-6e6a56f9074e/DSCF9415.jpg"
            alt=""
            width={800}
          />
          <div className="center-restro">
            <Link to="restroRegister">Restro Register</Link>
          </div>
        </div>
      </div>

      <Routes>
        
      </Routes>
    </>
  );
};

export default Register;
