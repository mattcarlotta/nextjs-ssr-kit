/* istanbul ignore file */
import styled from "styled-components";

export default styled.div`
	text-align: center;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: auto;
	outline: 0;
	-webkit-animation: fadeIn 0.2s 0s ease-in-out forwards;
	animation: fadeIn 0.2s 0s ease-in-out forwards;
	z-index: 100;
	&::before {
		display: inline-block;
		width: 0;
		height: 100%;
		vertical-align: middle;
		content: "";
	}
`;
