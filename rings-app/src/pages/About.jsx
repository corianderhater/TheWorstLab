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
          <h3 className="guide-title">
            We like calling it Heuristic jewellery
          </h3>
          <p>
            Heuristic: <br />
            <em>
              Allowing to learn by discovering things [shapes] themselves and
              learning from their own experiences rather than by telling them
              things
            </em>
            <br />
            <i>Definition from Cambridge Dictionary</i>
          </p>
          <h3>It is a collaboration</h3>
          <p>
            Liquid Candy takes care of manufacturing. MassMess is programming
            the weird shapes and the weird website.
          </p>
          <h3>It is all hand-made</h3>
          <p>
            One shapes material with hands (in Gdańsk, Poland). Another shapes
            algorithms with hands (in Barcelona, Spain).
          </p>
          <h3>Experiment to wear</h3>
          <p>Once, we just imagined things differently. And we just did it.</p>
          <p>
            <i>
              Hugs, <br />
              MassMess x Liquid Candy
            </i>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
