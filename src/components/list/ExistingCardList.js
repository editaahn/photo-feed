import React, { useContext } from "react";
import CardItem from "../item/CardItem";
import ScrapContext from "../../context/scrap";

const ExistingCardList = ({ list }) => {
  const { isFiltered, scraps } = useContext(ScrapContext).state;
  const renderedList = isFiltered
    ? list.filter((item) => scraps.includes(item.id))
    : list;

  return (
    <ul>
      {renderedList.map((item) => (
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
