const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const open = require("opener");

const { analyze, baseURL, CLIENT, PORT, NODE_ENV } = process.env;

/* opens a browser window */
if (NODE_ENV === "development") open(CLIENT);

module.exports = {
  env: {
    baseURL,
    CLIENT,
    PORT
  },
  webpack(config, { isServer }) {
    /* adds custom plugins to client and server */
    config.plugins.push(
      ...[
        analyze &&
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: isServer
              ? "../analyze/server.html"
              : "./analyze/client.html"
          })
      ].filter(Boolean)
    );

    /* return new config to next */
    return config;
  }
};
