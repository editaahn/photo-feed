import React, { createContext, useState } from "react";

const NoticeContext = createContext({
  notice: "",
  setNotice: () => {},
});

const NoticeProvider = ({ children }) => {
  const [notice, setNotice] = useState("");

  const value = { notice, setNotice };

  return (
    <NoticeContext.Provider value={value}>{children}</NoticeContext.Provider>
  );
};

export { NoticeProvider };

export default NoticeContext;
