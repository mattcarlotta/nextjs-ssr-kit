import { toast } from "react-toastify";
import {
  FaInfo,
  FaCheck,
  FaExclamationTriangle,
  FaBug,
  FaExclamationCircle,
} from "react-icons/fa";
import { ToastProps } from "~types";

const style = {
  marginTop: 9,
};

export const displayIcon = (type: string | undefined) => {
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

const ToastMessage = ({ type, message }: ToastProps): any =>
  toast[type](
    <div data-testid="modal-alert" css="display: flex; color: white;">
      <div
        data-testid="modal-alert-type"
        css="font-size:15px;padding-top: 8px;flex-shrink: 0;text-align: center;width: 30px;"
      >
        {displayIcon(type)}
      </div>
      <div
        data-testid="modal-message"
        css="flex-grow: 1;font-size: 15px;padding: 8px 12px;"
      >
        {message}
      </div>
    </div>,
  );

export default ToastMessage;
