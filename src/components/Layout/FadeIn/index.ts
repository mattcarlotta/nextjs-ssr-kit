/* istanbul ignore file */
import styled from "styled-components";

export default styled.div<{ timing?: string }>`
  animation: ${({ timing }) =>
    `fadeIn ${timing || "1s"} 0s ease-in-out forwards`};
`;
