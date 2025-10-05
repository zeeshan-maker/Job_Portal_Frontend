import { Link } from "react-router-dom"
import logo from "../../assets/logo.PNG"
import "./Footer.css"
function Footer() {
  return (
    <>
    <hr className="hr"/>
    <div className="container-fluid pb-lg-5 footer">
      <div className="row px-4">
        <div className="col-lg-3">
          <img src={logo} alt="" className="img-fluid" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo sint eos ipsa, excepturi voluptate beatae odio quos earum error nihil, incidunt quod dolorem libero sed magnam natus,</p>
        </div>
        <div className="col-lg-3">
          <h4>Technology</h4>
          <Link className="footer-link">Search for Job</Link>
          <Link className="footer-link">Browser Jobs</Link>
          <Link className="footer-link">Browser Companies</Link>
          <Link className="footer-link">Career Advice</Link>
        </div>
        <div className="col-lg-3">
          <h4>Employers</h4>
          <Link className="footer-link">Post Jobs</Link>
          <Link className="footer-link">Source Talent</Link>
          <Link className="footer-link">Employer & Advertising</Link>
          <Link className="footer-link">Hiring Events</Link>
        </div>
        <div className="col-lg-3">
          <h4>Company</h4>
          <Link className="footer-link">About Us</Link>
          <Link className="footer-link">Medis</Link>
          <Link className="footer-link">Work at HireMe</Link>
          <Link className="footer-link">Contact Us</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
