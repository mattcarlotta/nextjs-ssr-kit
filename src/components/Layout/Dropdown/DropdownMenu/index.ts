import styled from "@emotion/styled";

const DropdownMenu = styled.div`
  @media (max-width: 500px) {
    transform: translate(0%);
  }

  top: 100%;
  transform: translate(-25%);
  position: absolute;
  width: auto;
  z-index: 1;
  margin-top: -1px;
  border-radius: 4px;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.39);
  background-color: #fff;
`;

export default DropdownMenu;
