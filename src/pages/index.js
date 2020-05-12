import React from "react";
import Head from "next/head";
import { FaCoffee } from "react-icons/fa";
import Link from "~components/StyledLink";
import HomeContainer from "~components/HomeContainer";
import LandingContainer from "~components/LandingContainer";
import SubTitle from "~components/SubTitle";
import NextJSSKitLogo from "~images/nextjsKit.png";

const Home = () => (
	<HomeContainer>
		<Head>
			<title>Home - NextJS SSR Kit</title>
		</Head>
		<LandingContainer>
			<img src={NextJSSKitLogo} alt="ssrLogoLight.png" />
			<SubTitle>Edit files in the root directory and save to reload.</SubTitle>
			<Link href="/users">
				<FaCoffee
					style={{
						position: "relative",
						top: 5,
						fontSize: 23,
						marginRight: 5,
					}}
				/>
				See Example
			</Link>
		</LandingContainer>
	</HomeContainer>
);

export default Home;
