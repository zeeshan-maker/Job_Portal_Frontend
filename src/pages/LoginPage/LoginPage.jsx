import "./LoginPage.css"
import {Link} from "react-router-dom";
import registerImage from "../../assets/register.svg";
import { useState } from "react";

function LoginPage() {
   const [formData, setFormData] = useState({
      email: "",
      password: "",

    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("##333",formData)
  };
  return (
    <div className="d-flex align-items-center justify-content-center py-lg-4">
       <div className="d-flex box">
        <div className="right-box">
          <img src={registerImage} className="img-fluid" alt="" />
       </div> 
        <div className="left-box">
          <form onSubmit={handleSubmit} className="mb-3">
           {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

           {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-end mb-3">
            <Link to="/forget-password">Forgot Your Password?</Link>
          </div>

           {/* Submit */}
          <button type="submit" className="register-button w-100">
            Login
          </button>
          </form>
          <p className="text-center">Dont't Have An Account? 
            <Link to="/register"> Register Now</Link></p>
        </div>
   
       </div>
    </div>
  )
}

export default LoginPage
