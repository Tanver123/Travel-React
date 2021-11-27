import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  const { signInUsingGoogle } = useAuth();

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="login__area d-flex align-items-center py-5">
      <div className="mx-auto">
        <h2>Please Login</h2>

        <button onClick={handleGoogleLogin} className="btn primary__btn">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
