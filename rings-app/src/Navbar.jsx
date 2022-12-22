import React from "react";
import "./index.scss";
import Guide from "./pages/Guide";
import About from "./pages/About";
import { useState } from "react";

export function Navbar() {
  const [page, setPage] = useState(null);
  const [isActive, setActive] = useState(0);

  function setGuide() {
    setActive(1);
    setPage(<Guide />);
  }

  function setAbout() {
    setActive(2);
    setPage(<About />);
  }

  function setClean() {
    setActive(0);
    setPage(null);
  }
  console.log(isActive);

  return (
    <>
      <nav>
        <div className="navbar-item">
          <button
            onClick={setClean}
            className={`button ${isActive === 0 ? " button-selected" : ""}`}
          >
            Rings
          </button>
        </div>

        <div className="navbar-item">
          <button
            onClick={setGuide}
            className={`button ${isActive === 1 ? " button-selected" : ""}`}
          >
            Guide
          </button>
        </div>

        <div className="navbar-item">
          <button
            onClick={setAbout}
            className={`button ${isActive === 2 ? " button-selected" : ""}`}
          >
            About
          </button>
        </div>
      </nav>
      <div>{page}</div>
    </>
  );
}

export default Navbar;
