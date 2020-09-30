/* istanbul ignore file */
import styled from "@emotion/styled";

const CloseModalButton = styled.button`
  cursor: pointer;
  color: #ededed;
  border: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  -webkit-font-smoothing: auto;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  margin-right: 5px;

  :hover {
    color: #fff;
  }

  :focus {
    outline: none;
  }
`;

export default CloseModalButton;
