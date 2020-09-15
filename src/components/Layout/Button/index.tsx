/* eslint-disable react/button-has-type */
import styled from "styled-components";
import { ButtonProps } from "~types";

const StyledButton = ({
  dataTestId,
  disabled,
  className,
  children,
  onClick,
  style,
  type,
}: ButtonProps): JSX.Element => (
  <button
    data-testid={dataTestId}
    disabled={disabled}
    type={type}
    className={className}
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
);

const Button = styled(StyledButton)`
  cursor: pointer;
  color: ${({ danger, primary }) => {
    if (primary) return "#03a9f3";
    if (danger) return "#f0506e";
    return "#828282";
  }};
  background: transparent;
  border: 1px solid
    ${({ danger, primary }) => {
      if (primary) return "#03a9f3";
      if (danger) return "#f0506e";
      return "#828282";
    }};
  font-size: 16px;
  padding: 8px 16px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  outline: none;
  border-radius: 4px;

  &:hover {
    text-decoration: none;
    color: ${({ danger, primary }) => {
      if (primary) return "#0f7ae5";
      if (danger) return "#be391c";
      return "#6f6f6f";
    }};
    border-color: ${({ danger, primary }) => {
      if (primary) return "#0f7ae5";
      if (danger) return "#be391c";
      return "#6f6f6f";
    }};
  }
`;

export default Button;
/* eslint-enable react/button-has-type */
