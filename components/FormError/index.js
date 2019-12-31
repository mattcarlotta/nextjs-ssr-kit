import React from "react";
import PropTypes from "prop-types";

const FormError = ({ hasError }) =>
	hasError ? (
		<div css="position: relative;	padding: 15px 29px 15px 15px;	background:#fef4f6;color: #d03916;border: 1px dotted;">
			<p
				id="form-error"
				css="color: #d03916;margin: 0 10px;font-weight: bold;font-size: 18px;text-align: center;"
			>
				{hasError}
			</p>
		</div>
	) : null;

FormError.propTypes = {
	hasError: PropTypes.string,
};

export default FormError;
