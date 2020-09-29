import styled from "@emotion/styled";

const Flex = styled.div<{
  direction?: string;
  justify?: string;
  flexwrap?: boolean;
  width?: string;
}>`
  flex-direction: ${({ direction }) => direction || "row"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || "100%"};
  flex-wrap: ${({ flexwrap }) => (flexwrap ? "wrap" : "nowrap")};
  justify-content: ${({ justify }) => justify || "start"};
`;

export default Flex;
