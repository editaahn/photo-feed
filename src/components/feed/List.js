import React, { useContext } from "react";
import Card from "../card/Card";
import ScrapContext from "../../contexts/scrap";

const List = ({ list, setNotice }) => {
  const { isFiltered } = useContext(ScrapContext).state;
  const renderedList = isFiltered ? list.filter((item) => item.scrapped) : list;

  return (
    <section className="cardContainer">
      <ul className="cardList">
        {renderedList.map((item, i) => (
          <Card
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

export default List;
