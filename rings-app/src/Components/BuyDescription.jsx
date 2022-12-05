import React from "react";
import { Image } from "./Image";
import "../index.scss";

function BuyDescription({ modelData }) {
  return (
    <>
      <div className="gallery-container">
        <div className="card-text"> {modelData.cost}Eur </div>
        <div className="contact">
          <h3>Contact me to talk about your ring:</h3>
          <br />
          <a href="http://instagram.com/massmessshapes">Via instagram</a>
          <br /> @massmessshapes <br />
          <a href="https://api.whatsapp.com/send?phone=48515486944">
            Send me a message
          </a>
          <br />
          Tel./WhatsApp: +48 515 486 944
        </div>
      </div>
    </>
  );
}

export default BuyDescription;
