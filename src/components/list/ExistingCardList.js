import React, { useContext } from "react";
import CardItem from "../item/CardItem";
import ScrapContext from "../../context/scrap";

const ExistingCardList = ({ list, setNotice }) => {
  const { isFiltered } = useContext(ScrapContext).state;
  const renderedList = isFiltered ? list.filter((item) => item.scrapped) : list;

  return (
    <section className="cardContainer">
      <ul className="cardList">
        {renderedList.map((item, i) => (
          <CardItem
            key={item.id}
            data={item}
            isLastOne={i === renderedList.length - 1}
            setNotice={setNotice}
          />
        ))}
      </ul>
    </section>
  );
};

export default ExistingCardList;
