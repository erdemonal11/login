import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "../features/userSlice";
import "../App.css";



const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    
    e.preventDefault();
    dispatch(logout());
    
    
  };

  return (
    <div className="text">
      <h1>Welcome, {user.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;