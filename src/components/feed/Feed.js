import React, { useEffect, useState, useContext } from "react";
import Notice from "../modules/Notice";
import List from "./List";
import ScrapContext from "../../contexts/scrap";
import ListContext from "../../contexts/list";
import "../../styles/components/card.scss";

const Feed = () => {
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
        <List
          list={cards.map((card) => {
            card.scrapped = scraps.includes(card.id);
            return card;
          })}
          setNotice={setNotice}
        />
      }
      {loading && <Notice text="이미지를 불러오는 중입니다." />}
      {notice && !isFiltered && <Notice text={notice} />}
    </>
  );
};

export default Feed;
