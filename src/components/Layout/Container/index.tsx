import CardWrapper from "./CardWrapper";
import ContainerWrapper from "./ContainerWrapper";
import { CSSProperties, ReactElement, ReactNode } from "~types";

export type ContainerProps = {
  children: ReactNode;
  dataTestId?: string;
  innerStyle?: CSSProperties;
  style?: CSSProperties;
};

const Container = ({
  children,
  dataTestId,
  innerStyle,
  style
}: ContainerProps): ReactElement => (
  <ContainerWrapper data-testid={dataTestId} style={style}>
    <CardWrapper style={innerStyle}>{children}</CardWrapper>
  </ContainerWrapper>
);

export default Container;
