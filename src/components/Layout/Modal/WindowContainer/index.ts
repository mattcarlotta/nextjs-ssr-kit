/* istanbul ignore file */
import styled from "@emotion/styled";

export default styled.div`
  text-align: center;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 100;
  overflow: auto;
  outline: 0px;
  animation: 0.2s ease-in-out 0s 1 normal forwards running fadeIn;

  &::before {
    display: inline-block;
    width: 0px;
    height: 100%;
    vertical-align: middle;
    content: "";
  }
`;
