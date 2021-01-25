import React from "react";
import UserInfo from "./UserInfo";
import Photo from "./Photo";
import ScrappingToggle from "./ScrappingToggle";

const CardItem = ({ userName, userThumbnailSrc, photoSrc }) => {
  return (
    <article>
      <UserInfo name={userName} src={userThumbnailSrc} />
      <Photo src={photoSrc} />
      <ScrappingToggle />
    </article>
  );
};

export default CardItem;
