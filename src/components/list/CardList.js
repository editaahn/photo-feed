import React, { useEffect, useState, useContext } from "react";
import Empty from "./Empty";
import ExistingCardList from "./ExistingCardList";
import ScrapContext from "../../context/scrap";
import ListContext from "../../context/list";
import "../../styles/components/card.scss";

const CardList = () => {
  const { cards } = useContext(ListContext).state;
  const { updateCards } = useContext(ListContext).actions;
  const { scraps } = useContext(ScrapContext).state;

  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    updateCards();
  }, []);

  if (loading) {
    // 로딩 중일 때 처리
  }

  return (
    <section className="cardContainer">
      {cards.length ? (
        <ExistingCardList
          list={cards.map((card) => {
            card.scrapped = scraps.includes(card.id);
            return card;
          })}
        />
      ) : (
        <Empty text="컨텐츠가 없습니다." />
      )}
    </section>
  );
};

export default CardList;
