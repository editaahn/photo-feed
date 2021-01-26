import React, { useEffect, useState, useContext } from "react";
import Empty from "./Empty";
import ExistingCardList from "./ExistingCardList";
import ScrapContext from "../../context/scrap";
import ListContext from "../../context/list";
import "../../styles/components/card.scss";

const CardList = () => {
  const { cards } = useContext(ListContext).state;
  const { updateCards } = useContext(ListContext).actions;
  const { scraps, isFiltered } = useContext(ScrapContext).state;

  const [loading, setLoading] = useState(undefined);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    setLoading(true);
    updateCards().then(({ message }) => message && setNotice(message));
  }, []);

  if (loading) {
    // 로딩 중일 때 처리
  }
  return (
    <>
      {cards.length > 0 && 
        <ExistingCardList
          list={cards.map((card) => {
            card.scrapped = scraps.includes(card.id);
            return card;
          })}
          setNotice={setNotice}
        />
      }
      {notice && !isFiltered && <Empty text={notice} />}
    </>
  );
};

export default CardList;
