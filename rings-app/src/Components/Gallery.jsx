import React from "react";
import ModelDescription from "./ModelDescription";

export function Gallery({ modelData, isOn }) {
  return <p>{isOn ? ModelDescription({ modelData }) : ""}</p>;
}
