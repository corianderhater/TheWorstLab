import React, { useState } from "react";
import ModelDescription from "./ModelDescription";

export function CollipsableText({ modelData }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p>
      {isReadMore ? "" : ModelDescription({ modelData })}
      <button onClick={toggleReadMore} className="button-modal">
        {isReadMore ? "see photos" : "close photos"}
      </button>
    </p>
  );
}
