import React, { useContext } from "react";
import ScrapContext, { ScrapConsumer } from "../../context/scrap";

const CardFilter = () => {
  const { isFiltered } = useContext(ScrapContext).state;

  return (
    <section>
      <ScrapConsumer>
        {({ actions }) => (
          <input
            type="checkbox"
            checked={isFiltered}
            onChange={() => {
              actions.setIsFiltered(!isFiltered);
            }}
          />
        )}
      </ScrapConsumer>
      <label>스크랩한 것만 보기</label>
    </section>
  );
};

export default CardFilter;
