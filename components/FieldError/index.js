import React from "react";
import PropTypes from "prop-types";

const FieldError = ({ hasError, isRequired }) =>
	isRequired && hasError ? (
		<span id="error" css="color: #d03916;margin: 0;font-size: 18px;">
			Required
		</span>
	) : (
		<span css="margin: 0;opacity: 0;">&nbsp;</span>
	);

FieldError.propTypes = {
	hasError: PropTypes.bool.isRequired,
	isRequired: PropTypes.bool,
};

export default FieldError;
