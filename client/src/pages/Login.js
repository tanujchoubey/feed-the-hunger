import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="ngo-login">
          <img
            src="https://savioursfoundation.org/wp-content/uploads/2021/01/ngo-1024x768.jpg"
            alt=""
            width={800}
          />
          <div className="center-ngo">
            <Link to="ngoLogin">NGO Login</Link>
          </div>
        </div>
        <div className="restro-login">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6053751d2b9e3a557fca0abc/e2907107-0709-4104-b765-6e6a56f9074e/DSCF9415.jpg"
            alt=""
            width={800}
          />
          <div className="center-restro">
            <Link to="restroLogin">Restro Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login