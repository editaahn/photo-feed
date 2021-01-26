import React, { createContext, useState } from "react";
import { requestCards } from "../libraries/request";

const ListContext = createContext({
  state: { page: 1, cards: [], loading: false },
  actions: {
    setPage: () => {},
    setCards: () => {},
    setLoading: () => {},
  },
});

const ListProvider = ({ children }) => {
  const [page, setPage] = useState(1);
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
    state: { page, cards, loading },
    actions: { setPage, updateCards, setLoading },
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};

export { ListProvider };

export default ListContext;
