/* eslint-disable  react/no-danger */
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { extractCritical } from "emotion-server";
import { version } from "../../package.json";

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    };
  }

  render = (): JSX.Element => (
    <Html lang="en">
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="NextJS SSR Kit" />
        <link rel="apple-touch-icon" sizes="192x192" href="/logo_192x192.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="build version" content={version} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default CustomDocument;
/* eslint-enable react/no-danger */
