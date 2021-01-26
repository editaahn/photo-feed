import React, { useContext } from "react";
import ScrapContext from "../../context/scrap";

const CardFilter = () => {
  const { isFiltered } = useContext(ScrapContext).state;
  const { setIsFiltered } = useContext(ScrapContext).actions;

  return (
    <section>
      <input
        type="checkbox"
        checked={isFiltered}
        onChange={() => {
          setIsFiltered(!isFiltered);
        }}
      />
      <label>스크랩한 것만 보기</label>
    </section>
  );
};

export default CardFilter;
