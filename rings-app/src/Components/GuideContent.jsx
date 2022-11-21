import React from "react";
import "../index.scss";

function GuideContent() {
  return (
    <>
      <div className="guide-container">
        <div className="guide-item">
          <h1>Hello Guide here </h1>
        </div>
        <div className="guide-item guide-scroll">
          <div>1.</div>
          <div>2.</div>
          <div>3.</div>
          <div>4.</div>
        </div>
      </div>
    </>
  );
}

export default GuideContent;
