import React, { createContext, useState } from "react";
import { requestCards } from "../libraries/request";

const ListContext = createContext({
  state: { page: 1, cards: [] },
  actions: {
    setPage: () => {},
    setCards: () => {},
  },
});

const ListProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);

  const updateCards = () => {
    requestCards(page).then(({ data }) => {
      setPage(page + 1);
      setCards(cards.concat(data));
    });
  };

  const value = {
    state: { page, cards },
    actions: { setPage, updateCards },
  };

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};

export { ListProvider };

export default ListContext;
