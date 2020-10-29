const { DefinePlugin } = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const address = require("address");

const { analyze, baseURL, CLIENT, NODE_ENV, PORT } = process.env;
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
          CLIENT: JSON.stringify(CLIENT),
          PORT: JSON.stringify(PORT),
          NODE_ENV: JSON.stringify(NODE_ENV)
        }
      })
    );
  } else {
    plugins.push(
      /* in console error */
      inDev &&
        new FriendlyErrorsWebpackPlugin({
          compilationSuccessInfo: {
            messages: [
              `Local development build: \x1b[1m${CLIENT}\x1b[0m`,
              remoteAddress &&
                `Remote development build: \x1b[1mhttp://${remoteAddress}:${PORT}\x1b[0m`
            ].filter(Boolean),
            notes: [
              "Note that the development build is not optimized.",
              "To create a production build, use \x1b[1m\x1b[32myarn build\x1b[0m.\n"
            ]
          },
          clearConsole: false
        })
    );
  }

  if (analyze) {
    /* analyzes webpack chunk distribution */
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: isServer
          ? "../analyze/server.html"
          : "./analyze/client.html"
      })
    );
  }

  return plugins.filter(Boolean);
};
