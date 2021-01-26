import React, { useContext } from "react";
import ScrapContext from "../../context/scrap";
import "../../styles/components/checkbox.scss";

const ScrappingToggle = ({ scrapped, id }) => {
  const { scraps } = useContext(ScrapContext).state;
  const { setScraps } = useContext(ScrapContext).actions;

  return (
    <div className="toggle__scrap">
      <input
        className="checkbox"
        type="checkbox"
        aria-label="스크랩"
        checked={scrapped}
        onChange={() => {
          setScraps([...scraps, id]);
          localStorage.setItem("scraps", JSON.stringify([...scraps, id]));
        }}
      />
    </div>
  );
};

export default ScrappingToggle;
