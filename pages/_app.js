import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import Router from "next/router";
import withRedux from "next-redux-wrapper";
import { ToastContainer } from "react-toastify";
import createStore from "@store";
import GlobalStylesheet from "@components/GlobalStylesheet";
import toast from "@components/Toast";
import "react-toastify/dist/ReactToastify.css";

export default withRedux(createStore, { debug: true })(
	class MyApp extends App {
		componentDidMount() {
			toast({ type: "info", message: "Welcome to the NextJS SSR Kit!" });

			Router.beforePopState(({ as }) => {
				location.href = as;
			});
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
	},
);
