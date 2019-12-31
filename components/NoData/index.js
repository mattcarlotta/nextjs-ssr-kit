import React from "react";
import { FaChartArea } from "react-icons/fa";
import Container from "~components/Container";

const NoData = () => (
	<Container>
		<div css="margin-top: 60px;text-align: center;user-select: none;">
			<FaChartArea style={{ fontSize: 100, color: "#d4d3d3" }} />
			<h1 css="color: #d4d3d3;margin: 0;">No Data Found</h1>
			<p css="color: #d4d3d3;margin: 0">Add a user or seed the database.</p>
		</div>
	</Container>
);

export default NoData;
