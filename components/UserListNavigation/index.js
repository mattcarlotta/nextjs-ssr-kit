import React from "react";
import PropTypes from "prop-types";
import Link from "~components/StyledLink";
import Button from "~components/Button";
import CreateIcon from "~components/CreateIcon";
import HomeIcon from "~components/HomeIcon";
import SeedIcon from "~components/SeedIcon";
import Flex from "~components/Flex";
import FlexEnd from "~components/FlexEnd";
import FlexStart from "~components/FlexStart";

const UserListNavigation = ({ openModal, seedDB }) => (
	<div css="margin-bottom: 10px;">
		<Link href="/">
			<HomeIcon />
			<span>Go Back</span>
		</Link>
		<Flex style={{ width: 780, margin: "10px auto" }}>
			<FlexStart>
				<Button id="seed-database" type="button" onClick={seedDB}>
					<SeedIcon />
					<span>Seed Database</span>
				</Button>
			</FlexStart>
			<FlexEnd>
				<Button id="open-modal" primary type="button" onClick={openModal}>
					<CreateIcon />
					<span>Create New User</span>
				</Button>
			</FlexEnd>
		</Flex>
	</div>
);

UserListNavigation.propTypes = {
	openModal: PropTypes.func.isRequired,
	seedDB: PropTypes.func.isRequired,
};

export default UserListNavigation;
