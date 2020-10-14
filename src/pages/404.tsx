import Head from "next/head";
import Center from "~components/Layout/Center";
import ErrorMessage from "~components/Layout/ErrorMessage";
import ErrorStatus from "~components/Layout/ErrorStatus";
import Flex from "~components/Layout/Flex";
import HomeIcon from "~components/Layout/HomeIcon";
import Link from "~components/Navigation/Link";
import { NextPage } from "~types";

const NotFound: NextPage = () => (
  <Flex
    data-testid="not-found-page"
    justify="center"
    style={{ height: "90vh" }}
    id="notfound"
  >
    <Head>
      <title>Not Found - NextJS SSR Kit</title>
    </Head>
    <Center
      style={{
        color: "#03a9f3",
        background: "#fff",
        boxShadow: "0 4px 14px 0 rgba(130, 130, 130, 0.19)",
        padding: 40
      }}
    >
      <ErrorStatus>404</ErrorStatus>
      <ErrorMessage>Uh Oh! Page not found!</ErrorMessage>
      <Link href="/">
        <HomeIcon />
        <span>Go Back</span>
      </Link>
    </Center>
  </Flex>
);

export default NotFound;
