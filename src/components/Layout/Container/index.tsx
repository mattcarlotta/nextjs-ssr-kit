import { ContainerProps } from "~types";

const Container = ({
  children,
  dataTestId,
  innerStyle,
  style,
}: ContainerProps): JSX.Element => (
  <div
    data-testid={dataTestId}
    style={style}
    css="width: 100%;max-width: 800px; margin: 0 auto;padding: 10px;text-align: left;"
  >
    <div
      style={innerStyle}
      css="background-color: #fff;min-height: 400px;;padding: 10px 15px;margin-bottom: 0;position: relative;min-width: 1px;box-sizing: border-box;width: 100%;max-width: 100%;border-radius: 4px;box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);"
    >
      {children}
    </div>
  </div>
);

export default Container;
