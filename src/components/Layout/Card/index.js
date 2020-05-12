/* istanbul ignore file */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EditButton from "~components/Layout/EditButton";
import DeleteButton from "~components/Layout/DeleteButton";
import Flex from "~components/Layout/Flex";
import FlexEnd from "~components/Layout/FlexEnd";
import FlexStart from "~components/Layout/FlexStart";
import FadeIn from "~components/Layout/FadeIn";

const Divider = () => (
	<li css="display:inline-block;content: '';height: 10px;margin: 0 10px;border-left: 1px solid #d3d3d3;" />
);

const Card = ({
	className,
	_id,
	idx,
	address: { street, state, suite, city, zipCode },
	backgroundInfo,
	email,
	firstName,
	deleteUser,
	handleEditClick,
	lastName,
	userName,
}) => (
	<FadeIn timing={`${0.5 + idx / 10}s`}>
		<div id="card-container" className={className}>
			<Flex>
				<FlexStart>
					<h1 css="margin: 0;font-size: 30px;line-height: 1.4;color: #03a9f3;">
						{userName}
					</h1>
				</FlexStart>
				<FlexEnd>
					<EditButton id="edit" onClick={() => handleEditClick(_id)} />
					<DeleteButton id="delete" onClick={() => deleteUser(_id)} />
				</FlexEnd>
			</Flex>
			<p css="color: #666;margin: 0;">
				{firstName} {lastName}
				<span css="margin-left: 5px;font-size: 14px;">({email})</span>
			</p>
			<ul css="margin-top: 5px;font-size: 14px;padding: 0;list-style: none;line-height: 1.4;color: #999;">
				<li css="display:inline-block;">{street}</li>
				<Divider />
				{suite && (
					<>
						<li css="display:inline-block;">{suite}</li>
						<Divider />
					</>
				)}
				<li css="display:inline-block;">{city}</li>
				<Divider />
				<li css="display:inline-block;">{state}</li>
				<Divider />
				<li css="display:inline-block;">{zipCode}</li>
			</ul>
			<div css="overflow-wrap: break-word;word-wrap: break-word;">
				<p css="color: #b3b3b3;font-size: 16px;">{backgroundInfo}</p>
			</div>
		</div>
	</FadeIn>
);

Card.propTypes = {
	className: PropTypes.string.isRequired,
	idx: PropTypes.number,
	_id: PropTypes.string,
	email: PropTypes.string,
	backgroundInfo: PropTypes.string,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	deleteUser: PropTypes.func,
	handleEditClick: PropTypes.func,
	userName: PropTypes.string,
	address: PropTypes.shape({
		street: PropTypes.string,
		suite: PropTypes.string,
		city: PropTypes.string,
		state: PropTypes.string,
		zipCode: PropTypes.string,
	}),
};

export default styled(Card)`
	@media (max-width: 500px) {
		${Flex},${FlexStart}, ${FlexEnd} {
			display: block !important;
			width: 100%;
		}
		text-align: center;
	}
`;
