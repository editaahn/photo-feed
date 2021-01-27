import React, { useEffect, useState, useContext } from "react";
import Notice from "../modules/Notice";
import List from "./List";
import Toast from "../modules/Toast";
import ScrapContext from "../../contexts/scrap";
import ListContext from "../../contexts/list";
import "../../styles/components/card.scss";

const Feed = () => {
  const { cards } = useContext(ListContext).state;
  const { scraps, toastMessage } = useContext(ScrapContext).state;

  const { updateCards, setLoading } = useContext(ListContext).actions;

  const [notice, setNotice] = useState("");

  useEffect(() => {
    setLoading(true);
    setNotice("컨텐츠를 불러오는 중입니다.");
    updateCards()
      .then(({ message }) => setNotice(message || ""))
      .then(() => setLoading(false));
  }, []);

  return (
    <section className="cardContainer">
      {cards.length > 0 && (
        <List
          list={cards.map((card) => {
            card.scrapped = scraps.includes(card.id);
            return card;
          })}
        />
      )}
      {notice && <Notice text={notice} />}
      {toastMessage && <Toast name="scrappingToast" text={toastMessage} />}
    </section>
  );
};

export default Feed;
