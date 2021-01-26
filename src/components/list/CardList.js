import React, { useEffect, useState, useContext } from "react";
import EmptyCardList from "./EmptyCardList";
import ExistingCardList from "./ExistingCardList";
import ScrapContext from "../../context/scrap";
import ListContext from "../../context/list";

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
    <section>
      {cards.length ? (
        <ExistingCardList
          list={cards.map((card) => {
            card.scrapped = scraps.includes(card.id);
            return card;
          })}
        />
      ) : (
        <EmptyCardList />
      )}
    </section>
  );
};

export default CardList;
