import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "./slices/userSlice";


export const useDispatcher = () => {
  const dispatch = useDispatch();
 
  const loginUser = async (data) => {
       dispatch(loginSuccess(data));
      localStorage.setItem("token", data.token);
  };

 
  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  
  return {
    loginUser,
    logoutUser,
  };
};
