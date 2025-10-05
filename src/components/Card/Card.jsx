import "./Card.css"
import google from "../../assets/google.png"
import { FaBookmark, FaRegBookmark,FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card px-3 py-4">
      <div className="d-flex justify-content-between align-items-center">
        <img src={google} alt="" className="img-fluid company-logo" />
        <span className="bookmark">
            <FaRegBookmark size={20} color="gray" />
        </span>
      </div><hr/>
      <h5 className="mb-3">Product Designer</h5>
      <div className="d-flex justify-content-between mb-3">
        <span>
            <FaMapMarkerAlt size={22} className="me-1 text-danger" />
            {"Jakarta, Indonesia"}
          </span>
          <span>
            <FaBriefcase size={22} className="me-1 text-primary" />
            {"Full-time"}
          </span>
      </div>
        <div className="d-flex justify-content-between mb-3">
            <span>Salary</span>
            <span>15000/month</span>
        </div>
        <div className="d-flex gap-4 justify-content-between">
            <button className="btn btn-outline-success w-50">Apply</button>
            <Link className="w-50 btn btn-outline-primary"> Learn More</Link>
        </div>

    </div>
  )
}

export default Card
