import React from "react";

const UserInfo = ({ src, name }) => {
  return (
    <address>
      <img src={src} alt="" />
      <em>{name}</em>
    </address>
  );
};

export default UserInfo;
