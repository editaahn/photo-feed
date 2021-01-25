import React, { useEffect, useState } from "react";
import EmptyCardList from "./EmptyCardList";
import ExistingCardList from "./ExistingCardList";
import { requestCards } from "../../libraries/request";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(undefined);

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
      {cards.length ? <ExistingCardList list={cards} /> : <EmptyCardList />}
    </section>
  );
};

export default CardList;
