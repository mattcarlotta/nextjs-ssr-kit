const { DefinePlugin } = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const WebpackBar = require("webpackbar");
const address = require("address");

const { analyze, baseURL, LOCALHOST, NODE_ENV, PORT } = process.env;
const remoteAddress = address.ip();
const inDev = NODE_ENV === "development";

module.exports = isServer => {
  const plugins = [];

  if (!isServer) {
    plugins.push(
      /* envs for client */
      new DefinePlugin({
        "process.env": {
          baseURL: JSON.stringify(baseURL),
          LOCALHOST: JSON.stringify(LOCALHOST),
          PORT: JSON.stringify(PORT),
          NODE_ENV: JSON.stringify(NODE_ENV),
        },
      }),
    );
  } else {
    plugins.push(
      /* shows a compilation bar instead of the default compile message */
      new WebpackBar({
        color: "#268bd2",
        minimal: false,
        compiledIn: false,
      }),
      /* in console error */
      inDev &&
        new FriendlyErrorsWebpackPlugin({
          compilationSuccessInfo: {
            messages: [
              `Local development build: \x1b[1m${LOCALHOST}\x1b[0m`,
              remoteAddress &&
                `Remote development build: \x1b[1mhttp://${remoteAddress}:${PORT}\x1b[0m`,
            ].filter(Boolean),
            notes: [
              "Note that the development build is not optimized.",
              "To create a production build, use \x1b[1m\x1b[32myarn build\x1b[0m.\n",
            ],
          },
          clearConsole: false,
        }),
    );
  }

  if (analyze) {
    /* analyzes webpack chunk distribution */
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: isServer
          ? "../analyze/server.html"
          : "./analyze/client.html",
      }),
    );
  }

  return plugins.filter(Boolean);
};
