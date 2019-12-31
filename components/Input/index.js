/* istanbul ignore file */
import styled from "styled-components";
import Input from "./Input";

export default styled(Input)`
	@media (max-width: 768px) {
		display: block !important;
		width: 100% !important;
	}

	height: 92px;
	padding: 0 10px;
`;
