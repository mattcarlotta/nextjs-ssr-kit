import styled from "@emotion/styled";
import EditButton from "~components/Layout/EditButton";
import DeleteButton from "~components/Layout/DeleteButton";
import Flex from "~components/Layout/Flex";
import FlexEnd from "~components/Layout/FlexEnd";
import FlexStart from "~components/Layout/FlexStart";
import FadeIn from "~components/Layout/FadeIn";
import UserAddress from "./UserAddress";
import UserBackground from "./UserBackground";
import UserDetails from "./UserDetails";
import UserName from "./UserName";
import { CardProps } from "~types";

const Divider = styled.li`
  display: inline-block;
  content: "";
  height: 10px;
  margin: 0 10px;
  border-left: 1px solid #d3d3d3;
`;

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
}: CardProps): JSX.Element => (
  <FadeIn data-testid="card-container" timing={`${0.5 + idx / 10}s`}>
    <div className={className}>
      <Flex>
        <FlexStart>
          <UserName>{userName}</UserName>
        </FlexStart>
        <FlexEnd>
          <EditButton
            className="hidden"
            dataTestId="edit"
            onClick={() => handleEditClick(_id)}
          />
          <DeleteButton
            className="hidden"
            dataTestId="delete"
            onClick={() => deleteUser(_id)}
          />
        </FlexEnd>
      </Flex>
      <UserDetails>
        {firstName} {lastName}
        <span>({email})</span>
      </UserDetails>
      <UserAddress>
        <li>{street}</li>
        <Divider />
        {suite && (
          <>
            <li>{suite}</li>
            <Divider />
          </>
        )}
        <li>{city}</li>
        <Divider />
        <li>{state}</li>
        <Divider />
        <li>{zipCode}</li>
      </UserAddress>
      <UserBackground>
        <p>{backgroundInfo}</p>
      </UserBackground>
    </div>
  </FadeIn>
);

export default styled(Card)`
  @media (max-width: 500px) {
    ${Flex},${FlexStart}, ${FlexEnd} {
      display: block !important;
      width: 100%;
    }
    text-align: center;
  }
`;
