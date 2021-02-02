import * as React from "react";
import { toast } from "react-toastify";
import {
  BsCheckBox,
  BsFillExclamationOctagonFill,
  BsFillExclamationTriangleFill,
  BsInfoSquareFill,
  BsQuestionSquareFill
} from "react-icons/bs";
import AlertContainer from "./AlertContainer";
import AlertMessage from "./AlertMessage";
import AlertType from "./AlertType";
import { ToastProps } from "~types";

export const displayIcon = (type: string | undefined): JSX.Element => {
  switch (type) {
    case "success":
      return <BsCheckBox />;
    case "info":
      return <BsInfoSquareFill />;
    case "error":
      return <BsFillExclamationOctagonFill />;
    case "warning":
      return <BsFillExclamationTriangleFill />;
    default:
      return <BsQuestionSquareFill />;
  }
};

const ToastMessage = ({ type, message }: ToastProps): null => {
  toast[type](
    <AlertContainer data-testid="modal-alert">
      <AlertType data-testid="modal-alert-type">{displayIcon(type)}</AlertType>
      <AlertMessage data-testid="modal-message">{message}</AlertMessage>
    </AlertContainer>
  );

  return null;
};

export default ToastMessage;
