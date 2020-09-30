import isEmpty from "lodash.isempty";
import UserForm from "~components/Forms/UserForm";
import Card from "~components/Layout/Card";
import Container from "~components/Layout/Container";
import FadeIn from "~components/Layout/FadeIn";
import NoData from "~components/Layout/NoData";
import { DisplayUserListProps, UserData } from "~types";

const DisplayUserList = ({
  data,
  isEditingID,
  handleCloseModal,
  handleEditClick,
  handleResetEditClick,
  updateUser,
  deleteUser,
  ...rest
}: DisplayUserListProps): JSX.Element => (
  <>
    {!isEmpty(data) ? (
      data.map((props: UserData, idx) => (
        <Container data-testid="user-card" key={props._id}>
          {isEditingID !== props._id ? (
            <Card
              {...props}
              {...rest}
              key={props._id}
              _id={props._id}
              address={props.address}
              idx={idx}
              handleEditClick={handleEditClick}
              deleteUser={deleteUser}
            />
          ) : (
            <FadeIn timing="0.3s">
              <UserForm
                {...props}
                {...rest}
                key={props._id}
                cancelForm={handleResetEditClick}
                resetForm={handleCloseModal}
                submitAction={updateUser}
              />
            </FadeIn>
          )}
        </Container>
      ))
    ) : (
      <NoData />
    )}
  </>
);

export default DisplayUserList;
