import React from "react";
import Toast from "../modules/Toast";
import "../../styles/components/toast.scss";

const ScrappingToast = ({ text }) => {
  return <Toast id="scrappingToast" text={text} />;
};

export default ScrappingToast;
