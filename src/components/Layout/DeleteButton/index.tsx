/* istanbul ignore file */
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { DeleteButtonProps } from "~types";

const DeleteButton = ({
  className,
  dataTestId,
  onClick,
  style,
}: DeleteButtonProps): JSX.Element => (
  <button
    data-testid={dataTestId}
    type="button"
    style={style}
    className={className}
    onClick={onClick}
  >
    <FaTrashAlt />
  </button>
);

export default styled(DeleteButton)`
  cursor: pointer;
  color: #f5222d;
  font-size: 20px;
  background-color: transparent;
  outline: 0;
  border: 0;
  transition: 0.1s ease-in-out;
  transition-property: color;
  opacity: 0.4;

  &:hover,
  &:focus {
    color: #f5222d;
    outline: none;
    opacity: 0.8;
  }
`;
