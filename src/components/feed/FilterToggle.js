import React, { useContext } from "react";
import Toggle from "../modules/Toggle";
import ScrapContext from "../../contexts/scrap";

const FilterToggle = () => {
  const { isFiltered } = useContext(ScrapContext).state;
  const { setIsFiltered } = useContext(ScrapContext).actions;

  return (
    <section className="filterContainer">
      <Toggle
        toggleName="filter"
        checkedState={isFiltered}
        onChangeState={() => setIsFiltered(!isFiltered)}
      >
        <label>스크랩한 것만 보기</label>
      </Toggle>
    </section>
  );
};

export default FilterToggle;
