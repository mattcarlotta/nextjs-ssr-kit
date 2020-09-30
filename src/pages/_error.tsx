import Head from "next/head";
import Center from "~components/Layout/Center";
import ErrorMessage from "~components/Layout/ErrorMessage";
import ErrorStatus from "~components/Layout/ErrorStatus";
import Flex from "~components/Layout/Flex";
import HomeIcon from "~components/Layout/HomeIcon";
import Link from "~components/Navigation/Link";
import { NextPage } from "~types";

const NotFound: NextPage = () => (
  <Flex justify="center" style={{ height: "90vh" }} id="notfound">
    <Head>
      <title>Server Error - NextJS SSR Kit</title>
    </Head>
    <Center style={{ color: "#03a9f3" }}>
      <ErrorStatus>500</ErrorStatus>
      <ErrorMessage>Uh Oh! The server encountered an error!</ErrorMessage>
      <Link href="/">
        <HomeIcon />
        <span>Go Back</span>
      </Link>
    </Center>
  </Flex>
);

export default NotFound;
