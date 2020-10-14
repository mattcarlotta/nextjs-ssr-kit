import { ContainerProps } from "~types";
import CardWrapper from "./CardWrapper";
import ContainerWrapper from "./ContainerWrapper";

const Container = ({
  children,
  dataTestId,
  innerStyle,
  style
}: ContainerProps): JSX.Element => (
  <ContainerWrapper data-testid={dataTestId} style={style}>
    <CardWrapper style={innerStyle}>{children}</CardWrapper>
  </ContainerWrapper>
);

export default Container;
