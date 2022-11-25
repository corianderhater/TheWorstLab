import React from "react";
import { Image } from "./Image";
import "../index.scss";

function BuyDescription({ modelData }) {
  return (
    <>
      <div className="gallery-container">
        <div className="card-text"> {modelData.cost}Eur </div>
      </div>
    </>
  );
}

export default BuyDescription;
