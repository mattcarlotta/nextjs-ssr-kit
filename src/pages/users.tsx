import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { resetMessage } from "~actions/Server";
import * as actions from "~actions/Users";
import UserForm from "~components/Forms/UserForm";
import Center from "~components/Layout/Center";
import DisplayUserList from "~components/Layout/DisplayUserList";
import Modal from "~components/Layout/Modal";
import FadeIn from "~components/Layout/FadeIn";
import LoadingUsers from "~components/Layout/LoadingUsers";
import UserListNavigation from "~components/Layout/UserListNavigation";
import Header from "~components/Navigation/Header";
import {
  NextPage,
  ServerReducerState,
  ShowUsersState,
  UserReducerState,
  UserData,
} from "~types";

const ShowUsers: NextPage = () => {
  const [state, setState] = useState<ShowUsersState>({
    isEditingID: "",
    openModal: false,
  });
  const dispatch = useDispatch();
  const createUserAction = useCallback(
    ({ props }: { props: UserData }) => dispatch(actions.createUser({ props })),
    [actions.createUser, dispatch],
  );
  const deleteUserAction = useCallback(
    (id: string) => dispatch(actions.deleteUser(id)),
    [actions.deleteUser, dispatch],
  );
  const seedDBAction = useCallback(() => dispatch(actions.seedDB()), [
    actions.seedDB,
    dispatch,
  ]);
  const updateUserAction = useCallback(
    ({ props, id }: { props: UserData; id: string }) =>
      dispatch(actions.updateUser({ props, id })),
    [actions.updateUser, dispatch],
  );
  const resetMessageAction = useCallback(() => dispatch(resetMessage()), [
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

  const handleEditClick = useCallback(
    (id: string) => setState(prevState => ({ ...prevState, isEditingID: id })),
    [],
  );

  const handleResetEditClick = useCallback(
    () =>
      setState(prevState => ({
        ...prevState,
        isEditingID: "",
      })),
    [],
  );

  const handleOpenModal = useCallback(
    () =>
      setState(prevState => ({
        ...prevState,
        openModal: true,
        isEditingID: "",
      })),
    [],
  );

  const handleCloseModal = useCallback(
    () =>
      setState(prevState => ({
        ...prevState,
        openModal: false,
        isEditingID: "",
      })),
    [],
  );

  useEffect(() => {
    if (reduxProps.isLoading) dispatch(actions.fetchUsers());
  }, [dispatch, reduxProps.isLoading]);

  return (
    <div data-testid="users-page" style={{ padding: "20px 0 40px" }}>
      <Header title="Users" url="/users" />
      <Center>
        <UserListNavigation openModal={handleOpenModal} seedDB={seedDBAction} />
        {state.openModal && (
          <Modal
            onClick={handleCloseModal}
            title={
              <>
                <BsFillPersonPlusFill
                  style={{
                    fontSize: 18,
                    marginRight: 8,
                    position: "relative",
                    top: 2,
                  }}
                />
                New User Form
              </>
            }
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
      </Center>
    </div>
  );
};

export default ShowUsers;
