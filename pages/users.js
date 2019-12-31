import React, { Component } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { connect } from "react-redux";
import DisplayUserList from "~components/DisplayUserList";
import UserListNavigation from "~components/UserListNavigation";
import Modal from "~components/Modal";
import UserForm from "~components/UserForm";
import {
	createUser,
	deleteUser,
	fetchUsers,
	seedDB,
	updateUser,
} from "~actions/Users";
import { resetMessage } from "~actions/Server";

export class ShowUsers extends Component {
	state = {
		isEditingID: "",
		openModal: false,
	};

	static async getInitialProps({ store }) {
		store.dispatch(fetchUsers());
	}

	handleEditClick = id => this.setState({ isEditingID: id });

	handleResetEditClick = () => this.setState({ isEditingID: "" });

	handleOpenModal = () => this.setState({ openModal: true, isEditingID: "" });

	handleCloseModal = () => this.setState({ openModal: false, isEditingID: "" });

	render = () => (
		<div css="padding: 10px 0 40px;">
			<Head>
				<title>NextJS SSR Kit - Users</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div css="text-align: center;">
				<UserListNavigation
					openModal={this.handleOpenModal}
					seedDB={this.props.seedDB}
				/>
				{this.state.openModal && (
					<Modal onClick={this.handleCloseModal} title="Create New User">
						<UserForm
							{...this.props}
							submitAction={this.props.createUser}
							resetForm={this.handleCloseModal}
						/>
					</Modal>
				)}
				<DisplayUserList
					{...this.props}
					{...this.state}
					onHandleCloseModal={this.handleCloseModal}
					onHandleDeleteClick={this.props.deleteUser}
					onHandleEditClick={this.handleEditClick}
					onHandleResetEditClick={this.handleResetEditClick}
				/>
			</div>
		</div>
	);
}

ShowUsers.propTypes = {
	createUser: PropTypes.func.isRequired,
	deleteUser: PropTypes.func.isRequired,
	fetchUsers: PropTypes.func.isRequired,
	seedDB: PropTypes.func.isRequired,
	resetMessage: PropTypes.func.isRequired,
	updateUser: PropTypes.func.isRequired,
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

/* istanbul ignore next */
const mapStateToProps = ({ users, server }) => ({
	data: users.data,
	serverError: server.error,
	serverMessage: server.message,
});

/* istanbul ignore next */
const mapDispatchToProps = {
	createUser,
	deleteUser,
	fetchUsers,
	resetMessage,
	seedDB,
	updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowUsers);
