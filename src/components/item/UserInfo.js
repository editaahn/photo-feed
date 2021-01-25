import React from "react";

const UserInfo = ({ src, name }) => {
  return (
    <address>
      <img src={src} alt="" />
      <e>{name}</e>
    </address>
  );
};

export default UserInfo;
