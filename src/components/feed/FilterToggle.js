import React, { useContext } from "react";
import Toggle from "../common/Toggle";
import ScrapContext from "../../contexts/scrap";
import NoticeContext from "../../contexts/notice";

const FilterToggle = () => {
  const { isFiltered, setIsFiltered } = useContext(ScrapContext);
  const { setNotice } = useContext(NoticeContext);

  const onChange = () => {
    setIsFiltered(!isFiltered);
    setNotice("");
  };

  return (
    <section className="filterContainer">
      <Toggle
        toggleName="filter"
        checkedState={isFiltered}
        onChangeState={onChange}
      >
        <label>스크랩한 것만 보기</label>
      </Toggle>
    </section>
  );
};

export default FilterToggle;
