import isEmpty from "lodash.isempty";
import React from "react";
import PropTypes from "prop-types";
import UserForm from "~components/Forms/UserForm";
import Card from "~components/Layout/Card";
import Container from "~components/Layout/Container";
import NoData from "~components/Layout/NoData";

const DisplayUserList = ({
	data,
	isEditingID,
	handleCloseModal,
	handleResetEditClick,
	updateUser,
	...rest
}) => (
	<>
		{!isEmpty(data) ? (
			data.map((props, idx) => (
				<Container data-testid="user-card" key={props._id}>
					{isEditingID !== props._id ? (
						<Card {...props} {...rest} key={props._id} idx={idx} />
					) : (
						<UserForm
							{...props}
							{...rest}
							key={props._id}
							cancelForm={handleResetEditClick}
							resetForm={handleCloseModal}
							submitAction={updateUser}
						/>
					)}
				</Container>
			))
		) : (
			<NoData />
		)}
	</>
);

DisplayUserList.propTypes = {
	_id: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
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
		}),
	),
	isEditingID: PropTypes.string,
	handleCloseModal: PropTypes.func.isRequired,
	handleResetEditClick: PropTypes.func.isRequired,
	resetMessage: PropTypes.func.isRequired,
	updateUser: PropTypes.func.isRequired,
};

export default DisplayUserList;
