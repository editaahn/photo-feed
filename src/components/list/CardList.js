import React from "react";
import EmptyCardList from "./EmptyCardList";
import ExistingCardList from "./ExistingCardList";

const CardList = () => {
  const cardList = [];
  return (
    <section>
      {cardList.length ? <ExistingCardList list={cardList} /> : <EmptyCardList />}
    </section>
  );
};

export default CardList;
