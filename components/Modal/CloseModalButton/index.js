/* istanbul ignore file */
import styled from "styled-components";

export default styled.button`
	cursor: pointer;
	color: #d2d2d2;
	border: 0;
	background-color: transparent;
	-webkit-font-smoothing: auto;
	transition: all 0.2s ease-in-out;
	font-size: 20px;

	&:hover {
		color: #f5222d;
	}
	&:focus {
		outline: none;
	}
`;
