import { FaPencilAlt } from "react-icons/fa";
import Button from "~components/Layout/Button";
import { EditButtonProps } from "~types";

const EditButton = ({
  className,
  dataTestId,
  onClick,
}: EditButtonProps): JSX.Element => (
  <Button
    data-testid={dataTestId}
    primary
    type="button"
    padding="0.25rem 0.5rem"
    style={{ marginRight: "10px" }}
    className={className}
    onClick={onClick}
  >
    <FaPencilAlt />
  </Button>
);

export default EditButton;
