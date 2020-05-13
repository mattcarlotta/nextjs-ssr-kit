import React, { PureComponent } from "react";
import PropTypes from "prop-types";
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

export class Modal extends PureComponent {
	componentDidMount() {
		document.body.style.overflow = "hidden";
	}

	componentWillUnmount() {
		document.body.style.overflow = null;
	}

	render = () =>
		createPortal(
			<div data-testid="modal-overlay">
				<BackgroundOverlay />
				<WindowContainer>
					<ModalRoot>
						<ModalContainer maxWidth={this.props.maxWidth}>
							<ModalContent data-test="modal" maxWidth={this.props.maxWidth}>
								<Flex
									data-testid="modal-header"
									style={{ padding: 15, width: "auto" }}
								>
									<FlexStart>
										<div css="padding: 2px;font-weight: bold;color: #7d7d7d;font-size: 16px;">
											{this.props.title}
										</div>
									</FlexStart>
									<FlexEnd>
										<CloseModalButton
											data-testid="close-modal"
											aria-label="close modal"
											onClick={this.props.onClick || null}
										>
											<FaTimes />
										</CloseModalButton>
									</FlexEnd>
								</Flex>
								<div data-testid="modal-body" css="padding: 10px 20px 20px;">
									{this.props.children}
								</div>
							</ModalContent>
						</ModalContainer>
					</ModalRoot>
				</WindowContainer>
			</div>,
			document.body,
		);
}

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	maxWidth: PropTypes.string,
	onClick: PropTypes.func,
	title: PropTypes.string,
};

export default Modal;
