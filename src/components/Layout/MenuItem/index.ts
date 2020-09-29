/* istanbul ignore file */
import styled from "@emotion/styled";

const MenuItem = styled.div`
  display: flex;
  white-space: nowrap;
  user-select: none;
  transition: all 200ms ease-in-out;

  div {
    cursor: pointer;
    padding: 12px 15px 8px;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export default MenuItem;
