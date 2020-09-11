import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { connect } from "react-redux";
import { resetMessage, setError } from "~actions/Server";
import {
  createUser,
  deleteUser,
  fetchUsers,
  resetUsers,
  seedDB,
  setUsers,
  updateUser,
} from "~actions/Users";
import UserForm from "~components/Forms/UserForm";
import DisplayUserList from "~components/Layout/DisplayUserList";
import Modal from "~components/Layout/Modal";
import FadeIn from "~components/Layout/FadeIn";
import LoadingUsers from "~components/Layout/LoadingUsers";
import UserListNavigation from "~components/Layout/UserListNavigation";
import { wrapper } from "~store";
import app from "~utils/axiosConfig";
import { parseData } from "~utils/parseResponse";
import toast from "~components/App/Toast";

export class ShowUsers extends React.Component {
  state = {
    isEditingID: "",
    openModal: false,
  };

  handleEditClick = id => this.setState({ isEditingID: id });

  handleResetEditClick = () => this.setState({ isEditingID: "" });

  handleOpenModal = () => this.setState({ openModal: true, isEditingID: "" });

  handleCloseModal = () => this.setState({ openModal: false, isEditingID: "" });

  render = () => (
    <div data-testid="users-page" css="padding: 10px 0 40px;">
      <Head>
        <title>Users - NextJS SSR Kit</title>
      </Head>
      <div css="text-align: center;">
        <UserListNavigation
          openModal={this.handleOpenModal}
          seedDB={this.props.seedDB}
        />
        {this.state.openModal && (
          <Modal
            onClick={this.handleCloseModal}
            title="Create New User Form"
            disableClickHandler
            maxWidth="750px"
          >
            <UserForm
              {...this.props}
              submitAction={this.props.createUser}
              cancelForm={this.handleCloseModal}
              resetForm={this.handleCloseModal}
            />
          </Modal>
        )}
        {this.props.isLoading ? (
          <LoadingUsers height={398} width={780} opacity="1" />
        ) : (
          <FadeIn timing="0.3s">
            <DisplayUserList
              {...this.props}
              {...this.state}
              handleCloseModal={this.handleCloseModal}
              handleEditClick={this.handleEditClick}
              handleResetEditClick={this.handleResetEditClick}
            />
          </FadeIn>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store: { dispatch } }) => {
    try {
      dispatch(resetUsers());

      const res = await app.get("users");
      const data = parseData(res);

      dispatch(setUsers(data));
    } catch (e) {
      const message = e.toString();
      dispatch(setError(message));
      toast({ type: "error", message });
    }
  },
);

ShowUsers.propTypes = {
  createUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  seedDB: PropTypes.func.isRequired,
  resetMessage: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  serverError: PropTypes.string,
  serverMessage: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
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
  isLoading: users.isLoading,
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
