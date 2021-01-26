import React from "react";
import "../../styles/components/card.scss";

const Empty = ({ text }) => {
  return (
    <section className="empty">
      <p>{text}</p>
    </section>
  );
};

export default Empty;
