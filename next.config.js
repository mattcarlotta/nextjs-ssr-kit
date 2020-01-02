require("./env");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const paths = require("./config/paths");
const { jsRule, mediaRule, styleRule } = require("./config/rules");

const { baseURL, inDevelopment } = process.env;

const filename = inDevelopment
	? "static/css/[name].css"
	: "static/css/[name].[contenthash:8].css";

const chunkFilename = inDevelopment
	? "static/css/[name].chunk.css"
	: "static/css/[name].[contenthash:8].chunk.css";

const imagesRegex = /\.(jpe?g|png|svg|gif|ico|webp)$/;
const fontsRegex = /\.(woff2|ttf|woff|eot)$/;
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.scss$/;
const sassModuleRegex = /\.module\.scss$/;

module.exports = {
	publicRuntimeConfig: {
		inDevelopment,
		baseURL,
	},
	webpack(config, { isServer }) {
		/* add custom webpack aliased extensions */
		config.resolve.extensions = [...config.resolve.extensions, ".scss", ".css"];

		/* add custom webpack rules */
		config.module.rules.push(
			/* lints js files */
			jsRule({
				loader: "eslint-loader",
				options: {
					cache: inDevelopment,
					emitWarning: Boolean(inDevelopment),
				},
			}),
			/* handle image assets */
			mediaRule({
				test: imagesRegex,
				loader: "url-loader",
				options: {
					limit: 8192,
					fallback: "file-loader",
					publicPath: paths.imagesPublicPath,
					outputPath: paths.imagesFolder,
				},
			}),
			/* handle font assets */
			mediaRule({
				test: fontsRegex,
				loader: "file-loader",
				options: {
					publicPath: paths.fontsPublicPath,
					outputPath: paths.fontsFolder,
				},
			}),
			/* handles global CSS imports */
			styleRule({
				test: cssRegex,
				exclude: cssModuleRegex,
				isServer,
			}),
			/* handles CSS module imports */
			styleRule({
				test: cssRegex,
				include: cssModuleRegex,
				modules: true,
				isServer,
			}),
			/* handles global SCSS imports */
			styleRule({
				test: sassRegex,
				exclude: sassModuleRegex,
				isServer,
			}),
			/* handles SCSS module imports */
			styleRule({
				test: sassRegex,
				include: sassModuleRegex,
				modules: true,
				isServer,
			}),
		);

		if (!isServer) {
			/* caches style chunks for client */
			config.optimization.splitChunks.cacheGroups.styles = {
				name: "styles",
				test: /\.+(scss|css)$/,
				chunks: "all",
				enforce: true,
			};
			/* extracts css chunks for client */
			config.plugins.push(
				new MiniCssExtractPlugin({
					filename,
					chunkFilename,
				}),
			);
		}

		return config;
	},
};
