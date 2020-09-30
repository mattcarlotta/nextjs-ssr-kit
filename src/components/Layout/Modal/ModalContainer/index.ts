/* istanbul ignore file */
import styled from "@emotion/styled";

const ModalContainer = styled.div<{ maxWidth?: string }>`
  max-width: ${({ maxWidth }) => maxWidth || "600px"};
  width: 100%;
  margin: 0px auto;
`;

export default ModalContainer;
