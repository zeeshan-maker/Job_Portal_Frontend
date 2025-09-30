import Hero from "../../components/Hero/Hero";
import walmart from "../../assets/walmart_logo.svg";
import samsung from "../../assets/samsung_logo.png";
import accenture from "../../assets/accenture_logo.png";
import amazon from "../../assets/amazon_logo.png";
import adobe from "../../assets/adobe_logo.png";
import microsoft from "../../assets/microsoft_logo.svg";
import "./HomePage.css"
import { useState } from "react";
import Card from "../../components/Card/Card";

function HomePage() {
   const [categories, setCategories] = useState([
    {name:"Programming"},
     {name:"Data Science"}, 
     {name:"Networking"},
     {name:"Markiting"},

    ]);

  return (
    <div>
     <Hero/>
     <div className="container-fluid py-3">
      <div className="row py-3 company-container">
        <div className="col-lg-1">Trusted by</div>
        <div className="col-lg-1">
          <img src={microsoft} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-1">
          <img src={walmart} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-1">
          <img src={accenture} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-1">
          <img src={samsung} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-1">
          <img src={amazon} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-1">
          <img src={adobe} alt="" className="img-fluid" />
        </div>
      </div>
     </div>

     <div className="container-fluid py-lg-5 px-lg-4">
      <div className="row">
        <div className="col-lg-3">
          <h6>Search by Categories</h6>
           {categories?.map((cat) => (
            <div key={cat._id} className="form-check mt-3 mb-3">
              <input
                type="checkbox"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor={cat._id}>
                {cat.name}
              </label>
            </div>
          ))}
        
        <h6 className="mt-5">Search by Location</h6>
           {categories?.map((cat) => (
            <div key={cat._id} className="form-check mt-3 mb-3">
              <input
                type="checkbox"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor={cat._id}>
                {cat.name}
              </label>
            </div>
          ))}

          <h6 className="mt-5">Search by Location</h6>
           {categories?.map((cat) => (
            <div key={cat._id} className="form-check mt-3 mb-3">
              <input
                type="checkbox"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor={cat._id}>
                {cat.name}
              </label>
            </div>
          ))}
          
        </div>
        <div className="col-lg-9">
          <h3 className="mb-3">Latest jobs</h3>
          <h6 className="mb-5">Get your desired job from top companies</h6>
          <div className="row">
            <div className="col-lg-4 mb-3"><Card/></div>
            <div className="col-lg-4"><Card/></div>
            <div className="col-lg-4"><Card/></div>
            <div className="col-lg-4"><Card/></div>
            <div className="col-lg-4 mb-3"><Card/></div>
            <div className="col-lg-4"><Card/></div>
            <div className="col-lg-4"><Card/></div>
            <div className="col-lg-4"><Card/></div>
            <div className="col-lg-4"><Card/></div>
          </div>
        </div>
      </div>
     </div>

    </div>
  )
}

export default HomePage
