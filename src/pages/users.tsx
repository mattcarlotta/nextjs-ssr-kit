import * as React from "react";
import { connect } from "react-redux";
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
import { ConnectedProps, ReactElement, UserData, PickReduxState } from "~types";

/* istanbul ignore next */
const mapState = ({ users, server }: PickReduxState<"users" | "server">) => ({
  data: users.data,
  isLoading: users.isLoading,
  serverError: server.error,
  serverMessage: server.message
});

/* istanbul ignore next */
const mapDispatch = {
  ...actions,
  resetMessage
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type ShowUsersState = {
  isEditingID: string;
  openModal: boolean;
};

const ShowUsers = ({
  createUser,
  deleteUser,
  fetchUsers,
  isLoading,
  resetMessage,
  seedDB,
  updateUser,
  ...rest
}: PropsFromRedux): ReactElement => {
  const [state, setState] = React.useState<ShowUsersState>({
    isEditingID: "",
    openModal: false
  });

  const createUserAction = React.useCallback((payload: UserData) => {
    createUser(payload);
  }, []);

  const deleteUserAction = (id: string): void => {
    deleteUser(id);
  };

  const updateUserAction = React.useCallback((payload: UserData): void => {
    updateUser(payload);
  }, []);

  const handleEditClick = (id: string): void => {
    setState(prevState => ({ ...prevState, isEditingID: id }));
  };

  const handleResetEditClick = (): void => {
    setState(prevState => ({
      ...prevState,
      isEditingID: ""
    }));
  };

  const handleOpenModal = (): void => {
    setState(prevState => ({
      ...prevState,
      openModal: true,
      isEditingID: ""
    }));
  };

  const handleCloseModal = (): void => {
    setState(prevState => ({
      ...prevState,
      openModal: false,
      isEditingID: ""
    }));
  };

  React.useEffect(() => {
    if (isLoading) fetchUsers();
  }, [fetchUsers, isLoading]);

  return (
    <div data-testid="users-page" style={{ padding: "20px 0 40px" }}>
      <Header title="Users" url="/users" />
      <Center>
        <UserListNavigation openModal={handleOpenModal} seedDB={seedDB} />
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
                    top: 2
                  }}
                />
                New User Form
              </>
            }
            maxWidth="750px"
          >
            <UserForm
              {...rest}
              _id=""
              submitAction={createUserAction}
              resetMessage={resetMessage}
              cancelForm={handleCloseModal}
              resetForm={handleCloseModal}
            />
          </Modal>
        )}
        {isLoading ? (
          <LoadingUsers height={398} width={780} opacity="1" />
        ) : (
          <FadeIn timing="0.3s">
            <DisplayUserList
              {...state}
              {...rest}
              deleteUser={deleteUserAction}
              handleCloseModal={handleCloseModal}
              handleEditClick={handleEditClick}
              handleResetEditClick={handleResetEditClick}
              resetMessage={resetMessage}
              updateUser={updateUserAction}
            />
          </FadeIn>
        )}
      </Center>
    </div>
  );
};

export default connector(ShowUsers);
