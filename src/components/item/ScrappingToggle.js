import React, { useContext } from "react";
import ScrapContext, { ScrapConsumer } from "../../context/scrap";

const ScrappingToggle = ({ scrapped, id }) => {
  const { scraps } = useContext(ScrapContext).state;

  return (
    <ScrapConsumer>
      {({ actions }) => (
        <input
          type="checkbox"
          aria-label="스크랩"
          checked={scrapped}
          onChange={() => {
            actions.setScraps([...scraps, id]);
            localStorage.setItem("scraps", JSON.stringify([...scraps, id]));
          }}
        />
      )}
    </ScrapConsumer>
  );
};

export default ScrappingToggle;
