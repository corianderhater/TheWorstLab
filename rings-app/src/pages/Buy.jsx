import React, { useState } from "react";
import BuyDescription from "../Components/BuyDescription";

export function Buy({ modelData, isOn }) {
  return <p>{isOn ? BuyDescription({ modelData }) : ""}</p>;
}
