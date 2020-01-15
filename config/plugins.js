const { DefinePlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const WebpackBar = require("webpackbar");
const address = require("address");
const {
	analyzeClientPath,
	analyzeServerPath,
	staticCSSDevPath,
	staticCSSProdPath,
} = require("./paths");

const remoteAddress = address.ip();

const {
	analyze,
	baseURL,
	cookieSecret,
	DATABASE,
	inDevelopment,
	inTesting,
	LOCALHOST,
	PORT,
} = process.env;

const inDev = inDevelopment === "true";
const filename = inDev ? staticCSSDevPath : staticCSSProdPath;
const chunkFilename = filename;

module.exports = isServer => {
	const plugins = [];

	if (!isServer) {
		plugins.push(
			/* overlays browser with compilation errors */
			new ErrorOverlayPlugin(),
			/* extracts css chunks for client */
			new MiniCssExtractPlugin({
				filename,
				chunkFilename,
			}),
			/* envs for client */
			new DefinePlugin({
				"process.env": {
					DATABASE: JSON.stringify(DATABASE),
					cookieSecret: JSON.stringify(cookieSecret),
					inDevelopment: inDev,
					inTesting: JSON.stringify(inTesting),
					baseURL: JSON.stringify(baseURL),
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
			new FriendlyErrorsWebpackPlugin({
				compilationSuccessInfo: {
					messages: [
						inDev && `Local development build: \x1b[1m${LOCALHOST}\x1b[0m`,
						inDev &&
							remoteAddress &&
							`Remote development build: \x1b[1mhttp://${remoteAddress}:${PORT}\x1b[0m`,
					].filter(Boolean),
					notes: [
						inDev && "Note that the development build is not optimized.",
						inDev && "To create a production build, use \x1b[1m\x1b[32myarn build\x1b[0m.\n",
					].filter(Boolean),
				},
				clearConsole: inDev,
			}),
		);
	}

	if (analyze) {
		/* analyzes webpack chunk distribution */
		plugins.push(
			new BundleAnalyzerPlugin({
				analyzerMode: "static",
				reportFilename: isServer ? analyzeServerPath : analyzeClientPath,
			}),
		);
	}

	return plugins;
};
