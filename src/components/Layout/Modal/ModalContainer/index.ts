/* istanbul ignore file */
import styled from "styled-components";

export default styled.div<{ maxWidth?: string }>`
  max-width: ${({ maxWidth }) => maxWidth || "600px"};
  width: 100%;
  margin: 0px auto;
`;
