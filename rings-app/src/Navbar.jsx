import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Guide from "./pages/Guide";
import About from "./pages/About";
import { useState } from "react";

export function Navbar() {
  const [page, setPage] = useState(null);
  function setGuide() {
    setPage(<Guide />);
  }

  function setAbout() {
    setPage(<About />);
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
        </div>

        <div className="navbar-item">
          <button onClick={setAbout} className="button">
            About
          </button>
        </div>
      </nav>
      <div>{page}</div>
    </>
  );
}

export default Navbar;
