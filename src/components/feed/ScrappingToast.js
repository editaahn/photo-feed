import React from "react";
import Toast from "../modules/Toast";
import "../../styles/components/toast.scss";

const ScrappingToast = ({ text }) => {
  return <Toast name="scrappingToast" text={text} />;
};

export default ScrappingToast;
