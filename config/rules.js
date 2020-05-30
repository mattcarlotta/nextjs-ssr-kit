const { assetsFolder, assetsPublicPath } = require("./paths");
const { jsRule, mediaRule } = require("./helpers");

const { NODE_ENV } = process.env;
const inDev = NODE_ENV === "development";
const staticAssetsRegex = /\.(jpe?g|png|svg|gif|ico|webp|woff2|ttf|woff|eot)$/;

module.exports = isServer => [
  /* lints js files */
  jsRule({
    loader: "eslint-loader",
    options: {
      cache: inDev,
      emitWarning: inDev,
    },
  }),
  /* handle static assets */
  mediaRule({
    test: staticAssetsRegex,
    loader: "url-loader",
    options: {
      limit: 8192,
      fallback: "file-loader",
      publicPath: assetsPublicPath,
      outputPath: assetsFolder,
    },
  }),
];
