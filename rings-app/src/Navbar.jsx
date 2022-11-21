import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-item">
        <Link className="link" to="/">
          <button className="button">Collections</button>
        </Link>
      </div>

      {/* <div className="navbar-item">
        <Link className="link" to="/gallery">
          <button className="button">Gallery</button>
        </Link>
      </div> */}

      <div className="navbar-item">
        <Link className="link" to="/collections">
          <button className="button">Tips</button>
        </Link>
      </div>

      <div className="navbar-item">
        <Link className="link" to="/collections">
          <button className="button">Why?</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
