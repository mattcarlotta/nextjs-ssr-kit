import React from "react";
import PropTypes from "prop-types";
import EditButton from "~components/EditButton";
import DeleteButton from "~components/DeleteButton";
import Flex from "~components/Flex";
import FlexEnd from "~components/FlexEnd";
import FlexStart from "~components/FlexStart";
import Divider from "./Divider";

const Card = ({
	className,
	_id,
	address: { street, state, suite, city, zipCode },
	backgroundInfo,
	email,
	firstName,
	onDeleteClick,
	onEditClick,
	lastName,
	userName,
}) => (
	<div id="card-container" className={className}>
		<Flex>
			<FlexStart>
				<h1 css="margin: 0;font-size: 30px;line-height: 1.4;color: #03a9f3;">
					{userName}
				</h1>
			</FlexStart>
			<FlexEnd>
				<EditButton id="edit" onClick={() => onEditClick(_id)} />
				<DeleteButton id="delete" onClick={() => onDeleteClick(_id)} />
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
);

Card.propTypes = {
	className: PropTypes.string.isRequired,
	_id: PropTypes.string,
	email: PropTypes.string,
	backgroundInfo: PropTypes.string,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	onDeleteClick: PropTypes.func,
	onEditClick: PropTypes.func,
	userName: PropTypes.string,
	address: PropTypes.shape({
		street: PropTypes.string,
		suite: PropTypes.string,
		city: PropTypes.string,
		state: PropTypes.string,
		zipCode: PropTypes.string,
	}),
};

export default Card;
