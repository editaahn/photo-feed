import { createPortal } from "react-dom";
import usePortal from "./usePortal";
import "../../styles/components/toast.scss";

const Toast = ({ name, text }) => {
  const $target = usePortal(name);
  const $toast = <span>{text}</span>
  return createPortal($toast, $target);
};

export default Toast;
