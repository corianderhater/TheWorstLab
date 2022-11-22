import React from "react";
import "../index.scss";

function About() {
  return (
    <>
      <div className="guide-container">
        <div className="guide-item">
          <h1>Hi,</h1>
          <p>A little about us.</p>
        </div>
        <div className="guide-item guide-scroll">
          <h3>Two Frineds.</h3>
          <p>One likes to manufacture jewelry. Another likes weird shapes.</p>
          <h3>Hand-made.</h3>
          <p>
            One shapes material with hands (in Gdańsk, Poland). Another shapes
            algorithms with hands (in Barcelona, Spain).
          </p>
          <h3>Experiment to wear.</h3>
          <p>
            Once, we just imagined things differently. Next, we just did it.
          </p>
          <p>-</p>
          <p>Yours, MassMess x YLC</p>
        </div>
      </div>
    </>
  );
}

export default About;
