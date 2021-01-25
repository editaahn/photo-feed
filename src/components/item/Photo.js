import React from "react";

const Photo = ({ photo }) => {
  return <img src={photo.src} alt={photo.alt} />;
};

export default Photo;
