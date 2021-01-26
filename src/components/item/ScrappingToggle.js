import React, { useContext } from "react";
import ScrapContext from "../../context/scrap";
import "../../styles/components/checkbox.scss";

const ScrappingToggle = ({ scrapped, id }) => {
  const { scraps } = useContext(ScrapContext).state;
  const { setScraps } = useContext(ScrapContext).actions;

  const onScrap = (nextArray) => {
    setScraps(nextArray);
    localStorage.setItem("scraps", JSON.stringify(nextArray));
  };

  return (
    <div className="toggle__scrap">
      <input
        className="checkbox"
        type="checkbox"
        aria-label="스크랩"
        checked={scrapped}
        onChange={() => {
          const nextArray = scrapped
            ? scraps.filter((scrap) => scrap !== id)
            : [...scraps, id];
          onScrap(nextArray);
        }}
      />
    </div>
  );
};

export default ScrappingToggle;
