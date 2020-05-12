/* istanbul ignore file */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaFileAlt, FaUserPlus } from "react-icons/fa";
import Button from "~components/Layout/Button";
import HomeIcon from "~components/Layout/HomeIcon";
import Flex from "~components/Layout/Flex";
import FlexEnd from "~components/Layout/FlexEnd";
import FlexStart from "~components/Layout/FlexStart";
import Link from "~components/Navigation/Link";

const UserListNavigation = ({ className, openModal, seedDB }) => (
	<div data-testid="userlist" className={className}>
		<Link href="/">
			<HomeIcon />
			<span>Go Back</span>
		</Link>
		<Flex style={{ width: 780, margin: "10px auto" }}>
			<FlexStart>
				<Button dataTest="seed-database" type="button" onClick={seedDB}>
					<span css="margin-right: 5px;font-size: 26px;">
						<FaFileAlt style={{ position: "relative", top: "5px" }} />
					</span>
					<span>Seed Database</span>
				</Button>
			</FlexStart>
			<FlexEnd>
				<Button dataTest="open-modal" primary type="button" onClick={openModal}>
					<span css="margin-right: 5px;font-size: 26px;">
						<FaUserPlus style={{ position: "relative", top: "5px" }} />
					</span>
					<span>Create New User</span>
				</Button>
			</FlexEnd>
		</Flex>
	</div>
);

UserListNavigation.propTypes = {
	className: PropTypes.string.isRequired,
	openModal: PropTypes.func.isRequired,
	seedDB: PropTypes.func.isRequired,
};

export default styled(UserListNavigation)`
	@media (max-width: 800px) {
		${Flex},${FlexStart}, ${FlexEnd} {
			display: block !important;
			margin-bottom: 20px;
			width: 100% !important;
		}
	}

	margin-bottom: 10px;
`;
