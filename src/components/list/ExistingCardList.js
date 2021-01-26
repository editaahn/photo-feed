import React, { useContext } from "react";
import CardItem from "../item/CardItem";
import ScrapContext from "../../context/scrap";

const ExistingCardList = ({ list }) => {
  const { isFiltered } = useContext(ScrapContext).state;
  const renderedList = isFiltered ? list.filter((item) => item.scrapped) : list;

  return (
    <ul>
      {renderedList.map((item, i) => (
        <CardItem
          key={item.id}
          data={item}
          isLastOne={i === renderedList.length - 1}
        />
      ))}
    </ul>
  );
};

export default ExistingCardList;
