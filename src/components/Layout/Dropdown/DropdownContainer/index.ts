import styled from "@emotion/styled";

const DropdownContainer = styled.div`
  display: flex;
  transition: all 100ms ease 0s;
  padding: 10px;
  cursor: pointer;
  align-items: center;
  border-radius: 4px;

  :hover {
    background: #ddd;
  }
`;

export default DropdownContainer;
