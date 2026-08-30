import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container py-3">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary border border-bottom fixed-top p-3"
        style={{
          backgroundColor: "#fff",
          display: "flex",
          flexWrap: "inherit",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img
              src="Media\images\logo.svg"
              alt="logo"
              style={{ width: "25%" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="d-flex">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to={"Signup"}>
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to={"About"}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to={"Products"}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to={"Pricing"}>
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to={"Support"}>
                    Support
                 </Link> 
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
