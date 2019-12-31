/* istanbul ignore file */
import styled from "styled-components";
import Card from "./Card";
import Flex from "~components/Flex";
import FlexStart from "~components/FlexStart";
import FlexEnd from "~components/FlexEnd";

export default styled(Card)`
	@media (max-width: 500px) {
		${Flex},${FlexStart}, ${FlexEnd} {
			display: block !important;
			width: 100%;
		}
		text-align: center;
	}
`;
