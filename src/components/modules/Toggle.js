import React from "react";

const Toggle = ({ toggleName, checkedState, onChangeState, children }) => {
  return (
    <div className={`toggle__${toggleName}`}>
      <input
        className="checkbox"
        type="checkbox"
        aria-label={toggleName}
        checked={checkedState}
        onChange={onChangeState}
      />
      {children}
    </div>
  );
};

export default Toggle;
