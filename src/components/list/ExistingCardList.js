import React from "react";
import CardItem from "../item/CardItem";

const ExistingCardList = ({ list }) => {
  return (
    <ul>
      {list?.map((item) => (
        <CardItem
          key={item.id}
          userName={item.nickname}
          userThumbnailSrc={item.profile_image_url}
          photoSrc={item.image_url}
        />
      ))}
    </ul>
  );
};

export default ExistingCardList;
