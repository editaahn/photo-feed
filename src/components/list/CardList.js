import React, { useEffect, useState, useContext } from "react";
import Empty from "./Empty";
import ExistingCardList from "./ExistingCardList";
import ScrapContext from "../../context/scrap";
import ListContext from "../../context/list";
import "../../styles/components/card.scss";

const CardList = () => {
  const { cards, loading } = useContext(ListContext).state;
  const { updateCards, setLoading } = useContext(ListContext).actions;
  const { scraps, isFiltered } = useContext(ScrapContext).state;

  const [notice, setNotice] = useState("");

  useEffect(() => {
    setLoading(true);
    updateCards()
      .then(({ message }) => message && setNotice(message))
      .then(() => setLoading(false));
  }, []);
  
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
      {loading && <Empty text="이미지를 불러오는 중입니다." />}
      {notice && !isFiltered && <Empty text={notice} />}
    </>
  );
};

export default CardList;
