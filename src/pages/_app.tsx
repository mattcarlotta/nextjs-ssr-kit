import * as React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import toast from "~components/App/Toast";
import GlobalStylesheet from "~styles/globalStylesheet";
import { wrapper } from "~store";
import "~styles/globals.scss";
import "~react-toastify/dist/ReactToastify.css";
import { AppProps } from "~types";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    toast({ type: "info", message: "Welcome to the NextJS SSR Kit!" });
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStylesheet />
      <ToastContainer
        position="top-right"
        autoClose={7500}
        hideProgressBar={false}
        newestOnTop={false}
        draggable
        pauseOnHover
      />
    </>
  );
};

export default wrapper.withRedux(App);
