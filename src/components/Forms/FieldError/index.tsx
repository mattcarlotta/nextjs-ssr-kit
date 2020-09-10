import React from "react";
import styled from "styled-components";
import { FieldErrorProps } from "~types";

const FieldErrorComponent = ({ className, errors }: FieldErrorProps) =>
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
