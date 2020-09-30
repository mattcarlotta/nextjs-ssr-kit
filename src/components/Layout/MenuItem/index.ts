/* istanbul ignore file */
import styled from "@emotion/styled";

const MenuItem = styled.div`
  display: flex;
  white-space: nowrap;
  user-select: none;
  transition: all 200ms ease-in-out;

  :hover {
    background-color: #ddd;
  }
`;

export default MenuItem;
