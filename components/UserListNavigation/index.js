/* istanbul ignore file */
import styled from "styled-components";
import UserListNavigation from "./UserListNavigation";
import Flex from "~components/Flex";
import FlexStart from "~components/FlexStart";
import FlexEnd from "~components/FlexEnd";

export default styled(UserListNavigation)`
	@media (max-width: 800px) {
		${Flex},${FlexStart}, ${FlexEnd} {
			display: block !important;
			margin-bottom: 20px;
			width: 100% !important;
		}
	}

	margin-bottom: 10px;
`;
