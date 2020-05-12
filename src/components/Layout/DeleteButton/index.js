/* istanbul ignore file */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

const DeleteButton = ({ className, dataTest, onClick, style }) => (
	<button
		data-test={dataTest}
		type="button"
		style={style}
		className={className}
		onClick={onClick}
	>
		<FaTrashAlt />
	</button>
);

DeleteButton.propTypes = {
	className: PropTypes.string.isRequired,
	dataTest: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	style: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	),
};

export default styled(DeleteButton)`
	cursor: pointer;
	color: #f5222d;
	font-size: 20px;
	background-color: transparent;
	outline: 0;
	border: 0;
	transition: 0.1s ease-in-out;
	transition-property: color;
	opacity: 0.4;

	&:hover,
	&:focus {
		color: #f5222d;
		outline: none;
		opacity: 0.8;
	}
`;
