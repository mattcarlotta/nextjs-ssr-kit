import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FieldError from "~components/Forms/FieldError";

const TextArea = ({
	className,
	errors,
	label,
	name,
	placeholder,
	onChange,
	value,
	style,
}) => (
	<div data-testid="textarea-container" className={className} style={style}>
		<label css="margin: 0;display: block;" htmlFor={name}>
			{label}
		</label>
		<textarea
			aria-label={name}
			data-testid={name}
			name={name}
			onChange={onChange}
			placeholder={placeholder}
			tabIndex={0}
			value={value}
		/>
		<FieldError errors={errors} />
	</div>
);

TextArea.propTypes = {
	className: PropTypes.string.isRequired,
	errors: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	style: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	),
};

export default styled(TextArea)`
	@media (max-width: 768px) {
		display: block !important;
		width: 100% !important;
	}

	min-height: 225px;
	padding: 0 10px;

	textarea {
		box-sizing: border-box;
		padding: 10px;
		height: 173px;
		overflow-y: auto;
		width: 100%;
		background-color: #fff;
		color: #3a3a3a;
		border: 1px solid ${({ errors }) => (errors ? "#d03916" : "#d3d3d3")};
		transition: 0.2s ease-in-out;
		transition-property: color, background-color, border;

		&::placeholder {
			color: #bbb;
		}

		&:focus {
			outline: 0;
			border: 1px solid #1890ff;
		}
	}
`;
