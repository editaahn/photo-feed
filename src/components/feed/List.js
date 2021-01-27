import React, { useContext } from "react";
import Card from "../card/Card";
import ScrapContext from "../../contexts/scrap";
import NoticeContext from "../../contexts/notice";

const List = ({ list }) => {
  const { isFiltered } = useContext(ScrapContext);
  const { setNotice } = useContext(NoticeContext);
  const renderedList = isFiltered ? list.filter((item) => item.scrapped) : list;

  !renderedList.length &&
    isFiltered &&
    setNotice("스크랩된 컨텐츠가 없습니다.");

  return (
    <ul className="cardList">
      {renderedList.map((item, i) => (
        <Card
          key={item.id}
          data={item}
          isLastOne={i === renderedList.length - 1}
        />
      ))}
    </ul>
  );
};

export default List;
