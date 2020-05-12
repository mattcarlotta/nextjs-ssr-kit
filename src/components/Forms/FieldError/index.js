import React from "react";
import PropTypes from "prop-types";

const FieldError = ({ errors }) =>
	errors ? (
		<span id="error" css="color: #d03916;margin: 0;font-size: 18px;">
			{errors}
		</span>
	) : (
		<span css="margin: 0;opacity: 0;">&nbsp;</span>
	);

FieldError.propTypes = {
	errors: PropTypes.string,
};

export default FieldError;
