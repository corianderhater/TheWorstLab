import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import GuideContent from "./Components/GuideContent";
import { useState } from "react";

export function Navbar() {
  const [page, setPage] = useState(null);
  function setGuide() {
    setPage(<GuideContent />);
  }

  function setClean() {
    setPage(null);
  }
  return (
    <>
      <nav>
        <div className="navbar-item">
          <button onClick={setClean} className="button">
            Rings
          </button>
        </div>

        <div className="navbar-item">
          <button onClick={setGuide} className="button">
            Guide
          </button>
          {/* <Guide /> */}
        </div>

        <div className="navbar-item">
          <Link className="link" to="/collections">
            <button className="button">About</button>
          </Link>
        </div>
      </nav>
      <div>{page}</div>
    </>
  );
}

export default Navbar;
