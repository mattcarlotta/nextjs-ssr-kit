import * as React from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { resetMessage } from "~actions/Server";
import * as actions from "~actions/Users";
import UserForm from "~components/Forms/UserForm";
import DisplayUserList from "~components/Layout/DisplayUserList";
import Modal from "~components/Layout/Modal";
import FadeIn from "~components/Layout/FadeIn";
import LoadingUsers from "~components/Layout/LoadingUsers";
import UserListNavigation from "~components/Layout/UserListNavigation";
import {
  NextPage,
  ServerReducerState,
  UserReducerState,
  UserData,
} from "~types";

const ShowUsers: NextPage = () => {
  const [state, setState] = React.useState({
    isEditingID: "",
    openModal: false,
  });
  const dispatch = useDispatch();
  const createUserAction = React.useCallback(
    ({ props }: { props: UserData }) => dispatch(actions.createUser({ props })),
    [actions.createUser, dispatch],
  );
  const deleteUserAction = React.useCallback(
    (id: string) => dispatch(actions.deleteUser(id)),
    [actions.deleteUser, dispatch],
  );
  const seedDBAction = React.useCallback(() => dispatch(actions.seedDB()), [
    actions.seedDB,
    dispatch,
  ]);
  const updateUserAction = React.useCallback(
    ({ props, id }: { props: UserData; id: string }) =>
      dispatch(actions.updateUser({ props, id })),
    [actions.updateUser, dispatch],
  );
  const resetMessageAction = React.useCallback(() => dispatch(resetMessage()), [
    resetMessage,
    dispatch,
  ]);

  const reduxProps = useSelector(
    ({
      users,
      server,
    }: {
      users: UserReducerState;
      server: ServerReducerState;
    }) => ({
      data: users.data,
      isLoading: users.isLoading,
      serverError: server.error,
      serverMessage: server.message,
    }),
  );

  const handleEditClick = React.useCallback(
    (id: string) => setState(prevState => ({ ...prevState, isEditingID: id })),
    [],
  );

  const handleResetEditClick = React.useCallback(
    () => setState(prevState => ({ ...prevState, isEditingID: "" })),
    [],
  );

  const handleOpenModal = React.useCallback(
    () =>
      setState(prevState => ({
        ...prevState,
        openModal: true,
        isEditingID: "",
      })),
    [],
  );

  const handleCloseModal = React.useCallback(
    () =>
      setState(prevState => ({
        ...prevState,
        openModal: false,
        isEditingID: "",
      })),
    [],
  );

  React.useEffect(() => {
    if (reduxProps.isLoading) dispatch(actions.fetchUsers());
  }, [dispatch, reduxProps.isLoading]);

  return (
    <div data-testid="users-page" css="padding: 10px 0 40px;">
      <Head>
        <title>Users - NextJS SSR Kit</title>
      </Head>
      <div css="text-align: center;">
        <UserListNavigation openModal={handleOpenModal} seedDB={seedDBAction} />
        {state.openModal && (
          <Modal
            onClick={handleCloseModal}
            title="Create New User Form"
            maxWidth="750px"
          >
            <UserForm
              {...reduxProps}
              submitAction={createUserAction}
              resetMessage={resetMessageAction}
              cancelForm={handleCloseModal}
              resetForm={handleCloseModal}
            />
          </Modal>
        )}
        {reduxProps.isLoading ? (
          <LoadingUsers height={398} width={780} opacity="1" />
        ) : (
          <FadeIn timing="0.3s">
            <DisplayUserList
              {...state}
              {...reduxProps}
              deleteUser={deleteUserAction}
              handleCloseModal={handleCloseModal}
              handleEditClick={handleEditClick}
              handleResetEditClick={handleResetEditClick}
              resetMessage={resetMessageAction}
              updateUser={updateUserAction}
            />
          </FadeIn>
        )}
      </div>
    </div>
  );
};

export default ShowUsers;
