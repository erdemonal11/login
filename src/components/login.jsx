import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectError } from "../features/userSlice";
import "../App.css";

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <div className="text">
      <div className="login">
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <h1>Login here 🚪</h1>
          <input
            className="login_form"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            className="login_form"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
