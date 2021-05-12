import * as React from "react";
import styled from "@emotion/styled";
import { BsPencilSquare, BsThreeDots, BsTrash } from "react-icons/bs";
import Avatar from "~components/Layout/Avatar";
import Dropdown from "~components/Layout/Dropdown";
import Flex from "~components/Layout/Flex";
import FlexEnd from "~components/Layout/FlexEnd";
import FlexStart from "~components/Layout/FlexStart";
import FadeIn from "~components/Layout/FadeIn";
import Menu from "~components/Layout/Menu";
import MenuButton from "~components/Layout/MenuButton";
import MenuItem from "~components/Layout/MenuItem";
import toInitials from "~utils/toInitials";
import UserAddress from "./UserAddress";
import UserBackground from "./UserBackground";
import UserDetails from "./UserDetails";
import UserName from "./UserName";

const Divider = styled.li`
  display: inline-block;
  content: "";
  height: 10px;
  margin: 0 10px;
  border-left: 1px solid #d3d3d3;
`;

export interface CardProps {
  _id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  backgroundInfo?: string;
  address: any;
  key: any;
  className?: string;
  idx: number;
  handleEditClick: (id: string) => void;
  deleteUser: (id: string) => void;
}

const CardComponent = ({
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
  userName
}: CardProps): JSX.Element => (
  <FadeIn data-testid="card-container" timing={`${0.5 + idx / 10}s`}>
    <div className={className}>
      <Flex>
        <FlexStart>
          <Avatar>{toInitials(`${firstName} ${lastName}`)}</Avatar>
          <UserName>{userName}</UserName>
        </FlexStart>
        <FlexEnd>
          <Dropdown
            menu={
              <Menu>
                <MenuItem>
                  <MenuButton
                    role="button"
                    data-testid="edit"
                    onClick={() => handleEditClick(_id)}
                  >
                    <BsPencilSquare />
                  </MenuButton>
                </MenuItem>
                <MenuItem>
                  <MenuButton
                    role="button"
                    data-testid="delete"
                    onClick={() => deleteUser(_id)}
                  >
                    <BsTrash />
                  </MenuButton>
                </MenuItem>
              </Menu>
            }
          >
            <BsThreeDots />
          </Dropdown>
        </FlexEnd>
      </Flex>
      <UserDetails>{email}</UserDetails>
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

const Card = styled(CardComponent)`
  @media (max-width: 500px) {
    ${Flex},${FlexStart}, ${FlexEnd} {
      display: block !important;
      width: 100%;
    }
    text-align: center;
  }
`;

export default Card;
