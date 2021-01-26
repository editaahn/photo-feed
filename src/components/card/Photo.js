import React from "react";

const Photo = ({ src }) => {
  return (
    <div className="photo">
      <img src={src} alt="" />
    </div>
  );
};

export default Photo;
