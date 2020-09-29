import styled from "@emotion/styled";
import { FaCoffee } from "react-icons/fa";
import Center from "~components/Layout/Center";
import Link from "~components/Navigation/Link";
import SubTitle from "~components/Layout/SubTitle";
import Header from "~components/Navigation/Header";
import { NextPage } from "~types";

const PageContainer = styled.div`
  max-width: 850px;
  width: 100%;
  padding-top: 25vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const Home: NextPage = () => (
  <Center data-testid="home-page" style={{ height: "100%", color: "#0076ff" }}>
    <Header title="Home" url="/" />
    <PageContainer>
      <img
        style={{ marginBottom: "10px", width: "100%" }}
        src="/images/nextjsKit.png"
        alt="ssrLogoLight.png"
      />
      <SubTitle>Edit files in the root directory and save to reload.</SubTitle>
      <Link href="/users">
        <FaCoffee
          style={{
            position: "relative",
            top: 6,
            fontSize: 23,
            marginRight: 6,
          }}
        />
        See Example
      </Link>
    </PageContainer>
  </Center>
);

export default Home;
