import styled from "@emotion/styled";
import { ReactElement } from "~types";

export type FieldErrorProps = {
  className?: string;
  errors?: string;
};

const FieldErrorComponent = ({
  className,
  errors
}: FieldErrorProps): ReactElement | null =>
  errors ? (
    <span data-testid="errors" className={className}>
      {errors}
    </span>
  ) : null;

const FieldError = styled(FieldErrorComponent)`
  color: #d03916;
  margin: 0;
  font-size: 18px;
`;

export default FieldError;
