/* istanbul ignore file */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FieldError from "~components/Forms/FieldError";

const Input = ({
	className,
	hasError,
	isRequired,
	name,
	label,
	onHandleChange,
	value,
	style,
}) => (
	<div id="input-container" style={style} className={className}>
		<label css="margin: 0;display: block;" htmlFor={name}>
			{label}
		</label>
		<input
			id={name}
			css={`
				text-indent: 10px;
				height: 40px;
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

Input.propTypes = {
	className: PropTypes.string.isRequired,
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

export default styled(Input)`
	@media (max-width: 768px) {
		display: block !important;
		width: 100% !important;
	}

	height: 92px;
	padding: 0 10px;
`;
