import Hero from "../../components/Hero/Hero";
import "./HomePage.css"
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
function HomePage() {
   

  return (
    <div>
     <Hero/>
     <div className="container-fluid py-lg-5 px-lg-4">
      <div className="row">
          <h3 className="mb-3">Latest jobs</h3>
          <h6 className="mb-5">Get your desired job from top companies</h6>
          <div className="text-end mb-3">
            <Link to="/jobs" className="btn btn-primary">View All Jobs</Link>
            </div>
            <div className="col-lg-3 mb-3"><Card/></div>
            <div className="col-lg-3"><Card/></div>
            <div className="col-lg-3"><Card/></div>
            <div className="col-lg-3"><Card/></div>
            <div className="col-lg-3 mb-3"><Card/></div>
            <div className="col-lg-3"><Card/></div>
            <div className="col-lg-3"><Card/></div>
            <div className="col-lg-3"><Card/></div>
            <div className="col-lg-3"><Card/></div>
            <div className="col-lg-3"><Card/></div>
            <div className="col-lg-3"><Card/></div>
            <div className="col-lg-3"><Card/></div>
          
      </div>
     </div>
    </div>
  )
}

export default HomePage
