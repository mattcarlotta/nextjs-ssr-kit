import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { EditButtonProps } from "~types";

const EditButton = ({
  className,
  dataTestId,
  onClick,
  style,
}: EditButtonProps): JSX.Element => (
  <button
    data-testid={dataTestId}
    type="button"
    style={style}
    className={className}
    onClick={onClick}
  >
    <FaPencilAlt />
  </button>
);

export default styled(EditButton)`
  cursor: pointer;
  font-size: 20px;
  background-color: transparent;
  outline: 0;
  border: 0;
  color: #4691f6;
  transition: 0.1s ease-in-out;
  transition-property: color;
  opacity: 0.4;

  :hover,
  :focus {
    color: #4691f6;
    outline: none;
    opacity: 0.8;
  }
`;
