import React from "react";
import get from "lodash/get";
import { Provider } from "react-redux";
import getConfig from "next/config";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { ToastContainer } from "react-toastify";
import configureStore from "~store";
import GlobalStylesheet from "~styles/globalStylesheet";
import toast from "~components/Toast";
import "~styles/empty.css";

const inDevelopment = get(getConfig(), [
	"publicRuntimeConfig",
	"inDevelopment",
]);

export class MyApp extends App {
	componentDidMount() {
		toast({ type: "info", message: "Welcome to the NextJS SSR Kit!" });
	}

	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {}),
			},
		};
	}

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<Provider store={store}>
				<Component {...pageProps} />
				<GlobalStylesheet />
				<ToastContainer
					position="top-right"
					autoClose={2500}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					pauseOnVisibilityChange
					draggable
					pauseOnHover
				/>
			</Provider>
		);
	}
}

export default withRedux(configureStore, { debug: inDevelopment })(
	withReduxSaga(MyApp),
);
