import { useState } from "react"
import "./RegisterPage.css"
import registerImage from "../../assets/register.svg";
import {Link} from "react-router-dom";
function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "jobseeker",
  });

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("##333",formData)
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
       <div className="d-flex box">
        <div className="left-box">
          <h4>Welcom To HireMe</h4>
          <p>Please fill your personal details</p>
          <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
              <label htmlFor="" className="form-label">Full Name</label>
              <input  
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              />
            </div>

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

           {/* Submit */}
          <button type="submit" className="register-button w-100">
            Create an account
          </button>
          </form>
          <p className="text-center">Already have an account? 
            <Link to="/login">LogIn</Link></p>
        </div>

        {/* right side  */}
        <div className="right-box">
          <img src={registerImage} className="img-fluid" alt="" />
       </div>    
       </div>
    </div>
  )
}

export default RegisterPage
