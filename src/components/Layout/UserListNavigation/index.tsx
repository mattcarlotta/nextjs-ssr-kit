/* istanbul ignore file */
import styled from "@emotion/styled";
import { FaFileAlt, FaUserPlus } from "react-icons/fa";
import Button from "~components/Layout/Button";
import HomeIcon from "~components/Layout/HomeIcon";
import Flex from "~components/Layout/Flex";
import FlexEnd from "~components/Layout/FlexEnd";
import FlexStart from "~components/Layout/FlexStart";
import Link from "~components/Navigation/Link";
import { CSSProperties, UserListNavigationProps } from "~types";

const iconStyle = {
  position: "relative",
  top: 2,
  fontSize: 18,
  marginRight: 5,
} as CSSProperties;

const UserListNavigation = ({
  className,
  openModal,
  seedDB,
}: UserListNavigationProps) => (
  <div data-testid="user-list-navigation" className={className}>
    <Link href="/">
      <HomeIcon />
      <span>Go Back</span>
    </Link>
    <Flex width="780px" style={{ margin: "20px auto 10px" }}>
      <FlexStart>
        <Button dataTestId="seed-database" type="button" onClick={seedDB}>
          <FaFileAlt style={iconStyle} />
          <span>Seed Database</span>
        </Button>
      </FlexStart>
      <FlexEnd>
        <Button dataTestId="open-modal" type="button" onClick={openModal}>
          <FaUserPlus style={iconStyle} />
          <span>Create New User</span>
        </Button>
      </FlexEnd>
    </Flex>
  </div>
);

export default styled(UserListNavigation)`
  @media (max-width: 800px) {
    ${Flex},${FlexStart}, ${FlexEnd} {
      display: block !important;
      margin-bottom: 20px;
      width: 100% !important;
    }
  }

  margin-bottom: 10px;
`;
