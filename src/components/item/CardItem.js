import React, { useRef, useContext, useEffect } from "react";
import UserInfo from "./UserInfo";
import Photo from "./Photo";
import ScrappingToggle from "./ScrappingToggle";
import ListContext from "../../context/list";
import "../../styles/components/card.scss";

const CardItem = ({ data, isLastOne, setNotice }) => {
  const { updateCards, setLoading } = useContext(ListContext).actions;

  const targetRef = useRef(null);
  const observerRef = useRef(null);

  const onObserve = (items, io) => {
    items.forEach((item) => {
      if (!isLastOne) {
        return;
      }
      if (item.isIntersecting) {
        io.unobserve(item.target);
        setLoading(true);
        updateCards()
          .then(({ message }) => message && setNotice(message))
          .then(() => setLoading(false));
      }
    });
  };

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(onObserve);
    }
    targetRef.current && observerRef.current.observe(targetRef.current);
  }, []);

  return (
    <article ref={targetRef} className="card">
      <UserInfo name={data.nickname} src={data.profile_image_url} />
      <Photo src={data.image_url} />
      <ScrappingToggle scrapped={data.scrapped} id={data.id} />
    </article>
  );
};

export default CardItem;
