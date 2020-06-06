import React from "react";
import { FaChartArea } from "react-icons/fa";
import Container from "~components/Layout/Container";
import Flex from "~components/Layout/Flex";

const NoData = () => (
  <Container dataTestId="no-data" innerStyle={{ height: 400 }}>
    <Flex
      direction="column"
      justify="center"
      style={{ textAlign: "center", userSelect: "none", height: "100%" }}
    >
      <FaChartArea style={{ fontSize: 100, color: "#d4d3d3" }} />
      <h1 css="color: #d4d3d3;margin: 0;">No Data Found</h1>
      <p css="color: #d4d3d3;margin: 0">Add a user or seed the database.</p>
    </Flex>
  </Container>
);

export default NoData;
