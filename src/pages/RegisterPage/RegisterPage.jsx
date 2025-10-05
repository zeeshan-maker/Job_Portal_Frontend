import { useState } from "react"
import "./RegisterPage.css"
import registerImage from "../../assets/register.svg";
import {Link, useNavigate} from "react-router-dom";
import { register } from "../../service/auth";
import { toast } from "react-toastify";
function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "seeker",
  });

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(formData)
      toast.success(res.message)
      navigate("/login")
      setFormData({
         name: "",
          email: "",
         password: "",
      })
    } catch (error) {
      toast.error(error.response.data.error || "Server Error")
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center py-lg-4">
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
