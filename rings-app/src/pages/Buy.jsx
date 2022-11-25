import React, { useState } from "react";
import BuyDescription from "../Components/BuyDescription";

export function Buy({ modelData }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p>
      {isReadMore ? "" : BuyDescription({ modelData })}
      <button onClick={toggleReadMore} className="button-modal">
        {isReadMore ? "buy" : "buy process"}
      </button>
    </p>
  );
}
