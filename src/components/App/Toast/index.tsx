import { toast } from "react-toastify";
import {
  FaInfo,
  FaCheck,
  FaExclamationTriangle,
  FaBug,
  FaExclamationCircle,
} from "react-icons/fa";
import AlertContainer from "~components/Layout/AlertContainer";
import AlertMessage from "~components/Layout/AlertMessage";
import AlertType from "~components/Layout/AlertType";
import { ToastProps } from "~types";

const style = {
  marginTop: 9,
};

export const displayIcon = (type: string | undefined): JSX.Element => {
  switch (type) {
    case "success":
      return <FaCheck style={style} />;
    case "info":
      return <FaInfo />;
    case "error":
      return <FaExclamationCircle />;
    case "warning":
      return <FaExclamationTriangle style={style} />;
    default:
      return <FaBug style={style} />;
  }
};

const ToastMessage = ({ type, message }: ToastProps): null => {
  toast[type](
    <AlertContainer data-testid="modal-alert">
      <AlertType data-testid="modal-alert-type">{displayIcon(type)}</AlertType>
      <AlertMessage data-testid="modal-message">{message}</AlertMessage>
    </AlertContainer>,
  );

  return null;
};

export default ToastMessage;
