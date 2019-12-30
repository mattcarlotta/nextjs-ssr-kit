import React from "react";
import Head from "next/head";
import Link from "next/link";
import ExampleIcon from "@components/ExampleIcon";
import SSRLogo from "@images/ssrLogo.png";
import GlobalStylesheet from "@components/GlobalStylesheet";

const Home = () => (
	<div css="text-align: center;height: 100%;color: #007ec5;background-color: #ebebeb;">
		<GlobalStylesheet />
		<Head>
			<title>Home</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div css="width: 850px;margin: 0 auto;padding-top: 10%;">
			<img
				css="height: 300px;margin-bottom: 20px;"
				src={SSRLogo}
				alt="ssrLogoLight.png"
			/>
			<h1 css="margin: 5px;">NextJS SSR Kit</h1>
			<h1 css="margin: 5px;">
				Edit files in the root directory and save to reload.
			</h1>
			<Link href="/users" prefetch={false}>
				<a>
					<ExampleIcon />
					See Example
				</a>
			</Link>
		</div>
	</div>
);

export default Home;
