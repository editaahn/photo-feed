import React, { useEffect, useState, useContext } from "react";
import EmptyCardList from "./EmptyCardList";
import ExistingCardList from "./ExistingCardList";
import ScrapContext from "../../context/scrap";
import { requestCards } from "../../libraries/request";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(undefined);

  const { scraps } = useContext(ScrapContext).state;

  useEffect(() => {
    setLoading(true);
    requestCards().then(({ data }) => {
      setCards(data);
      setLoading(false);
    });
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
