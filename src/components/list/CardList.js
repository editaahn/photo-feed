import React from "react";
import EmptyCardList from "./EmptyCardList";
import ExistingCardList from "./ExistingCardList";

const CardList = () => {
  const cardList = [];
  return cardList.length ? <ExistingCardList list={cardList} /> : <EmptyCardList />;
};

export default CardList;
