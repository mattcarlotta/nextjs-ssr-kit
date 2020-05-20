import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";

const EditButton = ({ className, dataTestId, onClick, style }) => (
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

EditButton.propTypes = {
  className: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
};

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

  &:hover,
  &:focus {
    color: #4691f6;
    outline: none;
    opacity: 0.8;
  }
`;
