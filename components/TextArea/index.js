import React from "react";
import PropTypes from "prop-types";
import FieldError from "~components/FieldError";

const TextArea = ({
	hasError,
	isRequired,
	name,
	label,
	onHandleChange,
	value,
	style,
}) => (
	<div style={style} css="min-height: 225px;padding: 0 10px;">
		<label css="margin: 0;display: block;" htmlFor={name}>
			{label}
		</label>
		<textarea
			id={name}
			css={`
				box-sizing: border-box;
				padding: 10px;
				height: 173px;
				overflow-y: auto;
				width: 100%;
				background-color: #fff;
				color: #b3b3b3;
				border: 1px solid ${hasError && isRequired ? "#d03916" : "#d3d3d3"};
				transition: 0.2s ease-in-out;
				transition-property: color, background-color, border;
			`}
			name={name}
			value={value}
			onChange={onHandleChange}
		/>
		<FieldError hasError={hasError} isRequired={isRequired} />
	</div>
);

TextArea.propTypes = {
	hasError: PropTypes.bool.isRequired,
	isRequired: PropTypes.bool,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onHandleChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	style: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	),
};

export default TextArea;
