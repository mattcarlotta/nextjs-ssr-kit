/* istanbul ignore file */
import styled from "styled-components";

export default styled.div`
	-webkit-animation: ${({ timing }) =>
		`fadeIn ${timing || "1s"} 0s ease-in-out forwards`};
	animation: ${({ timing }) =>
		`fadeIn ${timing || "1s"} 0s ease-in-out forwards`};
`;
