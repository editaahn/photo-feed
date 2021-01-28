import React, { useEffect, useContext } from "react";
import Notice from "../common/Notice";
import List from "./List";
import Toast from "../common/Toast";
import ScrapContext from "../../contexts/scrap";
import ListContext from "../../contexts/list";
import NoticeContext from "../../contexts/notice";
import "../../styles/components/card.scss";

const Feed = () => {
  const { cards, updateCards, setLoading } = useContext(ListContext);
  const { scraps, toastMessage } = useContext(ScrapContext);
  const { notice, setNotice } = useContext(NoticeContext);

  useEffect(() => {
    setLoading(true);
    setNotice("컨텐츠를 불러오는 중입니다.");
    updateCards()
      .then(({ message }) => setNotice(message || ""))
      .then(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="cardContainer">
      <div className="wrapper">
        {cards.length > 0 && (
          <List
            list={cards.map((card) => {
              card.scrapped = scraps.some((scrap) => scrap.id === card.id);
              return card;
            })}
          />
        )}
      </div>
      {notice && <Notice text={notice} />}
      {toastMessage && <Toast name="scrappingToast" text={toastMessage} />}
    </section>
  );
};

export default Feed;
