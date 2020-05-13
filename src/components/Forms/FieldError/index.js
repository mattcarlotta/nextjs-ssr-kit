import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FieldError = ({ className, errors }) => (
	<span data-testid="errors" className={className}>
		{errors || <>&nbsp;</>}
	</span>
);

FieldError.propTypes = {
	className: PropTypes.string.isRequired,
	errors: PropTypes.string,
};

export default styled(FieldError)`
	color: #d03916;
	margin: 0;
	font-size: 18px;
	opacity: ${({ errors }) => (errors ? "1" : "0")};
`;
