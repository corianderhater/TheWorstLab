import React, { useState } from "react";

export function CollipsableText({ text }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="modal-collapsible">
      {isReadMore ? "" : text}
      <button
        onClick={toggleReadMore}
        className="button-modal button-long-description"
      >
        {isReadMore ? "long description" : "close"}
      </button>
    </p>
  );
}
