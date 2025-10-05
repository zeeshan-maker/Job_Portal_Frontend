import { useState } from "react";
import Card from "../../components/Card/Card";
function JobsPage() {
     const [categories, setCategories] = useState([
        {name:"Programming"},
         {name:"Data Science"}, 
         {name:"Networking"},
         {name:"Markiting"},
    
        ]);
  return (
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
          <div className="row">
            <div className="col-lg-4 mb-3"><Card/></div>
          <div className="col-lg-4 mb-3"><Card/></div>
          <div className="col-lg-4 mb-3"><Card/></div>
          <div className="col-lg-4 mb-3"><Card/></div>
          <div className="col-lg-4 mb-3"><Card/></div>
          <div className="col-lg-4 mb-3"><Card/></div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default JobsPage
