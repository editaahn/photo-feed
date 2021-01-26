import React, { useContext } from "react";
import ScrapContext from "../../context/scrap";
import "../../styles/components/checkbox.scss";

const CardFilter = () => {
  const { isFiltered } = useContext(ScrapContext).state;
  const { setIsFiltered } = useContext(ScrapContext).actions;

  return (
    <section className="filterContainer">
      <article className="toggle__filter">
        <input
          className="checkbox"
          type="checkbox"
          checked={isFiltered}
          onChange={() => {
            setIsFiltered(!isFiltered);
          }}
        />
        <label>스크랩한 것만 보기</label>
      </article>
    </section>
  );
};

export default CardFilter;
