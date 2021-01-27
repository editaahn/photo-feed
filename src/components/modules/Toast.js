import { createPortal } from "react-dom";
import usePortal from "./usePortal";
import "../../styles/components/card.scss";

const Toast = ({ id, text }) => {
  const $target = usePortal(id);
  const $toast = <span>{text}</span>
  return createPortal($toast, $target);
};

export default Toast;
