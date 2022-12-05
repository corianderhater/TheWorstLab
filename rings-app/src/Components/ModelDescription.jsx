import React from "react";
import { Image } from "./Image";
import "../index.scss";

function ModelDescription({ modelData }) {
  return (
    <>
      <div className="gallery-container">
        <Image url={modelData["img-1"]} />
        <Image url={modelData["img-2"]} />
        <div className="card-text"> {modelData.description} </div>
      </div>
    </>
  );
}

export default ModelDescription;
