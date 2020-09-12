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
import WindowContainer from "./WindowContainer";
import { ModalProps } from "~types";

const Modal = ({ children, maxWidth, onClick, title }: ModalProps) => {
  /* istanbul ignore next */
  React.useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
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
                style={{ padding: 15, width: "auto" }}
              >
                <FlexStart>
                  <div
                    data-testid="modal-title"
                    css="padding: 2px;font-weight: bold;color: #7d7d7d;font-size: 16px;"
                  >
                    {title}
                  </div>
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
              <div data-testid="modal-body" css="padding: 10px 20px 20px;">
                {children}
              </div>
            </ModalContent>
          </ModalContainer>
        </ModalRoot>
      </WindowContainer>
    </div>,
    document.body,
  );
};

export default Modal;
