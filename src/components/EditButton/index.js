/* istanbul ignore file */
import styled from "styled-components";
import EditButton from "./EditButton";

export default styled(EditButton)`
	cursor: pointer;
	font-size: 20px;
	background-color: transparent;
	outline: 0;
	border: 0;
	color: #4691f6;
	transition: 0.1s ease-in-out;
	transition-property: color;
	opacity: 0.4;

	&:hover,
	&:focus {
		color: #4691f6;
		outline: none;
		opacity: 0.8;
	}
`;
