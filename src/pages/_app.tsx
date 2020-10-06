import { useEffect } from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache";
import toast from "~components/App/Toast";
import GlobalStylesheet from "~styles/globalStylesheet";
import { wrapper } from "~store";
import "react-toastify/dist/ReactToastify.css";
import { AppProps, FC } from "~types";

const cache = createCache();

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
      <div id="app">
        <Component {...pageProps} />
      </div>
      <GlobalStylesheet />
      <ToastContainer
        position="top-right"
        autoClose={7500}
        hideProgressBar={false}
        newestOnTop={false}
        draggable
        pauseOnHover
      />
    </CacheProvider>
  );
};

export default wrapper.withRedux(App);
