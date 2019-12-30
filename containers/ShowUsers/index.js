import React, { Component } from "react";
import PropTypes from "prop-types";
import app from "@utils/axiosConfig";
import LoadingUsers from "@components/LoadingUsers";
import DisplayUserList from "@components/DisplayUserList";
import UserListNavigation from "@components/UserListNavigation";
import Modal from "@components/Modal";
import UserForm from "@containers/UserForm";

export class ShowUsers extends Component {
	state = {
		isEditingID: "",
		openModal: false,
	};

	static async getInitialProps() {
		const users = await app.get("users");

		console.log("users", users);
		return { users, isLoading: false };
	}

	handleEditClick = id => this.setState({ isEditingID: id });

	handleResetEditClick = () => this.setState({ isEditingID: "" });

	handleOpenModal = () => this.setState({ openModal: true, isEditingID: "" });

	handleCloseModal = () => this.setState({ openModal: false, isEditingID: "" });

	render = () => (
		<div
			css="width: 100%;min-height: 100vh;background: #ebebeb;text-align: center;"
			style={this.state.openModal ? { overflow: "hidden" } : {}}
		>
			<UserListNavigation openModal={this.handleOpenModal} seedDB={() => {}} />
			{this.state.openModal && (
				<Modal onClick={this.handleCloseModal} title="Create New User">
					<UserForm
						{...this.props}
						submitAction={() => {}}
						resetForm={this.handleCloseModal}
					/>
				</Modal>
			)}
			{this.props.isLoading ? (
				<LoadingUsers height={400} width={800} opacity="1" />
			) : (
				<DisplayUserList
					{...this.props}
					{...this.state}
					onHandleCloseModal={this.handleCloseModal}
					onHandleDeleteClick={() => {}}
					onHandleEditClick={this.handleEditClick}
					onHandleResetEditClick={this.handleResetEditClick}
				/>
			)}
		</div>
	);
}

ShowUsers.defaultProps = {
	isLoading: true,
};

ShowUsers.propTypes = {
	// isLoading: PropTypes.bool.isRequired,
	// createUser: PropTypes.func.isRequired,
	// deleteUser: PropTypes.func.isRequired,
	// fetchUsers: PropTypes.func.isRequired,
	// seedDB: PropTypes.func.isRequired,
	// resetMessage: PropTypes.func.isRequired,
	// updateUser: PropTypes.func.isRequired,
	serverError: PropTypes.string,
	serverMessage: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			address: PropTypes.shape({
				street: PropTypes.string,
				suite: PropTypes.string,
				city: PropTypes.string,
				state: PropTypes.string,
				zipCode: PropTypes.string,
			}),
			_id: PropTypes.string,
			email: PropTypes.string,
			firstName: PropTypes.string,
			lastName: PropTypes.string,
			userName: PropTypes.string,
			backgroundInfo: PropTypes.string,
		}),
	),
};

export default ShowUsers;
