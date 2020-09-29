/* istanbul ignore file */
import { FaTrashAlt } from "react-icons/fa";
import Button from "~components/Layout/Button";
import { DeleteButtonProps } from "~types";

const DeleteButton = ({
  className,
  dataTestId,
  onClick,
}: DeleteButtonProps): JSX.Element => (
  <Button
    danger
    data-testid={dataTestId}
    type="button"
    padding="0.25rem 0.5rem"
    className={className}
    onClick={onClick}
  >
    <FaTrashAlt />
  </Button>
);

export default DeleteButton;
