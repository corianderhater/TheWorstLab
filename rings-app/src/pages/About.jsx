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
          <h3 className="guide-title">MassMess's way</h3>
          <p>
            It is inifinite search for forms hidden in numeric complexities.
            Soldification of ephemeral algorithms and making them wearable is a
            part of the plan. Trying and failing is the base for every idea.
            Hundreds of lines of code, and hundreds of simulations are run
            before the final shape that you see on the screen, and can actually
            wear. Personal intuition bonds with curiosity to push myself, and
            the design a bit further.
          </p>
          <h3 className="guide-title">Let's call it Heuristic jewelry</h3>
          <p>
            Heuristic: <br />
            <em>
              Allowing to learn by discovering things [shapes] themselves and
              learning from their own experiences rather than by telling them
              things.
            </em>
            <br />
            <i>Definition from Cambridge Dictionary</i>
          </p>
          <h3>It is a collaboration</h3>
          <p>
            <a href="http://instagram.com/yourliquidcandy">Liquid Candy </a>
            takes care of manufacturing. MassMess is programming the weird
            shapes and the weird website.
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
