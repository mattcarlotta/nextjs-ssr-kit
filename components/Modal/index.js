import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import Flex from "~components/Flex";
import FlexEnd from "~components/FlexEnd";
import FlexStart from "~components/FlexStart";
import BackgroundOverlay from "./BackgroundOverlay";
import Center from "./Center";
import CloseModalButton from "./CloseModalButton";
import ClickHandler from "./ClickHandler";
import ModalBody from "./ModalBody";
import ModalContent from "./ModalContent";
import ModalContainer from "./ModalContainer";
import Title from "./Title";
import WindowContainer from "./WindowContainer";

class Modal extends PureComponent {
	componentDidMount() {
		document.body.style.overflow = "hidden";
	}

	/* istanbul ignore next */
	componentWillUnmount() {
		document.body.style.overflow = null;
	}

	render = () =>
		createPortal(
			<div id="modal">
				<BackgroundOverlay />
				<WindowContainer>
					<ModalContainer>
						<Center maxWidth={this.props.maxWidth}>
							<ClickHandler closeModal={this.props.onClick}>
								<ModalContent maxWidth={this.props.maxWidth}>
									<Flex
										style={{
											borderBottom: "1px solid #d3d3d3",
											padding: "2px 0",
										}}
									>
										<FlexStart>
											<Title>{this.props.title}</Title>
										</FlexStart>
										<FlexEnd>
											<CloseModalButton
												id="close-modal"
												aria-label="close modal"
												onClick={this.props.onClick || null}
											>
												<FaTimes />
											</CloseModalButton>
										</FlexEnd>
									</Flex>
									<ModalBody>{this.props.children}</ModalBody>
								</ModalContent>
							</ClickHandler>
						</Center>
					</ModalContainer>
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
