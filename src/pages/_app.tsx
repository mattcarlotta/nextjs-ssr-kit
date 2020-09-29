import { useEffect } from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import toast from "~components/App/Toast";
import GlobalStylesheet from "~styles/globalStylesheet";
import { wrapper } from "~store";
import "react-toastify/dist/ReactToastify.css";
import { AppProps, FC } from "~types";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    toast({ type: "info", message: "Welcome to the NextJS SSR Kit!" });
  }, []);

  return (
    <CacheProvider value={cache}>
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
        autoClose={70500}
        hideProgressBar={false}
        newestOnTop={false}
        draggable
        pauseOnHover
      />
    </CacheProvider>
  );
};

export default wrapper.withRedux(App);
