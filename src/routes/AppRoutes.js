import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import JobsPage from "../pages/JobsPage/JobsPage";
function AppRoutes() {
  return (
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/jobs" element={<JobsPage/>}/>
   </Routes>
  )
}

export default AppRoutes
