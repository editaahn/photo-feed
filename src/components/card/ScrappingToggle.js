import React, { useContext } from "react";
import Toggle from "../modules/Toggle";
import ScrapContext from "../../contexts/scrap";
import "../../styles/components/checkbox.scss";

const ScrappingToggle = ({ scrapped, id }) => {
  const { scraps } = useContext(ScrapContext).state;
  const { setScraps } = useContext(ScrapContext).actions;

  const onScrap = (nextArray) => {
    setScraps(nextArray);
    localStorage.setItem("scraps", JSON.stringify(nextArray));
  };

  return (
    <Toggle
      toggleName="scrap"
      checkedState={scrapped}
      onChangeState={() => {
        const nextArray = scrapped
          ? scraps.filter((scrap) => scrap !== id)
          : [...scraps, id];
        onScrap(nextArray);
      }}
    />
  );
};

export default ScrappingToggle;
