import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FieldError = ({ className, errors }) =>
	errors ? (
		<span data-testid="errors" className={className}>
			{errors}
		</span>
	) : null;

FieldError.propTypes = {
	className: PropTypes.string.isRequired,
	errors: PropTypes.string,
};

export default styled(FieldError)`
	color: #d03916;
	margin: 0;
	font-size: 18px;
`;
