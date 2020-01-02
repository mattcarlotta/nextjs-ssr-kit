import React from "react";
import Head from "next/head";
import Link from "~components/StyledLink";
import ExampleIcon from "~components/ExampleIcon";
import HomeContainer from "~components/HomeContainer";
import LandingContainer from "~components/LandingContainer";
import SubTitle from "~components/SubTitle";
import NextJSSKitLogo from "~images/nextjsKit.png";

const Home = () => (
	<HomeContainer>
		<Head>
			<title>NextJS SSR Kit - Home</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<LandingContainer>
			<img src={NextJSSKitLogo} alt="ssrLogoLight.png" />
			<SubTitle>Edit files in the root directory and save to reload.</SubTitle>
			<Link href="/users">
				<ExampleIcon />
				See Example
			</Link>
		</LandingContainer>
	</HomeContainer>
);

export default Home;
