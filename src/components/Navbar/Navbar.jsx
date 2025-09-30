import { Link } from "react-router-dom";
import logo from "../../assets/logo.PNG"
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

        <Link className="navbar-brand fw-bold" to="/">
        <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Jobs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/companies">Companies</Link>
            </li>
          </ul>
        </div> */}

        <ul className="navbar-nav">
           <Link className="nav-link me-3" to="/login">Login</Link>
            <Link className="button1" to="/recruiter">Recruiter</Link>
        </ul>
       

      </div>
    </nav>
  );
}

export default Navbar;
