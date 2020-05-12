import React from "react";
import App from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import GlobalStylesheet from "~styles/globalStylesheet";
import toast from "~components/App/Toast";
import "~styles/globals.scss";

export class MyApp extends App {
	componentDidMount() {
		toast({ type: "info", message: "Welcome to the NextJS SSR Kit!" });
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Component {...pageProps} />
				<GlobalStylesheet />
				<ToastContainer
					position="top-right"
					autoClose={2500}
					hideProgressBar={false}
					newestOnTop={false}
					pauseOnVisibilityChange
					draggable
					pauseOnHover
				/>
			</>
		);
	}
}

export default MyApp;
