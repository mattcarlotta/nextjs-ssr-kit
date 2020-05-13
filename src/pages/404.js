import React from "react";
import Head from "next/head";
import FlexCenter from "~components/Layout/FlexCenter";
import HomeIcon from "~components/Layout/HomeIcon";
import Link from "~components/Navigation/Link";

const NotFound = () => (
  <FlexCenter
    data-testid="not-found-page"
    style={{ height: "90%" }}
    id="notfound"
  >
    <Head>
      <title>Not Found - NextJS SSR Kit</title>
    </Head>
    <div css="color: #03a9f3;text-align: center;">
      <div css="font-size: 120px;margin-bottom: 0;padding: 0px;">404</div>
      <div css="font-size: 32px;font-weight: bold;margin-top: -5px;margin-bottom: 20px;letter-spacing: 2px;">
        Uh Oh! Page not found!
      </div>
      <Link href="/">
        {" "}
        <HomeIcon />
        <span>Go Back</span>
      </Link>
    </div>
  </FlexCenter>
);

export default NotFound;
