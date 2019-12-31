import React from "react";
import Head from "next/head";
import Link from "~components/StyledLink";
import ExampleIcon from "~components/ExampleIcon";
import HomeContainer from "~components/HomeContainer";
import LandingContainer from "~components/LandingContainer";
import Title from "~components/Title";
import SSRLogo from "~images/ssrLogo.png";

const Home = () => (
	<HomeContainer>
		<Head>
			<title>NextJS SSR Kit - Home</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<LandingContainer>
			<img src={SSRLogo} alt="ssrLogoLight.png" />
			<Title>NextJS SSR Kit</Title>
			<Title>Edit files in the root directory and save to reload.</Title>
			<Link href="/users">
				<ExampleIcon />
				See Example
			</Link>
		</LandingContainer>
	</HomeContainer>
);

export default Home;
