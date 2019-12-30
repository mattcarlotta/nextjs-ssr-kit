import React from "react";
import Helmet from "react-helmet";
import Link from "@components/Link";
import ExampleIcon from "@components/ExampleIcon";
import logo from "@images/mernLogo.png";
import {
	homeContainer,
	logoContainer,
	logoStyle,
	textInfo,
} from "./Home.module.scss";

const Home = () => (
	<div id="home" className={homeContainer}>
		<Helmet title="Home" />
		<div className={logoContainer}>
			<img className={logoStyle} src={logo} alt="mernLogo.png" />
			<h1 className={textInfo}>FullStack MERN Kit</h1>
			<h1 className={textInfo}>Edit files in ./src and save to reload.</h1>
			<Link style={{ marginTop: 10 }} to="/users">
				<ExampleIcon />
				<span>See Example</span>
			</Link>
		</div>
	</div>
);

export default Home;
