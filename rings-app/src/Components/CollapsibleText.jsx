import React, { useState } from "react";

export function CollipsableText({ text }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="modal-collapsible">
      {isReadMore ? "" : text}
      <button onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </button>
    </p>
  );
}
