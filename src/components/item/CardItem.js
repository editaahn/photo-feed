import React from "react";
import UserInfo from "./UserInfo";
import Photo from "./Photo";
import ScrappingToggle from "./ScrappingToggle";

const CardItem = ({ data }) => {
  return (
    <article>
      <UserInfo name={data.nickname} src={data.profile_image_url} />
      <Photo src={data.image_url} />
      <ScrappingToggle scrapped={data.scrapped} id={data.id} />
    </article>
  );
};

export default CardItem;
