import React, { useContext } from "react";
import Toggle from "../modules/Toggle";
import ScrapContext from "../../contexts/scrap";

const ScrappingToggle = ({ scrapped, id }) => {
  const { scraps } = useContext(ScrapContext).state;
  const { setScraps, setToast } = useContext(ScrapContext).actions;

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

        const toast = scrapped ? "스크랩 취소되었습니다." : "스크랩되었습니다";
        setToast(toast);
      }}
    />
  );
};

export default ScrappingToggle;
