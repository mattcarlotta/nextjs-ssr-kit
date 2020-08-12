/* eslint-disable react/forbid-prop-types */
import { PureComponent } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import toast from "~components/App/Toast";
import GlobalStylesheet from "~styles/globalStylesheet";
import { wrapper } from "~store";
import "~styles/globals.scss";

export class MyApp extends PureComponent {
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
          autoClose={7500}
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

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default wrapper.withRedux(MyApp);
/* eslint-enable react/forbid-prop-types */
