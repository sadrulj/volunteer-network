import React from "react";
import icon from "../../../logos/google.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/register";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <div
        className="card text-center mx-auto mt-5"
        style={{ width: "28rem", height: "18rem" }}
      >
        <div className="card-body bg-body rounded">
          <h5 className="card-title mt-5 bold fs-2 bg-body">Login with</h5>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline-primary rounded-pill mt-3 px-5"
          >
            <img className=" bg-transparent" width="25" src={icon} alt="" />
            <small className="bg-transparent ms-3 text-dark ">
              Continue with Google
            </small>
          </button>
          <p className="bg-body mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="bg-body">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
