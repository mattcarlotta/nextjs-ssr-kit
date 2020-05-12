/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ dataTest, className, children, onClick, style, type }) => (
	<button
		data-test={dataTest}
		type={type}
		className={className}
		onClick={onClick}
		style={style}
	>
		{children}
	</button>
);

Button.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	dataTest: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string.isRequired,
	style: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	),
};

export default styled(Button)`
	cursor: pointer;
	color: ${props => {
		if (props.primary) return "#03a9f3";
		if (props.danger) return "#f0506e";
		return "#828282";
	}};
	background-color: transparent;
	border: 1px solid
		${props => {
			if (props.primary) return "#03a9f3";
			if (props.danger) return "#f0506e";
			return "#828282";
		}};
	font-size: 16px;
	line-height: 38px;
	padding: 10px;
	padding: 8px 16px;
	text-align: center;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	text-transform: uppercase;
	outline: none;
	border-radius: 4px;

	&:hover {
		text-decoration: none;
		color: ${props => {
			if (props.primary) return "#0f7ae5";
			if (props.danger) return "#be391c";
			return "#6f6f6f";
		}};
		border-color: ${props => {
			if (props.primary) return "#0f7ae5";
			if (props.danger) return "#be391c";
			return "#6f6f6f";
		}};
	}
`;
/* eslint-enable react/button-has-type */
