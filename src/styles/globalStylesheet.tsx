import { css, Global } from "@emotion/core";

export const GlobalStylesheet = (): JSX.Element => (
  <Global
    styles={css`
      @font-face {
        font-family: "Poppins Light";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-Light.ttf") format("truetype");
        font-display: swap;
      }

      #__next,
      #app,
      body,
      html {
        min-height: 100vh;
      }

      html,
      body {
        width: 100%;
        margin: 0;
        padding: 0;
      }

      body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Poppins Light", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
          "Droid Sans", "Helvetica Neue", sans-serif;
        background-color: #f0f0f0;
      }

      .Toastify__toast--info {
        background: #0076ff;
      }

      .Toastify__toast--error {
        background: #ed1700;
      }

      .blurred {
        filter: blur(4px);
      }

      ::-moz-focus-inner {
        border: 0;
      }

      *,
      ::after,
      ::before {
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStylesheet;
