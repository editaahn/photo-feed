import React from "react";

const UserInfo = ({ src, name }) => {
  return (
    <address className="userInfo">
      <img src={src} alt="" />
      <em>{name}</em>
    </address>
  );
};

export default UserInfo;
