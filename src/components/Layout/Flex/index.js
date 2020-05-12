/* istanbul ignore file */
import styled from "styled-components";

export default styled.div`
	flex-direction: ${({ direction }) => direction || "row"};
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
