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
          <h3>The meaning of Les Dudes</h3>
          <p>
            <em>/les duðɪs/ </em>
            (polish pronunciation is "correct" and welcomed) <br />
            From spanish: <i>The Doubts</i>
            <br />
            From english: Fastly pronounced sounds like <i>Let's do this"</i>
            <br />
            From spanglish: <i>The Dudes.</i>
          </p>
          <h3>Heuristic jewellery</h3>
          <p>
            Heuristic: <br />
            <em>
              Allowing to learn by discovering things themselves and learning
              from their own experiences rather than by telling them things
            </em>
            <br />
            <i>Definition from Cambridge Dictionary</i>
          </p>
          <h3>It is a collaboration</h3>
          <p>
            Liquid Candy takes care of manufacturing. Le Dude is programming
            weird shapes and weird website.
          </p>
          <h3>Hands-made</h3>
          <p>
            One shapes material with hands (in Gdańsk, Poland). Another shapes
            algorithms with hands (in Barcelona, Spain).
          </p>
          <h3>Experiment to wear.</h3>
          <p>
            Once, we just imagined things differently. Nextly, we just did it.
          </p>
          <p>-</p>
          <p>Yours, LesDudes x YLC</p>
        </div>
      </div>
    </>
  );
}

export default About;
