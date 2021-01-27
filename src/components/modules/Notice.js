import React from "react";
import "../../styles/components/card.scss";

const Notice = ({ text }) => {
  return (
    <section className="notice">
      <p>{text}</p>
    </section>
  );
};

export default Notice;
