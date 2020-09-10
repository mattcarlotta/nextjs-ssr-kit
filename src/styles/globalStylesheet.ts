/* istanbul ignore file */
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Poppins Light';
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/Poppins-Light.ttf") format('truetype');
  }

  #__next, body, html {
    min-height: 100vh;
  }

  html,body {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  
  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Poppins Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background-color: #ebebeb;
  }

  @keyframes wave {
    0% {
      left: -60%;
    }

    100% {
      left: 125%;
    }
  }

  @keyframes pulse {
    0% {
      background-color: #eee;
    }

    50% {
      background-color: #e4e4e4;
    }

    100% {
      background-color: #eee;
    }
  }

  @keyframes pop {
    0% {
      top: 6px;
      height: 46px;
    }

    50%,
    100% {
      top: 19px;
      height: 21px;
    }
  }

  @keyframes delay {
    0%,
    40%,
    100% {
      transform: scaleY(0.05);
      -webkit-transform: scaleY(0.05);
    }

    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  ::-moz-focus-inner {
    border: 0;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }
`;
