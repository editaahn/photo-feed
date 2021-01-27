import React, { createContext, useState } from "react";
import { requestCards } from "../libraries/request";

const ListContext = createContext({
  page: 1,
  cards: [],
  loading: false,

  setPage: () => {},
  updateCards: () => {},
  setLoading: () => {},
});

const ListProvider = ({ children }) => {
  const [page, setPage] = useState(5);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateCards = async () => {
    const res = await requestCards(page);
    if (res.data.length) {
      setPage(page + 1);
      setCards(cards.concat(res.data));
    }
    return res;
  };

  const value = {
    page,
    cards,
    loading,
    setPage,
    updateCards,
    setLoading,
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};

export { ListProvider };

export default ListContext;
