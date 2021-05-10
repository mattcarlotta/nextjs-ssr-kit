import * as React from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import Flex from "~components/Layout/Flex";
import FlexEnd from "~components/Layout/FlexEnd";
import FlexStart from "~components/Layout/FlexStart";
import BackgroundOverlay from "./BackgroundOverlay";
import CloseModalButton from "./CloseModalButton";
import ModalContent from "./ModalContent";
import ModalContainer from "./ModalContainer";
import ModalRoot from "./ModalRoot";
import ModalTitle from "./ModalTitle";
import WindowContainer from "./WindowContainer";
import { MouseEvent, ReactNode, ReactElement } from "~types";

export type ModalProps = {
  children: ReactNode;
  maxWidth?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  title?: ReactNode;
};

const Modal = ({
  children,
  maxWidth,
  onClick,
  title
}: ModalProps): ReactElement => {
  /* istanbul ignore next */
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    const appEl = document.getElementById("app");
    if (appEl) appEl.className = "blurred";

    return () => {
      document.body.style.overflow = "visible";
      if (appEl) appEl.className = "";
    };
  }, []);

  return createPortal(
    <div data-testid="modal-overlay">
      <BackgroundOverlay />
      <WindowContainer>
        <ModalRoot>
          <ModalContainer data-testid="modal-container" maxWidth={maxWidth}>
            <ModalContent data-testid="modal-content">
              <Flex
                data-testid="modal-header"
                style={{ padding: 15, width: "auto", background: "#0076ff" }}
              >
                <FlexStart>
                  <ModalTitle data-testid="modal-title">{title}</ModalTitle>
                </FlexStart>
                <FlexEnd>
                  <CloseModalButton
                    data-testid="close-modal"
                    aria-label="close modal"
                    onClick={onClick}
                  >
                    <FaTimes />
                  </CloseModalButton>
                </FlexEnd>
              </Flex>
              <div data-testid="modal-body" style={{ padding: "20px" }}>
                {children}
              </div>
            </ModalContent>
          </ModalContainer>
        </ModalRoot>
      </WindowContainer>
    </div>,
    document.body
  );
};

export default Modal;
