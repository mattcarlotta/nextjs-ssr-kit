import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  #__next, body, html {
    height: 100%;
  }
  html,body {
    height: 100%;
    width: 100% !important;
  }
  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    ${
      "" /* font-family: "Karla Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif !important; */
    }
  }
  @-webkit-keyframes wave {
    0% {
      left: -60%;
    }
    100% {
      left: 125%;
    }
  }
  @keyframes wave {
    0% {
      left: -60%;
    }
    100% {
      left: 125%;
    }
  }
  @-webkit-keyframes pulse {
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
  @-webkit-keyframes pop {
    0% {
      top: 6px;
      height: 46px;
    }
    50%, 100% {
      top: 19px;
      height: 21px;
    }
  }
  @keyframes pop {
    0% {
      top: 6px;
      height: 46px;
    }
    50%, 100% {
      top: 19px;
      height: 21px;
    }
  }
  @-webkit-keyframes delay {
    0%, 40%, 100% {
      -webkit-transform: scaleY(0.05);
    }
    20% {
      -webkit-transform: scaleY(1.0);
    }
  }
  @keyframes delay {
    0%, 40%, 100% {
      transform: scaleY(0.05);
      -webkit-transform: scaleY(0.05);
    }
    20% {
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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
  *, ::after, ::before {
    box-sizing: border-box;
  }
  ::-moz-focus-inner {
    border: 0;
  }
`;
