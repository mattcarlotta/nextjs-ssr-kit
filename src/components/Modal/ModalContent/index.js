import styled from "styled-components";

export default styled.div`
	max-width: ${({ maxWidth }) => maxWidth || "750px"};
	width: 100%;
	max-height: calc(100% - 96px);
	padding: 8px 10px 10px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	position: relative;
	overflow-y: auto;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
		0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
	box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
		0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
	border-radius: 4px;
	background-color: #f8f8f8;
	text-align: left;
	z-index: 200;
`;
