import "./Hero.css"
import { MdSearch } from "react-icons/md";
const Hero = () => {
  return (
    <div className="container-fluid">
      <div className="hero d-flex align-items-center justify-content-center">
       <div className="text-center bg">
         <h1 className="masked-heading fade-in">Modernizing the Job <br/>Search Experience</h1>
         <h6 className="py-lg-4 py-3 masked-heading-2">Search and find your dream job now easier then ever, you can <br/> simply browse and find a job if you need it</h6>

          <form className="d-flex px-lg-5">
            <div  className="input-group position-relative">
            <input type="text" 
            className="form-control me-2 rounded-5" 
            placeholder="Search for a Job..."
            />
             <MdSearch className="search-icon" size={30} />
            </div>
            <button className="button1 rounded-5 px-4">Search</button>
          </form>
          
       </div>
      </div>
    </div>
  )
}

export default Hero
