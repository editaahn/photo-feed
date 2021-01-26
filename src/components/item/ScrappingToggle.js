import React, { useContext } from "react";
import ScrapContext from "../../context/scrap";

const ScrappingToggle = ({ scrapped, id }) => {
  const { scraps } = useContext(ScrapContext).state;
  const { setScraps } = useContext(ScrapContext).actions;

  return (
    <input
      type="checkbox"
      aria-label="스크랩"
      checked={scrapped}
      onChange={() => {
        setScraps([...scraps, id]);
        localStorage.setItem("scraps", JSON.stringify([...scraps, id]));
      }}
    />
  );
};

export default ScrappingToggle;
