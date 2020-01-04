import React from "react";
import Head from "next/head";
import { FaBug } from "react-icons/fa";
import StyledLink from "~components/StyledLink";
import FlexCenter from "~components/FlexCenter";
import HomeIcon from "~components/HomeIcon";

const NotFound = () => (
	<FlexCenter style={{ height: "100%" }} id="notfound">
		<Head>
			<title>NextJS SSR Kit - Not Found</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div css="color: #03a9f3;background-color: #fff;padding: 100px;text-align: center;">
			<div css="font-size: 120px;margin-bottom: 0;padding: 0px;">
				<FaBug
					style={{
						position: "relative",
						fontSize: 100,
						top: 10,
						marginRight: 10,
					}}
				/>
				<span>404</span>
			</div>
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
