import React, { createContext, useState } from "react";

const ScrapContext = createContext({
  // isFiltered: 필터링 on/off 상태
  // scraps: 스크랩 중인 카드 목록
  state: { isFiltered: false, scraps: [] },
  actions: {
    setIsFiltered: () => {},
    setScraps: () => {}
  },
});

const ScrapProvider = ({ children }) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [scraps, setScraps] = useState(
    JSON.parse(localStorage.getItem("scraps")) || []
  );

  const value = {
    state: { isFiltered, scraps },
    actions: { setIsFiltered, setScraps },
  };

  return (
    <ScrapContext.Provider value={value}>{children}</ScrapContext.Provider>
  );
};

export { ScrapProvider };

export default ScrapContext;
