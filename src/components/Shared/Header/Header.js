import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../logos/Group 1329.png";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light mt-4">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="" width="150" height="40" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
              <Link className="nav-link" to="/donation">
                Donation
              </Link>
              <Link className="nav-link" to="/events">
                Events
              </Link>
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
              {user.email && (
                <span
                  className="d-flex justify-content-center align-items-center bolded fw-bold"
                  style={{ color: "gray" }}
                >
                  Hello, {user.displayName}{" "}
                </span>
              )}
              {user.email ? (
                <button
                  onClick={logOut}
                  className="btn btn-primary nav-link text-white ms-1 px-3"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary nav-link text-white ms-1 px-3">
                    Register
                  </button>
                </Link>
              )}
              <Link to="/services">
                <button className="btn btn-dark nav-link text-white ms-3 px-3">
                  Admin
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
