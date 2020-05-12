import React from "react";
import Head from "next/head";
import StyledLink from "~components/StyledLink";
import FlexCenter from "~components/FlexCenter";
import HomeIcon from "~components/HomeIcon";

const NotFound = () => (
	<FlexCenter style={{ height: "90%" }} id="notfound">
		<Head>
			<title>Not Found - NextJS SSR Kit</title>
		</Head>
		<div css="color: #03a9f3;text-align: center;">
			<div css="font-size: 120px;margin-bottom: 0;padding: 0px;">404</div>
			<div css="font-size: 32px;font-weight: bold;margin-top: -5px;margin-bottom: 20px;letter-spacing: 2px;">
				Uh Oh! Page not found!
			</div>
			<StyledLink href="/">
				{" "}
				<HomeIcon />
				<span>Go Back</span>
			</StyledLink>
		</div>
	</FlexCenter>
);

export default NotFound;
