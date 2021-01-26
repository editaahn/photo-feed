import React from "react";
import "../../styles/components/card.scss";

const Empty = ({ text }) => {
  return (
    <article className="empty">
      <p>{text}</p>
    </article>
  );
};

export default Empty;
