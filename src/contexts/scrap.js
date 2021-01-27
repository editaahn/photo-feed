import React, { createContext, useState } from "react";

const ScrapContext = createContext({
  isFiltered: false, // isFiltered: 필터링 on/off 상태
  toastMessage: false, // isScrapped : 스크랩이 일어났는지 여부 (토스트팝업 노출 목적)
  scraps: [], // scraps: 스크랩 중인 카드 목록

  setIsFiltered: () => {},
  setToast: () => {},
  setScraps: () => {},
});

const ScrapProvider = ({ children }) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [scraps, setScraps] = useState(
    JSON.parse(localStorage.getItem("scraps")) || []
  );

  const setToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 2000);
  };

  const value = {
    isFiltered,
    toastMessage,
    scraps,
    setIsFiltered,
    setToast,
    setScraps,
  };

  return (
    <ScrapContext.Provider value={value}>{children}</ScrapContext.Provider>
  );
};

export { ScrapProvider };

export default ScrapContext;
