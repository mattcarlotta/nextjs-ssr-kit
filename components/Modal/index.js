import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import Flex from "@components/Flex";
import FlexEnd from "@components/FlexEnd";
import FlexStart from "@components/FlexStart";
import BackgroundOverlay from "./BackgroundOverlay";
import Center from "./Center";
import CloseModalButton from "./CloseModalButton";
import ClickHandler from "./ClickHandler";
import ModalBody from "./ModalBody";
import ModalContent from "./ModalContent";
import ModalContainer from "./ModalContainer";
import Title from "./Title";
import WindowContainer from "./WindowContainer";

export const Modal = ({ children, maxWidth, onClick, title }) => (
	<>
		<BackgroundOverlay />
		<WindowContainer>
			<ModalContainer>
				<Center maxWidth={maxWidth}>
					<ClickHandler closeModal={onClick}>
						<ModalContent maxWidth={maxWidth}>
							<Flex
								style={{ borderBottom: "1px solid #d3d3d3", padding: "2px 0" }}
							>
								<FlexStart>
									<Title>{title}</Title>
								</FlexStart>
								<FlexEnd>
									<CloseModalButton
										id="close-modal"
										aria-label="close modal"
										onClick={onClick || null}
									>
										<FaTimes />
									</CloseModalButton>
								</FlexEnd>
							</Flex>
							<ModalBody>{children}</ModalBody>
						</ModalContent>
					</ClickHandler>
				</Center>
			</ModalContainer>
		</WindowContainer>
	</>
);

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	maxWidth: PropTypes.string,
	onClick: PropTypes.func,
	title: PropTypes.string,
};

export default Modal;
